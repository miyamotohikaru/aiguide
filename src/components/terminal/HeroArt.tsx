import Robot from "../illust/Robot";

/** ガイドくんが黒い画面とおしゃべりしている絵 */
export default function HeroArt() {
  return (
    <div className="relative mx-auto aspect-[10/9] w-full max-w-[420px]" aria-hidden>
      {/* 窓 */}
      <div className="ag-float-slow absolute right-0 top-[14%] w-[76%] overflow-hidden rounded-2xl border-[3px] border-ink bg-[#1d1d33] shadow-[6px_6px_0_rgba(35,35,63,0.9)]">
        <div className="flex gap-1.5 bg-[#2b2b48] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="px-4 py-3 font-mono text-[0.78rem] leading-[1.9] text-[#e8e8f5] sm:text-[0.9rem]">
          <div>
            <span className="text-[#7ff0c8]">%</span> ls
          </div>
          <div className="text-[#b9b9d6]">index.html style.css</div>
          <div>
            <span className="text-[#7ff0c8]">%</span> open .
          </div>
          <div>
            <span className="text-[#7ff0c8]">%</span> <span className="ag-caret inline-block h-[1em] w-[0.5em] translate-y-[0.12em] bg-[#7ff0c8]" />
          </div>
        </div>
      </div>
      {/* ふきだし */}
      <div className="absolute left-[2%] top-0 z-10 rounded-2xl rounded-bl-sm border-[3px] border-ink bg-card px-3 py-1.5 font-round text-[0.9rem] font-extrabold shadow-[3px_3px_0_rgba(35,35,63,0.9)] sm:text-[1rem]">
        文字で話しかけるだけ！
      </div>
      {/* 飛んでいる記号 */}
      <svg viewBox="0 0 100 100" className="ag-float absolute bottom-[30%] right-[4%] w-[16%]">
        <rect x="8" y="8" width="84" height="84" rx="22" fill="#f5b100" stroke="#23233f" strokeWidth="7" />
        <path d="M34 34 50 50 34 66M56 66h14" stroke="#23233f" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg viewBox="0 0 100 100" className="ag-float-slow absolute bottom-[8%] right-[26%] w-[11%]">
        <circle cx="50" cy="50" r="42" fill="#0f9f76" stroke="#23233f" strokeWidth="8" />
        <path d="M58 30 42 70" stroke="#fff" strokeWidth="9" strokeLinecap="round" />
      </svg>
      <Robot pose="point" body="#7a55e6" className="absolute bottom-0 left-0 w-[46%]" />
    </div>
  );
}
