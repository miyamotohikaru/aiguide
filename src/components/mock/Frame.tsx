/**
 * 画面の見本の枠。本物のスクリーンショットではなく、
 * 「どこを押すか」だけが伝わるように簡略化して描く。
 */
export function Browser({ url, children, tone = "#3d6ff5" }: { url: string; children: React.ReactNode; tone?: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border-[3px] border-ink bg-card text-[13px] leading-snug shadow-[0_6px_0_rgba(35,35,63,0.9)]" aria-hidden>
      <div className="flex items-center gap-1.5 border-b-[3px] border-ink bg-paper-2 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-coral" />
        <span className="h-2.5 w-2.5 rounded-full bg-sun" />
        <span className="h-2.5 w-2.5 rounded-full bg-mint" />
        <span className="ml-2 min-w-0 flex-1 truncate rounded-full bg-card px-2.5 py-0.5 font-mono text-[11px] text-soft">{url}</span>
      </div>
      <div className="relative p-4" style={{ ["--mock" as string]: tone }}>
        {children}
      </div>
    </figure>
  );
}

export function App({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-2xl border-[3px] border-ink bg-card text-[13px] leading-snug shadow-[0_6px_0_rgba(35,35,63,0.9)]" aria-hidden>
      <div className="flex items-center gap-1.5 border-b-[3px] border-ink bg-paper-2 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-coral" />
        <span className="h-2.5 w-2.5 rounded-full bg-sun" />
        <span className="h-2.5 w-2.5 rounded-full bg-mint" />
        <span className="ml-2 font-bold text-soft">{title}</span>
      </div>
      <div className="relative p-4">{children}</div>
    </figure>
  );
}

/** 押すボタン。光る輪と、指のカーソルつき */
export function Hot({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-flex ${className}`}>
      <span className="absolute -inset-1.5 animate-ping rounded-xl bg-coral/30 motion-reduce:animate-none" />
      <span className="relative inline-flex items-center rounded-lg bg-ink px-3 py-1.5 font-bold text-white">{children}</span>
      <svg viewBox="0 0 24 24" className="absolute -bottom-5 -right-4 h-7 w-7 drop-shadow" aria-hidden>
        <path d="M9 3.5a1.5 1.5 0 0 1 3 0V10l5.2 1.2a2 2 0 0 1 1.5 2.3l-1 5A3 3 0 0 1 14.8 21H11a3 3 0 0 1-2.4-1.2l-3.3-4.4a1.5 1.5 0 0 1 2.3-1.9L9 15z" fill="#fff" stroke="#23233f" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** ぼかした行（中身は読まなくていい所） */
export function Line({ w = "100%", c = "rgba(35,35,63,0.14)" }: { w?: string; c?: string }) {
  return <span className="block h-2 rounded-full" style={{ width: w, background: c }} />;
}
