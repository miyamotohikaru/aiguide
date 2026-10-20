"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SECTIONS, SITE_NAME } from "@/lib/site";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  /**
   * ページを移ったら、いちばん上から見せる。
   * html に scroll-behavior: smooth を付けているので、Next の「頭へ戻す」もゆっくり動き、
   * スマホでは途中で止まることがある。移ったときだけ smooth を外して、一度で頭へ戻す。
   * #付きのリンク（ページ内の目次）と、戻る・進むのときは、ブラウザに任せる。
   */
  const byHistory = useRef(false);
  useEffect(() => {
    const onPop = () => (byHistory.current = true);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  useEffect(() => {
    setOpen(false);
    if (byHistory.current) {
      byHistory.current = false;
      return;
    }
    if (window.location.hash) return;
    const html = document.documentElement;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    const id = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      html.style.scrollBehavior = "";
    });
    return () => cancelAnimationFrame(id);
  }, [path]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1180px] items-baseline gap-6 px-6 py-4 sm:px-10">
        <Link href="/" className="shrink-0 text-[1.05rem] tracking-[0.04em]">
          {SITE_NAME}
        </Link>
        <nav aria-label="章" className="ml-auto hidden lg:block">
          <ul className="flex gap-7 text-[0.92rem]">
            {SECTIONS.map((s) => {
              const on = path === s.href || path.startsWith(`${s.href}/`);
              return (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    aria-current={on ? "page" : undefined}
                    className={`pb-1 ${on ? "border-b border-ink" : "border-b border-transparent hover:border-line"}`}
                  >
                    {s.short}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu"
          className="ml-auto text-[0.92rem] tracking-[0.12em] lg:hidden"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>
      {open && (
        <nav id="menu" aria-label="章" className="border-t border-line-soft lg:hidden">
          <ul className="mx-auto max-w-[1180px] px-6 sm:px-10">
            {SECTIONS.map((s) => (
              <li key={s.href} className="border-b border-line-soft last:border-0">
                <Link
                  href={s.href}
                  onClick={() => {
                    // いまいるページを選んだときは path が変わらないので、ここで閉じて頭へ戻す
                    if (path === s.href) {
                      setOpen(false);
                      document.documentElement.style.scrollBehavior = "auto";
                      window.scrollTo(0, 0);
                      document.documentElement.style.scrollBehavior = "";
                    }
                  }}
                  className="flex items-baseline justify-between py-3.5"
                >
                  <span>{s.label}</span>
                  <span className="ag-label">{s.en}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
