import Link from "next/link";
import { SECTIONS, SITE_NAME, TONE } from "@/lib/site";
import J from "./J";
import Robot from "./illust/Robot";
import Icon from "./illust/Icons";

export default function Footer() {
  return (
    <footer className="relative mt-28 bg-ink text-white">
      <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="absolute -top-6 block h-6 w-full sm:-top-10 sm:h-10" aria-hidden>
        <path d="M0 40V20c120-18 240-18 360 0s240 18 360 0 240-18 360 0 240 18 360 0v20z" fill="var(--ag-ink)" />
      </svg>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1fr_1.4fr]">
        <div className="flex items-start gap-4">
          <span className="flex h-24 w-24 flex-none items-center justify-center rounded-full bg-sun-bg">
            <Robot pose="wave" body="#f5b100" className="h-20 w-20" />
          </span>
          <div>
            <p className="font-round text-lg font-extrabold">{SITE_NAME}</p>
            <p className="mt-2 text-[0.92rem] text-white/75">
              <J text="AIで作ったサイトを、◇みんなに届けるまでの道案内。" />
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-[0.95rem] sm:grid-cols-3">
          {SECTIONS.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="flex items-center gap-2 font-bold hover:underline">
                <Icon name={s.icon} className="h-4 w-4 flex-none" strokeWidth={2.6} />
                <span style={{ color: TONE[s.tone].soft }}>{s.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-10 text-[0.8rem] text-white/60 sm:px-8">
        <J text="画面のボタン名、サービスの料金や条件は、変わることがあります（2026年9月に確認）。◇迷ったら、各サービスの公式ページも見てください。" />
      </p>
    </footer>
  );
}
