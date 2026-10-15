"use client";

import { useState } from "react";

/** 枠だけの小さな切り替え。Mac / Windows、インストールの方法などに使う */
export default function Tabs({
  label,
  tabs,
}: {
  label: string;
  tabs: { id: string; label: string; content: React.ReactNode }[];
}) {
  const [cur, setCur] = useState(tabs[0].id);
  return (
    <div>
      <div role="group" aria-label={label} className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button key={t.id} type="button" aria-pressed={t.id === cur} onClick={() => setCur(t.id)} className="ag-pick">
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div key={t.id} hidden={t.id !== cur} className="pt-7">
          {t.content}
        </div>
      ))}
    </div>
  );
}
