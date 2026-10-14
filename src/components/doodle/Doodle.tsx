/**
 * 手描き（クレヨン・色えんぴつ）風のイラストの土台。
 *
 * ねらい: 参考画像のように、
 *   ・輪郭がわずかに揺れている
 *   ・塗りに粒が残っていて、紙の地がすこし透ける
 *   ・色は淡く、数はすくない
 * これを SVG のフィルターだけで作る（画像ファイルは持たない）。
 */

/** 色。彩度を落とした、クレヨンの箱のような6色だけ */
export const C = {
  ink: "#2f2c28",
  terracotta: "#d08a68",
  mustard: "#e4bf72",
  blue: "#7d9cc4",
  green: "#8aa476",
  cream: "#f0e6d6",
  pink: "#dfa9a0",
} as const;

/**
 * 粒（紙の目）と、揺れた輪郭のフィルター。
 * seed を変えると粒の出方が変わるので、絵ごとに違う値を渡す。
 *
 * filterUnits="userSpaceOnUse" は必須。
 * 既定（図形の外接矩形を基準）だと、まっすぐな縦線・横線は矩形の幅か高さが0になり、
 * フィルターの適用範囲も0になって、線ごと消えてしまう。
 */
export function DoodleDefs({ seed = 3 }: { seed?: number }) {
  return (
    <defs>
      {/* 塗り: ノイズでまだらに抜いて、クレヨンの粒を作る */}
      <filter id={`grain-${seed}`} filterUnits="userSpaceOnUse" x="-20" y="-20" width="160" height="160">
        <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" seed={seed} result="n" />
        <feColorMatrix
          in="n"
          type="matrix"
          values="0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 1.1 -0.25"
          result="a"
        />
        <feComposite in="SourceGraphic" in2="a" operator="in" />
      </filter>
      {/* 線: すこし揺らして、定規で引いていない線にする */}
      <filter id={`wobble-${seed}`} filterUnits="userSpaceOnUse" x="-20" y="-20" width="160" height="160">
        <feTurbulence type="fractalNoise" baseFrequency="0.028" numOctaves="2" seed={seed + 11} result="w" />
        <feDisplacementMap in="SourceGraphic" in2="w" scale="3.2" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  );
}

/** 塗り（粒つき）。手描きらしく、わざと線からはみ出させて使う */
export function Fill({ d, fill, seed = 3, opacity = 0.92 }: { d: string; fill: string; seed?: number; opacity?: number }) {
  return <path d={d} fill={fill} opacity={opacity} filter={`url(#grain-${seed})`} />;
}

/** 線（揺れつき） */
export function Line({
  d,
  seed = 3,
  width = 2.6,
  color = C.ink,
  cap = "round",
  fill = "none",
}: {
  d: string;
  seed?: number;
  width?: number;
  color?: string;
  cap?: "round" | "butt";
  fill?: string;
}) {
  return (
    <path
      d={d}
      fill={fill}
      stroke={color}
      strokeWidth={width}
      strokeLinecap={cap}
      strokeLinejoin="round"
      filter={`url(#wobble-${seed})`}
    />
  );
}

/** イラストの外枠。中身は呼ぶ側が描く */
export default function Doodle({
  viewBox,
  className = "",
  seed = 3,
  title,
  children,
}: {
  viewBox: string;
  className?: string;
  seed?: number;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <svg viewBox={viewBox} className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <DoodleDefs seed={seed} />
      {children}
    </svg>
  );
}
