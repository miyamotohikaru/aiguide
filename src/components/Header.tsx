import Link from "next/link";
import { SECTIONS, SITE_NAME } from "@/lib/site";

const DOT: Record<string, string> = {
  blue: "bg-blue",
  green: "bg-green",
  yellow: "bg-yellow",
  pink: "bg-pink",
};

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-2.5 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-bold">
          <span className="ag-num text-[0.8rem]">AI</span>
          <span className="text-[1.02rem] tracking-wide">{SITE_NAME}</span>
        </Link>
        <nav aria-label="章" className="ml-auto hidden md:block">
          <ul className="flex gap-1">
            {SECTIONS.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.92rem] font-bold hover:bg-card"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${DOT[s.color]}`} aria-hidden />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* スマホ：横に流せる章の帯 */}
      <nav aria-label="章" className="border-t border-line md:hidden">
        <ul className="flex gap-1 overflow-x-auto px-3 py-1.5">
          {SECTIONS.map((s) => (
            <li key={s.href} className="shrink-0">
              <Link
                href={s.href}
                className="flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[0.85rem] font-bold"
              >
                <span className={`h-2 w-2 rounded-full ${DOT[s.color]}`} aria-hidden />
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
