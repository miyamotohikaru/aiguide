"use client";

import { useMemo, useState } from "react";
import { WORDS, GROUPS, type WordGroup } from "@/data/words";
import SearchBox from "./SearchBox";
import J from "./J";
import Icon, { type IconName } from "./illust/Icons";

type Filter = "all" | WordGroup;

const LOOK: Record<WordGroup, { icon: IconName; bg: string; fg: string; solid: string }> = {
  web: { icon: "globe", bg: "bg-sky-bg", fg: "text-sky", solid: "bg-sky" },
  design: { icon: "heart", bg: "bg-pink-bg", fg: "text-pink", solid: "bg-pink" },
  ai: { icon: "robot", bg: "bg-grape-bg", fg: "text-grape", solid: "bg-grape" },
};

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

  return (
    <div>
      {/* 分野のタブ（大きめ） */}
      <div role="group" aria-label="分野でしぼる" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[{ id: "all" as Filter, label: "すべて", lead: "ぜんぶの言葉" }, ...GROUPS].map((g) => {
          const on = f === g.id && !q;
          const look = g.id === "all" ? { icon: "book" as IconName, bg: "bg-sun-bg", fg: "text-[#9a6b00]", solid: "bg-sun" } : LOOK[g.id as WordGroup];
          const count = g.id === "all" ? WORDS.length : WORDS.filter((w) => w.group === g.id).length;
          return (
            <button
              key={g.id}
              type="button"
              aria-pressed={on}
              onClick={() => {
                setF(g.id);
                setQ("");
              }}
              className={`flex items-center gap-3 rounded-2xl p-3.5 text-left transition-all ${on ? `${look.bg} shadow-[0_4px_0_rgba(35,35,63,0.9)]` : "bg-card shadow-[0_8px_24px_-14px_rgba(35,35,63,0.4)] hover:-translate-y-0.5"}`}
            >
              <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl text-white ${look.solid}`}>
                <Icon name={look.icon} className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="min-w-0">
                <span className="block font-round font-extrabold leading-tight">{g.label}</span>
                <span className="block text-[0.8rem] text-soft">{count}語</span>
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-4">
        <SearchBox value={q} onChange={setQ} placeholder="言葉でさがす（例：余白、ドメイン、ビルド）" />
      </div>
      <p className="mt-5 text-[0.9rem] font-bold text-soft" aria-live="polite">
        {q ? `「${q}」で ${list.length} 語` : `${list.length} 語`}
      </p>
      <dl className="mt-3 grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((w) => {
          const look = LOOK[w.group];
          return (
            <div key={w.term} className="ag-card relative overflow-hidden p-6">
              <span className={`absolute left-0 top-0 h-full w-1.5 ${look.solid}`} aria-hidden />
              <dt className="flex items-start justify-between gap-3">
                <span className="min-w-0">
                  <span className="block font-round text-[1.25rem] font-extrabold leading-snug">{w.term}</span>
                  <span className="block text-[0.82rem] text-soft">{w.read}</span>
                </span>
                <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-full ${look.bg} ${look.fg}`}>
                  <Icon name={look.icon} className="h-4 w-4" strokeWidth={2.6} />
                </span>
              </dt>
              <dd className="mt-2.5">
                <J text={w.mean} />
                {w.like && (
                  <p className={`mt-3 rounded-xl px-3.5 py-2 text-[0.92rem] ${look.bg}`}>
                    <span className={`mr-1.5 font-bold ${look.fg}`}>たとえば</span>
                    <J text={w.like} />
                  </p>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
      {list.length === 0 && (
        <p className="ag-card mt-3 p-8 text-center text-soft">
          <J text="見つかりませんでした。◇AIに「〇〇ってどういう意味？中学生にわかるように」と聞くのも手です。" />
        </p>
      )}
    </div>
  );
}
