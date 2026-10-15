/**
 * 公開のしかた。
 * 画面のボタン名は 2026年9月に各社の公式ドキュメントで確かめたもの。
 * 文中の印： ［ボタン名］ / `ファイル名` / ◆◇（改行）
 */

export type Step = { title: string; body: string; tip?: string; warn?: string; visual?: string };

export type Route = {
  id: "a" | "b" | "c";
  name: string;
  catch: string;
  time: string;
  fit: string[];
  notFit: string[];
  need: string[];
  steps: Step[];
  update?: Step[];
};

export const ROUTES: Route[] = [
  {
    id: "a",
    name: "ドラッグで置く",
    catch: "フォルダをブラウザに落とすだけ。いちばん早い。",
    time: "5〜10分",
    fit: ["HTML・CSS・画像だけでできている", "まず誰かに見せてみたい"],
    notFit: ["package.json がある（ビルドが要る）", "APIキーを使っている"],
    need: ["Netlify のアカウント（無料）"],
    steps: [
      {
        title: "Netlify に登録する", visual: "signup",
        body: "https://app.netlify.com を開いて、［Sign up］から登録する。GitHub か Google のアカウントで登録すると早い。",
        warn: "ログインせずに置くこともできる。でもそのサイトはパスワード付きになって、1時間ほどで消える。先に登録しておく。",
      },
      {
        title: "置き場所のページを開く",
        body: "ログインしたまま https://app.netlify.com/drop を開く。点線で囲まれた、ファイルを落とす枠が出る。",
      },
      {
        title: "フォルダをまるごと落とす", visual: "drop",
        body: "Finder（Windows はエクスプローラー）で、サイトのフォルダを選ぶ。そのまま点線の枠までドラッグして、手を離す。",
        tip: "落とすのは `index.html` が「すぐ中に」あるフォルダ。その1つ外側のフォルダを落とすと、ページが見つからなくなる。",
      },
      {
        title: "URLが出たら完成", visual: "done-netlify",
        body: "数秒待つと `〇〇〇.netlify.app` というURLが出る。押して、ちゃんと表示されるか見る。スマホでも開いてみる。",
      },
      {
        title: "名前を変える（してもしなくてもいい）",
        body: "URLは最初ランダムな英単語になっている。サイトの設定から、好きな名前に変えられる。",
      },
    ],
    update: [
      {
        title: "直したフォルダを、もう一度落とす", visual: "redrop",
        body: "Netlify でそのサイトを開き、［Deploys］のページを開く。下のほうにある枠に、直したフォルダをドラッグする。同じURLのまま、中身が新しくなる。",
      },
    ],
  },
  {
    id: "b",
    name: "GitHub につないで自動で公開",
    catch: "最初だけ少し手間。そのあとは、ボタン2つで何度でも更新できる。",
    time: "30分くらい（最初の1回）",
    fit: [
      "何度も直して、更新していきたい",
      "package.json がある（React・Next.js・Vite など）",
      "APIキーを使っている",
    ],
    notFit: ["とにかく今すぐ、一度だけ見せたい"],
    need: ["GitHub のアカウント（無料）", "GitHub Desktop（無料のアプリ）", "Vercel のアカウント（無料）"],
    steps: [
      {
        title: "上げてはいけないものを確かめる", visual: "gitignore",
        body: "フォルダの中に `.env` や、APIキーを書いたファイルがないか見る。あれば、AIに「GitHubに上げても大丈夫な状態にして」と頼む。",
        warn: "`node_modules` と `.env` は上げない。.gitignore というファイルに書いておけば、自動で外される。わからなければ、下の「プロンプト集」のお願い文を使う。",
      },
      {
        title: "GitHub に登録して、GitHub Desktop を入れる",
        body: "https://github.com でアカウントを作る。次に https://desktop.github.com から GitHub Desktop を入れて、同じアカウントでログインする。",
      },
      {
        title: "サイトのフォルダを GitHub Desktop に入れる", visual: "addrepo",
        body: "メニューの［File］→［Add local repository］を選ぶ。［Choose...］でサイトのフォルダを選んで、［Add repository］を押す。",
        tip: "「Git のリポジトリではありません」と出たら、その中の［create a repository］を押して、そのまま作る。",
      },
      {
        title: "GitHub に送る", visual: "publish",
        body: "上のほうにある［Publish repository］を押す。名前を決めて、もう一度［Publish Repository］を押す。",
        tip: "「非公開（private）」のままで大丈夫。コードは他人に見えず、Vercel からは公開できる。",
      },
      {
        title: "Vercel に登録する", visual: "vercel-signup",
        body: "https://vercel.com を開いて、［Sign Up］から［Continue with GitHub］で登録する。GitHub と同じアカウントでつながる。",
        warn: "Vercel の無料プラン（Hobby）は、個人の非商用だけ。お金を受け取るサイトや、広告を載せるサイトは有料プランか、ほかのサービスを使う。",
      },
      {
        title: "リポジトリを選んで公開する", visual: "import",
        body: "https://vercel.com/new を開く。さっき送ったリポジトリが一覧に出るので、選ぶ。設定はそのままで［Deploy］を押す。",
        tip: "一覧に出ないときは、GitHub へのアクセスを許可する画面が出ている。そのリポジトリを選んで許可する。",
      },
      {
        title: "APIキーを使っているなら、ここで入れる", visual: "env",
        body: "プロジェクトの［Settings］→［Environment Variables］を開く。`.env` に書いていた名前と値を、1つずつ入れて保存する。入れたら、もう一度公開しなおす。",
      },
      {
        title: "URLが出たら完成", visual: "done-vercel",
        body: "［Continue to Dashboard］などから、`〇〇〇.vercel.app` のURLを開く。スマホでも開いてみる。",
      },
    ],
    update: [
      {
        title: "ファイルを直す",
        body: "いつもどおり、AIなどでファイルを直して保存する。",
      },
      {
        title: "GitHub Desktop で記録する", visual: "commit",
        body: "GitHub Desktop を開くと、変わったファイルが左に並んでいる。左下の［Summary］に「見出しを直した」などと書いて、［Commit to main］を押す。",
      },
      {
        title: "送る", visual: "push",
        body: "上の［Push origin］を押す。1〜2分で、同じURLのサイトが自動で新しくなる。",
      },
    ],
  },
  {
    id: "c",
    name: "AI に手伝ってもらう",
    catch: "自分のフォルダが何でできているか、わからないときに。",
    time: "AIとの相談しだい",
    fit: [
      "フォルダの中身がよくわからない",
      "エラーが出て止まった",
      "Claude Code などのAIアプリを使っている",
    ],
    notFit: [],
    need: ["ファイルを読めるAI（Claude Code のデスクトップアプリなど）"],
    steps: [
      {
        title: "AIにフォルダを見せる", visual: "askai",
        body: "Claude Code のデスクトップアプリなら、サイトのフォルダを開いた状態で話しかける。ブラウザのAIなら、フォルダの中身の一覧か、スクリーンショットを渡す。",
      },
      {
        title: "下のお願い文をそのまま貼る",
        body: "「どのルートで公開できるか」「上げてはいけないものは何か」を、先に調べてもらう。",
      },
      {
        title: "言われた手順を、1つずつやる",
        body: "分からない言葉が出たら、用語集を引く。画面が違ったら、スクリーンショットを撮ってAIに見せる。",
        tip: "AIが「ターミナルで〇〇を実行して」と言ったら、「ターミナルを使わない方法で」と返してよい。",
      },
    ],
  },
];

