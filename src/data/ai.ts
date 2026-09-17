/**
 * AIの選び方。
 * 根拠: 各社の公式ページ・公式ドキュメント（2026年9月17日に確認）。
 * 料金は変わりやすいので「無料あり／有料は月$20〜」くらいの粒度にとどめる。
 * 確認できなかった値（v0 の有料プランの価格、Claude Max の段階など）は載せない。
 */
import type { Tone } from "@/lib/site";
import type { IconName } from "@/components/illust/Icons";

export const AI_CHECKED = "2026年9月17日";

export type AiType = "chat" | "nocode" | "editor" | "agent";

export const TYPES: {
  id: AiType;
  label: string;
  tone: Tone;
  icon: IconName;
  one: string;
  like: string;
  x: number; // 0=かんたん … 1=自由に作りこめる
  y: number; // 0=話して教わる … 1=おまかせで作ってくれる
}[] = [
  {
    id: "chat",
    label: "チャット型",
    tone: "sky",
    icon: "chat",
    one: "話しかけて、教わる・書いてもらう。",
    like: "なんでも聞ける先生。",
    x: 0.22,
    y: 0.22,
  },
  {
    id: "nocode",
    label: "ノーコード生成型",
    tone: "pink",
    icon: "spark",
    one: "ほしいものを書くと、画面ごと作って公開まで。",
    like: "注文するとできあがる工房。",
    x: 0.24,
    y: 0.78,
  },
  {
    id: "editor",
    label: "エディタ型",
    tone: "mint",
    icon: "pc",
    one: "コードを書く道具に、AIが住んでいる。",
    like: "となりに座る相棒。",
    x: 0.76,
    y: 0.3,
  },
  {
    id: "agent",
    label: "エージェント型",
    tone: "grape",
    icon: "robot",
    one: "フォルダを読んで、直して、動かすまで任せる。",
    like: "作業をまるごと頼める職人。",
    x: 0.78,
    y: 0.8,
  },
];

export type Tool = {
  id: string;
  name: string;
  maker: string;
  type: AiType;
  one: string;
  free: boolean;
  price: string;
  noTerminal: "yes" | "partly" | "no";
  easy: 1 | 2 | 3; // 初心者向き度（このサイトの評価）
  note?: string;
  url: string;
};

