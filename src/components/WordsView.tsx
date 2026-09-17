"use client";

import { useMemo, useState } from "react";
import { WORDS, GROUPS, type WordGroup } from "@/data/words";
import Chips from "./Chips";
import SearchBox from "./SearchBox";
import J from "./J";

type Filter = "all" | WordGroup;

export default function WordsView() {
  const [f, setF] = useState<Filter>("all");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const k = q.trim().toLowerCase();
    return WORDS.filter((w) => {
      if (k) return (w.term + w.read + w.mean + (w.like ?? "")).toLowerCase().includes(k);
      return f === "all" || w.group === f;
    });
  }, [f, q]);

  const chips = [
    { id: "all" as Filter, label: "すべて", count: WORDS.length },
    ...GROUPS.map((g) => ({ id: g.id as Filter, label: g.label, count: WORDS.filter((w) => w.group === g.id).length })),
  ];
  const groupLabel = (g: WordGroup) => GROUPS.find((x) => x.id === g)!.label;

  return (
    <div>
      <SearchBox value={q} onChange={setQ} placeholder="さがす（例：余白、ドメイン、ビルド）" />
      <div className={`mt-4 ${q ? "pointer-events-none opacity-40" : ""}`}>
        <Chips items={chips} value={f} onChange={setF} label="分野でしぼる" active="bg-yellow text-ink" />
      </div>
      <p className="mt-5 text-[0.9rem] text-soft" aria-live="polite">
        {q ? `「${q}」で ${list.length} 語` : `${list.length} 語`}
      </p>
      <dl className="mt-3 grid gap-3 md:grid-cols-2">
        {list.map((w) => (
          <div key={w.term} className="ag-box p-4 sm:p-5">
            <dt>
              <span className="text-[1.2rem] font-bold leading-snug">{w.term}</span>
              <span className="ml-2 text-[0.85rem] text-soft">{w.read}</span>
              {f === "all" && !q ? null : (
                <span className="ml-2 rounded-full bg-yellow-bg px-2 py-0.5 text-[0.75rem] font-bold">{groupLabel(w.group)}</span>
              )}
            </dt>
            <dd className="mt-1.5">
              <J text={w.mean} />
              {w.like && (
                <p className="mt-2 border-l-4 border-yellow pl-3 text-[0.92rem] text-soft">
                  <J text={w.like} />
                </p>
              )}
            </dd>
          </div>
        ))}
      </dl>
      {list.length === 0 && (
        <p className="ag-box mt-3 p-6 text-center text-soft">
          <J text="見つかりませんでした。◇AIに「〇〇ってどういう意味？中学生にわかるように」と聞くのも手です。" />
        </p>
      )}
    </div>
  );
}
