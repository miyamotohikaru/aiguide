import Link from "next/link";
import J from "@/components/J";
import RouteFinder from "@/components/RouteFinder";
import JourneyMap from "@/components/JourneyMap";
import Reveal from "@/components/Reveal";
import HeroScene from "@/components/illust/HeroScene";
import Robot from "@/components/illust/Robot";
import Icon from "@/components/illust/Icons";
import { COMMANDS } from "@/data/commands";
import { WORDS } from "@/data/words";
import { PROMPTS } from "@/data/prompts";

const STATS = [
  { n: "3", unit: "ルート", label: "公開のしかた", tone: "text-sky" },
  { n: String(COMMANDS.length), unit: "個", label: "スラッシュコマンド", tone: "text-mint" },
  { n: String(WORDS.length), unit: "語", label: "用語", tone: "text-[#9a6b00]" },
  { n: String(PROMPTS.length), unit: "本", label: "プロンプト", tone: "text-pink" },
];

export default function Home() {
  return (
    <>
      {/* ---------- ヒーロー ---------- */}
      <section className="relative overflow-hidden">
        <div className="ag-dots pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-5 pb-10 pt-10 sm:px-8 md:grid-cols-[1.05fr_1fr] md:pb-16 md:pt-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-[0.88rem] font-bold shadow-[0_4px_14px_-8px_rgba(35,35,63,0.4)]">
              <span className="h-2 w-2 rounded-full bg-mint" aria-hidden />
              ターミナルを使ったことがない人へ
            </p>
            <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.22] sm:text-[3.6rem]">
              <span className="j-s">作ったサイトを、</span>
              <br />
              <span className="j-s relative">
                <span className="relative z-10">みんなに</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-4 rounded-full bg-sun/60 sm:h-5" aria-hidden />
              </span>
              <span className="j-s">届けよう。</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] text-soft sm:text-[1.15rem]">
              <J text="AIと一緒に作ったサイトを、URLで誰でも見られるようにするまでの道案内。◇AIの選び方から、わからない言葉まで、ぜんぶここにあります。" />
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/setup" className="ag-btn bg-coral text-white">
                <Icon name="rocket" className="h-5 w-5" />
                公開のしかたを見る
              </Link>
              <a href="#finder" className="ag-btn bg-card text-ink">
                30秒で診断する
              </a>
            </div>
          </div>
          <HeroScene className="mx-auto w-full max-w-[520px]" />
        </div>
      </section>

      {/* ---------- 数字 ---------- */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 60} className="ag-card px-5 py-4 text-center">
              <p className={`font-round text-[2.2rem] font-extrabold leading-none ${s.tone}`}>
                {s.n}
                <span className="ml-0.5 text-[1rem]">{s.unit}</span>
              </p>
              <p className="mt-1.5 text-[0.9rem] font-bold text-soft">{s.label}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------- 冒険マップ ---------- */}
      <section className="mx-auto max-w-6xl px-5 pt-20 sm:px-8 sm:pt-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold text-coral">MAP</p>
            <h2 className="text-[1.8rem] font-extrabold leading-snug sm:text-[2.4rem]">
              <J text="このサイトの歩きかた" />
            </h2>
            <p className="mt-2 text-soft">
              <J text="上から順に読めば、公開までたどり着きます。◆気になるところから開いてもOK。" />
            </p>
          </div>
        </div>
        <div className="mt-8">
          <JourneyMap />
        </div>
      </section>

      {/* ---------- 診断 ---------- */}
      <section id="finder" className="mx-auto max-w-6xl px-5 pt-20 sm:px-8 sm:pt-28">
        <p className="font-bold text-sky">QUIZ</p>
        <h2 className="text-[1.8rem] font-extrabold leading-snug sm:text-[2.4rem]">
          <J text="あなたに合う公開の方法は？" />
        </h2>
        <p className="mt-2 text-soft">
          <J text="3つ答えるだけ。おすすめのルートと、手順のページに案内します。" />
        </p>
        <div className="mt-8">
          <RouteFinder base="/setup" />
        </div>
      </section>

      {/* ---------- 迷ったら ---------- */}
      <section className="mx-auto max-w-6xl px-5 pt-20 sm:px-8 sm:pt-28">
        <div className="relative overflow-hidden rounded-[32px] bg-ink p-7 text-white sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_200px]">
            <div>
              <h2 className="text-[1.6rem] font-extrabold sm:text-[2rem]">迷ったら、この3ステップ。</h2>
              <ol className="mt-7 grid gap-5 sm:grid-cols-3">
                {[
                  { t: "準備をたしかめる", b: "「公開のしかた」の、5つのチェックだけ読む。", href: "/setup#check", c: "#3d6ff5" },
                  { t: "AIに見てもらう", b: "「公開していい状態か、見てもらう」を貼る。", href: "/prompts#check-before-publish", c: "#e0487a" },
                  { t: "言葉を引く", b: "わからない言葉が出たら、用語集で調べる。", href: "/words", c: "#f5b100" },
                ].map((x, i) => (
                  <li key={x.t}>
                    <Link href={x.href} className="group block h-full rounded-2xl bg-white/8 p-5 transition-colors hover:bg-white/15">
                      <span className="ag-num text-[0.95rem]" style={{ background: x.c }}>
                        {i + 1}
                      </span>
                      <p className="mt-3 font-round text-[1.1rem] font-extrabold">{x.t}</p>
                      <p className="mt-1 text-[0.93rem] text-white/80">
                        <J text={x.b} />
                      </p>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mx-auto hidden h-48 w-48 items-center justify-center rounded-full bg-sun-bg md:flex">
              <Robot pose="point" body="#0f9f76" className="w-36" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
