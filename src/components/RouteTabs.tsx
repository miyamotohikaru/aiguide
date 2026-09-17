"use client";

import { useEffect, useState } from "react";
import Icon, { type IconName } from "./illust/Icons";

/**
 * ルートA/B/Cを1つずつ見せるタブ。
 * #route-b のようなリンクで来たら、そのタブを開いてそこへスクロールする。
 */
export default function RouteTabs({
  tabs,
  children,
}: {
  tabs: { id: string; tag: string; name: string; icon: IconName; color: string }[];
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
      {/* 過去のリンク（#route-a など）の着地点 */}
      {tabs.map((t) => (
        <span key={t.id} id={`route-${t.id}`} className="block" />
      ))}
      <div role="tablist" aria-label="公開のルート" className="sticky top-[64px] z-20 -mx-5 grid grid-cols-3 gap-2 bg-paper/95 px-5 py-3 backdrop-blur sm:mx-0 sm:gap-3 sm:rounded-3xl sm:px-3">
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
              className={`flex flex-col items-center gap-1 rounded-2xl px-2 py-3 text-center transition-all sm:flex-row sm:gap-3 sm:px-4 sm:text-left ${
                on ? "text-white shadow-[0_4px_0_rgba(35,35,63,0.9)]" : "bg-card text-ink hover:-translate-y-0.5"
              }`}
              style={on ? { background: t.color } : undefined}
            >
              <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl ${on ? "bg-white/20" : ""}`} style={on ? undefined : { background: t.color, color: "#fff" }}>
                <Icon name={t.icon} className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.72rem] font-bold tracking-[0.12em] opacity-80">{t.tag}</span>
                <span className="block font-round text-[0.85rem] font-extrabold leading-tight sm:text-[1rem]">{t.name}</span>
              </span>
            </button>
          );
        })}
      </div>
      {tabs.map((t, i) => (
        <div key={t.id} id={`panel-${t.id}`} role="tabpanel" hidden={t.id !== cur} className="pt-6">
          {children[i]}
        </div>
      ))}
    </div>
  );
}
