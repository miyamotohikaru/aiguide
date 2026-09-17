"use client";

import { useState } from "react";

/** 小さなタブ。中身は描画済みのものを受け取り、選ばれたものだけ出す */
export default function Tabs({
  tabs,
  label,
}: {
  tabs: { id: string; label: string; content: React.ReactNode }[];
  label: string;
}) {
  const [cur, setCur] = useState(tabs[0].id);
  return (
    <div>
      <div role="tablist" aria-label={label} className="inline-flex max-w-full flex-wrap gap-1 rounded-full bg-grape-bg p-1">
        {tabs.map((t) => {
          const on = t.id === cur;
          return (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={on}
              onClick={() => setCur(t.id)}
              className={`rounded-full px-4 py-1.5 text-[0.92rem] font-bold transition-colors ${on ? "bg-grape text-white" : "text-grape hover:bg-card"}`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      {tabs.map((t) => (
        <div key={t.id} role="tabpanel" hidden={t.id !== cur} className="mt-5">
          {t.content}
        </div>
      ))}
    </div>
  );
}
