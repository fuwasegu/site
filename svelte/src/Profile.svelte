<script>
    import Fa from "svelte-fa";
    import {
        faLocationDot,
        faEnvelope,
    } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="wrapper">
    <div class="content">
        <div class="my-icon-area">
            <img
                src="https://avatars.githubusercontent.com/u/52437973?v=4"
                alt="icon"
            />
        </div>
        <div class="name-area">Hirosugu Takeshita</div>
        <div class="nick-name-area">ふわせぐ / fuwasegu</div>
        <div class="local-area">
            <span style="padding-right: 4px;">
                <Fa icon={faLocationDot} />
            </span>
            Nagoya, Aichi, Japan
        </div>
        <div class="mail-area">
            <span style="padding-right: 4px;">
                <Fa icon={faEnvelope} />
            </span>
            <a href="mailto:contact@fuwasegu.com">contact@fuwasegu.com</a>
        </div>
        <div class="sns-link-area">
            <span class="sns-icon">
                <a
                    href="https://github.com/fuwasegu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="./imgs/GitHub_logo.png" alt="GitHub" />
                </a>
            </span>
            <span class="sns-icon">
                <a
                    href="https://qiita.com/fuwasegu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="./imgs/Qiita_logo.png" alt="Qiita" />
                </a>
            </span>
            <span class="sns-icon">
                <a
                    href="https://twitter.com/fuwasegu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="./imgs/Twitter_logo.png" alt="Twitter" />
                </a>
            </span>
            <span class="sns-icon">
                <a
                    href="https://note.com/fuwasegu/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="./imgs/note_logo.png" alt="note" />
                </a>
            </span>
            <span class="sns-icon">
                <a
                    href="https://zenn.dev/fuwasegu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="./imgs/Zenn_logo.png" alt="Zenn" />
                </a>
            </span>
        </div>
        <div class="description-area">
            <p>
                Laravel
                が好きなエンジニア．学生結婚ののち第一子を授かりヤンチャボウズの父．
                現在は Web
                開発に従事しているが，大学の卒業研究は画像処理アルゴリズムを用いた
                Video Inpainting だったりする． 中学三年生のときに十進 BASIC
                に出会ったのがすべての始まり．
            </p>
        </div>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        background-color: #ffe0fc;
        width: 360px;
        padding: 16px;
        border: solid thin #fb7afc;
        border-radius: 24px;
        text-align: center;
    }

    .my-icon-area > img {
        border: solid thin#FB7AFC;
        border-radius: 50%;
        width: 128px;
    }

    .name-area {
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 8px;
    }

    .nick-name-area {
        color: rgb(100, 100, 100);
        padding-bottom: 8px;
    }

    .local-area {
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(100, 100, 100);
        padding-bottom: 8px;
    }

    .mail-area {
        padding-bottom: 16px;
    }

    .sns-icon > a > img {
        width: 32px;
        margin: 0 8px;
    }
</style>
