import J from "../J";
import Reveal from "../Reveal";
import type { Mode } from "@/data/ai-detail-types";

/**
 * 「考える深さ」を、左（速い・軽い）→右（深い・重い）のメーターで見せる。
 * データは弱い→強いの順で並んでいる前提。
 */
export default function DepthGauge({ items, color }: { items: Mode[]; color: string }) {
  return (
    <div className="ag-card p-5 sm:p-8">
      <div className="flex items-center justify-between text-[0.85rem] font-bold text-soft">
        <span>⚡ 速い・軽い</span>
        <span>じっくり・深い 🧠</span>
      </div>
      <div className="mt-2 h-4 overflow-hidden rounded-full bg-paper-2" aria-hidden>
        <div className="h-full w-full rounded-full" style={{ background: `linear-gradient(90deg, #d9f5ea, ${color})` }} />
      </div>
      <ol className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((m, i) => (
          <Reveal as="li" key={m.name} delay={i * 50} className="flex gap-3 rounded-2xl bg-paper p-4">
            <div className="flex flex-none flex-col items-center gap-1 pt-1" aria-hidden>
              {/* 深さのバー */}
              <div className="flex h-10 items-end gap-0.5">
                {items.map((_, k) => (
                  <span key={k} className="w-1.5 rounded-full" style={{ height: `${30 + (70 * k) / Math.max(1, items.length - 1)}%`, background: k <= i ? color : "var(--ag-line)" }} />
                ))}
              </div>
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[1rem] font-semibold">{m.name}</p>
              <p className="mt-1 text-[0.93rem]">
                <J text={m.what} />
              </p>
              <p className="mt-1.5 text-[0.85rem] text-soft">
                <span className="mr-1 font-bold text-ink">使いどき</span>
                <J text={m.when} />
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