/** ルートCで使うお願い文 */
export const AI_PROMPT = `このフォルダは、私が作ったWebサイトです。
インターネットに公開して、ほかの人がURLで見られるようにしたいです。
私はターミナルを使えません。ブラウザとアプリのボタン操作だけでできる方法を教えてください。

まず、次のことを調べて、やさしい言葉で教えてください。
1. このサイトは「フォルダを置くだけで公開できる」形ですか？それとも「ビルド」が必要ですか？
2. APIキーやパスワードなど、公開してはいけないものが入っていませんか？
3. Netlify Drop と、GitHub Desktop＋Vercel の、どちらが合っていますか？理由も一言で。

そのあと、画面のボタン名を書きながら、1ステップずつ手順を教えてください。
一度に全部ではなく、1つ終わったら次を教えてください。`;

/** 準備のチェック */
export const CHECKS: { title: string; body: string }[] = [
  {
    title: "玄関のファイルがあるか",
    body: "フォルダのすぐ中に `index.html` があるか見る。`Index.html` や `home.html` だと、トップが開かないことがある。",
  },
  {
    title: "ビルドが要る形か",
    body: "`package.json` があれば、ビルドが要る形。ルートB（GitHub＋Vercel）が向いている。",
  },
  {
    title: "秘密が入っていないか",
    body: "`.env` や、`sk-` などで始まる長い文字列（APIキー）がないか。公開すると、誰でも見られる。",
  },
  {
    title: "ファイル名が半角英数字か",
    body: "`写真 1.PNG` のような日本語・空白・大文字は、公開すると読み込めないことがある。`photo-1.png` のようにそろえる。",
  },
  {
    title: "パソコンの場所を指していないか",
    body: "画像の場所が `C:\\Users\\…` や `/Users/…` だと、ほかの人のパソコンでは出ない。`images/photo.png` のように、フォルダからの場所で書く。",
  },
];

