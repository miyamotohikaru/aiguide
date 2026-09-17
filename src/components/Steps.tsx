import J from "./J";
import Rich from "./Rich";
import Callout from "./Callout";
import Reveal from "./Reveal";
import { TONE, type Tone } from "@/lib/site";

export type StepItem = { title: string; body: string; tip?: string; warn?: string; visual?: React.ReactNode };

/**
 * 手順を1本の道に並べる。番号の玉を線でつなぎ、
 * 図（画面の見本など）があれば右（スマホでは下）に置く。
 */
export default function Steps({ steps, tone = "sky" }: { steps: StepItem[]; tone?: Tone }) {
  const t = TONE[tone];
  return (
    <ol className="relative grid grid-cols-[minmax(0,1fr)] gap-6">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} className="relative flex gap-4 sm:gap-6">
          <div className="flex flex-none flex-col items-center">
            <span className={`ag-num z-10 text-[1rem] ${t.solid}`}>{i + 1}</span>
            {i < steps.length - 1 && <span className="mt-2 w-1 flex-1 rounded-full bg-line" aria-hidden />}
          </div>
          <div className={`ag-card min-w-0 flex-1 p-5 sm:p-7 ${s.visual ? "lg:grid lg:grid-cols-[1fr_300px] lg:gap-7" : ""}`}>
            <div className="min-w-0">
              <h4 className="font-round text-[1.18rem] font-extrabold leading-snug">
                <J text={s.title} />
              </h4>
              <p className="mt-2">
                <Rich text={s.body} />
              </p>
              {(s.tip || s.warn) && (
                <div className="mt-4 grid gap-2.5">
                  {s.tip && <Callout kind="tip" text={s.tip} />}
                  {s.warn && <Callout kind="warn" text={s.warn} />}
                </div>
              )}
            </div>
            {s.visual && <div className="mt-5 lg:mt-0">{s.visual}</div>}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
