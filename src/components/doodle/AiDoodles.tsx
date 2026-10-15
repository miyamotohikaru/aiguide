import Doodle, { C, Fill, Line } from "./Doodle";

/**
 * AIの選び方のページ用の絵。
 * ・4つのタイプは、たとえ（先生・工房・相棒・職人）を小さな場面にした横長の絵。
 * ・目的別は、目的ひとつにつき1つの道具の絵。
 * 線はすくなく、色は2〜3色まで（Doodles と同じ決まり）。
 */
type P = { className?: string };

/* ---------------- 4つのタイプ（160×120） ---------------- */

/** チャット型 — 聞くと答えが返ってくる（なんでも聞ける先生） */
export function TChat({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 160 120" size={160} className={className} seed={139}>
      <Fill d="M14 18 H90 V58 H40 L28 72 V58 H14 Z" fill={C.mustard} seed={139} opacity={0.8} />
      <Line d="M14 18 H90 V58 H40 L28 72 V58 H14 Z" seed={139} />
      <Line d="M44 30 q0 -7 8 -7 q8 0 8 7 q0 6 -8 8 v5" seed={139} width={2.6} />
      <circle cx={52} cy={50} r={2.8} fill={C.ink} />
      <Fill d="M64 62 H146 V98 H132 L120 110 V98 H64 Z" fill={C.blue} seed={139} opacity={0.6} />
      <Line d="M64 62 H146 V98 H132 L120 110 V98 H64 Z" seed={139} />
      <Line d="M76 76 H132 M76 86 H112" seed={139} width={2} />
    </Doodle>
  );
}

/** ノーコード生成型 — 注文書を出すと、ページができあがる（工房） */
export function TNocode({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 160 120" size={160} className={className} seed={149}>
      <Fill d="M12 26 H54 V94 H12 Z" fill={C.cream} seed={149} />
      <Line d="M12 26 H54 V94 H12 Z" seed={149} />
      <Line d="M20 40 H46 M20 52 H42 M20 64 H46 M20 76 H36" seed={149} width={1.8} />
      <Line d="M62 60 H84 M76 52 L86 60 L76 68" seed={149} width={2.6} color={C.terracotta} />
      <Fill d="M94 24 H148 V96 H94 Z" fill={C.cream} seed={149} />
      <Fill d="M94 24 H148 V36 H94 Z" fill={C.pink} seed={149} opacity={0.85} />
      <Fill d="M102 44 H140 V64 H102 Z" fill={C.green} seed={149} opacity={0.75} />
      <Line d="M94 24 H148 V96 H94 Z M94 36 H148" seed={149} />
      <Line d="M102 74 H134 M102 84 H122" seed={149} width={1.8} />
      <Line d="M150 8 v12 M144 14 h12" seed={149} width={2.2} color={C.mustard} />
    </Doodle>
  );
}

/** エディタ型 — コードの画面の横に、AIがいる（となりに座る相棒） */
export function TEditor({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 160 120" size={160} className={className} seed={151}>
      <Fill d="M10 20 H110 V98 H10 Z" fill={C.cream} seed={151} />
      <Fill d="M10 20 H110 V32 H10 Z" fill={C.ink} seed={151} opacity={0.7} />
      <Line d="M10 20 H110 V98 H10 Z" seed={151} />
      <Line d="M22 48 H58" seed={151} width={2.4} color={C.green} />
      <Line d="M32 60 H80" seed={151} width={2.4} color={C.terracotta} />
      <Line d="M32 72 H68" seed={151} width={2.4} color={C.blue} />
      <Line d="M22 84 H48" seed={151} width={2.4} />
      <Fill d="M132 60 a20 20 0 1 0 0.1 0" fill={C.mustard} seed={151} opacity={0.9} />
      <Line d="M132 60 a20 20 0 1 0 0.1 0" seed={151} />
      <Line d="M132 60 V50" seed={151} width={2.2} />
      <Fill d="M132 44 a4 4 0 1 0 0.1 0" fill={C.terracotta} seed={151} />
      <circle cx={125} cy={76} r={2.6} fill={C.ink} />
      <circle cx={139} cy={76} r={2.6} fill={C.ink} />
      <Line d="M125 86 q7 6 14 0" seed={151} width={2.2} />
    </Doodle>
  );
}

