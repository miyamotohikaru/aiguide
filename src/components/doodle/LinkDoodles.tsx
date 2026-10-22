import Doodle, { C, Fill, Line } from "./Doodle";

/**
 * 参考リンクの分類ごとの絵（120×120）。
 * 線はすくなく、色は2〜3色まで（Doodles と同じ決まり）。
 */
type P = { className?: string };

/** 公式の手引き — 本と、公式のしるし（ロゼット） */
export function LOfficial({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={229}>
      <Fill d="M20 18 H74 V100 H20 Z" fill={C.blue} seed={229} opacity={0.7} />
      <Line d="M20 18 H74 V100 H20 Z M28 18 V100" seed={229} />
      <Line d="M38 36 H64 M38 46 H58" seed={229} width={2} />
      <Fill d="M86 52 L80 82 L88 76 L94 84 L96 54 Z" fill={C.terracotta} seed={229} opacity={0.85} />
      <Fill d="M88 34 a16 16 0 1 0 0.1 0" fill={C.mustard} seed={229} />
      <Line d="M88 34 a16 16 0 1 0 0.1 0" seed={229} width={2.4} />
      <Line d="M82 50 L88 56 L96 44" seed={229} width={2.4} />
    </Doodle>
  );
}

/** スキル・プロンプトの配布 — リボンのかかった贈り物 */
export function LSkills({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={233}>
      <Fill d="M20 50 H100 V102 H20 Z" fill={C.mustard} seed={233} opacity={0.85} />
      <Fill d="M14 36 H106 V52 H14 Z" fill={C.mustard} seed={233} opacity={0.95} />
      <Fill d="M54 36 H66 V102 H54 Z" fill={C.terracotta} seed={233} opacity={0.85} />
      <Line d="M20 52 H100 V102 H20 Z M14 36 H106 V52 H14 Z M54 36 V102 M66 36 V102" seed={233} />
      <Line d="M60 36 q-22 -26 -30 -10 q-4 10 30 10 q34 0 30 -10 q-8 -16 -30 10" seed={233} width={2.4} />
    </Doodle>
  );
}

/** 公開サービスの手引き — 地球（世界中から見られる） */
export function LHosting({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={239}>
      <Fill d="M60 18 a42 42 0 1 0 0.1 0" fill={C.blue} seed={239} opacity={0.6} />
      <Fill d="M38 36 q14 -6 20 6 q-2 12 -14 14 q-10 8 -4 20 q-14 -6 -14 -22 q2 -12 12 -18 Z" fill={C.green} seed={239} opacity={0.85} />
      <Fill d="M74 64 q12 -4 16 8 q-4 12 -16 14 q-6 -10 0 -22 Z" fill={C.green} seed={239} opacity={0.85} />
      <Line d="M60 18 a42 42 0 1 0 0.1 0" seed={239} />
      <Line d="M18 60 H102 M60 18 q-24 42 0 84 M60 18 q24 42 0 84" seed={239} width={1.8} />
    </Doodle>
  );
}

/** 学習・入門 — えんぴつと定規 */
export function LLearn({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={241}>
      <Fill d="M14 78 L78 14 L96 32 L32 96 Z" fill={C.green} seed={241} opacity={0.6} />
      <Line d="M14 78 L78 14 L96 32 L32 96 Z" seed={241} />
      <Line d="M30 62 L38 70 M42 50 L48 56 M54 38 L62 46 M66 26 L72 32" seed={241} width={2} />
      <Fill d="M60 100 L92 44 L104 51 L72 107 Z" fill={C.mustard} seed={241} />
      <Fill d="M92 44 L97 35 L109 42 L104 51 Z" fill={C.pink} seed={241} />
      <Line d="M60 100 L92 44 L104 51 L72 107 Z M92 44 L97 35 L109 42 L104 51" seed={241} width={2.4} />
      <Line d="M60 100 L58 112 L72 107" seed={241} width={2.4} />
    </Doodle>
  );
}

