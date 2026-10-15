import Doodle, { C, Fill, Line } from "./Doodle";

/**
 * スラッシュコマンド用の小さな絵。
 * 「まず覚える10個」と、一覧の種類の見出しに使う。
 * 線はすくなく、色は1〜2色。意味がひと目でわかる形だけを残す。
 */
type P = { className?: string };

/* ---------------- まず覚える10個 ---------------- */

/** /clear — まっさらな紙と消しゴム */
export function DClear({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={51}>
      <Fill d="M30 20 H90 V96 H30 Z" fill={C.cream} seed={51} />
      <Line d="M30 20 H90 V96 H30 Z" seed={51} />
      <Fill d="M56 76 L86 44 L104 60 L74 92 Z" fill={C.pink} seed={51} opacity={0.95} />
      <Line d="M56 76 L86 44 L104 60 L74 92 Z" seed={51} width={3} />
      <Line d="M70 62 L88 78" seed={51} width={2.4} />
    </Doodle>
  );
}

/** /compact — 折りたたんだ紙 */
export function DCompact({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={53}>
      <Fill d="M24 24 H96 V44 H24 Z" fill={C.mustard} seed={53} opacity={0.85} />
      <Fill d="M36 54 H84 V66 H36 Z" fill={C.mustard} seed={53} opacity={0.7} />
      <Fill d="M46 76 H74 V86 H46 Z" fill={C.mustard} seed={53} opacity={0.6} />
      <Line d="M24 24 H96 V44 H24 Z M36 54 H84 V66 H36 Z M46 76 H74 V86 H46 Z" seed={53} width={2.8} />
      <Line d="M60 46 V52 M60 68 V74" seed={53} width={2} />
    </Doodle>
  );
}

/** /rewind — 巻き戻しの矢印 */
export function DRewind({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={59}>
      <Fill d="M60 24 a36 36 0 1 1 -34 24" fill={C.blue} seed={59} opacity={0.35} />
      <Line d="M92 60 a32 32 0 1 1 -14 -26" seed={59} width={4} />
      <Line d="M78 16 L78 38 L58 34" seed={59} width={4} />
    </Doodle>
  );
}

/** /resume — しおりをはさんだ紙 */
export function DResume({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={61}>
      <Fill d="M26 20 H94 V98 H26 Z" fill={C.cream} seed={61} />
      <Line d="M26 20 H94 V98 H26 Z" seed={61} />
      <Line d="M38 42 H74 M38 56 H68" seed={61} width={1.8} />
      <Fill d="M72 20 H86 V62 L79 54 L72 62 Z" fill={C.terracotta} seed={61} opacity={0.9} />
      <Line d="M72 20 H86 V62 L79 54 L72 62 Z" seed={61} width={2.2} />
    </Doodle>
  );
}

/** /init — 旗（はじめの一歩） */
export function DInit({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={67}>
      <Line d="M34 100 V18" seed={67} width={4} />
      <Fill d="M36 22 L96 36 L36 58 Z" fill={C.green} seed={67} opacity={0.85} />
      <Line d="M36 22 L96 36 L36 58 Z" seed={67} width={3} />
      <Line d="M20 100 H56" seed={67} width={3} />
    </Doodle>
  );
}

/** /plan — 計画の箇条書き */
export function DPlan({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={71}>
      <Fill d="M26 18 H94 V102 H26 Z" fill={C.cream} seed={71} />
      <Line d="M26 18 H94 V102 H26 Z" seed={71} />
      {[38, 58, 78].map((y, i) => (
        <g key={y}>
          <Line d={`M36 ${y - 6} h10 v10 h-10 Z`} seed={71} width={2} />
          <Line d={`M54 ${y} h28`} seed={71} width={2} />
          {i === 0 && <Line d={`M37 ${y - 1} l4 4 l6 -8`} seed={71} width={2.4} color={C.green} />}
        </g>
      ))}
    </Doodle>
  );
}

/** /diff — 直す前と直したあと */
export function DDiff({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={73}>
      <Fill d="M14 26 H54 V94 H14 Z" fill={C.cream} seed={73} />
      <Fill d="M66 26 H106 V94 H66 Z" fill={C.green} seed={73} opacity={0.3} />
      <Line d="M14 26 H54 V94 H14 Z M66 26 H106 V94 H66 Z" seed={73} />
      <Line d="M24 44 H44 M24 58 H40" seed={73} width={1.8} />
      <Line d="M76 44 H96 M76 58 H92 M76 72 H88" seed={73} width={1.8} />
      <Line d="M58 60 h4" seed={73} width={2} />
    </Doodle>
  );
}

/** /model — つまみ（切り替え） */
export function DModel({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={79}>
      <Fill d="M60 26 a34 34 0 1 0 0.1 0" fill={C.mustard} seed={79} opacity={0.65} />
      <Line d="M60 26 a34 34 0 1 0 0.1 0" seed={79} />
      <Line d="M60 62 L60 32" seed={79} width={5} />
      <Fill d="M60 60 a6 6 0 1 0 0.1 0" fill={C.ink} seed={79} opacity={0.9} />
      <Line d="M24 60 h10 M86 60 h10 M60 94 v8 M36 36 l7 7 M84 36 l-7 7" seed={79} width={2.6} />
    </Doodle>
  );
}

/** /help — ？の吹き出し */
export function DHelp({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={83}>
      <Fill d="M18 22 H102 V76 H48 L30 94 V76 H18 Z" fill={C.blue} seed={83} opacity={0.4} />
      <Line d="M18 22 H102 V76 H48 L30 94 V76 H18 Z" seed={83} />
      <Line d="M50 40 q0 -10 10 -10 q12 0 12 10 q0 8 -10 10 v6" seed={83} width={3} />
      <Line d="M62 66 v3" seed={83} width={3.4} />
    </Doodle>
  );
}

