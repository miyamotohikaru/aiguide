import { CLAUDE_PLACES } from "@/data/terminal";
import Icon from "../illust/Icons";
import Rich from "../Rich";
import J from "../J";

/** Claude Code を使える4つの場所。ターミナルが要るのは1つだけ */
export default function PlacesFigure() {
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {CLAUDE_PLACES.map((p) => (
        <li
          key={p.name}
          className={`relative flex flex-col items-center rounded-3xl p-4 text-center sm:p-5 ${p.terminal ? "bg-[#1d1d33] text-white" : "ag-card"}`}
        >
          <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${p.terminal ? "bg-[#7ff0c8] text-ink" : "bg-grape-bg text-grape"}`}>
            <Icon name={p.icon} className="h-6 w-6" strokeWidth={2.4} />
          </span>
          <p className="mt-2 font-round font-extrabold leading-tight">
            <J text={p.name} />
          </p>
          <p className={`mt-1 text-[0.85rem] ${p.terminal ? "text-white/70" : "text-soft"}`}>
            <Rich text={p.sub} />
          </p>
          <span
            className={`mt-3 rounded-full px-2.5 py-0.5 text-[0.75rem] font-bold ${p.terminal ? "bg-white/15 text-white" : "bg-mint-bg text-mint"}`}
          >
            {p.terminal ? "ターミナルを使う" : "ターミナル不要"}
          </span>
        </li>
      ))}
    </ul>
  );
}
