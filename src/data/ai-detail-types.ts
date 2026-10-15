/** ツールごとの詳しい説明（/ai/[id]）の形 */
export type Mode = { name: string; what: string; when: string };

export type ToolDetail = {
  /** 得意なこと */
  strengths: string[];
  /** 苦手・注意 */
  weaknesses: string[];
  merits: string[];
  demerits: string[];
  /** 画面で選べるモード・機能 */
  modes: Mode[];
  /** 考える深さ・effort・モデル選択など。弱い→強いの順に並べる */
  thinking: Mode[];
  /** levels=弱い→強いの段階（メーターで見せる）／settings=設定の一覧（カードで見せる） */
  thinkingKind?: "levels" | "settings";
  /** thinking の見出し（例「effort（考える深さ）」） */
  thinkingTitle?: string;
  /** うまく作るコツ */
  tips: string[];
  /** 向いている用途（purposes.ts の id） */
  bestFor: string[];
  sources: string[];
};