/** ほかの置き場所 */
export const HOSTS: { name: string; how: string; good: string; care: string; url: string }[] = [
  {
    name: "Netlify Drop",
    how: "ドラッグ",
    good: "登録すれば、同じURLのまま置きなおせる。",
    care: "無料枠を使い切ると、翌月まで止まる。",
    url: "https://app.netlify.com/drop",
  },
  {
    name: "Vercel",
    how: "GitHub から",
    good: "push するたび自動で公開。ビルドも自動。",
    care: "無料プランは個人の非商用のみ。",
    url: "https://vercel.com/new",
  },
  {
    name: "Vercel Drop",
    how: "ドラッグ",
    good: "登録済みなら、落とすだけで公開。",
    care: "落とすたびに別のサイトになる。更新には向かない。",
    url: "https://vercel.com/drop",
  },
  {
    name: "Cloudflare Pages",
    how: "ドラッグ",
    good: "無料枠が広い。URLは 〇〇〇.pages.dev。",
    care: "1回に1,000ファイル、1ファイル25MBまで。",
    url: "https://dash.cloudflare.com",
  },
  {
    name: "GitHub Pages",
    how: "GitHub から",
    good: "GitHub だけで完結する。",
    care: "無料ではリポジトリを公開（public）にする必要がある。",
    url: "https://pages.github.com",
  },
];

/** 困ったとき */
export const TROUBLES: { q: string; a: string }[] = [
  {
    q: "開いたら「Page not found」「404」と出る",
    a: "`index.html` がフォルダのすぐ中にない。1つ外側のフォルダを落としていないか見る。ファイル名が小文字の `index.html` かも確かめる。",
  },
  {
    q: "真っ白なページしか出ない",
    a: "ビルドが要る形（`package.json` がある）を、そのまま置いた可能性が高い。ルートB で公開しなおす。",
  },
  {
    q: "画像だけ出ない",
    a: "ファイル名の大文字・小文字の違いか、画像の場所が自分のパソコンを指している。準備のチェック4と5を見る。",
  },
  {
    q: "直したのに、サイトが変わらない",
    a: "ブラウザが古いページを覚えている。Mac は ⌘ + Shift + R、Windows は Ctrl + F5 で再読み込みする。ルートB なら、［Push origin］まで押したかも見る。",
  },
  {
    q: "Vercel で「Build Failed」と赤く出る",
    a: "赤い画面の［Logs］を開いて、エラーの文をまるごとコピーする。AIに「Vercelでこのエラーが出た。ターミナルを使わずに直したい」と貼る。",
  },
  {
    q: "APIキーを上げてしまった",
    a: "まず、そのサービスの管理画面でキーを「削除（Revoke）」して、新しいキーを作る。ファイルを消すだけでは、記録に残っている。",
  },
  {
    q: "検索しても自分のサイトが出てこない",
    a: "公開してすぐは出ない。数日〜数週間かかる。ずっと出ないときは、AIに「noindex が入っていないか見て」と頼む。",
  },
];
