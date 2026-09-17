"use client";

import { useMemo, useState } from "react";
import { COMMANDS, CMD_CATS, type CmdCat } from "@/data/commands";
import Chips from "./Chips";
import SearchBox from "./SearchBox";
import Copy from "./Copy";
import J from "./J";

type Filter = "star" | "all" | CmdCat;

export default function CommandsView() {
  const [f, setF] = useState<Filter>("star");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const k = q.trim().toLowerCase();
    return COMMANDS.filter((c) => {
      if (k) return (c.cmd + (c.alias ?? "") + c.desc + (c.ex ?? "")).toLowerCase().includes(k);
      if (f === "star") return c.star;
      if (f === "all") return true;
      return c.cat === f;
    });
  }, [f, q]);

  const chips = [
    { id: "star" as Filter, label: "★ まず覚える10個", count: COMMANDS.filter((c) => c.star).length },
    { id: "all" as Filter, label: "すべて", count: COMMANDS.length },
    ...CMD_CATS.map((c) => ({ id: c.id as Filter, label: c.label, count: COMMANDS.filter((x) => x.cat === c.id).length })),
  ];

  return (
    <div>
      <SearchBox value={q} onChange={setQ} placeholder="さがす（例：戻す、モデル、compact）" />
      <div className={`mt-4 ${q ? "pointer-events-none opacity-40" : ""}`}>
        <Chips items={chips} value={f} onChange={setF} label="種類でしぼる" active="bg-green text-white" />
      </div>
      <p className="mt-5 text-[0.9rem] text-soft" aria-live="polite">
        {q ? `「${q}」で ${list.length} 件` : `${list.length} 件`}
      </p>
      <ul className="mt-3 grid gap-3 md:grid-cols-2">
        {list.map((c) => (
          <li key={c.cmd} className="ag-box flex flex-col p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="min-w-0 break-all font-mono text-[1.15rem] font-semibold leading-snug">
                {c.star && (
                  <span className="mr-1 text-green" aria-label="まず覚える">
                    ★
                  </span>
                )}
                {c.cmd}
                {c.args && <span className="ml-1.5 text-[0.85rem] font-normal text-soft">{c.args}</span>}
              </p>
              <Copy text={c.cmd} />
            </div>
            <p className="mt-2">
              <J text={c.desc} />
            </p>
            {c.ex && (
              <p className="mt-2 rounded-lg bg-green-bg px-3 py-1.5 text-[0.9rem]">
                <span className="mr-1.5 font-bold text-green">使いどき</span>
                <J text={c.ex} />
              </p>
            )}
            {c.alias && (
              <p className="mt-auto pt-2.5 text-[0.82rem] text-soft">
                同じ意味：<span className="font-mono">{c.alias}</span>
              </p>
            )}
          </li>
        ))}
      </ul>
      {list.length === 0 && (
        <p className="ag-box mt-3 p-6 text-center text-soft">
          <J text="見つかりませんでした。◇ちがう言葉でさがすか、Claude Code で「/」だけ打つと候補が出ます。" />
        </p>
      )}
    </div>
  );
}
