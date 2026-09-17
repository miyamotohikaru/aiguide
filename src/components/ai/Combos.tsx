import Icon from "../illust/Icons";
import J from "../J";
import Reveal from "../Reveal";
import { COMBOS } from "@/data/ai";
import { TONE } from "@/lib/site";

/** おすすめの組み合わせを、矢印でつないだ3コマで見せる */
export default function Combos() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-5">
      {COMBOS.map((c, ci) => (
        <Reveal key={c.title} delay={ci * 100}>
          <div className="ag-card p-5 sm:p-7">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-[1.25rem] font-extrabold">{c.title}</h3>
              <p className="text-soft">
                <J text={c.lead} />
              </p>
            </div>
            <ol className="mt-5 flex flex-col items-stretch gap-2 md:flex-row md:items-center">
              {c.steps.map((s, i) => (
                <li key={s.tool} className="contents">
                  <div className={`flex items-center gap-3 rounded-2xl p-4 md:flex-1 ${TONE[s.tone].bg}`}>
                    <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-full text-white ${TONE[s.tone].solid}`}>
                      <Icon name={s.icon} className="h-5 w-5" strokeWidth={2.4} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.8rem] font-bold text-soft">STEP {i + 1}</p>
                      <p className="font-round font-extrabold leading-snug">
                        <J text={s.tool} />
                      </p>
                      <p className="text-[0.9rem]">{s.act}</p>
                    </div>
                  </div>
                  {i < c.steps.length - 1 && (
                    <span className="flex justify-center text-coral" aria-hidden>
                      <Icon name="arrow" className="h-7 w-7 rotate-90 md:rotate-0" strokeWidth={2.8} />
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
