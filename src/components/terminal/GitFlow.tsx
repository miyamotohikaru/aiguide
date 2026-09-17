import { GIT_FLOW } from "@/data/terminal";
import Icon from "../illust/Icons";
import J from "../J";

/** 選ぶ → セーブ → 送る。ゲームのセーブにたとえた図 */
export default function GitFlow() {
  return (
    <ol className="grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-3 md:gap-5">
      {GIT_FLOW.map((g, i) => (
        <li key={g.cmd} className="relative">
          <div className="ag-card flex h-full flex-col items-center p-5 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-grape text-white shadow-[0_4px_0_rgba(35,35,63,0.9)]">
              <Icon name={g.icon} className="h-7 w-7" strokeWidth={2.4} />
            </span>
            <p className="mt-3 font-round text-[1.3rem] font-extrabold">
              {i + 1}. {g.name}
            </p>
            <p className="text-[0.92rem] text-soft">
              <J text={g.desc} />
            </p>
            <code className="mt-3 block max-w-full overflow-x-auto whitespace-nowrap rounded-lg bg-[#1d1d33] px-3 py-1.5 font-mono text-[0.82rem] text-white">
              {g.cmd}
            </code>
          </div>
          {i < GIT_FLOW.length - 1 && (
            <span
              className="absolute left-1/2 top-full z-10 -translate-x-1/2 text-[1.4rem] font-extrabold text-grape md:left-full md:top-1/2 md:-translate-y-1/2 md:translate-x-[-0.15rem] md:text-[1.6rem]"
              aria-hidden
            >
              <span className="md:hidden">↓</span>
              <span className="hidden md:inline">→</span>
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
