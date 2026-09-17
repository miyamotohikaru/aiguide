import Robot from "./Robot";
import Icon from "./Icons";

/** 公開のしくみ：自分のパソコン →（コピー）→ 置き場所 →（URL）→ みんな */
const ITEMS = [
  { label: "自分のパソコン", sub: "ローカル", icon: "pc", bg: "#fff1c2", note: "自分にしか見えない" },
  { label: "置き場所", sub: "ホスティング", icon: "cloud", bg: "#e6eeff", note: "24時間ネットに出す" },
  { label: "みんな", sub: "URLで見られる", icon: "phone", bg: "#d9f5ea", note: "スマホでもOK" },
] as const;

export default function PublishScene() {
  return (
    <figure className="ag-card relative overflow-hidden p-6 sm:p-10">
      <ol className="relative grid grid-cols-[minmax(0,1fr)] items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {ITEMS.map((it, i) => (
          <li key={it.label} className="contents">
            <div className="flex items-center gap-4 rounded-3xl p-4 md:flex-col md:p-6 md:text-center" style={{ background: it.bg }}>
              <span className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl border-[3px] border-ink bg-card shadow-[0_4px_0_rgba(35,35,63,0.9)] md:h-20 md:w-20">
                <Icon name={it.icon} className="h-8 w-8 md:h-10 md:w-10" strokeWidth={2} />
              </span>
              <div>
                <p className="font-round text-[1.15rem] font-extrabold leading-tight">{it.label}</p>
                <p className="text-[0.85rem] text-soft">{it.sub}</p>
                <p className="mt-1 inline-block rounded-full bg-card px-2.5 text-[0.78rem] font-bold">{it.note}</p>
              </div>
            </div>
            {i < 2 && (
              <div className="flex items-center justify-center gap-2 font-bold text-sky md:flex-col md:gap-1">
                <svg viewBox="0 0 60 24" className="hidden h-6 w-16 md:block" aria-hidden>
                  <path d="M2 12 H50" stroke="currentColor" strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" className="ag-dash" />
                  <path d="M44 4 L56 12 L44 20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span aria-hidden className="text-2xl md:hidden">↓</span>
                <span className="whitespace-nowrap text-[0.9rem]">{i === 0 ? "コピーする" : "URLを送る"}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
      <Robot pose="point" body="#3d6ff5" className="absolute -bottom-3 -right-3 hidden w-24 opacity-95 lg:block" />
    </figure>
  );
}
