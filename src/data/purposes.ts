/**
 * 目的別：いちばんいいAI（/ai/purpose）。
 * 根拠: 各サービスの公式サイト・公式ヘルプ（2026年9月17日に確認）。
 * 「いちばん」は、公式に書かれている機能をもとにした、このサイトの評価。
 * id … TOOLS（ai.ts）にあるツールなら、その id（詳しいページにつなぐ）。
 *
 * 最近の変更で気をつけたこと:
 * - NotebookLM は 2026-07-16 に「Gemini Notebook」に名前が変わった（URL はそのまま）。
 * - OpenAI の Sora はアプリ・Web が 2026-04-26 に終了。動画の候補から外した。
 * - Claude Docs / Claude Slides は 2026-09-16 に始まったばかりのβなので「いちばん」にはしない。
 */
export type Pick = { tool: string; id?: string; why: string; url: string };

export type Purpose = {
  id: string;
  label: string;
  emoji: string;
  best: Pick;
  also: Pick[];
  steps: string[];
  prompt: string;
  care: string[];
  free: string;
};

export const PURPOSES: Purpose[] = [
  {
    id: "slides",
    label: "資料（スライド）を作る",
    emoji: "📊",
    best: {
      tool: "Gamma",
      why: "スライド作り専用。文章から下書きを作って、PowerPoint や PDF で書き出せる。無料で試せる。",
      url: "https://gamma.app/",
    },
    also: [
      { tool: "Claude", id: "claude", why: "手元の資料から、PowerPoint のファイルを作りたい人。", url: "https://claude.ai/" },
      { tool: "Gemini（Canvas）", id: "gemini", why: "Google スライドに書き出して、仕上げたい人。", url: "https://gemini.google.com/" },
    ],
    steps: [
      "誰に、何分で、何を決めてほしいかを書く。",
      "元になるメモや資料を、貼る・添付する。",
      "先に構成（目次）だけ出してもらって、直す。",
      "構成がOKなら、スライドを作ってもらう。",
      "数字と名前は、必ず自分で確かめる。",
    ],
    prompt:
      "【社内の部長向け】に【10分】で話す、【新サービスの導入提案】のスライドを作ってください。\n枚数は【8枚】で、1枚目は表紙、最後は「次にやること」にしてください。\nまず構成案だけ出してください。\n材料は次のメモです：【メモを貼る】",
    care: [
      "AIが入れた数字や画像は、事実と権利を確かめてから使う。",
      "Google スライドで開くと、書体が変わって見た目がずれることがある。",
    ],
    free: "Gamma は登録時にクレジットがもらえる（補充はなし）。Claude は無料プランでも PowerPoint を作れる。",
  },
  {
    id: "docs",
    label: "文書・レポート・企画書を作る",
    emoji: "📝",
    best: {
      tool: "Claude",
      id: "claude",
      why: "Word や PDF のファイルを、そのまま作って渡してくれる。無料プランでも作れる。",
      url: "https://claude.ai/",
    },
    also: [
      { tool: "Microsoft Copilot（Word）", why: "Microsoft 365 を契約していて、Word の中で書きたい人。", url: "https://support.microsoft.com/en-us/microsoft-365-copilot/where-can-i-get-microsoft-copilot" },
      { tool: "Gemini in Google ドキュメント", why: "Google ドキュメントで書く人（Google の AI プランなどが必要）。", url: "https://support.google.com/docs/answer/13951448" },
    ],
    steps: [
      "目的、読む人、分量を最初に書く。",
      "材料（メモ・データ）を添付する。",
      "見出しの構成だけ、先に作ってもらう。",
      "本文を作ってもらって、ファイルで受け取る。",
      "事実・数字・日付は、自分で確かめる。",
    ],
    prompt:
      "【取引先】に出す【新商品の企画書】を作ってください。\nA4で【3ページ】、見出しは「背景・提案・費用・スケジュール」にしてください。\n材料は添付の【メモ】です。\nまず見出し案を見せて、OKしたら Word ファイルで作ってください。",
    care: ["1つのファイルの上限は30MB（Claude）。", "Claude Docs は始まったばかりのβで、有料プランから順番に使えるようになっている。"],
    free: "Claude は無料プランでも Word・PDF を作れる。Word の中の Copilot は Microsoft 365 の有料プラン。",
  },
  {
    id: "data",
    label: "表計算・データ分析・グラフ",
    emoji: "📈",
    best: {
      tool: "ChatGPT for Excel／Google Sheets",
      id: "chatgpt",
      why: "Excel と Google スプレッドシートの横で、数式や表を直接作れる。無料でも少し使える。",
      url: "https://chatgpt.com/apps/spreadsheets/",
    },
    also: [
      { tool: "Claude", id: "claude", why: "CSV を渡して、グラフ入りの Excel ファイルを作ってほしい人。", url: "https://claude.ai/" },
      { tool: "Microsoft Copilot（Excel）", why: "Microsoft 365 を契約していて、Excel だけで済ませたい人。", url: "https://support.microsoft.com/en-us/topic/get-started-with-agent-mode-in-word-excel-and-powerpoint-4d322d7f-5e89-4f66-9fa4-57d328b156ff" },
    ],
    steps: [
      "作業の前に、ファイルのコピーをとる。",
      "列の意味と、知りたいことを書く。",
      "集計の手順を、先に説明してもらう。",
      "グラフの種類と、見せたいところを指定する。",
      "合計など、数か所を手で検算する。",
    ],
    prompt:
      "このシートは【月別・店舗別の売上】です。\nA列は【日付】、B列は【店舗名】、C列は【売上】です。\n【店舗ごとの月別の合計】を新しいシートにまとめ、【伸びが大きい店舗】がわかる折れ線グラフを作ってください。\n使った数式も説明してください。",
    care: ["よそから来たファイルには、AIへの隠れた指示が入っていることがある。信頼できるファイルだけで使う。", "マクロ（VBA）には対応していないことがある。"],
    free: "ChatGPT for Excel／Sheets は無料プランでも使える（量は少なめ）。Claude for Excel は Pro 以上。",
  },
  {
    id: "research",
    label: "調べもの・リサーチ（出典つき）",
    emoji: "🔍",
    best: {
      tool: "Perplexity",
      why: "どの答えにも番号つきの出典が付いて、元の記事をすぐ確かめられる。無料で使える。",
      url: "https://www.perplexity.ai/",
    },
    also: [
      { tool: "Gemini（Deep Research）", id: "gemini", why: "長いレポートにまとめたい人。無料プランでも使える。", url: "https://gemini.google.com/" },
      { tool: "ChatGPT（deep research）", id: "chatgpt", why: "時間をかけて、深く調べてほしい人。", url: "https://chatgpt.com/" },
    ],
    steps: [
      "調べる範囲と、期間を決めて書く。",
      "「公式・一次情報を優先して」と頼む。",
      "出典のリンクを、実際に開いて読む。",
      "食い違う情報は、両方並べてもらう。",
      "結論は、出典の日付と一緒にメモする。",
    ],
    prompt:
      "【日本の中小企業のテレワーク導入率】について、【2024年以降】の情報を調べてください。\n【官公庁の統計】など一次情報を優先し、すべての主張に出典URLを付けてください。\n資料によって数字が違う場合は、両方を並べて違いの理由を書いてください。",
    care: ["出典が付いていても、要約が合っているとは限らない。リンク先を必ず開く。", "深いリサーチは、終わるまで5〜30分かかることがある。"],
    free: "Perplexity は無料でも出典つきで調べられる。Gemini は無料でも Deep Research を使える（回数に上限）。",
  },
  {
    id: "writing",
    label: "文章・メール・SNS投稿を書く",
    emoji: "✉️",
    best: {
      tool: "ChatGPT",
      id: "chatgpt",
      why: "下書きが直せる枠に出て、選んだところだけ書き直せる。無料で使える。",
      url: "https://chatgpt.com/",
    },
    also: [
      { tool: "Claude", id: "claude", why: "好みの書き方を、Memory で覚えさせたい人。", url: "https://claude.ai/" },
      { tool: "Microsoft Copilot（Outlook）", why: "Outlook でメールを書く、Microsoft 365 の契約者。", url: "https://support.microsoft.com/en-us/microsoft-365-copilot/ai-credits-and-limits-for-microsoft-365-subscriptions" },
    ],
    steps: [
      "誰に、何のために書くかを伝える。",
      "文字数と口調（ていねい・くだけた）を決める。",
      "言いたい要点を、箇条書きで渡す。",
      "案を3つ出してもらって、選ぶ。",
      "名前・日時・金額は、自分で直す。",
    ],
    prompt:
      "【取引先の山田様】に、【打ち合わせの日程変更】をお願いするメールを書いてください。\n口調は【ていねい・簡潔】、【200字】くらいでお願いします。\n伝えたいことは【7日→10日に変更したい／理由は社内の都合／候補は10日か11日の午後】です。\n件名もつけてください。",
    care: ["個人情報や社外秘は、会社のルールを確かめてから入れる。", "SNSに出す前に、事実・表現・引用の権利を見直す。"],
    free: "ChatGPT も Claude も、無料プランで文章を書ける。",
  },
  {
    id: "image",
    label: "画像をつくる（イラスト・バナー）",
    emoji: "🎨",
    best: {
      tool: "ChatGPT（画像生成）",
      id: "chatgpt",
      why: "無料プランでも作れて、会話しながら一部だけ直せる。",
      url: "https://chatgpt.com/",
    },
    also: [
      { tool: "Canva（Canva AI）", why: "作った画像を、バナーのデザインに仕上げたい人。", url: "https://www.canva.com/" },
      { tool: "Adobe Firefly", why: "商用で使う前提で、権利面の安心を重視する人。", url: "https://www.adobe.com/products/firefly.html" },
    ],
    steps: [
      "使う場所と、サイズ（縦横の比率）を決める。",
      "雰囲気・色・入れたいものを書く。",
      "まず何案か出して、方向を決める。",
      "直したいところだけ伝えて、修正する。",
      "文字は、あとからデザインツールで入れる。",
    ],
    prompt:
      "【カフェの秋の新メニュー】のSNS用バナーの背景画像を作ってください。\nサイズは【正方形】、雰囲気は【温かく落ち着いた】、色は【茶色とオレンジ】。\n中央に【かぼちゃのケーキ】を置き、文字を入れる余白を【上側】に空けてください。",
    care: ["ロゴ案は、ほかの会社の商標に似ていないか確かめる。そのまま正式なロゴにしない。", "Firefly を無料で使う場合、有料契約向けの補償は付かない。"],
    free: "ChatGPT と Gemini は、無料プランでも画像を作れる（上限あり）。Canva の無料は、AI機能の回数に上限がある。",
  },
  {
    id: "video",
    label: "動画をつくる",
    emoji: "🎬",
    best: {
      tool: "Google Flow（Veo）",
      why: "Google の動画生成モデルで作る制作ツール。無料でも毎日クレジットが付く。",
      url: "https://labs.google/fx/tools/flow",
    },
    also: [
      { tool: "Runway", why: "動画生成の専用ツールで、いろいろ試したい人。", url: "https://runway.com/" },
      { tool: "Canva", why: "素材をつないで、SNS用の動画に編集したい人。", url: "https://www.canva.com/" },
    ],
    steps: [
      "数秒の1カットずつに分けて考える。",
      "写るもの・動き・カメラを、具体的に書く。",
      "短く作って、方向を確かめる。",
      "よいカットだけ残して、つなぐ。",
      "音楽や人物の権利を確かめる。",
    ],
    prompt:
      "【朝の海辺】で【白い犬が波打ち際を走る】【8秒】の動画を作ってください。\nカメラは【横から並んで追いかける】、光は【やわらかい朝日】、雰囲気は【明るく爽やか】にしてください。\n人物や文字は入れないでください。",
    care: ["OpenAI の Sora は、アプリとWebが2026年4月に終了した。古い解説記事に注意。", "Flow は18歳以上の年齢確認が必要。"],
    free: "Flow は契約なしでも、1日ぶんのクレジットが付く。Gemini アプリでの動画生成は有料プラン。",
  },
  {
    id: "lp",
    label: "Webサイト・LPを作る",
    emoji: "🖥️",
    best: {
      tool: "Bolt.new",
      id: "bolt",
      why: "作るところから公開まで、1か所で終わる。無料プランでも公開できる。",
      url: "https://bolt.new/",
    },
    also: [
      { tool: "v0", id: "v0", why: "画面を見ながら、見た目を細かく直したい人。", url: "https://v0.app/" },
      { tool: "Claude Code", id: "claudecode", why: "手元のフォルダで作って、自分で公開したい人（有料）。", url: "https://code.claude.com/" },
    ],
    steps: [
      "載せる項目を、箇条書きで決める。",
      "参考にしたい雰囲気を、言葉で伝える。",
      "スマホでの見え方も、必ず確かめてもらう。",
      "文章と画像を、本物に差し替える。",
      "公開前に、問い合わせ先を確かめる。",
    ],
    prompt:
      "【イラストレーター】のポートフォリオサイトを、1ページで作ってください。\n項目は【自己紹介・作品一覧（6点）・料金の目安・問い合わせ】です。\n雰囲気は【白基調でシンプル】、スマホでも見やすくしてください。\n作品画像は、仮の枠にしておいてください。",
    care: ["Bolt や v0 の無料公開では、サービスのロゴや透かしが入る。", "使っている画像やフォントの利用条件を確かめる。"],
    free: "Bolt は無料プランでも作って公開できる（トークンに上限）。v0 は無料だと1日のメッセージ数に上限。",
  },
  {
    id: "webapp",
    label: "ログインやデータ保存があるWebアプリ",
    emoji: "🔐",
    best: {
      tool: "Lovable",
      id: "lovable",
      why: "ログイン・データベース・公開が最初から組みこまれていて、自分で設定しなくてよい。",
      url: "https://lovable.dev/",
    },
    also: [
      { tool: "Replit", id: "replit", why: "無料で、ログインとデータベース付きのアプリを試したい人。", url: "https://replit.com/" },
      { tool: "Bolt.new", id: "bolt", why: "無料プランのまま、データベース付きで公開まで試したい人。", url: "https://bolt.new/" },
    ],
    steps: [
      "誰が何をするアプリか、1文で書く。",
      "保存するデータの項目を決める。",
      "ログインの方法（メールなど）を指定する。",
      "他の人のデータが見えないか、試す。",
      "小さく公開して、動きを確かめる。",
    ],
    prompt:
      "【家族で使う買い物リスト】アプリを作ってください。\n【メールアドレス】でログインでき、ユーザーごとに【品名・数量・買ったかどうか】を保存します。\nほかのユーザーのリストは見えないようにしてください。\nまず、画面と保存するデータの設計案を見せてください。",
    care: ["他人のデータが見えないか、アカウントを2つ作って確かめる。", "使う人が増えると、無料枠を超えて費用がかかることがある。"],
    free: "Lovable は1日ぶんの無料クレジットあり。Replit の無料版は、公開は1つまで。",
  },
  {
    id: "code",
    label: "手元のコード・フォルダを直す",
    emoji: "🛠️",
    best: {
      tool: "Claude Code",
      id: "claudecode",
      why: "デスクトップアプリでフォルダを選ぶだけで使えて、変更を確かめてから反映できる。",
      url: "https://code.claude.com/",
    },
    also: [
      { tool: "Codex", id: "codex", why: "無料プランで、まず試したい人（使える量は少なめ）。", url: "https://developers.openai.com/codex/app" },
      { tool: "Cursor", id: "cursor", why: "エディタの画面で、コードを見ながら直したい人。", url: "https://cursor.com/" },
    ],
    steps: [
      "作業の前に、フォルダをまるごとコピーする。",
      "困っていることを、具体的に書く。",
      "直す前に、原因と方針を説明してもらう。",
      "変更点（差分）を見てから、OKする。",
      "実際に動かして、直ったか確かめる。",
    ],
    prompt:
      "このフォルダは【自分のホームページ】です。\n【スマホで見るとメニューが画面からはみ出す】問題を直したいです。\nまず原因と直し方の方針を説明し、ファイルを変更する前に私の確認を取ってください。\n関係ないファイルは変更しないでください。",
    care: ["パスワードやAPIキーが入ったファイルは、読ませない。", "Claude Code は無料プランでは使えない（Pro 以上）。"],
    free: "Codex は無料プランでも使える（量は少なめ）。Cursor の無料プランは、エージェントの回数に上限。",
  },
  {
    id: "learn",
    label: "勉強・わからないことを学ぶ",
    emoji: "📚",
    best: {
      tool: "ChatGPT（study mode）",
      id: "chatgpt",
      why: "答えをすぐ出さず、質問しながら一歩ずつ教えてくれる。無料プランでも使える。",
      url: "https://chatgpt.com/",
    },
    also: [
      { tool: "Gemini（Guided Learning）", id: "gemini", why: "図・動画・クイズを交えて学びたい人。", url: "https://gemini.google.com/" },
      { tool: "Gemini Notebook（旧 NotebookLM）", id: "notebook", why: "手元の教材やプリントをもとに学びたい人。", url: "https://notebooklm.google/" },
    ],
    steps: [
      "いまの理解度と、目標を伝える。",
      "study mode など、学習用の機能を選ぶ。",
      "自分の言葉で、説明し返してみる。",
      "最後に、確認問題を出してもらう。",
      "大事なところは、教科書や公式資料で確かめる。",
    ],
    prompt:
      "【中学2年】レベルで【一次関数】がよくわかりません。\nいきなり答えを言わずに、私に質問しながら一歩ずつ教えてください。\n最後に確認問題を【3問】出して、私の答えを採点してください。",
    care: ["AIもまちがえる。試験や成績に関わることは、教材で確かめる。", "課題にAIを使ってよいかは、学校や職場のルールに従う。"],
    free: "study mode は無料プランでも使える。Guided Learning と Gemini Notebook も無料で使える（上限あり）。",
  },
  {
    id: "summary",
    label: "議事録・長い資料の要約",
    emoji: "🗒️",
    best: {
      tool: "Gemini Notebook（旧 NotebookLM）",
      id: "notebook",
      why: "渡した資料だけをもとに、出典つきで要約する。音声の解説やスライドも作れる。",
      url: "https://notebooklm.google/",
    },
    also: [
      { tool: "Google Meet「Take notes for me」", why: "Meet の会議を、Google ドキュメントに自動で記録したい人。", url: "https://support.google.com/meet/answer/14754931" },
      { tool: "Claude", id: "claude", why: "長いPDFを渡して、まとめてほしい人。", url: "https://claude.ai/" },
    ],
    steps: [
      "資料や文字起こしを、アップロードする。",
      "要約の目的と、長さを指定する。",
      "決まったこと・宿題・期限を、分けてもらう。",
      "出典の箇所を開いて、照らし合わせる。",
      "参加した人に、内容を確かめてもらう。",
    ],
    prompt:
      "アップロードした【会議の文字起こし】を、議事録にしてください。\n「決まったこと」「宿題（担当者・期限）」「持ち越しの論点」の3つに分け、それぞれ元の発言の位置がわかるようにしてください。\n書かれていないことは、推測で足さないでください。",
    care: ["Meet の自動メモは、日本語はβ扱い。", "録音や文字起こしは、参加者の同意と会社のルールを確かめてから。"],
    free: "Gemini Notebook は無料でも使える（時間ごとに回復する上限あり）。Meet の自動メモは対象のプランが必要。",
  },
];
