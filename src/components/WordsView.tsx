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
      <SearchBox value={q} onChange={setQ} placeholder="言葉でさがす（例：余白、ドメイン、ビルド）" />
      <div className={`mt-6 ${q ? "pointer-events-none opacity-40" : ""}`}>
        <Chips items={chips} value={f} onChange={setF} label="分野でしぼる" />
      </div>
      <p className="mt-8 text-[0.85rem] text-soft" aria-live="polite">
        {q ? `「${q}」で ${list.length} 語` : `${list.length} 語`}
      </p>

      <dl className="mt-3 grid grid-cols-[minmax(0,1fr)] border-t border-line">
        {list.map((w) => (
          <div key={w.term} className="grid gap-x-10 gap-y-1 border-b border-line-soft py-6 lg:grid-cols-[16rem_minmax(0,1fr)]">
            <dt className="min-w-0">
              <span className="block text-[1.12rem] leading-snug">{w.term}</span>
              <span className="mt-0.5 block text-[0.82rem] text-soft">
                {w.read}
                {(f === "all" || q) && <span className="ml-3">{groupLabel(w.group)}</span>}
              </span>
            </dt>
            <dd className="min-w-0 max-w-[38em]">
              <J text={w.mean} />
              {w.like && (
                <p className="mt-2 text-[0.93rem] text-soft">
                  <span className="mr-2 text-[0.72rem] tracking-[0.18em]">たとえば</span>
                  <J text={w.like} />
                </p>
              )}
              {w.link && (
                <p className="mt-2 text-[0.93rem] text-soft">
                  <span className="mr-2 text-[0.72rem] tracking-[0.18em]">おすすめ</span>
                  <a href={w.link.url} target="_blank" rel="noreferrer" className="ag-link text-ink">
                    {w.link.name}
                  </a>
                  <span className="ml-2 font-mono text-[0.76rem] [overflow-wrap:anywhere]">{w.link.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                </p>
              )}
            </dd>
          </div>
        ))}
      </dl>

      {list.length === 0 && (
        <p className="py-10 text-soft">
          <J text="見つかりませんでした。◇AIに「〇〇ってどういう意味？中学生にわかるように」と聞くのも手です。" />
        </p>
      )}
    </div>
  );
}
