import Link from "next/link";
import { SECTIONS, SITE_NAME } from "@/lib/site";
import J from "./J";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-line">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-14 sm:px-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-[1.05rem]">{SITE_NAME}</p>
          <p className="mt-3 max-w-[24em] text-[0.95rem] text-soft">
            <J text="AIで作ったサイトを、◇みんなに届けるまでの道案内。" />
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-2 text-[0.95rem] sm:grid-cols-2">
          {SECTIONS.map((s) => (
            <li key={s.href} className="border-b border-line-soft pb-2">
              <Link href={s.href} className="flex items-baseline justify-between gap-3">
                <span>{s.label}</span>
                <span className="ag-label">{s.en}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto max-w-[1180px] px-6 pb-12 text-[0.82rem] text-soft sm:px-10">
        <J text="画面のボタン名、サービスの料金や条件は、変わることがあります。◇迷ったら、各サービスの公式ページも見てください。" />
      </p>
    </footer>
  );
}