/** エージェント型 — フォルダを読んで、直して、動かす（職人） */
export function TAgent({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 160 120" size={160} className={className} seed={157}>
      <Fill d="M10 36 H46 L54 46 H96 V100 H10 Z" fill={C.mustard} seed={157} opacity={0.85} />
      <Line d="M10 36 H46 L54 46 H96 V100 H10 Z M10 58 H96" seed={157} />
      {/* 歯車（直す） */}
      <Fill d="M124 38 a13 13 0 1 0 0.1 0" fill={C.blue} seed={157} opacity={0.75} />
      <Line d="M124 38 a13 13 0 1 0 0.1 0" seed={157} width={2.4} />
      <Line
        d="M124 14 V20 M124 56 V62 M100 38 H106 M142 38 H148 M107 21 L111 25 M137 51 L141 55 M141 21 L137 25 M111 51 L107 55"
        seed={157}
        width={2.6}
      />
      <Fill d="M124 34 a4 4 0 1 0 0.1 0" fill={C.cream} seed={157} />
      {/* できた（動かす） */}
      <Fill d="M126 72 a18 18 0 1 0 0.1 0" fill={C.green} seed={157} opacity={0.45} />
      <Line d="M116 90 L124 98 L138 82" seed={157} width={3.4} />
    </Doodle>
  );
}

export const TYPE_DOODLE: Record<string, (p: P) => React.ReactElement> = {
  chat: TChat,
  nocode: TNocode,
  editor: TEditor,
  agent: TAgent,
};

/* ---------------- やりたいこと（120×120） ---------------- */

/** 資料（スライド） — グラフの入った発表の板 */
export function PSlides({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={163}>
      <Fill d="M16 20 H104 V80 H16 Z" fill={C.cream} seed={163} />
      <Fill d="M30 56 H42 V70 H30 Z" fill={C.terracotta} seed={163} opacity={0.85} />
      <Fill d="M50 40 H62 V70 H50 Z" fill={C.mustard} seed={163} opacity={0.9} />
      <Fill d="M70 48 H82 V70 H70 Z" fill={C.blue} seed={163} opacity={0.85} />
      <Line d="M16 20 H104 V80 H16 Z" seed={163} />
      <Line d="M60 80 V94 M44 102 L60 92 L76 102" seed={163} width={2.4} />
    </Doodle>
  );
}

/** 文書・レポート — 角を折った紙 */
export function PDocs({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={167}>
      <Fill d="M28 14 H78 L92 28 V104 H28 Z" fill={C.cream} seed={167} />
      <Fill d="M40 34 H68 V42 H40 Z" fill={C.terracotta} seed={167} opacity={0.85} />
      <Line d="M28 14 H78 L92 28 V104 H28 Z M78 14 V28 H92" seed={167} />
      <Line d="M40 56 H80 M40 68 H80 M40 80 H66" seed={167} width={1.8} />
    </Doodle>
  );
}

/** 表計算・グラフ — 棒グラフと折れ線 */
export function PData({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={173}>
      <Fill d="M30 70 H44 V98 H30 Z" fill={C.blue} seed={173} opacity={0.8} />
      <Fill d="M52 54 H66 V98 H52 Z" fill={C.green} seed={173} opacity={0.8} />
      <Fill d="M74 36 H88 V98 H74 Z" fill={C.mustard} seed={173} opacity={0.9} />
      <Line d="M20 18 V98 H106" seed={173} />
      <Line d="M28 62 L58 44 L96 24" seed={173} width={2.4} color={C.terracotta} />
    </Doodle>
  );
}

/** 調べもの — 紙と虫めがね */
export function PResearch({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={179}>
      <Fill d="M18 16 H70 V92 H18 Z" fill={C.cream} seed={179} />
      <Line d="M18 16 H70 V92 H18 Z" seed={179} />
      <Line d="M28 32 H60 M28 44 H56 M28 56 H50" seed={179} width={1.8} />
      <Fill d="M78 50 a20 20 0 1 0 0.1 0" fill={C.blue} seed={179} opacity={0.5} />
      <Line d="M78 50 a20 20 0 1 0 0.1 0" seed={179} />
      <Line d="M92 84 L106 100" seed={179} width={5} />
    </Doodle>
  );
}

/** 文章・メール — 封筒 */
export function PWriting({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={181}>
      <Fill d="M14 32 H106 V92 H14 Z" fill={C.pink} seed={181} opacity={0.75} />
      <Line d="M14 32 H106 V92 H14 Z" seed={181} />
      <Line d="M14 32 L60 66 L106 32" seed={181} width={2.4} />
      <Line d="M98 14 l-30 30 l-4 10 l10 -4 l30 -30 Z" seed={181} width={2.2} fill={C.mustard} />
    </Doodle>
  );
}

/** 画像 — 山と太陽の額 */
export function PImage({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={191}>
      <Fill d="M16 24 H104 V96 H16 Z" fill={C.cream} seed={191} />
      <Fill d="M16 96 L46 58 L68 80 L82 66 L104 90 V96 Z" fill={C.green} seed={191} opacity={0.85} />
      <Fill d="M82 34 a10 10 0 1 0 0.1 0" fill={C.mustard} seed={191} />
      <Line d="M16 24 H104 V96 H16 Z" seed={191} />
      <Line d="M16 96 L46 58 L68 80 L82 66 L104 90" seed={191} width={2.2} />
    </Doodle>
  );
}

