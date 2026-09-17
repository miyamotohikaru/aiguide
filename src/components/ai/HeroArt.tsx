import Robot from "../illust/Robot";

/** ガイドくんが、4種類の道具（AI）を並べて選んでいる絵 */
const INK = "#23233f";

function Tile({ x, y, fill, rot, children, cls }: { x: number; y: number; fill: string; rot: number; children: React.ReactNode; cls?: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <g className={cls}>
        <rect x="-38" y="-38" width="76" height="76" rx="20" fill={fill} stroke={INK} strokeWidth="5" />
        <g fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {children}
        </g>
      </g>
    </g>
  );
}

export default function HeroArt() {
  return (
    <svg viewBox="0 0 420 360" className="h-auto w-full" role="img">
      <title>ガイドくんが4種類のAIを並べて選んでいる</title>
      {/* 台 */}
      <ellipse cx="210" cy="330" rx="180" ry="18" fill={INK} opacity="0.1" />
      <path d="M40 300 Q210 270 380 300" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" strokeDasharray="2 14" />
      {/* 4つの道具 */}
      <Tile x={70} y={90} fill="#3d6ff5" rot={-8} cls="ag-float">
        <path d="M-18 -14h36v22h-18l-12 10v-10h-6z" />
      </Tile>
      <Tile x={350} y={80} fill="#e0487a" rot={7} cls="ag-float-slow">
        <path d="M0 -20v10M0 10v10M-20 0h10M10 0h10M-13 -13l6 6M7 7l6 6M13 -13l-6 6M-7 7l-6 6" />
      </Tile>
      <Tile x={60} y={220} fill="#0f9f76" rot={6} cls="ag-float-slow">
        <path d="M-20 -14h40v24h-40zM-8 20h16M0 10v10" />
      </Tile>
      <Tile x={362} y={214} fill="#7a55e6" rot={-6} cls="ag-float">
        <path d="M-18 -8h36v24h-36zM0 -8v-10M-7 3v4M7 3v4" />
      </Tile>
      {/* きらきら */}
      <g fill="#f5b100" stroke={INK} strokeWidth="3" strokeLinejoin="round">
        <path className="ag-float" d="M210 18l6 14 14 6-14 6-6 14-6-14-14-6 14-6z" />
        <path className="ag-float-slow" d="M140 40l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" />
        <path d="M290 150l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" />
      </g>
      {/* ガイドくん */}
      <svg x="110" y="70" width="210" height="230" viewBox="0 0 220 230">
        <Robot pose="think" body="#f0533f" />
      </svg>
    </svg>
  );
}
