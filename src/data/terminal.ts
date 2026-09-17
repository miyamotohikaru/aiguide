/**
 * ターミナル入門のデータ。
 * Claude Code のインストール・キー操作は https://code.claude.com/docs/en/setup ほか公式ドキュメント、
 * Vercel CLI は https://vercel.com/docs/cli/deploying-from-cli で 2026-09-17 に確認。
 * 文中の印： ［キー名］ / `打つ文字` / ◆◇（改行）
 */

/** タイピングアニメの1行。cmd は打つ文字、out は結果の行 */
export type TermLine = { cmd: string; out?: string[] };

export const DEMO_HELLO: TermLine[] = [
  { cmd: "pwd", out: ["/Users/you"] },
  { cmd: "cd Desktop/mysite", out: [] },
  { cmd: "ls", out: ["index.html   style.css   images"] },
  { cmd: "open .", out: ["（フォルダの窓が開く）"] },
];

export const DEMO_DEPLOY: TermLine[] = [
  { cmd: "cd Desktop/mysite", out: [] },
  { cmd: "npx vercel", out: ["? Set up and deploy? yes", "🔍 Preview: https://mysite-abc123.vercel.app"] },
  { cmd: "npx vercel --prod", out: ["✅ Production: https://mysite.vercel.app"] },
];

export const DEMO_CLAUDE: TermLine[] = [
  { cmd: "cd Desktop/mysite", out: [] },
  { cmd: "claude", out: ["✻ Welcome to Claude Code!", "> このサイトをスマホでも見やすくして"] },
];

/** 開きかた */
export const OPEN_WAYS = {
  mac: {
    label: "Mac",
    keys: ["⌘", "スペース"],
    steps: [
      "［⌘］と［スペース］を同時に押す。検索の窓が出る。",
      "`ターミナル` と打って、［Enter］。",
      "白か黒の窓が開いたら、準備できた。",
    ],
    tip: "よく使うなら、Dock のアイコンを右クリックして［オプション］→［Dockに追加］。",
  },
  win: {
    label: "Windows",
    keys: ["⊞ Win"],
    steps: [
      "［スタート］ボタン（⊞）を押す。",
      "`ターミナル` と打つ。出てこなければ `PowerShell` と打つ。",
      "出てきたアプリを押して、窓が開いたら準備できた。",
    ],
    tip: "Windows では、このページの命令のいくつかが少しちがう（下のカードに書いてある）。",
  },
} as const;

/** まず覚える8つ */
export type Basic = {
  cmd: string;
  name: string;
  desc: string;
  win?: string;
  pic: "where" | "list" | "move" | "up" | "make" | "open" | "clear" | "keys";
  copy?: boolean;
};

export const BASICS: Basic[] = [
  { cmd: "pwd", name: "いまどこ？", desc: "いま自分がいるフォルダの場所を出す。迷子になったら、まずこれ。", pic: "where", copy: true },
  { cmd: "ls", name: "中を見る", desc: "いるフォルダの中身を並べる。", win: "Windows の PowerShell でも `ls` で動く。`dir` でもよい。", pic: "list", copy: true },
  { cmd: "cd フォルダ名", name: "入る", desc: "そのフォルダの中に移る。途中まで打って［Tab］を押すと、名前を補ってくれる。", pic: "move" },
  { cmd: "cd ..", name: "ひとつ戻る", desc: "ひとつ外側のフォルダに戻る。点は2つ。", pic: "up", copy: true },
  { cmd: "mkdir 名前", name: "フォルダを作る", desc: "新しいフォルダを作る。名前は半角英数字にしておくと安心。", pic: "make" },
  { cmd: "open .", name: "窓で開く", desc: "いるフォルダを、いつもの窓（Finder）で開く。点は「ここ」という意味。", win: "Windows は `start .`", pic: "open", copy: true },
  { cmd: "clear", name: "画面をきれいに", desc: "画面の文字を消して、すっきりさせる。ファイルは消えない。", win: "Windows は `cls` でもよい。", pic: "clear", copy: true },
  { cmd: "↑  /  Tab", name: "楽をするキー", desc: "［↑］で前に打った命令を呼び出す。［Tab］で名前の続きを補う。打ち間違いが減る。", pic: "keys" },
];

