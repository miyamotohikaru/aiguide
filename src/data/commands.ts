/**
 * Claude Code のスラッシュコマンド一覧。
 * 出典: https://code.claude.com/docs/en/commands （2026-09-17 に全件を照合）
 * 廃止済み（/pr-comments・/ultraplan・/vim）は載せない。
 * star … はじめに覚えたい10個
 */
export const COMMANDS_CHECKED = "2026年9月17日";
export const COMMANDS_SOURCE = "https://code.claude.com/docs/en/commands";

export type CmdCat = "talk" | "work" | "setting" | "connect" | "parallel" | "help" | "etc";

export const CMD_CATS: { id: CmdCat; label: string }[] = [
  { id: "talk", label: "会話を整える" },
  { id: "work", label: "作る・確かめる" },
  { id: "setting", label: "設定" },
  { id: "connect", label: "ほかの道具とつなぐ" },
  { id: "parallel", label: "同時に進める" },
  { id: "help", label: "困ったとき・アカウント" },
  { id: "etc", label: "上級・特殊" },
];

export type Cmd = {
  cmd: string;
  args?: string;
  alias?: string;
  cat: CmdCat;
  desc: string;
  ex?: string;
  star?: boolean;
};

export const COMMANDS: Cmd[] = [
  // ---------- 会話を整える ----------
  { cmd: "/clear", cat: "talk", star: true, alias: "/reset /new", desc: "会話をまっさらにして、新しく始める。プロジェクトのメモ（CLAUDE.md）は残る。", ex: "別の作業に移るとき。" },
  { cmd: "/compact", args: "[指示]", cat: "talk", star: true, desc: "ここまでの会話を要約して、AIの記憶の空きを作る。会話は続けられる。", ex: "会話が長くなって、AIが前の話を忘れはじめたとき。" },
  { cmd: "/rewind", cat: "talk", star: true, alias: "/undo /checkpoint", desc: "会話とファイルを、前の時点まで巻き戻す。", ex: "直してもらったら、かえって壊れたとき。" },
  { cmd: "/resume", args: "[会話]", cat: "talk", star: true, alias: "/continue", desc: "前にしていた会話を選んで、続きから始める。", ex: "昨日の作業の続きをしたいとき。" },
  { cmd: "/context", cat: "talk", desc: "AIの記憶がどれくらい埋まっているかを、色のマス目で見せる。" },
  { cmd: "/btw", args: "[質問]", cat: "talk", desc: "会話の流れに残さずに、ちょっとした質問をする。", ex: "作業中に「この言葉って何？」と聞きたいとき。" },
  { cmd: "/branch", args: "[名前]", cat: "talk", desc: "いまの会話を枝分かれさせて、別の方向を試す。元の会話も残る。" },
  { cmd: "/rename", args: "[名前]", cat: "talk", desc: "いまの会話に名前を付ける。あとで /resume で探しやすくなる。" },
  { cmd: "/recap", cat: "talk", desc: "いまの会話で何をしたかを、1行でまとめる。" },
  { cmd: "/copy", args: "[番号]", cat: "talk", desc: "AIの最後の返事をコピーする。/copy 2 なら、ひとつ前の返事。" },
  { cmd: "/export", args: "[ファイル名]", cat: "talk", desc: "会話をまるごとテキストにして、保存かコピーをする。" },

  // ---------- 作る・確かめる ----------
  { cmd: "/init", cat: "work", star: true, desc: "プロジェクトを読んで、ルールのメモ（CLAUDE.md）を作る。", ex: "はじめてそのフォルダで使うとき。" },
  { cmd: "/memory", cat: "work", desc: "CLAUDE.md（毎回読ませるメモ）を開いて直す。自動メモのオン・オフもここ。" },
  { cmd: "/plan", args: "[やりたいこと]", cat: "work", star: true, desc: "いきなり直さず、まず計画を立ててもらう。計画を見てから進められる。", ex: "大きな変更を頼む前に。" },
  { cmd: "/diff", cat: "work", star: true, desc: "AIがファイルのどこを変えたかを一覧で見る。" },
  { cmd: "/run", cat: "work", desc: "作ったアプリやサイトを実際に起動して、動くところを見せてもらう。" },
  { cmd: "/verify", cat: "work", desc: "変えた所がちゃんと動くか、実際に動かして確かめてもらう。" },
  { cmd: "/code-review", args: "[強さ]", alias: "/review", cat: "work", desc: "変更したコードに、まちがいがないか見てもらう。--fix を付けると直すところまでやる。" },
  { cmd: "/security-review", cat: "work", desc: "変更に、セキュリティの穴がないか調べてもらう。" },
  { cmd: "/simplify", args: "[対象]", cat: "work", desc: "変更したコードを、もっとすっきり書きなおしてもらう。" },
  { cmd: "/design", args: "[説明]", cat: "work", desc: "画面のデザイン案を、キャンバスに何枚か描いてもらう。", ex: "/design パン屋のトップページ" },
  { cmd: "/dataviz", args: "[頼みごと]", cat: "work", desc: "グラフやダッシュボードを、見やすい色と形で作ってもらう。" },
  { cmd: "/deep-research", args: "<質問>", cat: "work", desc: "ネットを広く調べて、出典つきのレポートにまとめてもらう。" },
  { cmd: "/goal", args: "[達成の条件]", cat: "work", desc: "条件を満たすまで、AIに作業を続けてもらう。" },
  { cmd: "/loop", args: "[間隔] [頼みごと]", cat: "work", desc: "同じ頼みごとを、一定の間隔でくり返してもらう。", ex: "/loop 5m 公開が終わったか見て" },
  { cmd: "/schedule", args: "[説明]", alias: "/routines", cat: "work", desc: "決まった時間に、クラウドで自動で作業してもらう予約を作る。" },
  { cmd: "/batch", args: "<指示>", cat: "work", desc: "大きな変更を小さく分けて、何人ものAIで同時に進める。" },
  { cmd: "/add-dir", args: "<フォルダ>", cat: "work", desc: "いまの会話で、ほかのフォルダのファイルも読めるようにする。" },
  { cmd: "/cd", args: "<フォルダ>", cat: "work", desc: "会話はそのままで、作業するフォルダを移る。" },

  // ---------- 設定 ----------
  { cmd: "/model", args: "[モデル]", cat: "setting", star: true, desc: "使うAIのモデルを切り替える。次からもそのモデルになる。" },
  { cmd: "/config", alias: "/settings", cat: "setting", desc: "設定画面を開く。見た目、モデル、返事のスタイルなど。" },
  { cmd: "/effort", args: "[強さ]", cat: "setting", desc: "AIがどれくらい深く考えるかを変える。low から max まで。" },
  { cmd: "/fast", args: "[on|off]", cat: "setting", desc: "速く返事をする「ファストモード」を、オン・オフする。" },
  { cmd: "/permissions", alias: "/allowed-tools", cat: "setting", desc: "AIが確認なしでしていいこと、だめなことのルールを決める。" },
  { cmd: "/theme", cat: "setting", desc: "画面の色のテーマを変える。色の見分けにやさしいテーマもある。" },
  { cmd: "/color", args: "[色]", cat: "setting", desc: "入力欄の色を変える。会話を色で見分けたいときに。" },
  { cmd: "/voice", args: "[hold|tap|off]", cat: "setting", desc: "声で入力する機能を、オン・オフする。" },
  { cmd: "/focus", cat: "setting", desc: "途中経過を隠して、自分の質問と最後の返事だけを見る表示に切り替える。" },
  { cmd: "/hooks", cat: "setting", desc: "「〇〇したら、自動で△△する」という設定（フック）を見る。" },
  { cmd: "/keybindings", cat: "setting", desc: "キーボードのショートカットの設定ファイルを開く。" },
  { cmd: "/terminal-setup", cat: "setting", desc: "Shift + Enter などで改行できるように、ターミナルを設定する。" },
  { cmd: "/statusline", cat: "setting", desc: "画面の下に出る情報の帯（ステータスライン）を作る。" },
  { cmd: "/tui", args: "[default|fullscreen]", cat: "setting", desc: "画面の表示方式を切り替える。" },
  { cmd: "/scroll-speed", cat: "setting", desc: "マウスのスクロールの速さを変える（全画面表示のとき）。" },
  { cmd: "/autocompact", args: "[auto|量]", cat: "setting", desc: "記憶がどれくらい埋まったら自動で要約するかを決める。" },
  { cmd: "/sandbox", cat: "setting", desc: "AIの動ける範囲を囲う「サンドボックス」を、オン・オフする。" },
  { cmd: "/advisor", args: "[モデル|off]", cat: "setting", desc: "作業の要所で、別のモデルに相談する機能をオン・オフする。" },

  // ---------- ほかの道具とつなぐ ----------
  { cmd: "/mcp", cat: "connect", desc: "外のサービス（MCPサーバー）とのつながりを見る・つなぎなおす。" },
  { cmd: "/plugin", cat: "connect", desc: "プラグイン（機能の追加パック）を入れる・外す。" },
  { cmd: "/reload-plugins", cat: "connect", desc: "プラグインの変更を、再起動せずに反映する。" },
  { cmd: "/skills", cat: "connect", desc: "使えるスキル（決まった仕事のやり方の手順書）の一覧を見る。" },
  { cmd: "/reload-skills", cat: "connect", desc: "スキルを足したり直したりしたあと、読みなおす。" },
  { cmd: "/agents", cat: "connect", desc: "サブエージェント（手伝いのAI）の作り方の案内を出す。" },
  { cmd: "/chrome", cat: "connect", desc: "Chrome をAIに操作してもらう機能（Claude in Chrome）の設定。" },
  { cmd: "/ide", cat: "connect", desc: "VS Code などのエディタとのつながりを見る。" },
  { cmd: "/desktop", alias: "/app", cat: "connect", desc: "いまの会話を、デスクトップアプリで続ける。" },
  { cmd: "/mobile", alias: "/ios /android", cat: "connect", desc: "スマホアプリを入れるQRコードを出す。" },
  { cmd: "/remote-control", alias: "/rc", cat: "connect", desc: "この会話を、claude.ai やスマホから操作できるようにする。" },
  { cmd: "/artifacts", cat: "connect", desc: "自分が作った・共有されたアーティファクト（公開ページ）の一覧を見る。" },
  { cmd: "/install-github-app", cat: "connect", desc: "GitHub のリポジトリに、Claude のアプリを入れる。" },
  { cmd: "/install-slack-app", cat: "connect", desc: "Slack に、Claude のアプリを入れる。" },
  { cmd: "/import", cat: "connect", desc: "Codex・Gemini CLI・Cursor の設定を、Claude Code に取りこむ。" },
  { cmd: "/web-setup", cat: "connect", desc: "クラウドで動かすために、GitHub のアカウントをつなぐ。" },
  { cmd: "/teleport", alias: "/tp", cat: "connect", desc: "クラウドで進めていた会話を、手元に持ってくる。" },
  { cmd: "/remote-env", cat: "connect", desc: "クラウドで動かすときの、標準の環境を選ぶ。" },

  // ---------- 同時に進める ----------
  { cmd: "/tasks", alias: "/bashes", cat: "parallel", desc: "裏で動いている作業や、手伝いのAIの様子を見る。" },
  { cmd: "/background", args: "[頼みごと]", alias: "/bg", cat: "parallel", desc: "いまの会話を裏に回して、画面を空ける。作業は続く。" },
  { cmd: "/fork", args: "[頼みごと]", cat: "parallel", desc: "いまの会話をコピーして、裏で別の作業をさせる。" },
  { cmd: "/subtask", args: "<作業>", cat: "parallel", desc: "手伝いのAIに脇の作業を任せる。終わると結果がこの会話に戻る。" },
  { cmd: "/stop", cat: "parallel", desc: "裏で動いている会話を止める。" },
  { cmd: "/list-agents", alias: "/peers", cat: "parallel", desc: "話しかけられる手伝いのAIや、ほかの会話の一覧を出す。" },
  { cmd: "/workflows", cat: "parallel", desc: "何人ものAIで進める作業（ワークフロー）の進み具合を見る。" },

  // ---------- 困ったとき・アカウント ----------
  { cmd: "/help", cat: "help", star: true, desc: "使えるコマンドの一覧と、使い方を出す。", ex: "迷ったら、まずこれ。" },
  { cmd: "/doctor", alias: "/checkup", cat: "help", star: true, desc: "インストールや設定におかしな所がないか診断して、直すのを手伝う。", ex: "なんだか調子が悪いとき。" },
  { cmd: "/debug", args: "[説明]", cat: "help", desc: "記録（ログ）を取りはじめて、動きのおかしな原因を調べる。" },
  { cmd: "/status", cat: "help", desc: "バージョン、モデル、アカウント、接続の状態を見る。" },
  { cmd: "/usage", alias: "/cost /stats", cat: "help", desc: "使った量と、プランの上限までの残りを見る。" },
  { cmd: "/rate-limit-options", cat: "help", desc: "上限に達したときの選択肢（待つ・追加する・プラン変更）を出す。" },
  { cmd: "/usage-credits", cat: "help", desc: "上限を超えて使うためのクレジットを設定する。" },
  { cmd: "/upgrade", cat: "help", desc: "上のプランに変えるページを開く。" },
  { cmd: "/login", cat: "help", desc: "Anthropic のアカウントでログインする。" },
  { cmd: "/logout", cat: "help", desc: "ログアウトする。" },
  { cmd: "/privacy-settings", cat: "help", desc: "プライバシーの設定を見る・変える（Pro・Max プラン）。" },
  { cmd: "/bug", args: "[内容]", alias: "/share", cat: "help", desc: "不具合を報告する。送る前に、含める内容を確認できる。" },
  { cmd: "/feedback", args: "[内容]", cat: "help", desc: "Claude Code への意見を送る。" },
  { cmd: "/release-notes", cat: "help", desc: "新しいバージョンで何が変わったかを見る。" },
  { cmd: "/powerup", cat: "help", desc: "動きのある短いレッスンで、機能を知る。", ex: "何ができるのか、ひととおり知りたいとき。" },
  { cmd: "/exit", alias: "/quit", cat: "help", desc: "Claude Code を終わる。" },

  // ---------- 上級・特殊 ----------
  { cmd: "/insights", cat: "etc", desc: "最近の使い方を分析したレポートを作る。" },
  { cmd: "/team-onboarding", cat: "etc", desc: "自分の使い方をもとに、チームの人向けの始め方ガイドを作る。" },
  { cmd: "/fewer-permission-prompts", cat: "etc", desc: "よく許可している操作を調べて、毎回聞かれないようにする。" },
  { cmd: "/auto-mode-setup", cat: "etc", desc: "自動モードで使う環境の設定を、下書きしてもらう。" },
  { cmd: "/skill-doctor", cat: "etc", desc: "スキルごとの重さと使われ方を見て、使っていないものを探す。" },
  { cmd: "/run-skill-generator", cat: "etc", desc: "/run と /verify が、このプロジェクトを動かせるように手順を覚えさせる。" },
  { cmd: "/autofix-pr", args: "[指示]", cat: "etc", desc: "プルリクエストを見張って、エラーや指摘が来たら自動で直させる。" },
  { cmd: "/claude-api", cat: "etc", desc: "Claude API を使ったアプリを作るための資料を読みこむ。" },
  { cmd: "/design-sync", cat: "etc", desc: "React のデザインシステムを、Claude Design に取りこむ。" },
  { cmd: "/design-login", cat: "etc", desc: "/design-sync を使うための許可を出す。" },
  { cmd: "/workflow-authoring", cat: "etc", desc: "ワークフローの台本を手で直すための資料を読みこむ。" },
  { cmd: "/setup-bedrock", cat: "etc", desc: "Amazon Bedrock で使うための設定をする。" },
  { cmd: "/setup-vertex", cat: "etc", desc: "Google Cloud で使うための設定をする。" },
  { cmd: "/heapdump", cat: "etc", desc: "メモリを使いすぎているときの、調査用の記録を書き出す。" },
  { cmd: "/radio", cat: "etc", desc: "作業用のラジオ（Claude FM）をブラウザで開く。" },
  { cmd: "/passes", cat: "etc", desc: "友だちに、Claude Code の1週間無料券を送る（対象の人だけ）。" },
  { cmd: "/stickers", cat: "etc", desc: "Claude Code のステッカーを注文する。" },
];
