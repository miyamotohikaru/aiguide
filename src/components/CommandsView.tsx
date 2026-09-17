"use client";

import { useMemo, useState } from "react";
import { COMMANDS, CMD_CATS, type CmdCat } from "@/data/commands";
import Chips from "./Chips";
import SearchBox from "./SearchBox";
import Copy from "./Copy";
import J from "./J";

type Filter = "all" | CmdCat;

export default function CommandsView() {
  const [f, setF] = useState<Filter>("all");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const k = q.trim().toLowerCase();
    return COMMANDS.filter((c) => {
      if (k) return (c.cmd + (c.alias ?? "") + c.desc + (c.ex ?? "")).toLowerCase().includes(k);
      return f === "all" || c.cat === f;
    });
  }, [f, q]);

  const chips = [
    { id: "all" as Filter, label: "すべて", count: COMMANDS.length },
    ...CMD_CATS.map((c) => ({ id: c.id as Filter, label: c.label, count: COMMANDS.filter((x) => x.cat === c.id).length })),
  ];

  return (
    <div>
      <SearchBox value={q} onChange={setQ} placeholder="さがす（例：戻す、モデル、compact）" />
      <div className={`mt-4 transition-opacity ${q ? "pointer-events-none opacity-40" : ""}`}>
        <Chips items={chips} value={f} onChange={setF} label="種類でしぼる" active="bg-mint text-white" />
      </div>
      <p className="mt-5 text-[0.9rem] font-bold text-soft" aria-live="polite">
        {q ? `「${q}」で ${list.length} 件` : `${list.length} 件`}
      </p>
      <ul className="mt-3 grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-2 xl:grid-cols-3">
        {list.map((c) => (
          <li key={c.cmd} className="ag-card flex flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="min-w-0 break-all">
                <span className="rounded-lg bg-ink px-2 py-0.5 font-mono text-[1.02rem] font-semibold text-[#7ff0c8]">{c.cmd}</span>
                {c.args && <span className="ml-1.5 font-mono text-[0.8rem] text-soft">{c.args}</span>}
              </p>
              <Copy text={c.cmd} />
            </div>
            <p className="mt-3 text-[0.97rem]">
              {c.star && <span className="mr-1 text-sun" aria-label="まず覚える">★</span>}
              <J text={c.desc} />
            </p>
            {c.ex && (
              <p className="mt-2.5 rounded-xl bg-mint-bg px-3 py-1.5 text-[0.88rem]">
                <span className="mr-1.5 font-bold text-mint">使いどき</span>
                <J text={c.ex} />
              </p>
            )}
            {c.alias && (
              <p className="mt-auto pt-3 text-[0.8rem] text-soft">
                同じ意味：<span className="font-mono">{c.alias}</span>
              </p>
            )}
          </li>
        ))}
      </ul>
      {list.length === 0 && (
        <p className="ag-card mt-3 p-8 text-center text-soft">
          <J text="見つかりませんでした。◇Claude Code で「/」だけ打つと、使える候補が出ます。" />
        </p>
      )}
    </div>
  );
}