export const TOOLS: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    maker: "OpenAI",
    type: "chat",
    one: "いちばん身近なチャットAI。相談、文章、コードの下書きに。",
    free: true,
    price: "無料あり／有料は月$8〜",
    noTerminal: "yes",
    easy: 3,
    url: "https://chatgpt.com",
  },
  {
    id: "claude",
    name: "Claude",
    maker: "Anthropic",
    type: "chat",
    one: "長い文章やコードを読むのが得意。その場で動く画面（Artifacts）も作れる。",
    free: true,
    price: "無料あり／有料は月$20〜",
    noTerminal: "yes",
    easy: 3,
    url: "https://claude.ai",
  },
  {
    id: "gemini",
    name: "Gemini",
    maker: "Google",
    type: "chat",
    one: "Google のチャットAI。Google のサービスとつながる。",
    free: true,
    price: "無料あり／有料は月$4.99〜",
    noTerminal: "yes",
    easy: 3,
    url: "https://gemini.google",
  },
  {
    id: "notebook",
    name: "Gemini Notebook（旧 NotebookLM）",
    maker: "Google",
    type: "chat",
    one: "入れた資料だけをもとに答える。音声解説・スライド・クイズも作れる。",
    free: true,
    price: "無料あり（上限は時間ごとに回復）",
    noTerminal: "yes",
    easy: 3,
    url: "https://notebooklm.google",
  },
  {
    id: "v0",
    name: "v0",
    maker: "Vercel",
    type: "nocode",
    one: "チャットで画面を作って、そのまま Vercel に公開できる。",
    free: true,
    price: "無料あり（1日のメッセージ数に上限）",
    noTerminal: "yes",
    easy: 3,
    url: "https://v0.app",
  },
  {
    id: "lovable",
    name: "Lovable",
    maker: "Lovable",
    type: "nocode",
    one: "会話だけで、ログインやデータ保存つきのアプリまで作って公開。",
    free: true,
    price: "無料あり（1日5回まで）／有料は月$25〜",
    noTerminal: "yes",
    easy: 3,
    url: "https://lovable.dev",
  },
  {
    id: "bolt",
    name: "Bolt.new",
    maker: "StackBlitz",
    type: "nocode",
    one: "ブラウザの中で、作る・動かす・公開するが完結する。",
    free: true,
    price: "無料あり／有料は月$25〜",
    noTerminal: "yes",
    easy: 3,
    url: "https://bolt.new",
  },
  {
    id: "aistudio",
    name: "Google AI Studio",
    maker: "Google",
    type: "nocode",
    one: "Build モードで、話しながらアプリを作れる。作るだけなら無料。",
    free: true,
    price: "無料（公開後のAI利用は費用がかかることも）",
    noTerminal: "yes",
    easy: 2,
    url: "https://aistudio.google.com",
  },
  {
    id: "replit",
    name: "Replit",
    maker: "Replit",
    type: "nocode",
    one: "ブラウザの開発環境で、Agent がアプリを作って公開まで。",
    free: true,
    price: "無料あり（機能に制限）／有料は月$20〜",
    noTerminal: "yes",
    easy: 3,
    url: "https://replit.com",
  },
  {
    id: "cursor",
    name: "Cursor",
    maker: "Anysphere",
    type: "editor",
    one: "VS Code をもとにしたAIエディタ。自分のファイルを見ながら直せる。",
    free: true,
    price: "無料あり／有料は月$20〜",
    noTerminal: "yes",
    easy: 2,
    url: "https://cursor.com",
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    maker: "GitHub",
    type: "editor",
    one: "VS Code などに入れて使う。補完とチャットとエージェント。",
    free: true,
    price: "無料あり／有料は月$10〜",
    noTerminal: "yes",
    easy: 2,
    url: "https://github.com/features/copilot",
  },
  {
    id: "devin",
    name: "Devin Desktop（旧 Windsurf）",
    maker: "Cognition",
    type: "editor",
    one: "AIエディタ。2026年6月に Windsurf から名前が変わった。",
    free: true,
    price: "無料あり／有料は月$20〜",
    noTerminal: "yes",
    easy: 2,
    url: "https://devin.ai",
  },
  {
    id: "antigravity",
    name: "Google Antigravity",
    maker: "Google",
    type: "editor",
    one: "Google のAI開発ツール。個人プランは無料で始められる。",
    free: true,
    price: "個人プランは無料",
    noTerminal: "yes",
    easy: 2,
    url: "https://antigravity.google",
  },
  {
    id: "claudecode",
    name: "Claude Code",
    maker: "Anthropic",
    type: "agent",
    one: "フォルダを読んで、直して、動かす。デスクトップアプリならターミナル不要。",
    free: false,
    price: "有料プランのみ（月$20〜）",
    noTerminal: "partly",
    easy: 2,
    note: "無料プランでは使えない。",
    url: "https://code.claude.com",
  },
  {
    id: "codex",
    name: "Codex",
    maker: "OpenAI",
    type: "agent",
    one: "OpenAI のコーディングエージェント。アプリやクラウドでも使える。",
    free: true,
    price: "ChatGPT の無料プランにも含まれる",
    noTerminal: "partly",
    easy: 2,
    url: "https://learn.chatgpt.com/docs",
  },
  {
    id: "geminicli",
    name: "Gemini CLI",
    maker: "Google",
    type: "agent",
    one: "ターミナルで動くエージェント。個人アカウントでは、2026年6月に使えなくなった。",
    free: false,
    price: "個人アカウントは利用終了（企業ライセンスか有料APIキーのみ）",
    noTerminal: "no",
    easy: 1,
    note: "個人で使うなら、後継の Antigravity を選ぶ。",
    url: "https://github.com/google-gemini/gemini-cli",
  },
];

