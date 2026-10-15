/**
 * ツールごとの詳しい説明（big）。調査結果（2026年9月17日、公式ドキュメント）から生成。
 * 得意・苦手などは、その内容をもとにしたこのサイトの評価。
 */
import type { ToolDetail } from "./ai-detail-types";

export const DETAILS_BIG: Record<string, ToolDetail> = {
  "chatgpt": {
    "strengths": [
      "質問への回答や説明、文章の下書き。",
      "ウェブ検索で最新情報を出典付きで調べる。",
      "deep researchで出典付きの長いレポート作成。",
      "Workで資料・表・スライドなど完成ファイル作成。",
      "画像の生成と、選んだ部分だけの編集。"
    ],
    "weaknesses": [
      "もっともらしい誤りを言うことがある。",
      "法律・医療・お金の判断は専門家の確認が必要。",
      "深く考えるモデルやdeep researchには回数上限。",
      "機能の有無がプラン・地域・時期で変わる。"
    ],
    "merits": [
      "無料プランでも日常のチャットに使える。",
      "Web・スマホ・デスクトップで同じ履歴を使える。",
      "Projectsでファイルと指示をまとめて管理。",
      "音声でそのまま会話できる。"
    ],
    "demerits": [
      "無料系プランでは上位モデルを選べない。",
      "個人プランでは新しいGPTを作れない。",
      "エージェントモードは終了し、Workへ移行。",
      "設定しだいで会話が学習に使われる。"
    ],
    "modes": [
      {
        "name": "Chat",
        "what": "質問や相談をやり取りする、ふつうの画面。",
        "when": "調べもの・相談・短い文章づくり。"
      },
      {
        "name": "Work（ChatGPT Work）",
        "what": "計画→調査→ファイル作成まで進めて成果物を出す。",
        "when": "資料・表・スライドを仕上げたいとき（有料）"
      },
      {
        "name": "deep research",
        "what": "たくさんの情報源を読み、出典付きのレポートにする。",
        "when": "比較や背景を深く調べたいとき。"
      },
      {
        "name": "Projects",
        "what": "チャット・ファイル・指示を1か所にまとめる。",
        "when": "続けて取り組むテーマがあるとき。"
      },
      {
        "name": "画像生成",
        "what": "文章から画像を作り、選んだ範囲だけ直せる。",
        "when": "イラスト・ポスター・図を作りたいとき。"
      },
      {
        "name": "GPTs",
        "what": "指示や資料を持たせた、専用版のChatGPT。",
        "when": "すでにあるGPTを使うとき（個人は新規作成不可）"
      },
      {
        "name": "メモリ（Memory）",
        "what": "過去の会話から、好みなどを覚えて答えに生かす。",
        "when": "毎回同じ説明を省きたいとき。"
      },
      {
        "name": "学習モード（Study mode）",
        "what": "答えを言う前に質問して、一歩ずつ理解を導く。",
        "when": "勉強・テスト対策をしたいとき。"
      },
      {
        "name": "ChatGPT Voice",
        "what": "声で話して、声で返事を聞ける。",
        "when": "手が離せない・話しながら考えたいとき。"
      },
      {
        "name": "アプリ連携（旧コネクタ）",
        "what": "Google DriveやSlackなど外のサービスとつなぐ。",
        "when": "自分の資料やメールも参照させたいとき。"
      }
    ],
    "thinkingKind": "levels",
    "thinkingTitle": "考える深さ",
    "thinking": [
      {
        "name": "即時モード（Instant）",
        "what": "ふだんの質問に、すばやく答える。",
        "when": "ふだんの質問・下書き。"
      },
      {
        "name": "Think（無料系プラン）",
        "what": "無料系プランで、考えてから答えさせる。",
        "when": "無料で、難しめの質問をするとき。"
      },
      {
        "name": "中程度・高・超高",
        "what": "考える量を、段階的に増やす。",
        "when": "難しい分析や、込み入った相談。"
      },
      {
        "name": "Pro",
        "what": "いちばん上のモデルで、長く深く考える。",
        "when": "特に難しい課題（上位プランのみ）"
      }
    ],
    "tips": [
      "目的・背景・出力の形・守ってほしい条件を書く。",
      "手順より「ほしい結果」と、読む人を伝える。",
      "最初の答えは下書きと考え、追加のお願いで直す。",
      "「出典は？」「前提は？」と聞いて確かめる。",
      "数字・名前・日付・引用は自分で確かめる。",
      "送信や公開の前に、確認を求めるよう頼んでおく。"
    ],
    "bestFor": [
      "writing",
      "image",
      "learn",
      "data",
      "research"
    ],
    "sources": [
      "https://help.openai.com/ja-jp/articles/20001354",
      "https://help.openai.com/ja-jp/articles/10500283-deep-research-in-chatgpt",
      "https://help.openai.com/ja-jp/articles/11752874-chatgpt-agent",
      "https://help.openai.com/ja-jp/articles/11780217-using-study-mode-in-chatgpt",
      "https://help.openai.com/en/articles/10169521-projects-in-chatgpt",
      "https://help.openai.com/en/articles/8590148-memory-faq",
      "https://help.openai.com/en/articles/20001274-chatgpt-voice",
      "https://help.openai.com/en/articles/11084440-images-in-chatgpt",
      "https://help.openai.com/en/articles/8554397-creating-and-editing-gpts",
      "https://learn.chatgpt.com/docs/models",
      "https://learn.chatgpt.com/docs/prompting"
    ]
  },
  "codex": {
    "strengths": [
      "コードの説明・バグ修正・テスト作成。",
      "プルリクエストや手元の変更のレビュー（/review）",
      "計画を立ててから、複数のファイルを変える。",
      "クラウドで、いくつもの作業を並行して進める。",
      "スクリーンショットから画面の試作を作る。"
    ],
    "weaknesses": [
      "Gitやターミナルの基礎知識があると安心。",
      "権限を広げると、思わぬ操作をする危険。",
      "クラウド作業は、最初はネット接続オフ。",
      "深く考えさせるほど、時間と使用量が増える。"
    ],
    "merits": [
      "ChatGPTの無料プランから使える。",
      "アプリ・CLI・IDE・クラウドから使える。",
      "AGENTS.mdで、決まりごとを毎回伝えなくてよい。",
      "標準では、作業フォルダの中だけで操作する。"
    ],
    "demerits": [
      "使用量はChatGPT Workと共有。",
      "設定ファイル（config.toml）がやや難しい。",
      "クラウドのモデルは、いまは変えられない。",
      "無料プランは使える量が少なめ。"
    ],
    "modes": [
      {
        "name": "Ask for approval",
        "what": "作業フォルダの中は自動、外に出る操作は確認する。",
        "when": "基本はこれ（最初のおすすめ）"
      },
      {
        "name": "Approve for me",
        "what": "確認を、人の代わりにレビュー役のAIが判断する。",
        "when": "確認の手間を減らしたい、信頼できる作業。"
      },
      {
        "name": "Full access",
        "what": "制限と確認をすべて外す（危険）",
        "when": "隔離した環境など、十分に安全なときだけ。"
      },
      {
        "name": "read-only",
        "what": "読むだけで、ファイルは変えない。",
        "when": "相談や計画だけしたいとき。"
      },
      {
        "name": "Plan mode（/plan）",
        "what": "調べて質問し、計画を立ててから作業する。",
        "when": "大きめ・複雑な変更の前。"
      },
      {
        "name": "ローカル（アプリ・CLI・IDE）",
        "what": "自分のパソコンのファイルを、囲いの中で扱う。",
        "when": "手元で確かめながら進めたいとき。"
      },
      {
        "name": "Codex cloud",
        "what": "OpenAIの隔離環境で動き、差分やプルリクエストを返す。",
        "when": "長い作業を任せて、並行したいとき。"
      }
    ],
    "thinkingKind": "levels",
    "thinkingTitle": "reasoning（考える深さ）",
    "thinking": [
      {
        "name": "Light（CLIではLow）",
        "what": "軽く考えて、速く返す。",
        "when": "範囲がはっきりした、小さな作業。"
      },
      {
        "name": "Medium",
        "what": "速さと深さのバランス（標準）",
        "when": "少し計画が要る、ふだんの作業。"
      },
      {
        "name": "High / Extra High",
        "what": "より深く考える。",
        "when": "手順や検討が多い、難しい作業。"
      },
      {
        "name": "Max",
        "what": "1つの課題に、長く考える時間を与える。",
        "when": "最難関の問題（設定で有効にする）"
      },
      {
        "name": "Ultra",
        "what": "作業を分けて、複数のAIで並行して進める。",
        "when": "分けられる、大きな作業。"
      }
    ],
    "tips": [
      "目的・関係するファイル・制約・完成の条件を書く。",
      "AGENTS.mdに、ビルドやテストの方法を書いておく。",
      "複雑な作業は、/planで計画してから進める。",
      "テストや/reviewで、確認までさせる。",
      "権限は狭く始めて、慣れたら必要な分だけ広げる。",
      "考える深さは、低い設定から試して上げる。"
    ],
    "bestFor": [
      "code",
      "webapp"
    ],
    "sources": [
      "https://learn.chatgpt.com/docs/permission-modes",
      "https://learn.chatgpt.com/docs/agent-approvals-security",
      "https://learn.chatgpt.com/docs/models",
      "https://learn.chatgpt.com/guides/best-practices",
      "https://learn.chatgpt.com/docs/cloud",
      "https://learn.chatgpt.com/docs/pricing"
    ]
  },
  "gemini": {
    "strengths": [
      "GmailやGoogleドライブなど、Googleのサービスと連携。",
      "Deep Researchで、数分かけて調査レポートを作る。",
      "Canvasで、文書・スライド・かんたんなアプリを作る。",
      "画像の生成と編集（Nano Banana）",
      "Guided Learningで、家庭教師のように学べる。"
    ],
    "weaknesses": [
      "答えに誤りがありうるので、確かめが必要。",
      "上位モデル・深い思考ほど、使用量を多く使う。",
      "Deep Researchなど一部は18歳以上のみ。",
      "無料だと、一度に読める量が少なめ。"
    ],
    "merits": [
      "無料でもFlash-Lite・Flash・Proを選べる。",
      "チャットから、ドキュメントやPDFなどに書き出せる。",
      "Gemsで、くり返しの指示を保存できる。",
      "Web・スマホ・パソコンのアプリで使える。"
    ],
    "demerits": [
      "使える量は、5時間ごと＋週単位で管理される。",
      "動画生成は、Googleの有料AIプランのみ。",
      "Deep Thinkは、いちばん上のプランのみ。",
      "機能の提供が、地域や年齢で違う。"
    ],
    "modes": [
      {
        "name": "Deep Research",
        "what": "調査の計画を作り、たくさんの情報源から報告書にする。",
        "when": "テーマをじっくり調べたいとき。"
      },
      {
        "name": "Canvas",
        "what": "文書・アプリ・スライド・コードを、横で編集する。",
        "when": "作ったものを直しながら仕上げたいとき。"
      },
      {
        "name": "Gems",
        "what": "指示を保存した、自分用のGemini。",
        "when": "同じ種類のお願いをくり返すとき。"
      },
      {
        "name": "Guided Learning",
        "what": "図や動画も使って、先生のように学びを導く。",
        "when": "勉強・新しい分野の理解。"
      },
      {
        "name": "画像生成（Nano Banana）",
        "what": "文章から画像を作る・作り直す。",
        "when": "イラストや画像素材がほしいとき。"
      },
      {
        "name": "動画生成",
        "what": "文章や写真から、動画を作る。",
        "when": "短い動画を作りたいとき（有料・18歳以上）"
      },
      {
        "name": "Gemini Live",
        "what": "声で話しかけて、会話する。",
        "when": "声で相談したいとき（スマホ）"
      }
    ],
    "thinkingKind": "settings",
    "thinkingTitle": "モデルと考える深さ",
    "thinking": [
      {
        "name": "Flash-Lite",
        "what": "速さ重視の、軽いモデル。",
        "when": "要約・アイデア出しなど、ふだんの作業。"
      },
      {
        "name": "Flash",
        "what": "速さと考える力のバランス型。",
        "when": "かんたん〜複雑まで、幅広い作業。"
      },
      {
        "name": "Pro",
        "what": "いちばん高度。数学・コード・長い資料に強い。",
        "when": "難しい問題（答えは遅め）"
      },
      {
        "name": "Extended thinking",
        "what": "答える前に、長めに考える。",
        "when": "複雑な問題を解きたいとき。"
      },
      {
        "name": "Deep Think",
        "what": "並行して最大限考える（数分かかる）",
        "when": "最難関の課題（最上位プランのみ）"
      }
    ],
    "tips": [
      "ほしい形（スライド、表など）を、お願いに入れる。",
      "Deep Researchは、始める前に計画を直す。",
      "調べる情報源（検索・Gmail・ドライブ）を選ぶ。",
      "くり返すお願いは、Gemに指示を書いておく。",
      "ファイルや画像を添付して、文脈を渡す。",
      "大事な情報は、元の情報源で確かめる。"
    ],
    "bestFor": [
      "research",
      "learn",
      "slides",
      "image",
      "video"
    ],
    "sources": [
      "https://support.google.com/gemini/answer/16275805?hl=en",
      "https://support.google.com/gemini/answer/13275745?hl=en",
      "https://support.google.com/gemini/answer/15719111?hl=en",
      "https://support.google.com/gemini/answer/16047321?hl=en",
      "https://support.google.com/gemini/answer/15236321?hl=en",
      "https://support.google.com/gemini/answer/16448384?hl=en",
      "https://gemini.google/release-notes/"
    ]
  },
  "aistudio": {
    "strengths": [
      "最新のGeminiモデルを、画面の上で試せる。",
      "Build modeで、文章からWebアプリを作る。",
      "作ったお願い文を「Get code」でコードにできる。",
      "Firebaseなどと連携したアプリも作れる。",
      "Cloud Runへの公開や、GitHubとの同期。"
    ],
    "weaknesses": [
      "開発者向けで、設定の項目が多い。",
      "無料枠の入出力は、製品の改善に使われる。",
      "共有したアプリのAI利用は、自分の上限を使う。",
      "外で動かすなら、APIキーの設定が必要。"
    ],
    "merits": [
      "無料枠で、使い始められる。",
      "コードを書かずに、アプリの試作ができる。",
      "APIキーはサーバー側に保管され、漏れにくい。",
      "App Galleryの作例を、まねして作れる。"
    ],
    "demerits": [
      "有料モデルを使うと、費用がかかる。",
      "トークンなどの用語が、初心者には難しい。",
      "機密情報を無料枠で扱うのは避けたい。",
      "本番で運用するには、別の仕組みが必要。"
    ],
    "modes": [
      {
        "name": "Build mode",
        "what": "説明文から、アプリを丸ごと作る。",
        "when": "アイデアをすぐ動く形にしたいとき。"
      },
      {
        "name": "AI Chips",
        "what": "画像生成や地図などの機能を、お願いに足す。",
        "when": "アプリに特定の機能を入れたいとき。"
      },
      {
        "name": "I'm Feeling Lucky",
        "what": "Geminiが、アプリのアイデアを出す。",
        "when": "何を作るか迷ったとき。"
      },
      {
        "name": "System instructions",
        "what": "役割や口調を決めて、チャットを試す。",
        "when": "チャットボットの試作。"
      }
    ],
    "thinkingKind": "settings",
    "thinkingTitle": "モデルと考える深さ",
    "thinking": [
      {
        "name": "モデル選択",
        "what": "速さ・性能・費用のバランスを選ぶ。",
        "when": "用途と予算に合わせて。"
      },
      {
        "name": "thinking level（low〜high）",
        "what": "考える量を調整する。選べる段階はモデルで違う。",
        "when": "かんたんならlow、難しいならhigh。"
      },
      {
        "name": "Temperature",
        "what": "答えのばらつき（ランダムさ）の度合い。",
        "when": "新しいGeminiは、既定値のままが推奨。"
      }
    ],
    "tips": [
      "はっきり、具体的にお願いする。",
      "入力と出力の例を見せる。",
      "System instructionsで、役割と口調を決める。",
      "Temperatureは、むやみに変えない。",
      "かんたんな作業は、thinkingを低くして速くする。",
      "Build modeは小さく作って、会話で直す。"
    ],
    "bestFor": [
      "webapp",
      "lp"
    ],
    "sources": [
      "https://ai.google.dev/gemini-api/docs/aistudio-build-mode",
      "https://ai.google.dev/gemini-api/docs/ai-studio-quickstart",
      "https://ai.google.dev/gemini-api/docs/thinking",
      "https://ai.google.dev/gemini-api/docs/prompting-strategies",
      "https://ai.google.dev/gemini-api/docs/pricing"
    ]
  },
  "geminicli": {
    "strengths": [
      "ターミナルから、コードを読み書き・実行する。",
      "GEMINI.mdで、プロジェクトの決まりを伝える。",
      "Plan Modeで、読むだけの計画づくり。",
      "MCP・Skills・Hooksで、機能を広げる。",
      "自動化のスクリプトに組みこめる。"
    ],
    "weaknesses": [
      "個人アカウントでは、2026年6月18日に使えなくなった。",
      "ターミナル操作の知識が必要。",
      "YOLOは全部を自動で許可するので危険。",
      "後継のAntigravity CLIへの移行が必要。"
    ],
    "merits": [
      "オープンソースで、更新が続いている。",
      "企業向けのライセンスがあれば、使い続けられる。",
      "有料のAPIキーでも使える。",
      "承認モードで、安全の度合いを選べる。"
    ],
    "demerits": [
      "無料や個人向けの有料プランでは使えない。",
      "これから始める初心者には向かない。",
      "ドキュメントに、古いままの説明がある。",
      "設定ファイルが必要な場面がある。"
    ],
    "modes": [
      {
        "name": "Default",
        "what": "道具を使うたびに、確認する。",
        "when": "基本の、安全な使い方。"
      },
      {
        "name": "Auto-Edit",
        "what": "ファイルの編集を、自動で許可する。",
        "when": "信頼できる作業で、確認を減らすとき。"
      },
      {
        "name": "Plan",
        "what": "読むだけで、実行前に計画を作る。",
        "when": "大きな変更の設計。"
      },
      {
        "name": "YOLO",
        "what": "すべての操作を、自動で許可する。",
        "when": "隔離した環境など、十分に安全なときだけ。"
      },
      {
        "name": "GEMINI.md",
        "what": "毎回読みこまれる、指示のファイル。",
        "when": "決まりごとを伝えたいとき。"
      }
    ],
    "thinkingKind": "settings",
    "thinkingTitle": "モデルと考える深さ",
    "thinking": [
      {
        "name": "Auto",
        "what": "作業に合わせて、ProとFlashを自動で選ぶ。",
        "when": "基本はこれ。"
      },
      {
        "name": "Pro に固定",
        "what": "考える力の高いモデルを使う。",
        "when": "思うような結果が出ないとき。"
      },
      {
        "name": "Flash に固定",
        "what": "速いモデルを使う。",
        "when": "かんたんな変換などを、素早くしたいとき。"
      }
    ],
    "tips": [
      "GEMINI.mdに、決まりやテストの方法を書く。",
      "/memory show で、読みこまれた指示を確かめる。",
      "複雑な作業は、/planで計画してから。",
      "Shift+Tabで、モードを切り替える。",
      "YOLOは使わず、承認モードで進める。",
      "個人で使うなら、Antigravity CLIを検討する。"
    ],
    "bestFor": [
      "code"
    ],
    "sources": [
      "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/",
      "https://geminicli.com/docs/cli/plan-mode.md",
      "https://geminicli.com/docs/cli/gemini-md.md",
      "https://geminicli.com/docs/cli/model.md"
    ]
  },
  "antigravity": {
    "strengths": [
      "いくつものエージェントを、並行して動かす。",
      "計画やスクショなどの成果物で、進み具合を確かめる。",
      "ブラウザを操作して、画面の動きを確かめる。",
      "決まった時間に、自動で作業できる。",
      "デスクトップ・CLI・IDEで、同じ仕組みを使える。"
    ],
    "weaknesses": [
      "開発者向けで、最初の設定がやや多い。",
      "Turboなど広い権限は、全ファイルに触れる。",
      "18歳未満は使えない・地域の制限がある。",
      "機能の名前や画面が、よく変わる。"
    ],
    "merits": [
      "無料でも、Geminiのモデルを使える。",
      "標準では、囲いの中で安全に動く。",
      "計画にコメントして、直してから進められる。",
      "スマホのブラウザから、確認や許可ができる。"
    ],
    "demerits": [
      "無料だと、週ごとの上限が厳しめ。",
      "自分のAPIキーは持ちこめない。",
      "企業版では、他社のモデルが使えない。",
      "エディタ型なので、完全な初心者には難しめ。"
    ],
    "modes": [
      {
        "name": "Planning Mode",
        "what": "調べて計画を作り、確かめてから実行する。",
        "when": "複雑な作業・品質を重視するとき。"
      },
      {
        "name": "Fast Mode",
        "what": "計画を省いて、すぐ実行する。",
        "when": "名前の変更など、小さな作業。"
      },
      {
        "name": "Projects（Antigravity 2.0）",
        "what": "プロジェクトごとに、エージェントをまとめて管理する。",
        "when": "いくつもの作業を並行で見たいとき。"
      },
      {
        "name": "Antigravity IDE",
        "what": "エディタの横で、エージェントと一緒に作業する。",
        "when": "コードを見ながら作りたいとき。"
      },
      {
        "name": "Default / Request Review / Turbo",
        "what": "権限の設定。囲いの中で自動／毎回確認／制限なし。",
        "when": "基本はDefault。Turboは要注意。"
      },
      {
        "name": "Artifact Review",
        "what": "計画を確かめてから進むか、確かめずに進むか。",
        "when": "はじめてなら、確かめてから進む設定に。"
      }
    ],
    "thinkingKind": "settings",
    "thinkingTitle": "モデルと考える深さ",
    "thinking": [
      {
        "name": "モデル選択",
        "what": "エージェントの頭脳になるモデルを選ぶ。",
        "when": "ふだんはFlash、難題はPro。"
      },
      {
        "name": "Fast / Low / Medium / High",
        "what": "考える深さを選ぶ。",
        "when": "かんたんなら低め、難しいなら高め。"
      },
      {
        "name": "/boost",
        "what": "複数のエージェントで仮説を試して、確かめる。",
        "when": "難しいバグ（有料プラン）"
      },
      {
        "name": "/goal",
        "what": "途中の確認なしで、目標まで進める。",
        "when": "任せきりにしたい、はっきりした作業。"
      }
    ],
    "tips": [
      "テストやビルドで、結果を確かめさせる。",
      "調べる→計画→実行、の順に分ける。",
      "GEMINI.mdかAGENTS.mdに、決まりを書く。",
      "@でファイルを指定し、画像も添付する。",
      "計画にコメントして、直してから進める。",
      "権限はDefaultから始めて、広げすぎない。"
    ],
    "bestFor": [
      "code",
      "webapp"
    ],
    "sources": [
      "https://antigravity.google/docs/home",
      "https://antigravity.google/docs/features",
      "https://antigravity.google/docs/artifact-review",
      "https://antigravity.google/docs/permissions",
      "https://antigravity.google/docs/models",
      "https://antigravity.google/docs/plans",
      "https://antigravity.google/docs/cli/modes",
      "https://antigravity.google/docs/cli/best-practices"
    ]
  },
  "notebook": {
    "strengths": [
      "自分が入れた資料だけを、根拠にして答える。",
      "資料を、2人の会話形式の音声解説にする。",
      "動画解説・スライド・図解（インフォグラフィック）を作る。",
      "レポート・単語カード・クイズ・マインドマップ。",
      "PDF・ドキュメント・YouTube・音声など、いろいろな資料。"
    ],
    "weaknesses": [
      "ノートブックをまたいだ参照はできない。",
      "音声や動画には、誤りが入ることがある。",
      "動画解説は、30分以上かかることもある。",
      "有料のページなどは、取りこめない。"
    ],
    "merits": [
      "Googleアカウントで、無料で始められる。",
      "80以上の言語で、音声解説を作れる。",
      "Geminiアプリと、ノートブックが同期する。",
      "個人のデータは、原則として学習に使われない。"
    ],
    "demerits": [
      "無料は、1ノートブックに50資料まで。",
      "音声・動画解説は、無料だと1日3回まで。",
      "一部の動画スタイルは、英語のみ・18歳以上。",
      "名前がGemini Notebookに変わり、まぎらわしい。"
    ],
    "modes": [
      {
        "name": "Audio Overview",
        "what": "資料を、会話・要約・批評・討論の音声にする。",
        "when": "移動中に、耳で内容をつかみたいとき。"
      },
      {
        "name": "Video Overview",
        "what": "資料を解説動画にする。見た目のスタイルも選べる。",
        "when": "目で見て、まとめたいとき。"
      },
      {
        "name": "Slide Decks / Infographics",
        "what": "資料から、スライドや図解を作る。",
        "when": "発表資料や、1枚の図がほしいとき。"
      },
      {
        "name": "Reports / Mind Maps",
        "what": "報告書や、マップで整理する。",
        "when": "要点を、組み立てて見たいとき。"
      },
      {
        "name": "Flashcards / Quizzes",
        "what": "単語カードや、小テストを作る。",
        "when": "暗記・理解度のチェック。"
      },
      {
        "name": "Sources（資料）",
        "what": "使う資料を足す・選ぶ。ドライブは自動で同期。",
        "when": "答えの根拠を、しぼりたいとき。"
      }
    ],
    "thinkingKind": "settings",
    "thinkingTitle": "モデルと考える深さ",
    "thinking": [
      {
        "name": "資料の選択",
        "what": "チェックした資料だけを、答えの根拠にする。",
        "when": "特定の資料について聞きたいとき。"
      },
      {
        "name": "カスタマイズの指示",
        "what": "音声・動画の焦点や、専門のレベルを指定する。",
        "when": "扱う話題をしぼりたいとき。"
      },
      {
        "name": "長さの指定",
        "what": "音声解説の長さを変える（英語のみ）",
        "when": "時間に合わせたいとき。"
      }
    ],
    "tips": [
      "資料の名前を挙げて、具体的に質問する。",
      "使う資料だけ選んで、答えをしぼる。",
      "音声・動画は、焦点を指定して作る。",
      "権利を持っている資料だけを入れる。",
      "作ったものは、元の資料と照らして確かめる。",
      "テーマごとに、ノートブックを分ける。"
    ],
    "bestFor": [
      "summary",
      "learn",
      "research"
    ],
    "sources": [
      "https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/",
      "https://support.google.com/notebooklm/answer/16206563?hl=en",
      "https://support.google.com/notebooklm/answer/16212820?hl=en",
      "https://support.google.com/notebooklm/answer/16454555?hl=en",
      "https://support.google.com/notebooklm/answer/16213268?hl=en"
    ]
  }
};
