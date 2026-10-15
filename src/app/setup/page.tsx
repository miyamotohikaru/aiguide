import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import Steps from "@/components/Steps";
import Copy from "@/components/Copy";
import RouteFinder from "@/components/RouteFinder";
import RouteTabs from "@/components/RouteTabs";
import J from "@/components/J";
import Rich from "@/components/Rich";
import { Laptop, Cloud, Phone } from "@/components/doodle/Doodles";
import { ROUTES, AI_PROMPT, CHECKS, HOSTS, TROUBLES } from "@/data/setup";

export const metadata: Metadata = {
  title: "公開のしかた",
  description:
    "ターミナルを使わずに、手元で作ったサイトを公開する手順。ドラッグで置く方法と、GitHub＋Vercelで自動公開する方法。",
};

const INDEX = [
  ["#how", "公開のしくみ"],
  ["#check", "置く前のチェック"],
  ["#finder", "方法を選ぶ"],
  ["#routes", "手順"],
  ["#hosts", "置き場所のくらべ"],
  ["#trouble", "困ったとき"],
];

/** 01 のしくみ。3つの欄の上に、手描きの絵をひとつずつ */
const FLOW_ART = [Laptop, Cloud, Phone];

const FLOW = [
  { term: "自分のパソコン", sub: "ローカル", body: "いま作ったファイルがある場所。ここにあるうちは、自分にしか見えない。" },
  { term: "置き場所", sub: "ホスティング", body: "ネットにつながりっぱなしの預け先。ここにコピーすることを「公開」という。" },
  { term: "みんな", sub: "URL", body: "出てきたURLを送れば、誰でも、スマホからでも開ける。" },
];

