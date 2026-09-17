"use client";

import { Fragment, useState } from "react";
import { PROMPTS, CATS, type PromptCat } from "@/data/prompts";
import Chips from "./Chips";
import Copy from "./Copy";
import J from "./J";
import Icon, { type IconName } from "./illust/Icons";

type Filter = "all" | PromptCat;

const CAT_ICON: Record<PromptCat, IconName> = { publish: "rocket", make: "spark", design: "heart", fix: "warn", talk: "chat" };

/** 【 】の中は「書き換える所」なので色を付ける */
function Body({ text }: { text: string }) {
  // 1行ずつ組む。行の中は J で「、」「。」の切れ目でだけ折る（コピーされる中身は元の文のまま）
  return (
    <>
      {text.split("\n").map((line, li) => (
        <Fragment key={li}>
          {li > 0 && "\n"}
          {line.split(/(【[^】]*】)/).map((p, i) =>
            p.startsWith("【") ? (
              <mark key={i} className="rounded-md bg-sun-bg px-1 font-bold text-ink ring-2 ring-sun/60">
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
      <Chips items={chips} value={f} onChange={setF} label="目的でしぼる" active="bg-pink text-white" />
      <ul className="mt-7 grid grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-2">
        {list.map((p) => (
          <li key={p.id} id={p.id} className="ag-card flex scroll-mt-28 flex-col overflow-hidden">
            <div className="flex items-start gap-3 px-5 pt-5 sm:px-6 sm:pt-6">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-pink-bg text-pink">
                <Icon name={CAT_ICON[p.cat]} className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[0.8rem] font-bold text-pink">{CATS.find((c) => c.id === p.cat)!.label}</p>
                <h3 className="text-[1.15rem] font-extrabold leading-snug">
                  <J text={p.title} />
                </h3>
                <p className="mt-0.5 text-[0.88rem] text-soft">
                  <J text={p.when} />
                </p>
              </div>
            </div>
            {/* 吹き出し */}
            <div className="relative mx-5 mb-5 mt-4 flex-1 rounded-3xl rounded-tl-md bg-paper-2 sm:mx-6 sm:mb-6">
              <pre className="whitespace-pre-wrap break-words px-5 pb-16 pt-4 font-sans text-[0.95rem] leading-[1.85]">
                <Body text={p.body} />
              </pre>
              <div className="absolute bottom-3 right-3">
                <Copy text={p.body} label="コピーする" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