/** 目的から選ぶ */
export type Goal = "learn" | "quick" | "own" | "big";
export type Budget = "free" | "paid";
export type Term = "no" | "yes";

export const GOALS: { id: Goal; label: string }[] = [
  { id: "quick", label: "とにかく早く、形にして公開したい" },
  { id: "learn", label: "教わりながら、自分で作りたい" },
  { id: "own", label: "いま手元にあるフォルダを直したい" },
  { id: "big", label: "大きめのアプリを、じっくり作りたい" },
];

export function recommend(goal: Goal, budget: Budget, term: Term): { id: string; why: string }[] {
  if (goal === "quick")
    return [
      { id: "v0", why: "作った画面を、そのまま Vercel に公開できる。" },
      { id: budget === "paid" ? "lovable" : "bolt", why: "会話だけで、作る→公開まで終わる。" },
    ];
  if (goal === "learn")
    return [
      { id: "claude", why: "わからないことを、何度でも聞ける。" },
      { id: "chatgpt", why: "無料で始められて、情報も多い。" },
    ];
  if (goal === "own")
    return budget === "paid"
      ? [
          { id: "claudecode", why: term === "yes" ? "フォルダを読んで、直すところまでやってくれる。" : "デスクトップアプリなら、ターミナルなしで使える。" },
          { id: "cursor", why: "ファイルを見ながら、1か所ずつ直せる。" },
        ]
      : [
          { id: "codex", why: "ChatGPT の無料プランでも使える。" },
          { id: "cursor", why: "無料プランがあり、ファイルを見ながら直せる。" },
        ];
  return term === "yes"
    ? [
        { id: budget === "paid" ? "claudecode" : "antigravity", why: "たくさんのファイルを、まとめて任せられる。" },
        { id: "cursor", why: "AIの変更を、目で見て確かめられる。" },
      ]
    : [
        { id: budget === "paid" ? "claudecode" : "codex", why: "アプリの画面から、作業をまるごと頼める。" },
        { id: "replit", why: "ブラウザだけで、作る・動かす・公開するができる。" },
      ];
}

/** おすすめの組み合わせ */
export const COMBOS: { title: string; lead: string; steps: { tool: string; act: string; tone: Tone; icon: IconName }[] }[] = [
  {
    title: "最短コース",
    lead: "コードを見ずに、今日公開する。",
    steps: [
      { tool: "ChatGPT／Claude", act: "何を作るか相談", tone: "sky", icon: "chat" },
      { tool: "v0／Lovable", act: "画面を形にする", tone: "pink", icon: "spark" },
      { tool: "Vercel など", act: "そのまま公開", tone: "mint", icon: "rocket" },
    ],
  },
  {
    title: "手元で育てるコース",
    lead: "自分のフォルダで、何度も直していく。",
    steps: [
      { tool: "Claude Code アプリ／Cursor", act: "フォルダで作る", tone: "grape", icon: "folder" },
      { tool: "GitHub Desktop", act: "ボタンで送る", tone: "sun", icon: "github" },
      { tool: "Vercel", act: "自動で公開", tone: "mint", icon: "rocket" },
    ],
  },
  {
    title: "無料で試すコース",
    lead: "お金をかけずに、ひととおり体験。",
    steps: [
      { tool: "Gemini／ChatGPT", act: "HTMLを書いてもらう", tone: "sky", icon: "chat" },
      { tool: "パソコンに保存", act: "index.html にする", tone: "sun", icon: "folder" },
      { tool: "Netlify Drop", act: "ドラッグで公開", tone: "mint", icon: "rocket" },
    ],
  },
];