/** デザインの素材と道具 — 丸・三角・四角の形 */
export function LDesign({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={251}>
      <Fill d="M40 20 a20 20 0 1 0 0.1 0" fill={C.terracotta} seed={251} opacity={0.85} />
      <Fill d="M84 30 L104 66 H64 Z" fill={C.mustard} seed={251} />
      <Fill d="M24 68 H62 V104 H24 Z" fill={C.blue} seed={251} opacity={0.8} />
      <Line d="M40 20 a20 20 0 1 0 0.1 0 M84 30 L104 66 H64 Z M24 68 H62 V104 H24 Z" seed={251} />
      <Line d="M76 100 q10 -24 26 -22" seed={251} width={2.4} />
      <Fill d="M98 72 l8 4 l-4 8 l-8 -4 Z" fill={C.ink} seed={251} opacity={0.8} />
    </Doodle>
  );
}

/** 色をえらぶ — 絵の具のパレット */
export function LColor({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={257}>
      <Fill
        d="M60 20 q42 0 44 34 q2 20 -18 18 q-14 -2 -12 12 q2 14 -16 16 q-40 2 -44 -36 q-2 -44 46 -44 Z"
        fill={C.cream}
        seed={257}
      />
      <Line d="M60 20 q42 0 44 34 q2 20 -18 18 q-14 -2 -12 12 q2 14 -16 16 q-40 2 -44 -36 q-2 -44 46 -44 Z" seed={257} />
      <Fill d="M40 40 a8 8 0 1 0 0.1 0" fill={C.terracotta} seed={257} />
      <Fill d="M64 32 a8 8 0 1 0 0.1 0" fill={C.mustard} seed={257} />
      <Fill d="M86 42 a8 8 0 1 0 0.1 0" fill={C.green} seed={257} />
      <Fill d="M32 64 a8 8 0 1 0 0.1 0" fill={C.blue} seed={257} />
      <Fill d="M46 84 a7 7 0 1 0 0.1 0" fill={C.pink} seed={257} />
      <Line
        d="M40 40 a8 8 0 1 0 0.1 0 M64 32 a8 8 0 1 0 0.1 0 M86 42 a8 8 0 1 0 0.1 0 M32 64 a8 8 0 1 0 0.1 0 M46 84 a7 7 0 1 0 0.1 0"
        seed={257}
        width={1.8}
      />
      <Line
        d="M40 40 a8 8 0 1 0 0.1 0 M64 32 a8 8 0 1 0 0.1 0 M86 42 a8 8 0 1 0 0.1 0 M32 64 a8 8 0 1 0 0.1 0 M46 84 a7 7 0 1 0 0.1 0"
        seed={257}
        width={1.8}
      />
    </Doodle>
  );
}

/** 自分の好きを見つける — 画びょうで留めた写真と、ハート */
export function LTaste({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={263}>
      <Fill d="M14 30 L58 22 L66 70 L22 78 Z" fill={C.cream} seed={263} />
      <Fill d="M20 36 L54 30 L58 56 L24 62 Z" fill={C.green} seed={263} opacity={0.7} />
      <Line d="M14 30 L58 22 L66 70 L22 78 Z" seed={263} />
      <circle cx={36} cy={27} r={4} fill={C.terracotta} />
      <Fill
        d="M84 98 q-30 -18 -30 -38 q0 -14 14 -14 q10 0 16 10 q6 -10 16 -10 q14 0 14 14 q0 20 -30 38 Z"
        fill={C.pink}
        seed={263}
        opacity={0.9}
      />
      <Line d="M84 98 q-30 -18 -30 -38 q0 -14 14 -14 q10 0 16 10 q6 -10 16 -10 q14 0 14 14 q0 20 -30 38 Z" seed={263} />
    </Doodle>
  );
}

/** 見本・ギャラリー — 壁にかかった額 */
export function LInspire({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={269}>
      <Fill d="M12 30 H62 V92 H12 Z" fill={C.cream} seed={269} />
      <Fill d="M20 38 H54 V84 H20 Z" fill={C.blue} seed={269} opacity={0.65} />
      <Fill d="M20 84 L32 64 L42 76 L48 68 L54 78 V84 Z" fill={C.green} seed={269} opacity={0.9} />
      <Fill d="M72 22 H108 V58 H72 Z" fill={C.cream} seed={269} />
      <Fill d="M90 32 a8 8 0 1 0 0.1 0" fill={C.terracotta} seed={269} opacity={0.85} />
      <Fill d="M72 68 H108 V100 H72 Z" fill={C.mustard} seed={269} opacity={0.75} />
      <Line d="M12 30 H62 V92 H12 Z M72 22 H108 V58 H72 Z M72 68 H108 V100 H72 Z" seed={269} />
    </Doodle>
  );
}

