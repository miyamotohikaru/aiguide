"use client";

import { useEffect, useState } from "react";

/**
 * ルートA/B/Cを1つずつ見せるタブ。
 * #route-b のようなリンクで来たら、そのタブを開いてそこへ移動する。
 */
export default function RouteTabs({
  tabs,
  children,
}: {
  tabs: { id: string; tag: string; name: string }[];
  children: React.ReactNode[];
}) {
  const [cur, setCur] = useState(tabs[0].id);

  useEffect(() => {
    const sync = () => {
      const h = location.hash.replace("#route-", "");
      if (tabs.some((t) => t.id === h)) {
        setCur(h);
        requestAnimationFrame(() => document.getElementById("routes")?.scrollIntoView());
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [tabs]);

  return (
    <div id="routes">
      {tabs.map((t) => (
        <span key={t.id} id={`route-${t.id}`} className="block" />
      ))}
      <div role="tablist" aria-label="公開のルート" className="flex flex-wrap gap-x-8 gap-y-2 border-b border-line pb-3">
        {tabs.map((t) => {
          const on = t.id === cur;
          return (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={on}
              aria-controls={`panel-${t.id}`}
              onClick={() => {
                setCur(t.id);
                history.replaceState(null, "", `#route-${t.id}`);
              }}
              className={`pb-2 text-left ${on ? "border-b border-ink" : "border-b border-transparent text-soft hover:text-ink"}`}
            >
              <span className="ag-label block">{t.tag}</span>
              <span className="text-[1.02rem]">{t.name}</span>
            </button>
          );
        })}
      </div>
      {tabs.map((t, i) => (
        <div key={t.id} id={`panel-${t.id}`} role="tabpanel" hidden={t.id !== cur} className="pt-10">
          {children[i]}
        </div>
      ))}
    </div>
  );
}
