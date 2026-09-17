"use client";

import { useState } from "react";
import Robot from "../illust/Robot";
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
    <fieldset>
      <legend className="flex items-center gap-2.5 font-round text-[1.08rem] font-extrabold">
        <span className="ag-num bg-coral text-[0.85rem]">Q{no}</span>
        <J text={q} />
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {opts.map((o) => {
          const on = value === o.id;
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(o.id)}
              className={`rounded-2xl px-4 py-2 text-left text-[0.95rem] font-bold transition-all ${
                on ? "bg-coral text-white shadow-[0_3px_0_rgba(35,35,63,0.9)]" : "bg-paper hover:-translate-y-0.5 hover:bg-coral-bg"
              }`}
            >
              {o.label}
            </button>
          );
        })}
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

  return (
    <div className="ag-card grid grid-cols-[minmax(0,1fr)] gap-8 p-5 sm:p-8 lg:grid-cols-[0.85fr_1.35fr]">
      <div className="grid content-start gap-7">
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
      </div>
      <div aria-live="polite" className="min-w-0">
        {done ? (
          <div>
            <p className="flex items-center gap-2 font-round text-[1.2rem] font-extrabold text-coral">
              <Robot pose="cheer" body="#f0533f" className="h-14 w-14" />
              あなたへのおすすめ
            </p>
            <ul className="mt-3 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2">
              {recs.map((r) => (
                <li key={r.id} className="ag-reveal" data-shown="">
                  <ToolCard tool={TOOLS.find((t) => t.id === r.id)!} why={r.why} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex h-full min-h-[260px] flex-col items-center justify-center rounded-3xl bg-coral-bg p-6 text-center">
            <Robot pose="think" body="#f0533f" className="ag-float h-32 w-32" />
            <p className="mt-3 font-bold">
              <J text="3つ答えると、◇ここにおすすめが2つ出ます。" />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
