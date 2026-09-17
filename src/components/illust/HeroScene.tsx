import Robot from "./Robot";

/**
 * トップの大きな絵。
 * 手元のパソコンで作ったサイトが、ロケットで飛んで、地球のみんなのスマホに届く。
 */
const INK = "#23233f";
const s = { stroke: INK, strokeWidth: 5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export default function HeroScene({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 560 460" className="w-full" aria-hidden>
        {/* 背景の円 */}
        <circle cx="300" cy="230" r="200" fill="#fff1c2" />
        {/* きらきら */}
        {[
          [70, 70, "#f0533f"],
          [510, 90, "#3d6ff5"],
          [520, 330, "#0f9f76"],
          [110, 380, "#7a55e6"],
        ].map(([x, y, c], i) => (
          <path key={i} className="ag-spin" d={`M${x} ${+y - 14} L${+x + 4} ${+y - 4} L${+x + 14} ${y} L${+x + 4} ${+y + 4} L${x} ${+y + 14} L${+x - 4} ${+y + 4} L${+x - 14} ${y} L${+x - 4} ${+y - 4}Z`} fill={c as string} />
        ))}

        {/* 道（点線） */}
        <path d="M150 300 C 200 160, 330 120, 420 170" fill="none" stroke={INK} strokeWidth="4" strokeDasharray="4 14" strokeLinecap="round" className="ag-dash" opacity="0.5" />

        {/* パソコン */}
        <g>
          <rect x="40" y="250" width="200" height="130" rx="16" fill="#fff" {...s} />
          <rect x="56" y="266" width="168" height="98" rx="8" fill="#e6eeff" />
          <rect x="68" y="278" width="80" height="12" rx="6" fill="#3d6ff5" />
          <rect x="68" y="298" width="140" height="8" rx="4" fill={INK} opacity="0.25" />
          <rect x="68" y="312" width="110" height="8" rx="4" fill={INK} opacity="0.25" />
          <rect x="68" y="332" width="54" height="20" rx="10" fill="#f0533f" />
          <path d="M20 392 H260 L244 380 H36 Z" fill="#fff" {...s} />
        </g>

        {/* 地球 */}
        <g className="ag-float-slow">
          <circle cx="440" cy="250" r="78" fill="#3d6ff5" {...s} />
          <path d="M392 210 c20 -10 34 4 30 20 s-24 18 -18 36 s-10 30 -26 18 M450 180 c14 16 40 10 46 30 s-18 22 -8 40 M470 300 c-14 -12 -36 -6 -40 10" fill="#0f9f76" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
          {/* スマホたち */}
          {[
            [360, 150, -14],
            [520, 180, 12],
            [500, 330, -8],
          ].map(([x, y, r], i) => (
            <g key={i} transform={`rotate(${r} ${x} ${y})`}>
              <rect x={+x - 20} y={+y - 34} width="40" height="68" rx="9" fill="#fff" {...s} strokeWidth={4} />
              <rect x={+x - 13} y={+y - 24} width="26" height="36" rx="4" fill={["#ffe3dd", "#d9f5ea", "#ece6ff"][i]} />
              <path d={`M${+x - 6} ${+y - 8} l5 5 9 -10`} stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
          ))}
        </g>

        {/* ロケット */}
        <g className="ag-float">
          <g transform="translate(290 150) rotate(40)">
            <path d="M0 -58 C 26 -40 30 -6 22 24 H -22 C -30 -6 -26 -40 0 -58Z" fill="#fff" {...s} />
            <circle cx="0" cy="-16" r="11" fill="#7ff0c8" {...s} strokeWidth={4} />
            <path d="M-22 6 L-40 30 L-20 26 M22 6 L40 30 L20 26" fill="#f0533f" {...s} strokeWidth={4} />
            <path d="M-12 26 Q0 58 12 26" fill="#f5b100" {...s} strokeWidth={4} />
          </g>
        </g>
      </svg>
      <Robot pose="wave" body="#f0533f" className="absolute bottom-[3%] left-[43%] w-[22%]" />
    </div>
  );
}
