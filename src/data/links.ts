/**
 * 参考リンク集（/links）。
 * すべて 2026年10月13日に実際に開いて、内容・日本語の有無・無料かを確かめたもの。
 * 開けなかったサイト（OpenAI のヘルプなど、アクセスが拒否されたもの）は載せていない。
 * 移転していたURLは、最後にたどり着いたURLを書いている。
 */
export const LINKS_CHECKED = "2026年10月13日";

export type LinkItem = {
  category: string;
  name: string;
  url: string;
  desc: string;
  lang: "日本語" | "英語" | "日本語あり";
  cost: "無料" | "無料あり（有料プランも）" | "有料";
  note?: string;
};

export const LINK_CATS: { id: string; label: string; lead: string }[] = [
  { id: "official", label: "公式の手引き", lead: "まず正しい情報を見たいとき。各社が自分で書いているページです。" },
  { id: "skills", label: "スキル・プロンプトの配布", lead: "AIへの頼み方や、作業の手順そのものを配っているところ。" },
  { id: "hosting", label: "公開サービスの手引き", lead: "サイトを置く場所の、公式の説明。困ったときの一次情報。" },
  { id: "learn", label: "学習・入門", lead: "HTML・CSS・JavaScript を、基礎から学びたい人へ。" },
  { id: "design", label: "デザインの素材と道具", lead: "配色、フォント、アイコン、写真。使ってよい条件も確かめました。" },
  { id: "news", label: "新しい情報を追う", lead: "AIは毎月変わります。公式のお知らせを見るのがいちばん早いです。" },
];

