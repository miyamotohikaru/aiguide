"use client";

import { useState } from "react";
import ToolCard from "./ToolCard";
import J from "../J";
import { GOALS, TOOLS, recommend, type Budget, type Goal, type Term } from "@/data/ai";

function Q<T extends string>({
  no,
  q,
  opts,
  value,
  onChange,
}: {
  no: number;
  q: string;
  opts: { id: T; label: string }[];
  value?: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="border-b border-line-soft px-6 py-7 sm:px-8">
      <div className="grid gap-x-8 gap-y-2 sm:grid-cols-[3rem_minmax(0,1fr)]">
        <p className="ag-num pt-1">Q{no}</p>
        <div className="min-w-0">
          <legend className="text-[1.08rem] leading-snug">
            <J text={q} />
          </legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {opts.map((o) => (
              <button key={o.id} type="button" aria-pressed={value === o.id} onClick={() => onChange(o.id)} className="ag-pick text-left">
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </fieldset>
  );
}

export default function AiChooser() {
  const [goal, setGoal] = useState<Goal>();
  const [term, setTerm] = useState<Term>();
  const [budget, setBudget] = useState<Budget>();
  const done = goal && term && budget;
  const recs = done ? recommend(goal, budget, term) : [];
  const left = [goal, term, budget].filter((x) => !x).length;

  return (
    <div className="ag-box">
      <Q no={1} q="何をしたい？" opts={GOALS} value={goal} onChange={setGoal} />
      <Q
        no={2}
        q="ターミナル（黒い画面）は？"
        opts={[
          { id: "no" as Term, label: "使いたくない" },
          { id: "yes" as Term, label: "使ってみてもいい" },
        ]}
        value={term}
        onChange={setTerm}
      />
      <Q
        no={3}
        q="お金は？"
        opts={[
          { id: "free" as Budget, label: "まずは無料で" },
          { id: "paid" as Budget, label: "月3千円くらいならOK" },
        ]}
        value={budget}
        onChange={setBudget}
      />
      <div className="px-6 py-8 sm:px-8" aria-live="polite">
        {done ? (
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-[3rem_minmax(0,1fr)]">
            <p className="ag-label pt-1">A</p>
            <div className="min-w-0">
              <p className="text-[1.08rem]">
                <J text="あなたに合いそうなのは、この2つです。" />
              </p>
              <ul className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-2">
                {recs.map((r) => (
                  <li key={r.id}>
                    <ToolCard tool={TOOLS.find((t) => t.id === r.id)!} why={r.why} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-soft">
            <J text={`あと${left}問で、ここにおすすめが2つ出ます。`} />
          </p>
        )}
      </div>
    </div>
  );
}