export default function SetupPage() {
  return (
    <>
      <PageHead
        en="Publish"
        title="作ったサイトを、◆みんなに見せる。"
        lead="黒い画面（ターミナル）は使いません。ブラウザとアプリのボタンだけで、URLを送れば誰でも見られる状態にします。"
      />

      <nav aria-label="このページの目次" className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <ul className="flex flex-wrap gap-x-7 gap-y-2 border-t border-line pt-5 text-[0.92rem]">
          {INDEX.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="ag-link text-soft hover:text-ink">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Section id="how" no="01" title="公開って、何をすること？" lead="自分のパソコンにあるファイルを、ネット上の「置き場所」にコピーすることです。">
        <dl className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 md:gap-x-10">
          {FLOW.map((f, i) => {
            const Art = FLOW_ART[i];
            return (
              <div key={f.term} className="border-t border-line-soft py-6 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0">
                <dt>
                  <Art className="mb-4 w-14" />
                  <span className="ag-num">{`0${i + 1}`}</span>
                  <span className="mt-1 block text-[1.15rem]">{f.term}</span>
                  <span className="ag-label">{f.sub}</span>
                </dt>
                <dd className="mt-3 text-[0.97rem] text-soft">
                  <J text={f.body} />
                </dd>
              </div>
            );
          })}
        </dl>
        <p className="mt-10 max-w-[38em]">
          <J text="いま作ったサイトは、あなたのパソコンの中にだけあります。◇だから、URLを送っても、ほかの人には開けません。◇ネットにずっとつながっている「置き場所」にコピーすると、はじめて誰でも見られるようになります。" />
        </p>
      </Section>

      <Section id="check" no="02" title="置く前に、5つだけ確かめる" lead="ここでつまずく人が、いちばん多いところです。">
        <ol className="grid grid-cols-[minmax(0,1fr)]">
          {CHECKS.map((c, i) => (
            <li
              key={c.title}
              className="grid gap-x-10 gap-y-1 border-t border-line-soft py-6 first:border-t-0 first:pt-0 sm:grid-cols-[4rem_minmax(0,1fr)]"
            >
              <p className="ag-num pt-1">{String(i + 1).padStart(2, "0")}</p>
              <div className="min-w-0">
                <h3 className="text-[1.1rem] leading-snug">
                  <J text={c.title} />
                </h3>
                <p className="mt-1.5 max-w-[38em] text-soft">
                  <Rich text={c.body} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="finder" no="03" title="あなたに合う方法を選ぶ" lead="3つの質問に答えると、おすすめのルートがわかります。">
        <RouteFinder />
      </Section>

      <Section no="04" title="手順どおりに、公開する" lead="ルートを選ぶと、その手順が出ます。上から順に進めてください。">
        <RouteTabs tabs={ROUTES.map((r) => ({ id: r.id, tag: `Route ${r.id.toUpperCase()}`, name: r.name }))}>
          {ROUTES.map((r) => (
            <div key={r.id}>
              <p className="max-w-[34em] text-[1.25rem] leading-relaxed">
                <J text={r.catch} />
              </p>

              <dl className="mt-10 grid grid-cols-[minmax(0,1fr)] border-t border-line sm:grid-cols-3 sm:gap-x-10">
                <div className="border-b border-line-soft py-5 sm:border-b-0">
                  <dt className="ag-label">かかる時間</dt>
                  <dd className="mt-1">{r.time}</dd>
                </div>
                <div className="border-b border-line-soft py-5 sm:border-b-0">
                  <dt className="ag-label">向いている人</dt>
                  <dd className="mt-1">
                    <ul className="grid gap-1">
                      {r.fit.map((f) => (
                        <li key={f} className="text-[0.97rem]">
                          <Rich text={f.replace("package.json", "`package.json`")} />
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="py-5">
                  <dt className="ag-label">用意するもの</dt>
                  <dd className="mt-1">
                    <ul className="grid gap-1">
                      {r.need.map((n) => (
                        <li key={n} className="text-[0.97rem]">
                          <J text={n} />
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              {r.notFit.length > 0 && (
                <p className="mt-3 text-[0.9rem] text-soft">
                  向いていない：
                  {r.notFit.map((f, i) => (
                    <span key={f} className="j-s">
                      <Rich text={f.replace("package.json", "`package.json`")} />
                      {i < r.notFit.length - 1 ? "／" : ""}
                    </span>
                  ))}
                </p>
              )}

              <h3 className="mt-14 border-b border-line pb-3 text-[1.05rem]">はじめて公開する</h3>
              <div className="mt-8">
                <Steps steps={r.steps} />
              </div>

              {r.id === "c" && (
                <div className="ag-box mt-10">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5 sm:px-7">
                    <p className="ag-label">AIに貼るお願い文</p>
                    <Copy text={AI_PROMPT} />
                  </div>
                  <pre className="whitespace-pre-wrap break-words px-5 py-6 font-serif text-[0.97rem] leading-[1.75] sm:px-7">{AI_PROMPT}</pre>
                </div>
              )}

              {r.update && (
                <>
                  <h3 className="mt-16 border-b border-line pb-3 text-[1.05rem]">直したあと、更新する</h3>
                  <div className="mt-8">
                    <Steps steps={r.update} />
                  </div>
                </>
              )}
            </div>
          ))}
        </RouteTabs>
      </Section>

      <Section id="hosts" no="05" title="置き場所のくらべ" lead="どれも無料で始められます。条件は変わるので、使う前に公式ページも見てください。">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-[0.95rem]">
            <thead>
              <tr className="border-y border-line">
                <th className="py-3 pr-6 font-normal">
                  <span className="ag-label">サービス</span>
                </th>
                <th className="py-3 pr-6 font-normal">
                  <span className="ag-label">置き方</span>
                </th>
                <th className="py-3 pr-6 font-normal">
                  <span className="ag-label">いいところ</span>
                </th>
                <th className="py-3 font-normal">
                  <span className="ag-label">気をつけること</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {HOSTS.map((h) => (
                <tr key={h.name} className="border-b border-line-soft align-top">
                  <td className="py-5 pr-6">
                    <a href={h.url} target="_blank" rel="noreferrer" className="ag-link">
                      {h.name}
                    </a>
                  </td>
                  <td className="whitespace-nowrap py-5 pr-6 text-soft">{h.how}</td>
                  <td className="py-5 pr-6">
                    <J text={h.good} />
                  </td>
                  <td className="py-5 text-soft">
                    <J text={h.care} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="trouble" no="06" title="困ったとき" lead="押すと、答えが開きます。">
        <ul className="grid grid-cols-[minmax(0,1fr)]">
          {TROUBLES.map((t) => (
            <li key={t.q} className="border-t border-line-soft first:border-t-0">
              <details>
                <summary className="flex items-baseline justify-between gap-6 py-5">
                  <span className="min-w-0 text-[1.05rem]">
                    <J text={t.q} />
                  </span>
                  <span className="ag-plus flex-none text-soft transition-transform" aria-hidden>
                    ＋
                  </span>
                </summary>
                <p className="max-w-[38em] pb-6 text-soft">
                  <Rich text={t.a} />
                </p>
              </details>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[38em] text-soft">
          <J text="ここにない困りごとは、エラーの文と画面のスクリーンショットをAIに渡すのが近道です。◇頼み方は「プロンプト集」にあります。" />
        </p>
        <p className="mt-6">
          <a href="/prompts#error" className="ag-btn">
            頼み方を見る
          </a>
        </p>
      </Section>
    </>
  );
}
