use async_hofs::prelude::*;
use chrono::{DateTime, Local};
use regex::Regex;
use scraper::{Html, Selector};
use std::{collections::HashMap, env};

use gql_client::Client;
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
pub struct Data {
    user: User,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct User {
    pull_requests: PullRequests,
}

#[derive(Deserialize)]
pub struct PullRequests {
    nodes: Vec<PullRequest>,
}

#[derive(Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PullRequest {
    permalink: String,
    created_at: String,
    ogp_option_url: Option<String>,
}

#[derive(Serialize)]
pub struct JsonBody {
    last_updated_at: DateTime<Local>,
    pull_requests: Vec<PullRequest>,
}

static IGNORE_REPOS: [&str; 3] = ["lunain84", "yumemi-inc/outputs", "fuwasegu"];

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // リクエスト先の URL
    let endpoint = "https://api.github.com/graphql";

    // 環境変数から GitHub のトークンを取る
    let token = env::var("API_GITHUB_TOKEN").expect("GitHub トークンを環境変数に設定してください");

    // ヘッダ
    let mut headers = HashMap::new();
    headers.insert("Authorization", "bearer ".to_owned() + token.as_str());
    headers.insert("User-Agent", String::from("fuwasegu"));

    // クエリ
    let query = r#"
        query {
            user(login: "fuwasegu") {
                pullRequests (last: 50, states: MERGED, orderBy: {
                    direction: DESC,
                    field: CREATED_AT
                }) {
                    nodes {
                        permalink,
                        createdAt
                    }
                }
            }
        }
    "#;

    // GraphQL クライアントを作ってリクエストを投げる
    println!("GitHub から PR 履歴を取得します");
    let data = match Client::new_with_headers(endpoint, headers)
        .query_unwrap::<Data>(query)
        .await
    {
        Ok(d) => d,
        Err(e) => panic!("GitHub からのデータ取得に失敗しました: {:?}", e),
    };

    // フィルターする（自分のリポジトリは除外）
    let repos = IGNORE_REPOS
        .iter()
        .map(|s| s.to_string())
        .collect::<Vec<String>>()
        .join("|");

    // 絞り込み用の正規表現を作る
    let regexp = match Regex::new(format!("^.*({repos}).*$").as_str()) {
        Ok(r) => r,
        Err(e) => panic!("正規表現が正しくありません {:?}", e),
    };

    // PR をフィルター
    let data = data
        .user
        .pull_requests
        .nodes
        .into_iter()
        .filter(|p| !regexp.is_match(p.permalink.as_str()))
        .map(|p| async {
            PullRequest {
                permalink: p.permalink,
                created_at: p.created_at,
                ogp_option_url: Some(get_ogp_image_url(p.permalink).await),
            }
        })
        .async_map(|p| async move { p })
        .await;

    // シリアライザを作る
    let mut ser = serde_json::Serializer::with_formatter(
        Vec::new(),
        serde_json::ser::PrettyFormatter::with_indent(b"    "),
    );

    let json = JsonBody {
        last_updated_at: Local::now(),
        pull_requests: data.collect::<Vec<PullRequest>>(),
    };

    // シリアライズ
    json.serialize(&mut ser).unwrap();

    // json ファイルに書き込み
    match std::fs::write(
        "../public/contributions.json",
        String::from_utf8(ser.into_inner()).unwrap(),
    ) {
        Ok(_) => println!("Json ファイルにデータを書き込みました．"),
        Err(e) => eprintln!("Json ファイルの書き込みに失敗しました {:?}", e),
    }

    Ok(())
}

async fn get_ogp_image_url(url: String) -> String {
    // プルリク ページをスクレイピング
    let body = reqwest::get(url).await.unwrap().text().await.unwrap();
    let document = Html::parse_document(body.as_str());
    let meta_selector = Selector::parse("meta").unwrap();

    // <meta property="og:image"> から contents の内容を取得（OGP 画像の URL）
    document
        .select(&meta_selector)
        .find(|elm| elm.value().attr("property").unwrap_or("") == "og:image")
        .unwrap()
        .value()
        .attr("content")
        .unwrap()
        .to_string()
}