/** 動画 — フィルムと再生ボタン */
export function PVideo({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={193}>
      <Fill d="M14 28 H106 V92 H14 Z" fill={C.ink} seed={193} opacity={0.75} />
      <Fill d="M14 40 H106 V80 H14 Z" fill={C.cream} seed={193} />
      <Fill d="M50 46 L76 60 L50 74 Z" fill={C.terracotta} seed={193} />
      <Line d="M14 28 H106 V92 H14 Z M14 40 H106 M14 80 H106" seed={193} />
      <Line d="M50 46 L76 60 L50 74 Z" seed={193} width={2.2} />
    </Doodle>
  );
}

/** Webサイト・LP — ブラウザの画面 */
export function PLp({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={197}>
      <Fill d="M12 20 H108 V98 H12 Z" fill={C.cream} seed={197} />
      <Fill d="M22 42 H98 V62 H22 Z" fill={C.mustard} seed={197} opacity={0.85} />
      <Fill d="M22 72 H54 V84 H22 Z" fill={C.terracotta} seed={197} />
      <Line d="M12 20 H108 V98 H12 Z M12 32 H108" seed={197} />
      <Line d="M64 76 H96 M64 86 H86" seed={197} width={1.8} />
    </Doodle>
  );
}

/** ログインのあるWebアプリ — 顔と入力欄 */
export function PWebapp({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={199}>
      <Fill d="M24 14 H96 V106 H24 Z" fill={C.cream} seed={199} />
      <Fill d="M60 26 a10 10 0 1 0 0.1 0" fill={C.blue} seed={199} opacity={0.85} />
      <Fill d="M44 88 H76 V98 H44 Z" fill={C.green} seed={199} opacity={0.85} />
      <Line d="M24 14 H96 V106 H24 Z" seed={199} />
      <Line d="M34 56 H86 V66 H34 Z M34 72 H86 V82 H34 Z" seed={199} width={1.8} />
    </Doodle>
  );
}

/** 手元のコード — フォルダと </> */
export function PCode({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={211}>
      <Fill d="M14 30 H48 L56 40 H106 V96 H14 Z" fill={C.mustard} seed={211} opacity={0.85} />
      <Line d="M14 30 H48 L56 40 H106 V96 H14 Z" seed={211} />
      <Line d="M46 58 L36 68 L46 78 M74 58 L84 68 L74 78 M66 54 L54 82" seed={211} width={2.6} />
    </Doodle>
  );
}

/** 勉強 — 角帽 */
export function PLearn({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={223}>
      <Fill d="M34 56 V78 q26 14 52 0 V56 Z" fill={C.blue} seed={223} opacity={0.7} />
      <Line d="M34 56 V78 q26 14 52 0 V56" seed={223} />
      <Fill d="M60 26 L106 44 L60 62 L14 44 Z" fill={C.ink} seed={223} opacity={0.75} />
      <Line d="M60 26 L106 44 L60 62 L14 44 Z" seed={223} />
      <Line d="M98 48 V74" seed={223} width={2.2} color={C.terracotta} />
      <Fill d="M98 78 a4 4 0 1 0 0.1 0" fill={C.terracotta} seed={223} />
    </Doodle>
  );
}

/** 要約 — 長い紙が、短いメモになる */
export function PSummary({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={227}>
      <Fill d="M12 14 H52 V104 H12 Z" fill={C.cream} seed={227} />
      <Line d="M12 14 H52 V104 H12 Z" seed={227} />
      <Line d="M20 26 H44 M20 36 H44 M20 46 H40 M20 56 H44 M20 66 H38 M20 76 H44 M20 86 H40" seed={227} width={1.6} />
      <Line d="M58 60 H74 M68 54 L76 60 L68 66" seed={227} width={2.4} color={C.terracotta} />
      <Fill d="M80 44 H108 V76 H80 Z" fill={C.mustard} seed={227} opacity={0.85} />
      <Line d="M80 44 H108 V76 H80 Z" seed={227} />
      <Line d="M86 56 H102 M86 64 H98" seed={227} width={1.8} />
    </Doodle>
  );
}

export const PURPOSE_DOODLE: Record<string, (p: P) => React.ReactElement> = {
  slides: PSlides,
  docs: PDocs,
  data: PData,
  research: PResearch,
  writing: PWriting,
  image: PImage,
  video: PVideo,
  lp: PLp,
  webapp: PWebapp,
  code: PCode,
  learn: PLearn,
  summary: PSummary,
};
