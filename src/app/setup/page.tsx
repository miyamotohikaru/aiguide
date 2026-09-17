import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import FlowDiagram from "@/components/FlowDiagram";
import RouteFinder from "@/components/RouteFinder";
import Rich from "@/components/Rich";
import J from "@/components/J";
import Copy from "@/components/Copy";
import { ROUTES, AI_PROMPT, CHECKS, HOSTS, TROUBLES, type Step } from "@/data/setup";

export const metadata: Metadata = {
  title: "公開のしかた",
  description: "ターミナルを使わずに、手元で作ったサイトを公開する手順。ドラッグで置く方法と、GitHub＋Vercelで自動公開する方法。",
};

function Steps({ steps, prefix }: { steps: Step[]; prefix?: string }) {
  return (
    <ol className="grid grid-cols-[minmax(0,1fr)] gap-4">
      {steps.map((s, i) => (
        <li key={s.title} className="ag-box flex gap-4 p-4 sm:p-5">
          <span className="ag-num text-[0.95rem]">
            {prefix}
            {i + 1}
          </span>
          <div className="min-w-0 flex-1">
            <h4 className="text-[1.08rem] font-bold leading-snug">
              <J text={s.title} />
            </h4>
            <p className="mt-1.5 break-words">
              <Rich text={s.body} />
            </p>
            {s.tip && (
              <p className="mt-3 rounded-lg bg-blue-bg px-3.5 py-2.5 text-[0.93rem]">
                <span className="mr-1.5 font-bold text-blue">ヒント</span>
                <Rich text={s.tip} />
              </p>
            )}
            {s.warn && (
              <p className="mt-3 rounded-lg bg-pink-bg px-3.5 py-2.5 text-[0.93rem]">
                <span className="mr-1.5 font-bold text-pink">注意</span>
                <Rich text={s.warn} />
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function SetupPage() {
  return (
    <>
      <PageHead
        en="SETUP"
        color="blue"
        title="作ったサイトを、◆みんなに見せる。"
        lead="黒い画面（ターミナル）は使いません。ブラウザとアプリのボタンだけで、URLを送れば誰でも見られる状態にします。"
      />

      <nav aria-label="このページの目次" className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
        <ul className="flex flex-wrap gap-2 text-[0.9rem] font-bold">
          {[
            ["#how", "しくみ"],
            ["#check", "準備"],
            ["#finder", "ルートを選ぶ"],
            ["#route-a", "A ドラッグ"],
            ["#route-b", "B GitHub＋Vercel"],
            ["#route-c", "C AIに頼む"],
            ["#hosts", "置き場所の比較"],
            ["#trouble", "困ったとき"],
          ].map(([h, l]) => (
            <li key={h}>
              <a href={h} className="block rounded-full border-2 border-ink bg-card px-3 py-0.5 hover:bg-blue-bg">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Section id="how" no="1" title="公開って、何をすること？">
        <FlowDiagram />
        <p className="mt-5">
          <J text="いま作ったサイトは、あなたのパソコンの中にだけあります。◇だから、URLを送っても、ほかの人には開けません。◇ネットにずっとつながっている「置き場所」にコピーすると、はじめて誰でも見られるようになります。" />
        </p>
      </Section>

      <Section id="check" no="2" title="置く前に、5つだけ確かめる" lead="ここでつまずく人がいちばん多いところです。">
        <ol className="grid gap-3 sm:grid-cols-2">
          {CHECKS.map((c, i) => (
            <li key={c.title} className="ag-box p-4 sm:p-5">
              <p className="flex items-center gap-2.5 font-bold">
                <span className="ag-num text-[0.8rem]">{i + 1}</span>
                <J text={c.title} />
              </p>
              <p className="mt-2 break-words text-[0.95rem]">
                <Rich text={c.body} />
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="finder" no="3" title="あなたに合う方法を選ぶ" lead="3つの質問に答えてください。">
        <RouteFinder />
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {ROUTES.map((r) => (
            <a key={r.id} href={`#route-${r.id}`} className="ag-box block p-4 hover:bg-blue-bg">
              <p className="font-mono text-[0.8rem] font-semibold text-blue">ROUTE {r.id.toUpperCase()}</p>
              <p className="mt-0.5 font-bold">{r.name}</p>
              <p className="mt-1 text-[0.9rem] text-soft">
                <J text={r.catch} />
              </p>
            </a>
          ))}
        </div>
      </Section>

      {ROUTES.map((r) => (
        <section key={r.id} id={`route-${r.id}`} className="mx-auto max-w-5xl px-4 pt-20 sm:px-6">
          <div className="rounded-2xl border-2 border-ink bg-blue-bg p-5 sm:p-8">
            <p className="font-mono text-[0.85rem] font-semibold tracking-[0.15em] text-blue">ROUTE {r.id.toUpperCase()}</p>
            <h2 className="mt-1 text-[1.6rem] font-bold leading-snug sm:text-[2rem]">
              <J text={r.name} />
            </h2>
            <p className="mt-2 text-[1.05rem]">
              <J text={r.catch} />
            </p>
            <dl className="mt-5 grid gap-4 text-[0.95rem] sm:grid-cols-3">
              <div>
                <dt className="font-bold">かかる時間</dt>
                <dd className="mt-1">{r.time}</dd>
              </div>
              <div>
                <dt className="font-bold">向いている人</dt>
                <dd className="mt-1">
                  <ul className="grid gap-0.5">
                    {r.fit.map((f) => (
                      <li key={f}>
                        <span aria-hidden className="mr-1 text-blue">●</span>
                        <Rich text={f.replace("package.json", "`package.json`")} />
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="font-bold">用意するもの</dt>
                <dd className="mt-1">
                  <ul className="grid gap-0.5">
                    {r.need.map((f) => (
                      <li key={f}>
                        <span aria-hidden className="mr-1">□</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            {r.notFit.length > 0 && (
              <p className="mt-4 text-[0.9rem] text-soft">
                向いていない：
                {r.notFit.map((f, i) => (
                  <span key={f} className="j-s">
                    <Rich text={f.replace("package.json", "`package.json`")} />
                    {i < r.notFit.length - 1 ? "／" : ""}
                  </span>
                ))}
              </p>
            )}
          </div>

          <h3 className="mt-8 text-[1.2rem] font-bold">はじめて公開する</h3>
          <div className="mt-3">
            <Steps steps={r.steps} />
          </div>

          {r.id === "c" && (
            <div className="ag-box ag-shadow mt-6 overflow-hidden">
              <div className="flex items-center justify-between gap-3 border-b-2 border-ink bg-pink-bg px-4 py-2.5">
                <p className="font-bold">AIに貼るお願い文</p>
                <Copy text={AI_PROMPT} />
              </div>
              <pre className="whitespace-pre-wrap break-words p-4 font-sans text-[0.95rem] leading-relaxed sm:p-5">
                {AI_PROMPT}
              </pre>
            </div>
          )}

          {r.update && (
            <>
              <h3 className="mt-10 text-[1.2rem] font-bold">直したあと、更新する</h3>
              <div className="mt-3">
                <Steps steps={r.update} />
              </div>
            </>
          )}
        </section>
      ))}

      <Section id="hosts" no="4" title="置き場所のくらべ" lead="どれも無料で始められます。条件は変わることがあるので、使う前に公式ページも見てください。">
        <div className="ag-box overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-[0.93rem]">
            <thead>
              <tr className="border-b-2 border-ink bg-paper">
                <th className="px-4 py-2.5">サービス</th>
                <th className="px-4 py-2.5">置き方</th>
                <th className="px-4 py-2.5">いいところ</th>
                <th className="px-4 py-2.5">気をつけること</th>
              </tr>
            </thead>
            <tbody>
              {HOSTS.map((h) => (
                <tr key={h.name} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 font-bold">
                    <a href={h.url} target="_blank" rel="noreferrer" className="underline decoration-2 underline-offset-4 hover:text-blue">
                      {h.name}
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">{h.how}</td>
                  <td className="px-4 py-3">
                    <J text={h.good} />
                  </td>
                  <td className="px-4 py-3">
                    <J text={h.care} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="trouble" no="5" title="困ったとき" lead="押すと答えが開きます。">
        <div className="grid gap-3">
          {TROUBLES.map((t) => (
            <details key={t.q} className="ag-box group">
              <summary className="flex items-center gap-3 px-4 py-3.5 font-bold sm:px-5">
                <span className="ag-chev text-blue transition-transform" aria-hidden>
                  ▶
                </span>
                <J text={t.q} />
              </summary>
              <p className="break-words border-t border-line px-4 py-3.5 sm:px-5">
                <Rich text={t.a} />
              </p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-soft">
          <J text="ここにない困りごとは、エラーの文と画面のスクリーンショットをAIに渡すのが近道です。◇頼み方は「プロンプト集」にあります。" />
        </p>
      </Section>
    </>
  );
}
