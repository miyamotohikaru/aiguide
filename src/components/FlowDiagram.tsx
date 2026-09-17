import J from "./J";

/**
 * 公開のしくみ図。
 * 自分のパソコン →（コピー）→ 置き場所 →（URL）→ みんな
 * 横に並べるとスマホで字が潰れるので、狭い幅では縦に並べる。
 */
const ITEMS = [
  { label: "自分のパソコン", sub: "ローカル", icon: "pc" },
  { label: "置き場所", sub: "ホスティング", icon: "cloud" },
  { label: "みんな", sub: "URLで見られる", icon: "people" },
] as const;
const ARROWS = ["コピーする", "URLを送る"];

function Icon({ name }: { name: (typeof ITEMS)[number]["icon"] }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  if (name === "pc")
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
        <rect x="6" y="9" width="36" height="24" rx="3" {...s} />
        <path d="M18 40h12M24 33v7" {...s} />
        <path d="M13 17h10M13 23h16" {...s} />
      </svg>
    );
  if (name === "cloud")
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
        <path d="M14 36h21a8 8 0 0 0 1-15.9A11 11 0 0 0 15 18a9 9 0 0 0-1 18z" {...s} />
        <path d="M24 31v-9m-4 4 4-4 4 4" {...s} />
      </svg>
    );
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
      <circle cx="17" cy="17" r="5" {...s} />
      <circle cx="33" cy="17" r="5" {...s} />
      <path d="M7 38c0-6 4.5-10 10-10s10 4 10 10M23 38c0-6 4.5-10 10-10s8 4 8 10" {...s} />
    </svg>
  );
}

export default function FlowDiagram() {
  return (
    <figure className="ag-box p-5 sm:p-8">
      <ol className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
        {ITEMS.map((it, i) => (
          <li key={it.label} className="contents">
            <div
              className={`flex items-center gap-3 rounded-xl border-2 border-ink px-4 py-3 sm:flex-1 sm:flex-col sm:py-5 sm:text-center ${
                i === 1 ? "bg-blue-bg" : "bg-paper"
              }`}
            >
              <Icon name={it.icon} />
              <div>
                <p className="font-bold leading-tight">{it.label}</p>
                <p className="text-[0.85rem] text-soft">{it.sub}</p>
              </div>
            </div>
            {i < ARROWS.length && (
              <div className="flex items-center justify-center gap-2 py-1 text-[0.85rem] font-bold text-blue sm:w-28 sm:flex-col sm:gap-0">
                <span aria-hidden className="text-xl leading-none sm:hidden">↓</span>
                <span aria-hidden className="hidden text-2xl leading-none sm:block">→</span>
                <span className="whitespace-nowrap">{ARROWS[i]}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="mt-5 text-[0.92rem] text-soft">
        <J text="公開とは、自分のパソコンにあるファイルを、ネット上の置き場所にコピーすること。" />
      </figcaption>
    </figure>
  );
}