/** 世界のデザイン・広告の賞 — トロフィー */
export function LAwards({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={271}>
      <Fill d="M34 18 H86 V44 q0 26 -26 28 q-26 -2 -26 -28 Z" fill={C.mustard} seed={271} />
      <Line d="M34 18 H86 V44 q0 26 -26 28 q-26 -2 -26 -28 Z" seed={271} />
      <Line d="M34 26 H20 q0 22 18 24 M86 26 H100 q0 22 -18 24" seed={271} width={2.4} />
      <Line d="M60 72 V88" seed={271} width={3} />
      <Fill d="M40 88 H80 V102 H40 Z" fill={C.terracotta} seed={271} opacity={0.85} />
      <Line d="M40 88 H80 V102 H40 Z" seed={271} />
      <Line d="M60 30 l3 7 h7 l-6 4 l2 7 l-6 -4 l-6 4 l2 -7 l-6 -4 h7 Z" seed={271} width={1.8} />
    </Doodle>
  );
}

/** 動きの見本 — マウスの矢印と、動きの線 */
export function LMotion({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={277}>
      <Fill d="M50 30 L96 72 L74 74 L86 100 L76 104 L64 78 L50 92 Z" fill={C.cream} seed={277} />
      <Line d="M50 30 L96 72 L74 74 L86 100 L76 104 L64 78 L50 92 Z" seed={277} />
      <Line d="M14 40 H36 M10 56 H34 M18 72 H38" seed={277} width={2.4} color={C.blue} />
      <Line d="M54 16 q10 -6 20 0 M98 46 q8 4 8 14" seed={277} width={2.2} color={C.terracotta} />
    </Doodle>
  );
}

/** デザインの情報 — 新聞 */
export function LDesignInfo({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={281}>
      <Fill d="M16 24 H96 V96 H22 q-6 0 -6 -6 Z" fill={C.cream} seed={281} />
      <Fill d="M96 40 H106 V92 q0 4 -4 4 H96 Z" fill={C.cream} seed={281} />
      <Fill d="M26 34 H86 V44 H26 Z" fill={C.ink} seed={281} opacity={0.75} />
      <Fill d="M26 52 H52 V74 H26 Z" fill={C.pink} seed={281} opacity={0.85} />
      <Line d="M16 24 H96 V96 H22 q-6 0 -6 -6 Z M96 40 H106 V92 q0 4 -4 4 H96" seed={281} />
      <Line d="M60 54 H86 M60 64 H86 M60 74 H80 M26 84 H86" seed={281} width={1.8} />
    </Doodle>
  );
}

/** 新しい情報を追う — 鳴っているベル */
export function LNews({ className = "" }: P) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={283}>
      <Fill d="M60 22 q24 0 26 30 q0 22 12 32 H22 q12 -10 12 -32 q2 -30 26 -30 Z" fill={C.mustard} seed={283} />
      <Line d="M60 22 q24 0 26 30 q0 22 12 32 H22 q12 -10 12 -32 q2 -30 26 -30 Z" seed={283} />
      <Line d="M60 14 V22" seed={283} width={2.6} />
      <Fill d="M50 90 q10 14 20 0 Z" fill={C.terracotta} seed={283} />
      <Line d="M50 90 q10 14 20 0" seed={283} width={2.4} />
      <Line d="M14 40 q-4 12 2 22 M106 40 q4 12 -2 22" seed={283} width={2.2} color={C.terracotta} />
    </Doodle>
  );
}

export const LINK_DOODLE: Record<string, (p: P) => React.ReactElement> = {
  official: LOfficial,
  skills: LSkills,
  hosting: LHosting,
  learn: LLearn,
  design: LDesign,
  color: LColor,
  taste: LTaste,
  inspire: LInspire,
  awards: LAwards,
  motion: LMotion,
  designinfo: LDesignInfo,
  news: LNews,
};
