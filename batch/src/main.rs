use regex::Regex;
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
}

static IGNORE_REPOS: [&str; 2] = ["lunain84", "yumemi-inc/outputs"];

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // リクエスト先の URL
    let endpoint = "https://api.github.com/graphql";

    // 環境変数から GitHub のトークンを取る
    let token = env::var("GITHUB_TOKEN").expect("GitHub トークンを環境変数に設定してください");

    // ヘッダ
    let mut headers = HashMap::new();
    headers.insert("Authorization", "bearer ".to_owned() + token.as_str());
    headers.insert("User-Agent", String::from("fuwasegu"));

    // クエリ
    let query = r#"
        query {
            user(login: "lunain84") {
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
        .filter(|p| !regexp.is_match(p.permalink.as_str()));

    // シリアライザを作る
    let mut ser = serde_json::Serializer::with_formatter(
        Vec::new(),
        serde_json::ser::PrettyFormatter::with_indent(b"    "),
    );

    // シリアライズ
    data.collect::<Vec<PullRequest>>()
        .serialize(&mut ser)
        .unwrap();

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
