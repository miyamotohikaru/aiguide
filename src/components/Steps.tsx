import J from "./J";
import Rich from "./Rich";
import Note from "./Note";

export type StepItem = { title: string; body: string; tip?: string; warn?: string };

/** 手順。番号・見出し・本文を、細い罫線で区切って並べる */
export default function Steps({ steps, start = 1 }: { steps: StepItem[]; start?: number }) {
  return (
    <ol className="grid grid-cols-[minmax(0,1fr)]">
      {steps.map((s, i) => (
        <li key={s.title} className="grid gap-x-10 gap-y-2 border-t border-line-soft py-7 first:border-t-0 first:pt-0 sm:grid-cols-[4rem_minmax(0,1fr)]">
          <p className="ag-num pt-1">{String(start + i).padStart(2, "0")}</p>
          <div className="min-w-0">
            <h3 className="text-[1.15rem] leading-snug">
              <J text={s.title} />
            </h3>
            <p className="mt-2 max-w-[38em]">
              <Rich text={s.body} />
            </p>
            {(s.tip || s.warn) && (
              <div className="mt-4 grid max-w-[38em] gap-3">
                {s.tip && <Note kind="tip" text={s.tip} />}
                {s.warn && <Note kind="warn" text={s.warn} />}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
