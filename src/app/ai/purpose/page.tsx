import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import Note from "@/components/Note";
import Copy from "@/components/Copy";
import J from "@/components/J";
import { PURPOSES } from "@/data/purposes";
import { TOOLS, AI_CHECKED } from "@/data/ai";

export const metadata: Metadata = {
  title: "目的別：いちばんいいAI",
  description: "資料づくり、リサーチ、画像、動画、Webサイト、アプリ…目的ごとに、いちばんいいAIと、うまく作る手順とお願い文。",
};

/** 【 】の中は書き換える所。地を少し敷いて、控えめに示す */
function PromptBody({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, li) => (
        <Fragment key={li}>
          {li > 0 && "\n"}
          {line.split(/(【[^】]*】)/).map((p, i) =>
            p.startsWith("【") ? (
              <mark key={i} className="bg-paper-2 px-0.5 text-ink">
                {p}
              </mark>
            ) : (
              p && <J key={i} text={p} />
            ),
          )}
        </Fragment>
      ))}
    </>
  );
}

export default function PurposePage() {
  return (
    <>
      <PageHead
        en="Best AI for you"
        title="やりたいことから、◆AIを選ぶ。"
        lead="資料、リサーチ、画像、Webサイト。目的ごとに「いちばんいいAI」と、うまく作る手順、そのまま使えるお願い文をまとめました。"
      />

      <Section no="00" title="なにをしたい？" lead="押すと、その目的の説明にとびます。">
        <ul className="grid grid-cols-[minmax(0,1fr)] gap-x-12 sm:grid-cols-2">
          {PURPOSES.map((p, i) => (
            <li key={p.id} className="border-t border-line-soft">
              <a href={`#${p.id}`} className="flex items-start gap-4 py-3.5">
                <span className="ag-num shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1">
                  <J text={p.label} />
                </span>
                <span className="shrink-0 text-[0.85rem] text-soft">{p.best.tool}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {PURPOSES.map((p, i) => {
        const bestTool = TOOLS.find((t) => t.id === p.best.id);
        return (
          <Section key={p.id} id={p.id} no={String(i + 1).padStart(2, "0")} title={p.label}>
            <div className="ag-box p-6 sm:p-8">
              <p className="ag-label">いちばんのおすすめ</p>
              <p className="mt-2 text-[1.5rem] leading-snug">
                <J text={p.best.tool} />
              </p>
              <p className="mt-3 max-w-[34em] text-soft">
                <J text={p.best.why} />
              </p>
              <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.95rem]">
                <a href={p.best.url} target="_blank" rel="noreferrer" className="ag-btn">
                  公式サイト
                </a>
                {bestTool && (
                  <Link href={`/ai/${bestTool.id}`} className="ag-link">
                    このツールをくわしく見る
                  </Link>
                )}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-x-12 gap-y-10 lg:grid-cols-2">
              <div>
                <p className="ag-label">ほかの候補</p>
                <ul className="mt-3 grid grid-cols-[minmax(0,1fr)]">
                  {p.also.map((a) => {
                    const t = TOOLS.find((x) => x.id === a.id);
                    return (
                      <li key={a.tool} className="border-t border-line-soft py-4">
                        <p>
                          {t ? (
                            <Link href={`/ai/${t.id}`} className="ag-link">
                              {a.tool}
                            </Link>
                          ) : (
                            <a href={a.url} target="_blank" rel="noreferrer" className="ag-link">
                              {a.tool}
                            </a>
                          )}
                        </p>
                        <p className="mt-1 text-[0.95rem] text-soft">
                          <J text={a.why} />
                        </p>
                      </li>
                    );
                  })}
                  <li className="border-t border-line-soft py-4 text-[0.95rem] text-soft">
                    <span className="mr-2 text-[0.75rem] tracking-[0.18em] text-ink">無料だと</span>
                    <J text={p.free} />
                  </li>
                </ul>
              </div>

              <div>
                <p className="ag-label">うまく作る手順</p>
                <ol className="mt-3 grid grid-cols-[minmax(0,1fr)]">
                  {p.steps.map((s, k) => (
                    <li key={s} className="grid gap-x-6 border-t border-line-soft py-3.5 sm:grid-cols-[2.5rem_minmax(0,1fr)]">
                      <span className="ag-num pt-1">{String(k + 1).padStart(2, "0")}</span>
                      <span className="min-w-0">
                        <J text={s} />
                      </span>
                    </li>
                  ))}
                </ol>
                {p.care.length > 0 && (
                  <div className="mt-6 grid gap-3">
                    {p.care.map((x) => (
                      <Note key={x} kind="warn" text={x} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="ag-box mt-10">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line-soft px-5 py-3 sm:px-6">
                <p className="ag-label">お願い文の例</p>
                <Copy text={p.prompt} />
              </div>
              <pre className="whitespace-pre-wrap break-words px-5 py-5 font-serif text-[0.97rem] leading-[2] sm:px-6">
                <PromptBody text={p.prompt} />
              </pre>
            </div>
          </Section>
        );
      })}

      <section className="mx-auto max-w-[1180px] px-6 pt-16 sm:px-10">
        <p className="border-t border-line pt-6 text-[0.88rem] text-soft">
          <J text={`${AI_CHECKED}に、各サービスの公式サイトで機能があることを確かめたうえでの、このサイトの評価です。◇機能や無料枠は変わるので、使う前に公式サイトも見てください。`} />
        </p>
      </section>
    </>
  );
}
