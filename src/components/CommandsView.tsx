"use client";

import { useMemo, useState } from "react";
import { COMMANDS, CMD_CATS, type CmdCat } from "@/data/commands";
import { CAT_DOODLE } from "./doodle/CommandDoodles";
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

  /** さがしているときは1つのかたまり。ふだんは種類ごとに分けて、絵つきの見出しを立てる */
  const groups = useMemo(() => {
    if (q.trim()) return [{ cat: null, items: list }];
    const cats = f === "all" ? CMD_CATS : CMD_CATS.filter((c) => c.id === f);
    return cats.map((c) => ({ cat: c, items: COMMANDS.filter((x) => x.cat === c.id) }));
  }, [f, q, list]);

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

      {groups.map((g) => {
        const Pic = g.cat ? CAT_DOODLE[g.cat.id] : null;
        return (
          <section key={g.cat?.id ?? "found"} className="mt-10 first:mt-6">
            {g.cat && (
              <div className="flex items-end gap-4 border-b border-line pb-3">
                {Pic && <Pic className="w-12 flex-none" />}
                <h3 className="text-[1.15rem]">{g.cat.label}</h3>
                <span className="ml-auto text-[0.85rem] text-soft">{g.items.length} 個</span>
              </div>
            )}
            <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
              {g.items.map((c) => (
                <li key={c.cmd} className="flex flex-col border-t border-line-soft pt-4">
                  <p className="break-all">
                    <span className="ag-code text-[0.95rem]">{c.cmd}</span>
                  </p>
                  {c.args && <p className="ag-code mt-0.5 block text-[0.75rem] text-soft">{c.args}</p>}
                  <p className="mt-2 text-[0.92rem] leading-[1.8]">
                    <J text={c.desc} />
                  </p>
                  {c.ex && (
                    <p className="mt-1.5 text-[0.82rem] leading-[1.7] text-soft">
                      <J text={c.ex} />
                    </p>
                  )}
                  {c.alias && (
                    <p className="mt-1.5 text-[0.78rem] text-soft">
                      <span className="ag-code">{c.alias}</span>
                    </p>
                  )}
                  <p className="mt-auto pt-3">
                    <Copy text={c.cmd} />
                  </p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      {list.length === 0 && (
        <p className="py-10 text-soft">
          <J text="見つかりませんでした。◇Claude Code で「/」だけ打つと、使える候補が出ます。" />
        </p>
      )}
    </div>
  );
}
