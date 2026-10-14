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
            <ul className={`grid grid-cols-[minmax(0,1fr)] ${g.cat ? "" : "border-t border-line"}`}>
              {g.items.map((c) => (
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
