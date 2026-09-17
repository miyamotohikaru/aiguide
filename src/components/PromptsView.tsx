"use client";

import { Fragment, useState } from "react";
import { PROMPTS, CATS, type PromptCat } from "@/data/prompts";
import Chips from "./Chips";
import Copy from "./Copy";
import J from "./J";

type Filter = "all" | PromptCat;

/** 【 】の中は「書き換える所」なので色を付ける */
function Body({ text }: { text: string }) {
  const parts = text.split(/(【[^】]*】)/);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("【") ? (
          <mark key={i} className="rounded bg-pink-bg px-0.5 font-bold text-pink">
            {p}
          </mark>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

export default function PromptsView() {
  const [f, setF] = useState<Filter>("all");
  const list = PROMPTS.filter((p) => f === "all" || p.cat === f);
  const chips = [
    { id: "all" as Filter, label: "すべて", count: PROMPTS.length },
    ...CATS.map((c) => ({ id: c.id as Filter, label: c.label, count: PROMPTS.filter((p) => p.cat === c.id).length })),
  ];

  return (
    <div>
      <Chips items={chips} value={f} onChange={setF} label="目的でしぼる" active="bg-pink text-white" />
      <ul className="mt-6 grid gap-5">
        {list.map((p) => (
          <li key={p.id} id={p.id} className="ag-box overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink bg-pink-bg px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-[0.8rem] font-bold text-pink">{CATS.find((c) => c.id === p.cat)!.label}</p>
                <h3 className="text-[1.12rem] font-bold leading-snug">
                  <J text={p.title} />
                </h3>
              </div>
              <Copy text={p.body} />
            </div>
            <p className="px-4 pt-3 text-[0.9rem] text-soft sm:px-5">
              <span className="mr-1.5 font-bold text-ink">使いどき</span>
              <J text={p.when} />
            </p>
            <pre className="whitespace-pre-wrap break-words px-4 pb-5 pt-2 font-sans text-[0.97rem] leading-[1.9] sm:px-5">
              <Body text={p.body} />
            </pre>
          </li>
        ))}
      </ul>
    </div>
  );
}
