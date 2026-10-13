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
      <div className={`mt-6 ${q ? "pointer-events-none opacity-40" : ""}`}>
        <Chips items={chips} value={f} onChange={setF} label="種類でしぼる" />
      </div>
      <p className="mt-8 text-[0.85rem] text-soft" aria-live="polite">
        {q ? `「${q}」で ${list.length} 件` : `${list.length} 件`}
      </p>

      <div className="mt-3 border-t border-line">
        <p className="ag-label hidden border-b border-line-soft py-2 md:grid md:grid-cols-[14rem_minmax(0,1fr)] md:gap-8">
          <span>コマンド</span>
          <span>説明</span>
        </p>
        <ul className="grid grid-cols-[minmax(0,1fr)]">
          {list.map((c) => (
            <li key={c.cmd} className="grid gap-x-8 gap-y-2 border-b border-line-soft py-5 md:grid-cols-[14rem_minmax(0,1fr)]">
              <div className="flex items-baseline justify-between gap-3 md:pr-4">
                <p className="min-w-0">
                  <span className="ag-code text-[1rem]">{c.cmd}</span>
                  {c.args && <span className="ag-code ml-1.5 text-soft">{c.args}</span>}
                </p>
                <span className="shrink-0">
                  <Copy text={c.cmd} />
                </span>
              </div>
              <div className="min-w-0">
                <p>
                  <J text={c.desc} />
                </p>
                {c.ex && (
                  <p className="mt-1 text-[0.9rem] text-soft">
                    <span className="mr-2 text-[0.72rem] tracking-[0.18em]">使いどき</span>
                    <J text={c.ex} />
                  </p>
                )}
                {c.alias && (
                  <p className="mt-1 text-[0.85rem] text-soft">
                    <span className="mr-2 text-[0.72rem] tracking-[0.18em]">同じ意味</span>
                    <span className="ag-code">{c.alias}</span>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {list.length === 0 && (
        <p className="py-10 text-soft">
          <J text="見つかりませんでした。◇Claude Code で「/」だけ打つと、使える候補が出ます。" />
        </p>
      )}
    </div>
  );
}
