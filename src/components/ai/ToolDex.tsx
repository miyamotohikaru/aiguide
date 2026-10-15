"use client";

import Link from "next/link";
import { useState } from "react";
import Chips from "../Chips";
import J from "../J";
import { TOOLS, TYPES, type AiType } from "@/data/ai";
import { thumbForTool } from "@/data/thumbs";
import { EASY } from "./ToolCard";

type F = "all" | AiType;

const TERM = { yes: "ターミナル不要", partly: "アプリならターミナル不要", no: "ターミナルを使う" };

/** ツール図鑑。罫線で区切った行で並べる（名前・説明・料金） */
export default function ToolDex() {
  const [f, setF] = useState<F>("all");
  const list = TOOLS.filter((t) => f === "all" || t.type === f);
  const items = [
    { id: "all" as F, label: "すべて", count: TOOLS.length },
    ...TYPES.map((t) => ({ id: t.id as F, label: t.label, count: TOOLS.filter((x) => x.type === t.id).length })),
  ];

  return (
    <div>
      <Chips items={items} value={f} onChange={setF} label="タイプでしぼる" />
      <p className="mt-6 text-[0.88rem] text-soft" aria-live="polite">
        {list.length} 件
      </p>
      <ul className="mt-2 grid grid-cols-[minmax(0,1fr)]">
        {list.map((t) => {
          const thumb = thumbForTool(t.id);
          return (
          <li key={t.id} className="border-t border-line-soft py-6">
            <div className="grid gap-x-10 gap-y-3 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_minmax(0,10rem)]">
              <div>
                {thumb && (
                  <img
                    src={thumb}
                    alt=""
                    width={480}
                    height={300}
                    loading="lazy"
                    className="mb-3 w-full max-w-[13rem] border border-line-soft object-cover"
                  />
                )}
                <h3 className="text-[1.12rem] leading-snug">
                  <Link href={`/ai/${t.id}`} className="ag-link">
                    <J text={t.name} />
                  </Link>
                </h3>
                <p className="mt-1 flex flex-wrap gap-x-4 text-[0.82rem] text-soft">
                  <span>{t.maker}</span>
                  <span>{TYPES.find((x) => x.id === t.type)!.label}</span>
                </p>
              </div>
              <div className="min-w-0">
                <p>
                  <J text={t.one} />
                </p>
                {t.note && (
                  <p className="mt-1 text-[0.9rem] text-soft">
                    <J text={t.note} />
                  </p>
                )}
                <p className="mt-2 flex flex-wrap gap-x-5 text-[0.85rem] text-soft">
                  <span>{TERM[t.noTerminal]}</span>
                  <span>{EASY[t.easy]}</span>
                  <a href={t.url} target="_blank" rel="noreferrer" className="ag-link">
                    公式サイト
                  </a>
                </p>
              </div>
              <p className="text-[0.92rem] text-soft md:text-right">
                <J text={t.price} />
              </p>
            </div>
          </li>
          );
        })}
      </ul>
    </div>
  );
}