/** ターミナルで公開する（Vercel CLI） */
export const DEPLOY_STEPS = [
  {
    title: "サイトのフォルダに移る",
    body: "`cd` と打って、半角スペースを1つ。サイトのフォルダを、窓からドラッグして落とす。場所が入ったら［Enter］。",
    tip: "`ls` を打って、`index.html` や `package.json` が見えれば正しい場所。",
  },
  {
    title: "ためしに公開する（プレビュー）",
    body: "`npx vercel` と打つ。はじめてなら、ブラウザでログインを求められる。質問にはたいてい［Enter］で進めてよい。",
    tip: "Node.js が入っていないと `npx` が動かない。https://nodejs.org から LTS 版を入れる。",
  },
  {
    title: "URLを開いて確かめる",
    body: "最後に出た `https://〜.vercel.app` を開く。スマホでも見てみる。",
  },
  {
    title: "本番に出す",
    body: "よければ `npx vercel --prod` と打つ。これで本番のURLが新しくなる。",
    warn: "いちばん最初の1回だけは、`--prod` を付けなくても本番扱いになる。2回目からは、付けたときだけ本番。",
  },
];

/** git の流れ */
export const GIT_FLOW = [
  { cmd: "git add index.html", name: "選ぶ", desc: "記録するファイルを選ぶ", icon: "check" },
  { cmd: 'git commit -m "見出しを直した"', name: "セーブ", desc: "メモをつけて記録する", icon: "star" },
  { cmd: "git push", name: "送る", desc: "GitHub に送る。つないだ公開サービスが自動で更新", icon: "rocket" },
] as const;

/** Claude Code のインストール */
export const INSTALLS = [
  { id: "mac", label: "Mac・Linux", cmd: "curl -fsSL https://claude.ai/install.sh | bash", note: "ターミナルに貼って［Enter］。" },
  { id: "win", label: "Windows", cmd: "irm https://claude.ai/install.ps1 | iex", note: "PowerShell に貼って［Enter］。Git for Windows も入れておくと、できることが増える。" },
  { id: "brew", label: "Homebrew", cmd: "brew install --cask claude-code", note: "Mac で Homebrew を使っている人向け。" },
  { id: "winget", label: "WinGet", cmd: "winget install Anthropic.ClaudeCode", note: "Windows で WinGet を使っている人向け。" },
] as const;

/** Claude Code を使える場所 */
export const CLAUDE_PLACES = [
  { name: "ターミナル", sub: "`claude` と打つ", icon: "terminal", terminal: true },
  { name: "デスクトップ◆アプリ", sub: "［Code］タブ", icon: "pc", terminal: false },
  { name: "Web版", sub: "claude.ai/code", icon: "globe", terminal: false },
  { name: "VS Code", sub: "拡張機能", icon: "slash", terminal: false },
] as const;

/** Claude Code のキー操作 */
export const CLAUDE_KEYS = [
  { keys: ["Esc"], desc: "AIの作業をとめる。" },
  { keys: ["Shift", "Tab"], desc: "モードを切りかえる。毎回聞く・編集はおまかせ・計画だけ（Plan）・自動（Auto）など。" },
  { keys: ["@"], desc: "続けてファイル名を打つと、そのファイルを見せられる。" },
  { keys: ["/"], desc: "コマンドの一覧が出る。", link: "/commands" },
  { keys: ["Shift", "Enter"], desc: "送らずに改行する。" },
] as const;

/** こわくないためのルール */
export const RULES = [
  { title: "意味がわからない命令は、打たない", body: "ネットで見つけた命令も、まずAIに、何をする命令か聞いてみる。", pic: "question" },
  { title: "`sudo` と `rm -rf` は、とくに注意", body: "`sudo` は管理者の力で動かす。`rm -rf` は確認なしで消す。ゴミ箱にも残らない。", pic: "danger" },
  { title: "エラーは、そのままAIに貼る", body: "赤い文字や英語の文は、読めなくて大丈夫。まるごとコピーして、AIに渡す。", pic: "paste" },
  { title: "止めたいときは［Ctrl］＋［C］", body: "動きっぱなしで止まらないときは、これ。Mac でも ⌘ ではなく Ctrl。", pic: "stop" },
] as const;
