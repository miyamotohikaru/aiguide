/**
 * ツールごとの詳しい説明（/ai/[id]）。
 * 根拠: 各社の公式サイト・公式ドキュメント・公式ヘルプ（2026年9月17日に確認）。
 * 「得意・苦手」「メリット・デメリット」は、その内容をもとにしたこのサイトの評価。
 * 確認できなかった機能（例: Claude の Styles の現状）は載せない。
 * bestFor は purposes.ts の id。thinking は「弱い→強い」の順に並べる。
 */
import type { ToolDetail } from "./ai-detail-types";
import { DETAILS_BUILDERS } from "./ai-details-builders";
import { DETAILS_BIG } from "./ai-details-big";

export const DETAILS: Record<string, ToolDetail> = {
  ...DETAILS_BUILDERS,
  ...DETAILS_BIG,
  claude: {
    strengths: [
      "長い文章を読んで、要点をまとめる。",
      "文章の下書き、言い換え、校正。",
      "Word・Excel・PowerPoint・PDFを作る。",
      "Web検索とResearchで、出典つきの調べもの。",
      "表・図・小さなアプリを、Artifactsで作る。",
    ],
    weaknesses: [
      "もっともらしい間違いを言うことがある。",
      "最新の情報は、検索をオンにしないとわからない。",
      "使える量に上限がある（時間がたつと回復）。",
      "読ませたファイルに隠れた指示に、操られる危険がある。",
    ],
    merits: [
      "無料でも、チャット・検索・ファイル作成が使える。",
      "Web・デスクトップ・スマホで、同じように使える。",
      "Projectsで、資料と指示をまとめて使い回せる。",
      "Memoryで、前の会話の流れを引き継げる。",
    ],
    demerits: [
      "Research・Cowork・Claude in Chrome は有料プランのみ。",
      "Researchや長い作業は、上限に早く届きやすい。",
      "いちばん上のモデルは、追加の利用枠が要る場合がある。",
      "Excel 連携は、マクロ（VBA）には対応していない。",
    ],
    modes: [
      { name: "モデル選択", what: "賢さ・速さ・使う量のバランスを選ぶ（Opus・Sonnet など）。", when: "難しい作業ほど、上のモデルにする。" },
      { name: "Web search", what: "最新のWebを調べて、出典をつけて答える。", when: "ニュースや、会社・サービスの最新情報。" },
      { name: "Research", what: "数分かけて何度も検索し、レポートにまとめる。", when: "比較や下調べを、しっかりやりたい（有料）。" },
      { name: "Projects", what: "資料と指示を置いておける、専用の作業場所。", when: "同じテーマで、何度も相談する。" },
      { name: "Artifacts", what: "文書・図・Webページ・小さなアプリを、横に表示する。", when: "作ったものを見ながら、直して仕上げたい。" },
      { name: "ファイル作成", what: "Word・Excel・PowerPoint・PDFのファイルを作る。", when: "資料や表を、ファイルでほしい。" },
      { name: "Skills", what: "作業の手順を覚えさせて、必要なときに使う。", when: "決まった形式の資料を、毎回作る。" },
      { name: "Memory", what: "会話から、大事なことを覚えておく。", when: "毎回同じ説明をしたくない。" },
      { name: "Cowork", what: "いくつも手順がある作業を、まとめて任せる。", when: "調べる→資料にする、を一気に頼みたい（有料）。" },
      { name: "Claude in Chrome", what: "ブラウザで、クリックや移動を代わりにやる。", when: "Webでのくり返し作業（有料）。" },
      { name: "Claude for Excel／PowerPoint", what: "Excel や PowerPoint の中で、直接手伝う。", when: "表の数式の確認や、スライド作り（有料）。" },
      { name: "コネクタ", what: "Googleドライブ・Gmail・Slack などとつなぐ。", when: "自分のファイルやメールも使って答えてほしい。" },
    ],
    thinkingKind: "levels",
    thinkingTitle: "Effort（考える量）",
    thinking: [
      { name: "Low", what: "考える量を少なくして、速く答える。", when: "急ぎの、かんたんな質問。" },
      { name: "Medium", what: "少し考えて、使う量を節約する。", when: "ふつうの相談を、軽めに。" },
      { name: "High", what: "速さと賢さのバランス。ふだんの設定（既定）。", when: "迷ったらこれ。" },
      { name: "Extra high", what: "もっと深く考える。そのぶん時間がかかる。", when: "難しい分析や、込み入った文章。" },
      { name: "Max", what: "いちばん深く考える。", when: "どうしても解けない難題に。" },
    ],
    tips: [
      "何をしてほしいかを、具体的に書く。",
      "目的や、読む人などの背景も伝える。",
      "ほしい形の見本（例）を見せる。",
      "出力の形（表・箇条書き・文字数）を指定する。",
      "一度で決めず、追加のお願いで直していく。",
      "よく使う資料と指示は、Projectsにまとめる。",
    ],
    bestFor: ["writing", "summary", "research", "slides", "docs", "learn"],
    sources: [
      "https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings",
      "https://support.claude.com/en/articles/11095361-when-should-i-use-web-search-extended-thinking-and-research",
      "https://support.claude.com/en/articles/11088861-use-research-on-claude",
      "https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude",
      "https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them",
      "https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects",
      "https://support.claude.com/en/articles/12512180-use-skills-in-claude",
      "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork",
      "https://support.claude.com/en/articles/13521390-use-claude-for-powerpoint",
      "https://claude.com/pricing",
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
    ],
  },

  claudecode: {
    strengths: [
      "たくさんのファイルを読んで、コードの仕組みをつかむ。",
      "機能の追加、バグの修正、テストまで進める。",
      "コマンドを動かして、結果を確かめながら直す。",
      "コミットやプルリクエストなど、Gitの作業を手伝う。",
      "サブエージェントで、調べものを分けて進める。",
    ],
    weaknesses: [
      "会話が長くなると、前の指示を忘れやすい。",
      "確かめる方法がないと、「できたつもり」で止まる。",
      "巻き戻しは、コマンドで変えたものまでは戻せない。",
      "権限を広げすぎると、思わぬ操作をする危険がある。",
    ],
    merits: [
      "ターミナル・デスクトップアプリ・Web・VS Codeで使える。",
      "/rewind で、会話とコードを前の状態に戻せる。",
      "CLAUDE.md に、毎回のルールを覚えさせられる。",
      "Web版なら、閉じてもクラウドで作業が続く。",
    ],
    demerits: [
      "無料プランでは使えない（Pro 以上が必要）。",
      "effort を上げると、使う量と時間が増える。",
      "fast mode は、追加の利用枠で別料金。",
      "権限やターミナルの考え方に、慣れが要る。",
    ],
    modes: [
      { name: "Manual", what: "ファイルの編集やコマンドの前に、毎回確認する。", when: "大事なファイルを、慎重に触るとき。" },
      { name: "Accept edits", what: "ファイルの編集は、確認なしで進む。", when: "変更を見ながら、テンポよく直すとき。" },
      { name: "Plan", what: "読んで計画だけ立てる。OKするまで編集しない。", when: "やり方が決まっていない、大きめの変更。" },
      { name: "Auto", what: "危なそうな操作だけ、別のAIが止めて進める。", when: "長い作業で、確認の手間を減らしたい。" },
      { name: "Bypass permissions", what: "確認を全部とばす。とても危険。", when: "隔離した環境の中だけ。ふだんは使わない。" },
      { name: "Shift + Tab", what: "上のモードを、順番に切り替える。", when: "作業中に、モードを変えたい。" },
      { name: "/model", what: "使うモデルを切り替える（Opus・Sonnet・Haiku など）。", when: "作業の難しさと、予算で選ぶ。" },
      { name: "/fast", what: "Opus を速く動かす（割高）。", when: "素早いやり取りを、続けたいとき。" },
      { name: "/rewind（Esc を2回）", what: "チェックポイントまで、会話やコードを戻す。", when: "試したやり方が、うまくいかなかった。" },
      { name: "CLAUDE.md（/init）", what: "毎回はじめに読む、決まりごとのファイル。", when: "同じルールを、毎回伝えたくない。" },
      { name: "サブエージェント", what: "別の会話で調べて、要点だけ返す。", when: "調べもので、会話を散らかしたくない。" },
      { name: "Skills・Hooks・MCP", what: "手順の使い回し、自動チェック、外部ツール連携。", when: "慣れてきて、作業を仕組みにしたいとき。" },
    ],
    thinkingKind: "levels",
    thinkingTitle: "effort（考える深さ）",
    thinking: [
      { name: "low", what: "考える量を最小にして、速く・安く。", when: "短くて、やることがはっきりした作業。" },
      { name: "medium", what: "少し賢さを削って、使う量を節約。", when: "コストを抑えたい作業。" },
      { name: "high", what: "使う量と賢さのバランス型。多くのモデルの既定。", when: "ふだんのコーディング。" },
      { name: "xhigh", what: "より深く考える。そのぶん多く使う。", when: "難しい設計や、原因のわからない不具合。" },
      { name: "max", what: "いちばん深く考える。考えすぎることもある。", when: "特に難しい課題を、ためしに（その回だけ）。" },
      { name: "ultracode", what: "xhigh で考え、大きな作業は複数のAIの段取りを自動で組む。", when: "大規模な作業を任せたい（量と時間は大）。" },
    ],
    tips: [
      "テストやビルドなど、確かめる方法を渡す。",
      "調べる→計画→作る、の順に分けて進める（Plan を使う）。",
      "ファイル名や条件を具体的に伝える（@ でファイルを指定）。",
      "CLAUDE.md は短く、本当に必要なことだけ書く。",
      "話題が変わったら、/clear で会話をリセットする。",
      "2回直してもずれるときは、/clear して頼み直す。",
    ],
    bestFor: ["code", "webapp", "lp", "learn"],
    sources: [
      "https://code.claude.com/docs/en/overview",
      "https://code.claude.com/docs/en/setup",
      "https://code.claude.com/docs/en/model-config",
      "https://code.claude.com/docs/en/permission-modes",
      "https://code.claude.com/docs/en/fast-mode",
      "https://code.claude.com/docs/en/workflows",
      "https://code.claude.com/docs/en/best-practices",
      "https://code.claude.com/docs/en/checkpointing",
      "https://code.claude.com/docs/en/memory",
    ],
  },
};
