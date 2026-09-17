"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SECTIONS, SITE_NAME, TONE } from "@/lib/site";
import Icon from "./illust/Icons";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-3 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink font-round text-[0.85rem] font-extrabold text-white">
            AI
          </span>
          <span className="font-round text-[1.05rem] font-extrabold">{SITE_NAME}</span>
        </Link>
        <nav aria-label="章" className="ml-auto hidden lg:block">
          <ul className="flex gap-1">
            {SECTIONS.map((s) => {
              const on = path === s.href;
              return (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    aria-current={on ? "page" : undefined}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.9rem] font-bold transition-colors ${
                      on ? `${TONE[s.tone].bg} ${TONE[s.tone].fg}` : "hover:bg-card"
                    }`}
                  >
                    <Icon name={s.icon} className={`h-4 w-4 ${TONE[s.tone].fg}`} strokeWidth={2.6} />
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
          className="ml-auto flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[0.9rem] font-bold text-white lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            )}
          </svg>
          メニュー
        </button>
      </div>
      {open && (
        <nav id="menu" aria-label="章" className="border-t border-line bg-paper px-5 pb-6 pt-4 lg:hidden">
          <ul className="grid grid-cols-2 gap-3">
            {SECTIONS.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className={`flex h-full flex-col gap-2 rounded-2xl p-4 ${TONE[s.tone].bg}`}>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${TONE[s.tone].solid}`}>
                    <Icon name={s.icon} className="h-5 w-5" strokeWidth={2.4} />
                  </span>
                  <span className="font-round font-extrabold leading-tight">{s.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
