/**
 * 用語集。
 * mean … 一言でいうと（1〜2文）
 * like … たとえ・使う場面（なくてもよい）
 * 文は短く。「、」「。」で折れるので、長い1文を作らない。
 */
export type WordGroup = "web" | "design" | "ai";

export type Word = {
  term: string;
  read: string;
  group: WordGroup;
  mean: string;
  like?: string;
};

export const GROUPS: { id: WordGroup; label: string; lead: string }[] = [
  { id: "web", label: "HP・公開", lead: "サイトをネットに出すときの言葉。" },
  { id: "design", label: "デザイン", lead: "見た目を直してもらうときの言葉。" },
  { id: "ai", label: "AI・道具", lead: "AIと道具まわりの言葉。" },
];

export const WORDS: Word[] = [
  // ---------- HP・公開 ----------
  {
    term: "ローカル",
    read: "local",
    group: "web",
    mean: "自分のパソコンの中のこと。ここにあるサイトは、自分にしか見えない。",
    like: "机の引き出しにしまった原稿。",
  },
  {
    term: "公開（デプロイ）",
    read: "deploy",
    group: "web",
    mean: "作ったファイルを、ネット上の置き場所にコピーして、誰でも見られるようにすること。",
    like: "原稿を印刷して、本屋に並べること。",
  },
  {
    term: "ホスティング",
    read: "hosting",
    group: "web",
    mean: "サイトのファイルを預かって、24時間ネットに出しておいてくれるサービス。",
    like: "Netlify、Vercel、Cloudflare Pages、GitHub Pages など。",
  },
  {
    term: "サーバー",
    read: "server",
    group: "web",
    mean: "ネットにつながりっぱなしのコンピューター。見に来た人にページを渡す係。",
  },
  {
    term: "URL",
    read: "ユーアールエル",
    group: "web",
    mean: "ページの住所。https:// から始まる文字列。",
    like: "これを送れば、相手は同じページを開ける。",
  },
  {
    term: "ドメイン",
    read: "domain",
    group: "web",
    mean: "URLの中の「example.com」の部分。自分だけの名前を買うこともできる。",
    like: "お店の看板の名前。",
  },
  {
    term: "サブドメイン",
    read: "subdomain",
    group: "web",
    mean: "ドメインの前に付く名前。「mysite.vercel.app」の「mysite」。無料サービスではこれを選んで使う。",
  },
  {
    term: "独自ドメイン",
    read: "custom domain",
    group: "web",
    mean: "お金を払って手に入れる、自分だけのドメイン。あとからホスティングにつなげられる。",
  },
  {
    term: "HTTPS",
    read: "エイチティーティーピーエス",
    group: "web",
    mean: "通信を暗号化するしくみ。URLの横に鍵のマークが出る。いまのホスティングは自動で付けてくれる。",
  },
  {
    term: "index.html",
    read: "インデックス",
    group: "web",
    mean: "サイトの玄関になるファイル。URLを開くと、最初にこれが表示される。",
    like: "名前が違うと「ページが見つからない」になりやすい。",
  },
  {
    term: "HTML",
    read: "エイチティーエムエル",
    group: "web",
    mean: "ページの中身と骨組みを書くファイル。見出し、文章、画像の場所を決める。",
  },
  {
    term: "CSS",
    read: "シーエスエス",
    group: "web",
    mean: "見た目を決めるファイル。色、文字の大きさ、並べ方を書く。",
  },
  {
    term: "JavaScript",
    read: "ジャバスクリプト（JS）",
    group: "web",
    mean: "ページを動かすプログラム。ボタンを押したら何かが起きる、を作る。",
  },
  {
    term: "静的サイト",
    read: "static site",
    group: "web",
    mean: "HTML・CSS・JS・画像だけでできたサイト。フォルダを置くだけで公開できる。",
    like: "いちばん公開しやすい形。",
  },
  {
    term: "フレームワーク",
    read: "framework",
    group: "web",
    mean: "サイトを作るための土台。React、Next.js、Vite など。これで作ると、公開の前に「ビルド」が要る。",
  },
  {
    term: "package.json",
    read: "パッケージ・ジェイソン",
    group: "web",
    mean: "フレームワークで作ったときにできる、道具の一覧表。これがあれば「ビルドが要るサイト」。",
  },
  {
    term: "ビルド",
    read: "build",
    group: "web",
    mean: "作業用のファイルを、公開用のファイルに組み立てる作業。できあがりは dist や out、build というフォルダに入る。",
    like: "Vercel や Netlify は、GitHub とつなぐと自動でやってくれる。",
  },
  {
    term: "node_modules",
    read: "ノード・モジュールズ",
    group: "web",
    mean: "道具の部品が大量に入ったフォルダ。とても重い。アップロードしてはいけない。",
  },
  {
    term: "Git",
    read: "ギット",
    group: "web",
    mean: "ファイルの変更を記録していくしくみ。いつ何を変えたか、あとから戻れる。",
  },
  {
    term: "GitHub",
    read: "ギットハブ",
    group: "web",
    mean: "Gitの記録ごとファイルを預けるサイト。ここに置くと、ホスティングが自動で公開してくれる。",
  },
  {
    term: "GitHub Desktop",
    read: "ギットハブ・デスクトップ",
    group: "web",
    mean: "GitHubをボタンで使えるアプリ。ターミナルを使わずに、ファイルをGitHubへ送れる。",
  },
  {
    term: "リポジトリ",
    read: "repository",
    group: "web",
    mean: "GitHubの中の、1つのプロジェクト用の箱。サイト1つにつき1つ作る。",
  },
  {
    term: "コミット",
    read: "commit",
    group: "web",
    mean: "「ここまで変えました」と記録すること。メモを1行つける。",
    like: "ゲームのセーブ。",
  },
  {
    term: "プッシュ",
    read: "push",
    group: "web",
    mean: "手元の記録を、GitHubに送ること。送ると、つないだホスティングが自動で公開しなおす。",
  },
  {
    term: "ブランチ",
    read: "branch",
    group: "web",
    mean: "本番とは別の、ためし書き用の道。慣れるまでは使わなくてもいい。",
  },
  {
    term: "環境変数",
    read: "environment variable（.env）",
    group: "web",
    mean: "APIキーなどの秘密を、コードとは別に置く場所。ホスティングの設定画面に入れる。",
    like: ".env ファイルは、GitHub に上げない。",
  },
  {
    term: "APIキー",
    read: "API key",
    group: "web",
    mean: "外のサービスを使うための合言葉。人に見られると、勝手に使われてお金がかかることがある。",
  },
  {
    term: "404",
    read: "ヨンマルヨン",
    group: "web",
    mean: "「そのページは見つかりません」の番号。ファイル名や場所が違うと出る。",
  },
  {
    term: "キャッシュ",
    read: "cache",
    group: "web",
    mean: "前に見たページを、ブラウザが覚えておくこと。直したのに変わらないときは、これを疑う。",
    like: "再読み込みで直ることが多い。",
  },
  {
    term: "OGP",
    read: "オージーピー",
    group: "web",
    mean: "URLをLINEやSNSに貼ったときに出る、画像とタイトルの設定。",
  },
  {
    term: "ファビコン",
    read: "favicon",
    group: "web",
    mean: "ブラウザのタブに出る、小さなアイコン。",
  },
  {
    term: "SEO",
    read: "エスイーオー",
    group: "web",
    mean: "検索で見つけてもらいやすくする工夫。タイトルと説明文をちゃんと書くのが第一歩。",
  },
  {
    term: "noindex",
    read: "ノーインデックス",
    group: "web",
    mean: "「検索に載せないで」という印。公開したのに検索に出ないときは、これが残っていないか見る。",
  },

  // ---------- デザイン ----------
  {
    term: "ファーストビュー",
    read: "first view",
    group: "design",
    mean: "ページを開いて、スクロールせずに見える範囲。ここで何のサイトか伝わるかが大事。",
  },
  {
    term: "ヒーロー",
    read: "hero",
    group: "design",
    mean: "ページのいちばん上の、大きな見出しや写真の場所。",
  },
  {
    term: "ヘッダー",
    read: "header",
    group: "design",
    mean: "ページの上の帯。サイト名やメニューが入る。",
  },
  {
    term: "フッター",
    read: "footer",
    group: "design",
    mean: "ページの下の帯。連絡先やリンクが入る。",
  },
  {
    term: "ナビゲーション",
    read: "navigation",
    group: "design",
    mean: "ほかのページへ行くためのメニュー。",
  },
  {
    term: "ハンバーガーメニュー",
    read: "hamburger menu",
    group: "design",
    mean: "三本線のボタン。押すとメニューが開く。スマホでよく使う。",
  },
  {
    term: "CTA",
    read: "シーティーエー",
    group: "design",
    mean: "「申し込む」「買う」など、いちばん押してほしいボタン。",
    like: "目立つ色で、1画面に1つが基本。",
  },
  {
    term: "レスポンシブ",
    read: "responsive",
    group: "design",
    mean: "スマホでもパソコンでも、画面の幅に合わせて並びが変わること。",
  },
  {
    term: "ブレークポイント",
    read: "breakpoint",
    group: "design",
    mean: "レイアウトを切り替える画面の幅。「640pxより狭いときは縦に並べる」など。",
  },
  {
    term: "余白",
    read: "margin / padding",
    group: "design",
    mean: "何も置かない空間。増やすと、落ち着いて読みやすくなる。",
    like: "margin は外側の余白、padding は内側の余白。",
  },
  {
    term: "グリッド",
    read: "grid",
    group: "design",
    mean: "見えないマス目。これにそろえて並べると、整って見える。",
  },
  {
    term: "カラム",
    read: "column",
    group: "design",
    mean: "縦の列。「3カラム」は3列に並べること。",
  },
  {
    term: "カード",
    read: "card",
    group: "design",
    mean: "角の丸い四角に、画像・見出し・説明をまとめた部品。",
  },
  {
    term: "モーダル",
    read: "modal",
    group: "design",
    mean: "画面の上に重なって出る小窓。閉じるまで後ろは触れない。",
  },
  {
    term: "アコーディオン",
    read: "accordion",
    group: "design",
    mean: "押すと中身が開いたり閉じたりする部品。よくある質問に使う。",
  },
  {
    term: "タブ",
    read: "tab",
    group: "design",
    mean: "見出しを押して、表示する中身を切り替える部品。",
  },
  {
    term: "トーン＆マナー",
    read: "トンマナ",
    group: "design",
    mean: "サイト全体の雰囲気のルール。色、文字、写真の感じをそろえること。",
  },
  {
    term: "カラーパレット",
    read: "color palette",
    group: "design",
    mean: "サイトで使う色を、決めて並べたもの。3〜5色くらいに絞ると、まとまって見える。",
  },
  {
    term: "メインカラー／アクセントカラー",
    read: "main / accent",
    group: "design",
    mean: "いちばん多く使う色と、目立たせたい所だけに使う色。",
  },
  {
    term: "カラーコード",
    read: "#ffffff",
    group: "design",
    mean: "色を表す記号。「#」のあとに6文字。AIに色を伝えるときに便利。",
  },
  {
    term: "コントラスト",
    read: "contrast",
    group: "design",
    mean: "文字と背景の色の差。差が小さいと読みにくい。",
  },
  {
    term: "フォント",
    read: "font",
    group: "design",
    mean: "文字の形のデザイン。ゴシック体、明朝体、丸ゴシックなど。",
  },
  {
    term: "ウェイト",
    read: "weight",
    group: "design",
    mean: "文字の太さ。細い、ふつう、太い。",
  },
  {
    term: "行間",
    read: "line-height",
    group: "design",
    mean: "行と行のあいだ。日本語は広め（文字の1.7〜2倍）が読みやすい。",
  },
  {
    term: "字間",
    read: "letter-spacing",
    group: "design",
    mean: "文字と文字のあいだ。見出しは少し詰めると締まって見える。",
  },
  {
    term: "タイポグラフィ",
    read: "typography",
    group: "design",
    mean: "文字の選び方と並べ方のデザイン全体。",
  },
  {
    term: "ジャンプ率",
    read: "ジャンプりつ",
    group: "design",
    mean: "見出しと本文の大きさの差。差が大きいと元気に、小さいと落ち着いて見える。",
  },
  {
    term: "アイコン",
    read: "icon",
    group: "design",
    mean: "意味を小さな絵で表したもの。",
  },
  {
    term: "ホバー",
    read: "hover",
    group: "design",
    mean: "マウスを重ねたときの変化。スマホには無いので、それだけに頼らない。",
  },
  {
    term: "アニメーション",
    read: "animation",
    group: "design",
    mean: "動きの演出。やりすぎると重く、酔いやすくなる。",
  },
  {
    term: "ワイヤーフレーム",
    read: "wireframe",
    group: "design",
    mean: "色を付ける前の、配置だけを描いた設計図。",
  },
  {
    term: "モックアップ",
    read: "mockup",
    group: "design",
    mean: "完成に近い見た目の見本。まだ動かない。",
  },
  {
    term: "UI／UX",
    read: "ユーアイ／ユーエックス",
    group: "design",
    mean: "UIは画面の見た目と操作の部品。UXは使ってみた体験のすべて。",
  },
  {
    term: "アクセシビリティ",
    read: "accessibility",
    group: "design",
    mean: "目や手が不自由な人も含めて、誰でも使えるようにすること。",
    like: "画像に説明文を付ける、文字を小さくしすぎない、など。",
  },
  {
    term: "フラットデザイン",
    read: "flat design",
    group: "design",
    mean: "影や立体感を使わない、平らなデザイン。",
  },
  {
    term: "ミニマル",
    read: "minimal",
    group: "design",
    mean: "要素を減らして、余白を多くとったデザイン。",
  },
  {
    term: "ダークモード",
    read: "dark mode",
    group: "design",
    mean: "黒っぽい背景に白い文字の配色。",
  },

  // ---------- AI・道具 ----------
  {
    term: "プロンプト",
    read: "prompt",
    group: "ai",
    mean: "AIへのお願いの文章。何を、どんなふうに、を具体的に書くほど思いどおりになる。",
  },
  {
    term: "ターミナル",
    read: "terminal",
    group: "ai",
    mean: "文字を打ってパソコンに命令する画面。黒い画面。このサイトの手順では使わない。",
  },
  {
    term: "Claude Code",
    read: "クロード・コード",
    group: "ai",
    mean: "ファイルを読んで、書いて、動かすところまでやってくれるAI。デスクトップアプリやブラウザからも使える。",
  },
  {
    term: "スラッシュコマンド",
    read: "slash command",
    group: "ai",
    mean: "「/」で始まる短い命令。AIへのお願いではなく、道具そのものを操作する。",
    like: "/clear で会話をリセット、など。",
  },
  {
    term: "コンテキスト",
    read: "context",
    group: "ai",
    mean: "AIがいま覚えている会話とファイルの量。多すぎると、前の話を忘れやすくなる。",
  },
  {
    term: "CLAUDE.md",
    read: "クロード・エムディー",
    group: "ai",
    mean: "プロジェクトのルールを書いておくメモ。AIが毎回はじめに読む。",
  },
  {
    term: "MCP",
    read: "エムシーピー",
    group: "ai",
    mean: "AIを、ほかのサービス（カレンダーやデザインツールなど）とつなぐしくみ。",
  },
  {
    term: "エラーメッセージ",
    read: "error message",
    group: "ai",
    mean: "うまくいかなかった理由が書かれた文。英語でも、そのままAIに貼れば読んでくれる。",
  },
  {
    term: "マークダウン",
    read: "Markdown（.md）",
    group: "ai",
    mean: "「#」で見出し、「-」で箇条書き、のように記号で書く文章の形式。AIの返事によく使われる。",
  },
  {
    term: "スクリーンショット",
    read: "screenshot",
    group: "ai",
    mean: "画面を画像にしたもの。見た目の相談は、文章よりこれを渡すほうが早い。",
    like: "Mac は ⌘ + Shift + 4、Windows は Windows + Shift + S。",
  },
];