/** /doctor — 聴診器（調子を見る） */
export function DDoctor({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={89}>
      <Line d="M34 22 v26 q0 20 20 20 q20 0 20 -20 v-26" seed={89} width={3.6} />
      <Line d="M28 20 h12 M68 20 h12" seed={89} width={3} />
      <Line d="M54 68 v12 q0 14 16 14 q14 0 14 -14 v-6" seed={89} width={3.6} />
      <Fill d="M84 52 a12 12 0 1 0 0.1 0" fill={C.terracotta} seed={89} opacity={0.9} />
      <Line d="M84 52 a12 12 0 1 0 0.1 0" seed={89} width={2.8} />
    </Doodle>
  );
}

/* ---------------- 種類の見出し用 ---------------- */

/** 会話を整える */
export function DTalk({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={91}>
      <Fill d="M14 28 H76 V66 H34 L22 80 V66 H14 Z" fill={C.mustard} seed={91} opacity={0.75} />
      <Line d="M14 28 H76 V66 H34 L22 80 V66 H14 Z" seed={91} width={2.2} />
      <Fill d="M52 50 H106 V86 H74 L62 98 V86 H52 Z" fill={C.blue} seed={91} opacity={0.45} />
      <Line d="M52 50 H106 V86 H74 L62 98 V86 H52 Z" seed={91} width={2.2} />
    </Doodle>
  );
}

/** 作る・確かめる */
export function DMake({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={97}>
      <Fill d="M30 86 L36 54 L48 56 L42 88 Z" fill={C.mustard} seed={97} />
      <Fill d="M30 86 L42 88 L33 98 Z" fill={C.ink} seed={97} opacity={0.7} />
      <Line d="M30 86 L36 54 L48 56 L42 88 L33 98 Z" seed={97} width={2.2} />
      <Line d="M62 54 L76 68 L100 36" seed={97} width={3.4} color={C.green} />
    </Doodle>
  );
}

/** 設定 */
export function DSetting({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={101}>
      <Line d="M24 38 H96 M24 60 H96 M24 82 H96" seed={101} width={2.4} />
      <Fill d="M44 38 a7 7 0 1 0 0.1 0" fill={C.terracotta} seed={101} />
      <Fill d="M74 60 a7 7 0 1 0 0.1 0" fill={C.blue} seed={101} opacity={0.9} />
      <Fill d="M54 82 a7 7 0 1 0 0.1 0" fill={C.green} seed={101} opacity={0.9} />
      <Line d="M44 38 a7 7 0 1 0 0.1 0 M74 60 a7 7 0 1 0 0.1 0 M54 82 a7 7 0 1 0 0.1 0" seed={101} width={2} />
    </Doodle>
  );
}

/** ほかの道具とつなぐ */
export function DConnect({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={103}>
      <Fill d="M20 46 H52 V74 H20 Z" fill={C.green} seed={103} opacity={0.5} />
      <Fill d="M68 46 H100 V74 H68 Z" fill={C.terracotta} seed={103} opacity={0.5} />
      <Line d="M20 46 H52 V74 H20 Z M68 46 H100 V74 H68 Z" seed={103} width={2.2} />
      <Line d="M52 60 H68" seed={103} width={3} />
      <Line d="M58 52 v16" seed={103} width={2} />
    </Doodle>
  );
}

/** 同時に進める */
export function DParallel({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={107}>
      <Line d="M20 42 H88" seed={107} width={2.6} />
      <Line d="M78 32 L92 42 L78 52" seed={107} width={2.6} />
      <Line d="M20 76 H88" seed={107} width={2.6} color={C.terracotta} />
      <Line d="M78 66 L92 76 L78 86" seed={107} width={2.6} color={C.terracotta} />
    </Doodle>
  );
}

/** 困ったとき */
export function DTrouble({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={109}>
      <Fill d="M60 24 a36 36 0 1 0 0.1 0" fill={C.pink} seed={109} opacity={0.5} />
      <Line d="M60 24 a36 36 0 1 0 0.1 0" seed={109} />
      <Line d="M60 40 v26" seed={109} width={3.4} />
      <Line d="M60 78 v3" seed={109} width={3.8} />
    </Doodle>
  );
}

/** 上級・特殊 */
export function DAdvanced({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={113}>
      <Fill d="M60 22 L71 50 L100 52 L77 70 L85 98 L60 82 L35 98 L43 70 L20 52 L49 50 Z" fill={C.mustard} seed={113} opacity={0.75} />
      <Line d="M60 22 L71 50 L100 52 L77 70 L85 98 L60 82 L35 98 L43 70 L20 52 L49 50 Z" seed={113} width={2.2} />
    </Doodle>
  );
}

/** コマンドごとの絵（まず覚える10個ぶん） */
export const CMD_DOODLE: Record<string, (p: P) => React.ReactElement> = {
  "/clear": DClear,
  "/compact": DCompact,
  "/rewind": DRewind,
  "/resume": DResume,
  "/init": DInit,
  "/plan": DPlan,
  "/diff": DDiff,
  "/model": DModel,
  "/help": DHelp,
  "/doctor": DDoctor,
};

/** 種類ごとの絵（commands.ts の CmdCat に対応） */
export const CAT_DOODLE: Record<string, (p: P) => React.ReactElement> = {
  talk: DTalk,
  work: DMake,
  setting: DSetting,
  connect: DConnect,
  parallel: DParallel,
  help: DTrouble,
  etc: DAdvanced,
};
