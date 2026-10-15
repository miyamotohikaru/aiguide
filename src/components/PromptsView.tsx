"use client";

import { Fragment, useState } from "react";
import { PROMPTS, CATS, type PromptCat } from "@/data/prompts";
import Chips from "./Chips";
import Copy from "./Copy";
import J from "./J";

type Filter = "all" | PromptCat;

/** 【 】の中は「書き換える所」。色は使わず、うすい地で示す */
function Body({ text }: { text: string }) {
  // 1行ずつ組む。行の中は J で「、」「。」の切れ目でだけ折る（コピーされる中身は元の文のまま）
  return (
    <>
      {text.split("\n").map((line, li) => (
        <Fragment key={li}>
          {li > 0 && "\n"}
          {line.split(/(【[^】]*】)/).map((p, i) =>
            p.startsWith("【") ? (
              <mark key={i} className="bg-paper-2 px-1 text-ink">
                {p}
              </mark>
            ) : (
              p && <J key={i} text={p} />
            ),
          )}
        </Fragment>
      ))}
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
      <Chips items={chips} value={f} onChange={setF} label="目的でしぼる" />
      <ul className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-2">
        {list.map((p) => (
          <li key={p.id} id={p.id} className="flex scroll-mt-24 flex-col">
            <p className="ag-label">{CATS.find((c) => c.id === p.cat)!.label}</p>
            <h3 className="mt-2 text-[1.2rem] leading-snug">
              <J text={p.title} />
            </h3>
            <p className="mt-1 text-[0.9rem] text-soft">
              <span className="mr-2 text-[0.72rem] tracking-[0.18em]">使いどき</span>
              <J text={p.when} />
            </p>
            <div className="ag-box mt-4 flex flex-1 flex-col">
              <div className="flex justify-end border-b border-line-soft px-4 py-2.5">
                <Copy text={p.body} label="コピー" />
              </div>
              <pre className="flex-1 whitespace-pre-wrap break-words px-5 py-5 font-serif text-[0.95rem] leading-[1.75]">
                <Body text={p.body} />
              </pre>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
