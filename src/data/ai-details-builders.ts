/**
 * ツールごとの詳しい説明（builders）。調査結果（2026年9月17日、公式ドキュメント）から生成。
 * 得意・苦手などは、その内容をもとにしたこのサイトの評価。
 */
import type { ToolDetail } from "./ai-detail-types";

export const DETAILS_BUILDERS: Record<string, ToolDetail> = {
  "cursor": {
    "strengths": [
      "複数ファイルにまたがる修正をまとめて任せられる。",
      "コードを読んで仕組みを説明してもらえる。",
      "再現しにくいバグをログで原因から探せる。",
      "実行中のアプリをクリックして見た目を直せる。",
      "クラウドで長い作業を任せ、PRで受け取れる。"
    ],
    "weaknesses": [
      "コードを書く道具なので完全初心者には難しめ。",
      "Cloud Agentは実行環境の準備が先に必要。",
      "高性能モデルを多用すると利用枠が早く減る。",
      "大きな変更は計画なしだと方向がずれやすい。"
    ],
    "merits": [
      "VS Code系の見た目で乗り換えやすい。",
      "OpenAI・Anthropic・Googleなど多数のモデルを選べる。",
      "チェックポイントでAIの変更を戻せる。",
      "Rulesで毎回の指示を省ける。"
    ],
    "demerits": [
      "利用枠は2つあり、モデルで減り方が違う。",
      "他社モデルはAPI料金相当で消費される。",
      "枠を超えると従量課金か上位プランが必要。",
      "Max Modeは旧プラン限定で現行プランに無い。"
    ],
    "modes": [
      {
        "name": "Agent",
        "what": "ファイル編集やコマンド実行まで自動で進める。",
        "when": "やることが決まっている変更をしたいとき。"
      },
      {
        "name": "Ask",
        "what": "読み取り専用。質問に答えるだけで編集しない。",
        "when": "コードの仕組みを知りたいとき。"
      },
      {
        "name": "Plan",
        "what": "質問・調査のあと編集できる計画書を作る。",
        "when": "大きな機能や進め方に迷うとき。"
      },
      {
        "name": "Debug",
        "what": "仮説を立てログを仕込み、実行結果から原因を特定。",
        "when": "原因がわからないバグに当たったとき。"
      },
      {
        "name": "Design Mode",
        "what": "Agents Window内のブラウザで要素を選び指示。",
        "when": "画面の見た目を細かく直したいとき。"
      },
      {
        "name": "Cloud（Cloud Agents）",
        "what": "専用の仮想マシンで作業しPRを作る。",
        "when": "PCを閉じても進めてほしい長い作業。"
      },
      {
        "name": "Rules / AGENTS.md",
        "what": "毎回AIに読ませる決まりごとを書いておく。",
        "when": "書き方や方針を統一したいとき。"
      }
    ],
    "thinkingKind": "settings",
    "thinkingTitle": "モデルと考える深さ",
    "thinking": [
      {
        "name": "Auto（Cursor Router）",
        "what": "依頼ごとに適したモデルを自動で選ぶ。",
        "when": "モデル選びに迷うとき、普段づかい。"
      },
      {
        "name": "Cost / Balance / Intelligence",
        "what": "Autoの優先度。安さ・バランス・賢さを選ぶ。",
        "when": "難しい作業はIntelligenceにする。"
      },
      {
        "name": "モデル選択（モデルピッカー）",
        "what": "使うモデルを手動で指定。会話の途中でも変更可。",
        "when": "速いモデルと賢いモデルを使い分けるとき。"
      },
      {
        "name": "Max Mode",
        "what": "文脈の上限を広げる。旧リクエスト制プランのみ。",
        "when": "旧プランで大量の文脈が必要なとき。"
      }
    ],
    "tips": [
      "迷う作業はPlanで計画を作り、確認してから実装する。",
      "結果がずれたら直し続けず、戻して計画を直す。",
      "関係するファイルは@で指定して伝える。",
      "バグはエラー文・再現手順・期待と実際を書く。",
      "決まりごとはRulesやAGENTS.mdにまとめる。",
      "画面の修正は画像やスクショを添付して伝える。"
    ],
    "bestFor": [
      "code",
      "learn",
      "webapp"
    ],
    "sources": [
      "https://cursor.com/docs/agent/overview.md",
      "https://cursor.com/help/ai-features/ask-mode.md",
      "https://cursor.com/docs/agent/plan-mode.md",
      "https://cursor.com/docs/agent/debug-mode.md",
      "https://cursor.com/docs/agent/design-mode.md",
      "https://cursor.com/docs/agent/prompting.md",
      "https://cursor.com/help/ai-features/background-agents.md",
      "https://cursor.com/docs/cloud-agent/best-practices.md",
      "https://cursor.com/docs/rules.md",
      "https://cursor.com/help/models-and-usage/cursor-router.md",
      "https://cursor.com/help/ai-features/max-mode.md",
      "https://cursor.com/docs/models-and-pricing.md",
      "https://cursor.com/help/models-and-usage/usage-limits.md",
      "https://cursor.com/help/account-and-billing/pricing.md"
    ]
  },
  "copilot": {
    "strengths": [
      "入力中にコードの続きを提案してくれる。",
      "テストや繰り返しの多いコードを書く。",
      "コードの説明やコメント付け。",
      "Issueを任せるとPRまで作ってくれる。",
      "GitHubのIssue・PR・レビューと連携。"
    ],
    "weaknesses": [
      "コーディングと無関係な質問には向かない。",
      "提案が間違うこともあり確認が必須。",
      "クラウドエージェントは1回59分まで。",
      "GitHub以外のリポジトリでは使えない。"
    ],
    "merits": [
      "VS Codeなど普段のエディタで使える。",
      "無料のCopilot Freeから試せる。",
      "学生・教師などは無料で使える場合がある。",
      "複数のAIモデルから選べる。"
    ],
    "demerits": [
      "利用量はAIクレジットで、モデルと量で変わる。",
      "クレジットは翌月に繰り越されない。",
      "クラウドエージェントはActions分数も消費。",
      "クラウドエージェントは有料プランのみ。"
    ],
    "modes": [
      {
        "name": "Agent",
        "what": "変更するファイルを自分で決め、直るまで繰り返す。",
        "when": "やりたい作業がはっきりしているとき。"
      },
      {
        "name": "Plan",
        "what": "実装前に手順の計画を作る。承認まで編集しない。",
        "when": "抜け漏れなく進めたい作業のとき。"
      },
      {
        "name": "Ask",
        "what": "コードや技術の質問に答え、提案を出す。",
        "when": "仕組みを理解したいとき。"
      },
      {
        "name": "Edit（JetBrains等）",
        "what": "対象ファイルを自分で選び、1回ずつ採否を決める。",
        "when": "変更範囲を細かく管理したいとき。"
      },
      {
        "name": "Copilot cloud agent",
        "what": "GitHub上で調査・実装し、PRを作る。",
        "when": "Issueや小さな改修を任せたいとき。"
      },
      {
        "name": "Copilot CLI",
        "what": "ターミナルでAIに作業を頼める。計画モードあり。",
        "when": "ターミナル中心で作業するとき。"
      }
    ],
    "thinkingKind": "settings",
    "thinkingTitle": "モデルと考える深さ",
    "thinking": [
      {
        "name": "Auto（自動モデル選択）",
        "what": "作業の難しさに合わせてモデルを自動で選ぶ。",
        "when": "モデル選びに迷うとき。"
      },
      {
        "name": "Efficiency / Balance / Intelligence",
        "what": "Autoの優先度。コスト・バランス・品質。",
        "when": "複雑な作業はIntelligenceにする。"
      },
      {
        "name": "モデル選択",
        "what": "チャットで使うモデルを手動で切り替える。",
        "when": "特定のモデルを試したいとき。"
      }
    ],
    "tips": [
      "全体像から伝え、そのあと細かい条件を足す。",
      "入力と出力の例を見せる。",
      "大きな作業は小さく分けて頼む。",
      "関係するファイルを開き、無関係なものは閉じる。",
      "話題が変わったら新しい会話を始める。",
      "提案されたコードは理解し、テストで確かめる。"
    ],
    "bestFor": [
      "code",
      "learn"
    ],
    "sources": [
      "https://docs.github.com/en/copilot/get-started/features",
      "https://docs.github.com/en/copilot/get-started/best-practices",
      "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering",
      "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
      "https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent",
      "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli",
      "https://docs.github.com/en/copilot/concepts/auto-model-selection",
      "https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals"
    ]
  },
  "devin": {
    "strengths": [
      "エディタ内でAIが複数ファイルを編集・実行する。",
      "ローカルとクラウドのエージェントを一覧管理。",
      "計画を作ってからクラウドのDevinに丸投げ。",
      "アプリのプレビューで要素を選んで直せる。",
      "変更を段階ごとに元に戻せる。"
    ],
    "weaknesses": [
      "名前や機能の移行途中で情報が混ざりやすい。",
      "新しいDevin Localはメモリ等が未対応。",
      "戻す操作（Revert）は取り消せない。",
      "エディタ型なので完全初心者には難しめ。"
    ],
    "merits": [
      "旧Windsurfの設定や拡張をそのまま使える。",
      "Adaptiveでモデル選びを任せられる。",
      "クラウドのDevinも同じプランで使える。",
      "Plan・Askなど目的別モードがある。"
    ],
    "demerits": [
      "日・週ごとの利用枠があり、超えると待つか追加購入。",
      "モデルで枠の減り方が違う。",
      "高速版モデルは消費が増える。",
      "アプリ公開機能は旧Cascadeのみ対応。"
    ],
    "modes": [
      {
        "name": "Devin Local",
        "what": "PC上で動く標準エージェント。旧Cascadeの後継。",
        "when": "手元のプロジェクトを作業させるとき。"
      },
      {
        "name": "Cascade（Code / Plan / Ask）",
        "what": "従来のエージェント。編集・計画・質問を切替。",
        "when": "メモリやWorkflowsを使いたいとき。"
      },
      {
        "name": "Plan",
        "what": "調査・質問のあと計画ファイルを作る。",
        "when": "複雑な機能を作る前。"
      },
      {
        "name": "Ask",
        "what": "読み取り専用で質問に答える。",
        "when": "コードを理解したいとき。"
      },
      {
        "name": "Devin（クラウド）",
        "what": "専用マシンで自律的に作業し、PRを作る。",
        "when": "PCを閉じても進めたい作業。"
      },
      {
        "name": "Agent Command Center",
        "what": "ローカルとクラウドの作業をかんばんで管理。",
        "when": "複数の作業を並行で進めるとき。"
      }
    ],
    "thinkingKind": "settings",
    "thinkingTitle": "モデルと考える深さ",
    "thinking": [
      {
        "name": "Adaptive",
        "what": "依頼ごとに最適なモデルを自動で選ぶ。",
        "when": "迷ったとき・枠を長持ちさせたいとき。"
      },
      {
        "name": "Fusion",
        "what": "賢いモデルが指揮し、安いモデルが実作業。",
        "when": "複雑な作業を安めにこなしたいとき。"
      },
      {
        "name": "モデル選択（SWEシリーズ等）",
        "what": "使うモデルを手動で選ぶ。",
        "when": "定型作業は低コストのSWEにする。"
      },
      {
        "name": "megaplan",
        "what": "プロンプトに入れるとより深く計画する。",
        "when": "大きな作業をしっかり計画したいとき。"
      }
    ],
    "tips": [
      "目的（何を作るか）をはっきり書く。",
      "@メンションで関係するコードを指定する。",
      "使うライブラリ・安全面などの条件を伝える。",
      "計画ファイルを直してから「Implement」を押す。",
      "指示は的確にし、不要な文脈を減らす。",
      "一つの作業は同じモデルで続けると節約になる。"
    ],
    "bestFor": [
      "code",
      "webapp"
    ],
    "sources": [
      "https://devin.ai/blog/windsurf-is-now-devin-desktop",
      "https://docs.devin.ai/desktop/devin-local.md",
      "https://docs.devin.ai/desktop/cascade/modes.md",
      "https://docs.devin.ai/desktop/cascade/cascade.md",
      "https://docs.devin.ai/desktop/agent-command-center.md",
      "https://docs.devin.ai/desktop/devin.md",
      "https://docs.devin.ai/desktop/adaptive.md",
      "https://docs.devin.ai/desktop/fusion.md",
      "https://docs.devin.ai/desktop/accounts/quota.md",
      "https://docs.devin.ai/desktop/best-practices/prompt-engineering.md",
      "https://docs.devin.ai/desktop/best-practices/use-cases.md"
    ]
  },
  "v0": {
    "strengths": [
      "言葉やラフ画から見栄えのよい画面を作る。",
      "Next.js・Tailwindの本格的なコードを出す。",
      "ワンクリックでVercelに公開できる。",
      "エラーを自動で見つけて直そうとする。",
      "Figmaやデザインシステムを取り込める。"
    ],
    "weaknesses": [
      "Vercel・Next.js中心で他の環境は不得意。",
      "大きなアプリを一度に頼むと崩れやすい。",
      "無料プランは1日7メッセージまで。",
      "GitHub連携後はリポジトリ削除でコードを失う恐れ。"
    ],
    "merits": [
      "画面をクリックして見た目を直せる。",
      "版ごとに履歴が残り、いつでも戻せる。",
      "GitHub連携でブランチ・PRの流れに乗れる。",
      "Supabase・Stripeなどを簡単に接続。"
    ],
    "demerits": [
      "クレジット制で、生成ごとに残高が減る。",
      "長い会話や大きなコードほど消費が増える。",
      "クレジットが尽きると生成が止まる。",
      "モデルごとに消費量が違う。"
    ],
    "modes": [
      {
        "name": "Design mode",
        "what": "要素を選び、文字・色・余白をパネルで調整。",
        "when": "見た目を細かく整えたいとき。"
      },
      {
        "name": "Code（コードエディタ）",
        "what": "生成されたコードを直接編集できる。",
        "when": "少しだけ手で直したいとき。"
      },
      {
        "name": "GitHub連携",
        "what": "作業用ブランチに自動でコミットしPRで反映。",
        "when": "コードを自分のリポジトリで管理したいとき。"
      },
      {
        "name": "Publish",
        "what": "Vercelへ本番公開。更新はPublish Changes。",
        "when": "完成したアプリを公開するとき。"
      },
      {
        "name": "Ask / Auto / Full Permissions",
        "what": "ターミナル操作をどこまで自動で許すか。",
        "when": "普段はAuto、大事なデータはAsk。"
      },
      {
        "name": "Versions",
        "what": "生成ごとの版を比べ、前の版を復元できる。",
        "when": "変更で壊れたとき。"
      }
    ],
    "thinkingKind": "settings",
    "thinkingTitle": "モデルと考える深さ",
    "thinking": [
      {
        "name": "モデル選択",
        "what": "生成に使うモデルを選ぶ。ホバーで費用がわかる。",
        "when": "費用と品質のバランスを取りたいとき。"
      }
    ],
    "tips": [
      "作りたい機能・デザイン・技術を具体的に書く。",
      "大きなアプリは部品ごとに分けて作る。",
      "複雑なものはPRD（要件書）を先に作らせる。",
      "色や雰囲気などUIの好みを伝える。",
      "エラー時や読み込み中の表示も頼む。",
      "Instructionsで共通の指示を設定する。"
    ],
    "bestFor": [
      "lp",
      "webapp"
    ],
    "sources": [
      "https://v0.app/docs",
      "https://v0.app/docs/design-mode",
      "https://v0.app/docs/github",
      "https://v0.app/docs/deployments",
      "https://v0.app/docs/pricing",
      "https://v0.app/docs/text-prompting",
      "https://v0.app/docs/agentic-features",
      "https://v0.app/docs/terminal-commands",
      "https://v0.app/docs/code-editing",
      "https://v0.app/docs/prd-design",
      "https://v0.app/docs/llms.txt"
    ]
  },
  "lovable": {
    "strengths": [
      "会話だけで画面からDBまであるアプリを作る。",
      "ログイン・データ保存を内蔵バックエンドで用意。",
      "プレビューを指さして修正を頼める。",
      "2クリックで公開、公開前に安全チェック。",
      "デザイン案を3つ見てから作り始められる。"
    ],
    "weaknesses": [
      "Build modeは事前に費用がわからない。",
      "Cloud⇔Supabaseの切替は自動移行できない。",
      "広すぎる指示はコストも失敗も増えやすい。",
      "細かい独自仕様はコード知識が要る場面も。"
    ],
    "merits": [
      "サーバー設定なしで公開まで完結。",
      "変更ごとに版が自動保存され戻せる。",
      "GitHubなどと双方向で同期できる。",
      "Knowledgeで毎回の指示を省ける。"
    ],
    "demerits": [
      "クレジット制。作成・公開・AI機能で共通消費。",
      "Plan modeも1回1クレジット以上かかる。",
      "長い作業は数時間分のクレジットを使う。",
      "無料枠は1日5・月30クレジットまで。"
    ],
    "modes": [
      {
        "name": "Build mode（旧Agent mode）",
        "what": "実装から動作確認まで自動で進める。",
        "when": "作る内容が決まったとき。"
      },
      {
        "name": "Plan mode（旧Chat mode）",
        "what": "コードを変えずに相談・調査し計画を作る。",
        "when": "進め方に迷う・バグの原因を探るとき。"
      },
      {
        "name": "プレビューツールバー（旧Visual edits）",
        "what": "要素選択・文字直接編集・描き込みで指示。",
        "when": "画面を見ながら直したいとき。"
      },
      {
        "name": "Knowledge",
        "what": "ワークスペース/プロジェクトの常設ルール。",
        "when": "デザインや方針を毎回守らせたいとき。"
      },
      {
        "name": "Lovable Cloud",
        "what": "DB・ログイン・保存・関数を内蔵で提供。",
        "when": "外部設定なしで本格アプリを作るとき。"
      },
      {
        "name": "Supabase連携",
        "what": "自分のSupabaseをバックエンドに使う。",
        "when": "既存のSupabaseを使いたいとき。"
      },
      {
        "name": "Publish",
        "what": "lovable.appのURLで公開。独自ドメインも可。",
        "when": "完成したアプリを公開するとき。"
      }
    ],
    "thinkingKind": "settings",
    "thinkingTitle": "モデルと考える深さ",
    "thinking": [
      {
        "name": "/goal",
        "what": "目標達成まで1メッセージで作業を続けさせる。",
        "when": "大きな作業を最後まで任せたいとき。"
      },
      {
        "name": "Credit check-ins",
        "what": "1回の消費が設定値を超えると確認で止まる。",
        "when": "使いすぎを防ぎたいとき（標準20）"
      }
    ],
    "tips": [
      "何を・誰に・なぜ・主な行動を先に決める。",
      "「必要なら質問して」と頼み、疑問を先に解消。",
      "ページ全体でなく部品ごとに作る。",
      "仮の文でなく実際の文章で作る。",
      "「上品」「大胆」など雰囲気の言葉で指定。",
      "決めたデザインはKnowledgeに保存する。"
    ],
    "bestFor": [
      "webapp",
      "lp"
    ],
    "sources": [
      "https://docs.lovable.dev/features/plan-mode",
      "https://docs.lovable.dev/features/agent-mode",
      "https://docs.lovable.dev/features/preview-toolbar",
      "https://docs.lovable.dev/features/knowledge",
      "https://docs.lovable.dev/features/cloud",
      "https://docs.lovable.dev/integrations/supabase",
      "https://docs.lovable.dev/features/publish",
      "https://docs.lovable.dev/features/projects/history",
      "https://docs.lovable.dev/introduction/credits-and-usage",
      "https://docs.lovable.dev/prompting/prompting-one",
      "https://docs.lovable.dev/features/goal-runs",
      "https://docs.lovable.dev/llms.txt"
    ]
  },
  "bolt": {
    "strengths": [
      "ブラウザだけでWebアプリを作って動かせる。",
      "データベースやログインを自動で用意。",
      "bolt.hostに無料で公開できる。",
      "Figma・Google Stitchのデザインから作れる。",
      "Expoでスマホアプリも作れる。"
    ],
    "weaknesses": [
      "大きなプロジェクトほどトークン消費が増える。",
      "自動修正を繰り返すとトークンを浪費。",
      "長い会話では前の指示を忘れることがある。",
      "一度に多くを頼むと取りこぼしやすい。"
    ],
    "merits": [
      "公開・ドメイン・DBが1か所で揃う。",
      "Visual editsは保存時までトークン不要。",
      "バージョン履歴で戻すのはトークン不要。",
      "Enhance promptで指示文を改善できる。"
    ],
    "demerits": [
      "トークン制で、読むだけでも消費する。",
      "無料は1日30万・月100万トークンまで。",
      "Maxエージェントは有料プランのみ。",
      "チャットで公開を頼むとトークンを使う。"
    ],
    "modes": [
      {
        "name": "Build Mode",
        "what": "標準のモード。指示どおりコードを書き換える。",
        "when": "作る内容が決まったとき。"
      },
      {
        "name": "Plan Mode",
        "what": "コードを変えずに相談・計画。Web検索もする。",
        "when": "作る前の相談やバグの相談。"
      },
      {
        "name": "Select（Visual edits）",
        "what": "プレビューの文字や色を直接編集してまとめて保存。",
        "when": "見た目を少しだけ直したいとき。"
      },
      {
        "name": "Bolt Cloud",
        "what": "ホスティング・ドメイン・DBを一体で提供。",
        "when": "外部サービスなしで公開したいとき。"
      },
      {
        "name": "Bolt Database",
        "what": "DB・認証・ファイル保存・関数を内蔵。",
        "when": "データ保存やログインが必要なとき。"
      },
      {
        "name": "Publish",
        "what": "bolt.hostで公開。有料なら非公開公開も可。",
        "when": "完成したサイトを公開するとき。"
      }
    ],
    "thinkingKind": "settings",
    "thinkingTitle": "モデルと考える深さ",
    "thinking": [
      {
        "name": "Standard",
        "what": "速くてトークン効率がよい標準エージェント。",
        "when": "UI修正や明確な作業。"
      },
      {
        "name": "Max",
        "what": "一歩ずつ深く考える。トークンは多く使う。",
        "when": "大規模・複雑な機能やリファクタ。"
      },
      {
        "name": "Bolt Forge",
        "what": "オープンソースモデルで多めに使える選択肢。",
        "when": "利用量を増やしたいとき（対象プランのみ）"
      }
    ],
    "tips": [
      "最初に使う技術や構成を決めて伝える。",
      "機能は1つずつ小さなプロンプトで足す。",
      "変えるファイル・変えないファイルを明示する。",
      "Plan Modeで話を固めてから作る。",
      "エラーが続くときはログ出力を足してもらう。",
      "ときどき文脈をクリアして軽くする。"
    ],
    "bestFor": [
      "lp",
      "webapp"
    ],
    "sources": [
      "https://support.bolt.new/best-practices/plan-mode",
      "https://support.bolt.new/best-practices/prompting-effectively",
      "https://support.bolt.new/best-practices/maximizing-token-efficiency",
      "https://support.bolt.new/building/using-bolt/agents",
      "https://support.bolt.new/building/visual-edits",
      "https://support.bolt.new/cloud/bolt-cloud",
      "https://support.bolt.new/cloud/database",
      "https://support.bolt.new/cloud/hosting/publish",
      "https://support.bolt.new/account-and-subscription/tokens",
      "https://support.bolt.new/llms.txt"
    ]
  },
  "replit": {
    "strengths": [
      "ブラウザで作成から公開まで完結する。",
      "DB・ログイン付きの動くアプリを作れる。",
      "Design でまず見た目を素早く作れる。",
      "スマホアプリを作りApp Storeへ申請できる。",
      "作業を裏で並行して進められる。"
    ],
    "weaknesses": [
      "Power/Maxはクレジットを使い、費用が変わる。",
      "Plan modeの質問や計画にも料金がかかる。",
      "Starterは Plan mode 等が使えない。",
      "プレビューURLは一時的で公開用ではない。"
    ],
    "merits": [
      "Free Modeで枠内なら無料で作業できる。",
      "チェックポイントで前の状態に戻せる。",
      "有料作業の前に確認が出る。",
      "公開後もプレビューで試してから再公開。"
    ],
    "demerits": [
      "作業の複雑さで料金が変わる（effort-based）",
      "Free Modeは上限があり、モデル選択不可。",
      "クレジットは公開アプリやDBにも使われる。",
      "Effortを上げると時間も費用も増える。"
    ],
    "modes": [
      {
        "name": "Free Mode",
        "what": "枠内は無料。モデルは自動で選ばれる。",
        "when": "アイデア検証や日常の小さな作業。"
      },
      {
        "name": "Power Mode",
        "what": "速さと能力のバランス型。クレジットを使う。",
        "when": "ほとんどの作業（旧Economyの後継）"
      },
      {
        "name": "Max Mode",
        "what": "最も高性能。複雑で大きな作業向け。",
        "when": "本格的なアプリや難しい問題。"
      },
      {
        "name": "Plan（トグル）",
        "what": "コードを変えずに相談しタスク計画を作る。",
        "when": "作る前に進め方を決めたいとき。"
      },
      {
        "name": "Build",
        "what": "Planをオフにした状態。直接コードを書く。",
        "when": "やることが明確なとき。"
      },
      {
        "name": "Design",
        "what": "キャンバス上で画面デザインを生成・調整。",
        "when": "機能より先に見た目を決めたいとき。"
      },
      {
        "name": "チェックポイント（History）",
        "what": "Rollback hereで以前の状態に戻す。",
        "when": "変更でアプリが悪くなったとき。"
      },
      {
        "name": "Publish",
        "what": "本番用に公開。変更はRepublishで反映。",
        "when": "他の人に使ってもらうとき。"
      }
    ],
    "thinkingKind": "settings",
    "thinkingTitle": "モデルと考える深さ",
    "thinking": [
      {
        "name": "Auto（intelligent model routing）",
        "what": "タスクごとにモデルを自動で選ぶ。",
        "when": "Power/Maxでモデル選びを任せたいとき。"
      },
      {
        "name": "Primary model",
        "what": "Power/Maxで使うモデルを手動で選ぶ。",
        "when": "特定のモデルを使いたいとき（Core/Pro）"
      },
      {
        "name": "Effort",
        "what": "推論の深さ。LowからMaxまでモデルごとに設定。",
        "when": "難しい作業だけ上げる。"
      }
    ],
    "tips": [
      "全体を段階に分け、1段階ずつ頼む。",
      "欲しい形式・条件・例外を具体的に書く。",
      "避けたいことより、やってほしいことを書く。",
      "関係するファイルだけを指定する。",
      "エラーは原文・場所・試したことを添える。",
      "区切りごとに動作を確かめ、ダメなら戻す。"
    ],
    "bestFor": [
      "webapp",
      "lp"
    ],
    "sources": [
      "https://docs.replit.com/chat/agent-modes",
      "https://docs.replit.com/features/agent/agent-modes",
      "https://docs.replit.com/chat/auto-mode",
      "https://docs.replit.com/chat/model-selector",
      "https://docs.replit.com/chat/free-mode",
      "https://docs.replit.com/features/agent/plan-mode",
      "https://docs.replit.com/learn/plan-vs-build-mode",
      "https://docs.replit.com/learn/build-with-agent",
      "https://docs.replit.com/learn/effective-prompting",
      "https://docs.replit.com/design/design-vs-build",
      "https://docs.replit.com/build/publish-your-app",
      "https://docs.replit.com/billing/ai-billing"
    ]
  }
};
