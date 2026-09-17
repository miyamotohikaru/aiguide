import Link from "next/link";
import { SECTIONS, SITE_NAME } from "@/lib/site";
import J from "./J";

export default function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-ink bg-ink text-white">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6">
        <div>
          <p className="text-lg font-bold">{SITE_NAME}</p>
          <p className="mt-2 text-[0.92rem] text-white/75">
            <J text="AIで作ったサイトを、◇みんなに見てもらうまでの道案内。" />
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-[0.92rem]">
          <li>
            <Link href="/" className="hover:underline">
              はじめに
            </Link>
          </li>
          {SECTIONS.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="hover:underline">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto max-w-5xl px-4 pb-10 text-[0.8rem] text-white/60 sm:px-6">
        <J text="画面のボタン名やサービスの条件は、変わることがあります。◇迷ったら、各サービスの公式ページも見てください。" />
      </p>
    </footer>
  );
}
