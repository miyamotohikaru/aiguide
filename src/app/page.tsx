import Link from "next/link";
import J from "@/components/J";
import RouteFinder from "@/components/RouteFinder";
import { SECTIONS } from "@/lib/site";
import { COMMANDS } from "@/data/commands";
import { WORDS } from "@/data/words";
import { PROMPTS } from "@/data/prompts";
import { TOOLS } from "@/data/ai";
import { LINKS } from "@/data/links";

const COUNT: Record<string, string> = {
  "/ai": `${TOOLS.length}のツール`,
  "/setup": "3つのルート",
  "/terminal": "8つの命令",
  "/commands": `${COMMANDS.length}個`,
  "/words": `${WORDS.length}語`,
  "/prompts": `${PROMPTS.length}本`,
  "/links": `${LINKS.length}件`,
};

const GUIDE = [
  { t: "準備をたしかめる", b: "「公開のしかた」の、5つのチェックだけ読む。", href: "/setup#check" },
  { t: "AIに見てもらう", b: "「公開していい状態か、見てもらう」を貼る。", href: "/prompts#check-before-publish" },
  { t: "言葉を引く", b: "わからない言葉が出たら、用語集で調べる。", href: "/words" },
];

export default function Home() {
  return (
    <>
      {/* ---------- 扉 ---------- */}
      <section className="mx-auto max-w-[1180px] px-6 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-24">
        <p className="ag-label">A GUIDE FOR BEGINNERS</p>
        <h1 className="mt-7 max-w-[16em] text-[2.3rem] leading-[1.45] sm:text-[3.4rem]">
          <J text="作ったサイトを、◇みんなに届けよう。" />
        </h1>
        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,34em)_minmax(0,1fr)] md:items-end">
          <p className="text-soft">
            <J text="ターミナルを使ったことがなくても大丈夫です。AIと一緒に作ったサイトを、URLで誰でも見られるようにするまでを、はじめから順に案内します。◇AIの選び方、わからない言葉、AIへの頼み方も、ここにまとめました。" />
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:justify-end">
            <Link href="/setup" className="ag-btn ag-btn-solid">
              公開のしかたを見る
            </Link>
            <a href="#finder" className="ag-link text-[0.95rem]">
              30秒で診断する
            </a>
          </div>
        </div>
      </section>

      {/* ---------- 目次 ---------- */}
      <section className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <p className="ag-label border-t border-line pt-8">CONTENTS</p>
        <ol className="mt-6">
          {SECTIONS.map((s, i) => (
            <li key={s.href} className="border-b border-line-soft first:border-t first:border-line-soft">
              <Link href={s.href} className="group grid items-baseline gap-x-8 gap-y-1 py-6 sm:grid-cols-[3rem_minmax(0,13rem)_minmax(0,1fr)_auto]">
                <span className="ag-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[1.25rem] leading-snug">
                  <span className="group-hover:border-b group-hover:border-ink">{s.label}</span>
                </span>
                <span className="text-[0.95rem] text-soft">
                  <J text={s.desc} />
                </span>
                <span className="whitespace-nowrap text-[0.85rem] text-soft">{COUNT[s.href]}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- 診断 ---------- */}
      <section id="finder" className="mx-auto max-w-[1180px] scroll-mt-24 px-6 pt-20 sm:px-10 sm:pt-28">
        <div className="border-t border-line pt-8 sm:pt-10">
          <div className="grid gap-x-10 gap-y-4 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
            <div>
              <p className="ag-label">QUIZ</p>
              <h2 className="mt-1 text-[1.4rem] leading-snug sm:text-[1.7rem]">
                <J text="あなたに合う公開の方法は？" />
              </h2>
            </div>
            <div className="min-w-0">
              <p className="max-w-[36em] text-soft">
                <J text="3つ答えるだけ。おすすめのルートと、手順のページに案内します。" />
              </p>
              <div className="mt-8">
                <RouteFinder base="/setup" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 迷ったら ---------- */}
      <section className="mx-auto max-w-[1180px] px-6 pt-20 sm:px-10 sm:pt-28">
        <div className="border-t border-line pt-8 sm:pt-10">
          <div className="grid gap-x-10 gap-y-4 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
            <div>
              <p className="ag-label">WHERE TO START</p>
              <h2 className="mt-1 text-[1.4rem] leading-snug sm:text-[1.7rem]">
                <J text="迷ったら、この3つから。" />
              </h2>
            </div>
            <ol className="min-w-0">
              {GUIDE.map((g, i) => (
                <li key={g.t} className="border-b border-line-soft first:border-t first:border-line-soft">
                  <Link href={g.href} className="group grid items-baseline gap-x-8 gap-y-1 py-6 sm:grid-cols-[3rem_minmax(0,11rem)_minmax(0,1fr)]">
                    <span className="ag-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[1.08rem]">
                      <span className="group-hover:border-b group-hover:border-ink">{g.t}</span>
                    </span>
                    <span className="text-[0.95rem] text-soft">
                      <J text={g.b} />
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