export const LINKS: LinkItem[] = [
  // ---------- 公式の手引き ----------
  {
    category: "official",
    name: "Claude Code 公式ドキュメント",
    url: "https://code.claude.com/docs/ja/overview",
    desc: "Claude Code の入れ方と使い方を、日本語で。",
    lang: "日本語",
    cost: "無料",
    note: "このサイトのコマンド一覧も、ここを元にしています。",
  },
  {
    category: "official",
    name: "Claude ヘルプセンター",
    url: "https://support.claude.com/ja/",
    desc: "料金、プラン、困ったときのQ&A。",
    lang: "日本語",
    cost: "無料",
  },
  {
    category: "official",
    name: "Gemini アプリ ヘルプ",
    url: "https://support.google.com/gemini/?hl=ja",
    desc: "Gemini の使い方と、よくある質問への公式の答え。",
    lang: "日本語",
    cost: "無料",
  },
  {
    category: "official",
    name: "Cursor 公式ドキュメント",
    url: "https://cursor.com/docs",
    desc: "AIエディタ Cursor の使い方と、選べるモデルの一覧。",
    lang: "英語",
    cost: "無料",
  },
  {
    category: "official",
    name: "OpenAI 開発者向けドキュメント",
    url: "https://developers.openai.com/",
    desc: "ChatGPT と Codex の、公式の資料の入口。",
    lang: "英語",
    cost: "無料",
    note: "読むのは無料。APIを使うとお金がかかります。",
  },
  {
    category: "official",
    name: "Claude Platform ドキュメント",
    url: "https://platform.claude.com/docs/ja/home",
    desc: "自分のアプリに Claude を組みこむための資料。",
    lang: "日本語",
    cost: "無料",
    note: "初心者には少し難しめです。",
  },

  // ---------- スキル・プロンプトの配布 ----------
  {
    category: "skills",
    name: "Skillry",
    url: "https://skillry.dev/",
    desc: "AIに作業手順を覚えさせる「スキル」の配布サイト。",
    lang: "英語",
    cost: "無料あり（有料プランも）",
    note: "Claude Code・Codex・Cursor などで使えます。",
  },
  {
    category: "skills",
    name: "Agent Skills（Anthropic 公式）",
    url: "https://github.com/anthropics/skills",
    desc: "Claude 用スキルの、公式の見本と作り方。",
    lang: "英語",
    cost: "無料",
    note: "ライセンスは、使う前に各スキルで確かめます。",
  },
  {
    category: "skills",
    name: "プロンプトの書き方ガイド",
    url: "https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/claude-prompting-best-practices",
    desc: "うまく頼むコツを、公式がまとめたもの。",
    lang: "日本語",
    cost: "無料",
  },
  {
    category: "skills",
    name: "Claude Cookbooks",
    url: "https://github.com/anthropics/claude-cookbooks",
    desc: "Claude を使った作例のコード集（公式）。",
    lang: "英語",
    cost: "無料",
    note: "Python が中心です。",
  },

  // ---------- 公開サービスの手引き ----------
  {
    category: "hosting",
    name: "Vercel Docs",
    url: "https://vercel.com/docs",
    desc: "GitHub に送るだけで公開される仕組みの説明。",
    lang: "英語",
    cost: "無料",
  },
  {
    category: "hosting",
    name: "Netlify Docs",
    url: "https://docs.netlify.com/",
    desc: "ドラッグで公開する方法と、独自ドメインの設定。",
    lang: "英語",
    cost: "無料",
  },
  {
    category: "hosting",
    name: "GitHub Pages ドキュメント",
    url: "https://docs.github.com/ja/pages",
    desc: "リポジトリを、そのままサイトとして公開する。",
    lang: "日本語",
    cost: "無料",
  },
  {
    category: "hosting",
    name: "GitHub Desktop ドキュメント",
    url: "https://docs.github.com/ja/desktop",
    desc: "コマンドを打たずに、Git をボタンで使うアプリ。",
    lang: "日本語",
    cost: "無料",
  },
  {
    category: "hosting",
    name: "Cloudflare Pages ドキュメント",
    url: "https://developers.cloudflare.com/pages/",
    desc: "Cloudflare でサイトを公開する手順。",
    lang: "英語",
    cost: "無料",
    note: "新しく作るなら Workers を勧める告知が出ています。",
  },

  // ---------- 学習・入門 ----------
  {
    category: "learn",
    name: "MDN ウェブ開発の学習",
    url: "https://developer.mozilla.org/ja/docs/Learn_web_development",
    desc: "HTML・CSS・JavaScript を順番に学べる定番。",
    lang: "日本語",
    cost: "無料",
  },
  {
    category: "learn",
    name: "web.dev Learn",
    url: "https://web.dev/learn?hl=ja",
    desc: "Google が作った、Web制作の無料講座。",
    lang: "日本語",
    cost: "無料",
  },
  {
    category: "learn",
    name: "JavaScript Primer",
    url: "https://jsprimer.net/",
    desc: "日本語で基礎から学べる、JavaScript の入門書。",
    lang: "日本語",
    cost: "無料",
    note: "紙の本もあります（こちらは有料）。",
  },
  {
    category: "learn",
    name: "現代の JavaScript チュートリアル",
    url: "https://ja.javascript.info/",
    desc: "ブラウザの操作まで扱う、日本語の教科書。",
    lang: "日本語",
    cost: "無料",
  },
  {
    category: "learn",
    name: "Progate",
    url: "https://progate.com/",
    desc: "ブラウザだけで、書いて動かして学べる。",
    lang: "日本語",
    cost: "無料あり（有料プランも）",
    note: "無料は入門部分まで。",
  },

  // ---------- デザインの素材と道具 ----------
  {
    category: "design",
    name: "Coolors",
    url: "https://coolors.co/",
    desc: "配色をその場で作って、見くらべられる。",
    lang: "英語",
    cost: "無料あり（有料プランも）",
    note: "決めた色のコードを、AIに渡すと早いです。",
  },
  {
    category: "design",
    name: "Google Fonts",
    url: "https://fonts.google.com/",
    desc: "商用でも無料のフォントを探して、サイトに入れる。",
    lang: "英語",
    cost: "無料",
    note: "日本語の書体もあります。",
  },
  {
    category: "design",
    name: "Lucide",
    url: "https://lucide.dev/",
    desc: "線で描かれたアイコン集。商用でも使える。",
    lang: "英語",
    cost: "無料",
    note: "著作権の表示を、ファイルに残して使います。",
  },
  {
    category: "design",
    name: "Unsplash",
    url: "https://unsplash.com/ja",
    desc: "商用でも使える、無料の写真素材。",
    lang: "日本語あり",
    cost: "無料あり（有料プランも）",
    note: "写真をそのまま売ることはできません。",
  },
  {
    category: "design",
    name: "Pexels",
    url: "https://www.pexels.com/ja-jp/",
    desc: "商用でも使える、無料の写真と動画。出典の表示も不要。",
    lang: "日本語",
    cost: "無料",
    note: "加工せずに売ることはできません。",
  },
  {
    category: "design",
    name: "unDraw",
    url: "https://undraw.co/illustrations",
    desc: "色を変えて使える、商用可のイラスト素材。",
    lang: "英語",
    cost: "無料",
    note: "AIの学習に使うことは禁止されています。",
  },

  // ---------- 新しい情報を追う ----------
  {
    category: "news",
    name: "Claude 公式のお知らせ",
    url: "https://claude.com/resources/articles",
    desc: "新しいモデルや機能のお知らせと、使い方の記事。",
    lang: "日本語あり",
    cost: "無料",
    note: "記事の本文は英語が多めです。",
  },
  {
    category: "news",
    name: "Claude Code の更新履歴",
    url: "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
    desc: "どのバージョンで何が変わったかの一覧。",
    lang: "英語",
    cost: "無料",
    note: "とても長いので、上のほうだけ見ます。",
  },
  {
    category: "news",
    name: "Claude Platform リリースノート",
    url: "https://platform.claude.com/docs/ja/release-notes/overview",
    desc: "モデルや機能の更新を、日付順に。",
    lang: "日本語",
    cost: "無料",
  },
  {
    category: "news",
    name: "Google Japan Blog",
    url: "https://blog.google/intl/ja-jp/",
    desc: "Gemini など、Google の新しい発表を日本語で。",
    lang: "日本語",
    cost: "無料",
  },
  {
    category: "news",
    name: "Vercel Changelog",
    url: "https://vercel.com/changelog",
    desc: "公開サービス側の仕様変更がわかる更新履歴。",
    lang: "英語",
    cost: "無料",
  },
];
