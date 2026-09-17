import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Copy from "@/components/Copy";
import Callout from "@/components/Callout";
import J from "@/components/J";
import Icon from "@/components/illust/Icons";
import Robot from "@/components/illust/Robot";
import { PURPOSES } from "@/data/purposes";
import { TOOLS, AI_CHECKED } from "@/data/ai";

export const metadata: Metadata = {
  title: "目的別：いちばんいいAI",
  description: "資料づくり、リサーチ、画像、動画、Webサイト、アプリ…目的ごとに、いちばんいいAIと、うまく作る手順とお願い文。",
};

const COLORS = ["#f0533f", "#3d6ff5", "#0f9f76", "#7a55e6", "#e0487a", "#f5b100"];

/** 【 】の中に色を付ける */
function PromptBody({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, li) => (
        <span key={li}>
          {li > 0 && "\n"}
          {line.split(/(【[^】]*】)/).map((p, i) =>
            p.startsWith("【") ? (
              <mark key={i} className="rounded-md bg-sun-bg px-1 font-bold text-ink ring-2 ring-sun/60">
                {p}
              </mark>
            ) : (
              p && <J key={i} text={p} />
            ),
          )}
        </span>
      ))}
    </>
  );
}

export default function PurposePage() {
  return (
    <>
      <PageHero
        en="BEST AI FOR YOU"
        tone="coral"
        icon="star"
        title="やりたいことから、◆AIを選ぶ。"
        lead="資料、リサーチ、画像、Webサイト。目的ごとに「いちばんいいAI」と、うまく作る手順、そのまま使えるお願い文をまとめました。"
        art={
          <div className="relative mx-auto aspect-square w-full max-w-[340px]">
            <div className="absolute inset-[6%] rounded-full bg-card/70" />
            {PURPOSES.slice(0, 6).map((p, i) => {
              const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
              return (
                <span
                  key={p.id}
                  className="ag-float absolute flex h-14 w-14 items-center justify-center rounded-2xl bg-card text-[1.7rem] shadow-[0_4px_0_rgba(35,35,63,0.9)]"
                  style={{ left: `${50 + Math.cos(a) * 40 - 8}%`, top: `${50 + Math.sin(a) * 40 - 8}%`, animationDelay: `${i * 0.4}s` }}
                  aria-hidden
                >
                  {p.emoji}
                </span>
              );
            })}
            <Robot pose="cheer" body="#f0533f" className="absolute inset-[26%]" />
          </div>
        }
      />

      <Section icon="map" tone="coral" title="なにをしたい？" lead="押すと、その目的の説明にとびます。" wide>
        <ul className="grid grid-cols-[minmax(0,1fr)] gap-3 min-[380px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {PURPOSES.map((p, i) => (
            <li key={p.id}>
              <a href={`#${p.id}`} className="ag-card group flex h-full items-center gap-3 p-4 transition-transform hover:-translate-y-1">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl text-[1.5rem]" style={{ background: `${COLORS[i % 6]}22` }} aria-hidden>
                  {p.emoji}
                </span>
                <span className="min-w-0">
                  <span className="block font-round text-[0.98rem] font-extrabold leading-snug">
                    <J text={p.label} />
                  </span>
                  <span className="block text-[0.78rem] font-bold" style={{ color: COLORS[i % 6] }}>
                    → {p.best.tool}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {PURPOSES.map((p, i) => {
        const c = COLORS[i % 6];
        const bestTool = TOOLS.find((t) => t.id === p.best.id);
        return (
          <section key={p.id} id={p.id} className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-20 sm:px-8 sm:pt-28">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 flex-none items-center justify-center rounded-3xl text-[2rem]" style={{ background: `${c}22` }} aria-hidden>
                {p.emoji}
              </span>
              <div className="min-w-0">
                <p className="font-bold" style={{ color: c }}>
                  目的 {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="text-[1.6rem] font-extrabold leading-snug sm:text-[2.1rem]">
                  <J text={p.label} />
                </h2>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-[1.2fr_1fr]">
              {/* いちばん */}
              <Reveal className="relative overflow-hidden rounded-[28px] p-6 text-white sm:p-8" >
                <div className="absolute inset-0" style={{ background: c }} aria-hidden />
                <div className="relative">
                  <p className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[0.85rem] font-bold">
                    🏆 いちばんのおすすめ
                  </p>
                  <p className="mt-3 font-round text-[2rem] font-extrabold leading-tight">{p.best.tool}</p>
                  <p className="mt-2 text-[1.02rem] text-white/95">
                    <J text={p.best.why} />
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <a href={p.best.url} target="_blank" rel="noreferrer" className="ag-btn bg-card text-ink">
                      公式サイト <Icon name="arrow" className="h-4 w-4" strokeWidth={3} />
                    </a>
                    {bestTool && (
                      <Link href={`/ai/${bestTool.id}`} className="ag-btn bg-ink text-white">
                        くわしく見る
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
              {/* ほかの候補 */}
              <div className="grid gap-3">
                {p.also.map((a) => {
                  const t = TOOLS.find((x) => x.id === a.id);
                  return (
                    <Reveal key={a.tool} className="ag-card flex items-start gap-3 p-5">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-paper-2 font-round font-extrabold">🥈</span>
                      <div className="min-w-0">
                        <p className="font-round text-[1.1rem] font-extrabold">
                          {t ? (
                            <Link href={`/ai/${t.id}`} className="underline decoration-2 underline-offset-4">
                              {a.tool}
                            </Link>
                          ) : (
                            <a href={a.url} target="_blank" rel="noreferrer" className="underline decoration-2 underline-offset-4">
                              {a.tool}
                            </a>
                          )}
                        </p>
                        <p className="mt-0.5 text-[0.95rem]">
                          <J text={a.why} />
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
                <p className="rounded-2xl bg-paper-2 px-4 py-3 text-[0.9rem]">
                  <span className="mr-1.5 font-bold">無料だと</span>
                  <J text={p.free} />
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-2">
              <Reveal className="ag-card p-6">
                <p className="flex items-center gap-2 font-round text-[1.15rem] font-extrabold">
                  <Icon name="map" className="h-5 w-5" />
                  うまく作る手順
                </p>
                <ol className="mt-4 grid gap-3">
                  {p.steps.map((s, k) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="ag-num text-[0.85rem]" style={{ background: c }}>
                        {k + 1}
                      </span>
                      <span className="min-w-0 pt-1">
                        <J text={s} />
                      </span>
                    </li>
                  ))}
                </ol>
                {p.care.length > 0 && (
                  <div className="mt-5 grid gap-2">
                    {p.care.map((x) => (
                      <Callout key={x} kind="warn" text={x} />
                    ))}
                  </div>
                )}
              </Reveal>
              <Reveal className="ag-card flex flex-col overflow-hidden">
                <div className="flex items-center justify-between gap-3 px-6 pt-5">
                  <p className="flex items-center gap-2 font-round text-[1.15rem] font-extrabold">
                    <Icon name="chat" className="h-5 w-5" />
                    お願い文の例
                  </p>
                  <Copy text={p.prompt} />
                </div>
                <pre className="m-5 flex-1 whitespace-pre-wrap break-words rounded-3xl rounded-tl-md bg-paper-2 p-5 font-sans text-[0.95rem] leading-[1.9]">
                  <PromptBody text={p.prompt} />
                </pre>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-8">
        <p className="text-[0.85rem] text-soft">
          <J text={`${AI_CHECKED}に、各サービスの公式サイトで機能があることを確かめたうえでの、このサイトの評価です。◇機能や無料枠は変わるので、使う前に公式サイトも見てください。`} />
        </p>
      </section>
    </>
  );
}
