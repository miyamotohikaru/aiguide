/**
 * ガイド役のロボット「ガイドくん」。
 * pose: wave（手をふる）/ point（指さす）/ cheer（両手をあげる）/ think（考える）
 * 線は太め（ink）、塗りは明るく。どの章の色でも着せ替えられるよう body 色を受け取る。
 */
type Pose = "wave" | "point" | "cheer" | "think";

const INK = "#23233f";

export default function Robot({
  pose = "wave",
  body = "#3d6ff5",
  className = "",
  title,
}: {
  pose?: Pose;
  body?: string;
  className?: string;
  title?: string;
}) {
  const s = { stroke: INK, strokeWidth: 5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  const armL =
    pose === "cheer" ? "M46 118 L22 80" : pose === "think" ? "M46 122 L34 150" : "M46 122 L30 152";
  const armR =
    pose === "wave" ? "M154 118 L178 82" : pose === "point" ? "M154 122 L192 112" : pose === "cheer" ? "M154 118 L178 80" : "M154 120 L130 96";
  const handL = pose === "cheer" ? [20, 76] : pose === "think" ? [33, 154] : [29, 156];
  const handR =
    pose === "wave" ? [180, 78] : pose === "point" ? [197, 111] : pose === "cheer" ? [180, 76] : [126, 92];

  return (
    <svg viewBox="0 0 220 230" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      {/* 影 */}
      <ellipse cx="100" cy="218" rx="54" ry="8" fill={INK} opacity="0.12" />
      {/* アンテナ */}
      <path d="M100 30 V12" {...s} />
      <circle cx="100" cy="10" r="8" fill="#f5b100" {...s} strokeWidth={4} />
      {/* 腕（体の後ろ） */}
      <path d={armL} {...s} strokeWidth={9} />
      <g className={pose === "wave" ? "ag-wiggle" : undefined}>
        <path d={armR} {...s} strokeWidth={9} />
        <circle cx={handR[0]} cy={handR[1]} r="9" fill="#fff" {...s} strokeWidth={4} />
      </g>
      <circle cx={handL[0]} cy={handL[1]} r="9" fill="#fff" {...s} strokeWidth={4} />
      {/* 足 */}
      <path d="M80 184 V206 M120 184 V206" {...s} strokeWidth={9} />
      <path d="M70 208 H88 M112 208 H130" {...s} strokeWidth={8} />
      {/* 体 */}
      <rect x="46" y="104" width="108" height="84" rx="26" fill={body} {...s} />
      <rect x="72" y="126" width="56" height="34" rx="10" fill="#fff" opacity="0.9" />
      <path d="M84 143 h10 M104 143 h12" stroke={body} strokeWidth="5" strokeLinecap="round" />
      {/* 頭 */}
      <rect x="36" y="28" width="128" height="84" rx="30" fill="#fff" {...s} />
      <rect x="50" y="42" width="100" height="56" rx="20" fill={INK} />
      {/* 目 */}
      <g className="ag-blink">
        {pose === "think" ? (
          <>
            <path d="M72 70 q8 -8 16 0" stroke="#7ff0c8" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M112 70 q8 -8 16 0" stroke="#7ff0c8" strokeWidth="5" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx="80" cy="68" rx="7" ry="9" fill="#7ff0c8" />
            <ellipse cx="120" cy="68" rx="7" ry="9" fill="#7ff0c8" />
          </>
        )}
      </g>
      <path d="M90 84 q10 8 20 0" stroke="#7ff0c8" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* ほっぺ */}
      <circle cx="62" cy="84" r="5" fill="#f0533f" opacity="0.7" />
      <circle cx="138" cy="84" r="5" fill="#f0533f" opacity="0.7" />
      {pose === "think" && (
        <g>
          <circle cx="182" cy="40" r="5" fill="#fff" {...s} strokeWidth={3} />
          <circle cx="196" cy="22" r="8" fill="#fff" {...s} strokeWidth={3} />
        </g>
      )}
    </svg>
  );
}
