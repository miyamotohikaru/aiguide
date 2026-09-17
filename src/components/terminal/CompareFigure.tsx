import J from "../J";
import Icon from "../illust/Icons";

/** 同じ「フォルダを開く」を、マウスと文字でくらべる */
export default function CompareFigure() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      {/* マウス */}
      <figure className="ag-card p-5 sm:p-6">
        <p className="flex items-center gap-2 font-round text-[1.1rem] font-extrabold">
          <Icon name="cursor" className="h-5 w-5 text-sky" strokeWidth={2.6} />
          いつものやり方
        </p>
        <p className="text-[0.9rem] text-soft">マウスで、見て、クリック。</p>
        <svg viewBox="0 0 320 170" className="mt-4 w-full" aria-hidden>
          <rect x="4" y="4" width="312" height="162" rx="16" fill="#fffaf1" stroke="#23233f" strokeWidth="4" />
          <path d="M4 36h312" stroke="#23233f" strokeWidth="4" />
          <circle cx="24" cy="20" r="5" fill="#ff5f57" />
          <circle cx="42" cy="20" r="5" fill="#febc2e" />
          <circle cx="60" cy="20" r="5" fill="#28c840" />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${30 + i * 96} 58)`}>
              <path d="M0 12a8 8 0 0 1 8-8h22l8 8h30a8 8 0 0 1 8 8v42a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z" fill={i === 1 ? "#3d6ff5" : "#e6eeff"} stroke="#23233f" strokeWidth="4" />
              <text x="38" y="92" textAnchor="middle" fontSize="15" fontWeight="700" fill="#23233f">
                {["images", "mysite", "memo"][i]}
              </text>
            </g>
          ))}
          <path d="M178 104 l0 40 10 -10 8 16 8 -4 -8 -16 14 0z" fill="#fff" stroke="#23233f" strokeWidth="4" strokeLinejoin="round" />
        </svg>
        <p className="mt-2 text-[0.95rem]">
          <J text="「mysite」のフォルダを、ダブルクリック。" />
        </p>
      </figure>

      <div className="flex items-center justify-center font-round text-[1.1rem] font-extrabold text-grape" aria-hidden>
        <span className="rounded-full bg-grape-bg px-4 py-2">＝ 同じこと ＝</span>
      </div>

      {/* 文字 */}
      <figure className="ag-card p-5 sm:p-6">
        <p className="flex items-center gap-2 font-round text-[1.1rem] font-extrabold">
          <Icon name="terminal" className="h-5 w-5 text-grape" strokeWidth={2.6} />
          ターミナルのやり方
        </p>
        <p className="text-[0.9rem] text-soft">文字で、命令を打つ。</p>
        <div className="mt-4 overflow-hidden rounded-2xl border-4 border-ink bg-[#1d1d33]">
          <div className="flex gap-1.5 border-b-4 border-ink bg-[#2b2b48] px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="overflow-x-auto px-4 py-5 font-mono text-[0.95rem] leading-[2] text-white">
            <div className="whitespace-nowrap">
              <span className="text-[#7ff0c8]">%</span> cd mysite
            </div>
            <div className="whitespace-nowrap">
              <span className="text-[#7ff0c8]">%</span> open .
            </div>
          </div>
        </div>
        <p className="mt-3 text-[0.95rem]">
          <J text="「mysite に入って（cd）、開いて（open）」と打つ。" />
        </p>
      </figure>
    </div>
  );
}
