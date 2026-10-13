"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SECTIONS, SITE_NAME } from "@/lib/site";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

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
                <Link href={s.href} className="flex items-baseline justify-between py-3.5">
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
