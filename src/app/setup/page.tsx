import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import PublishScene from "@/components/illust/PublishScene";
import RouteFinder from "@/components/RouteFinder";
import RouteTabs from "@/components/RouteTabs";
import Steps from "@/components/Steps";
import Reveal from "@/components/Reveal";
import Rich from "@/components/Rich";
import J from "@/components/J";
import Copy from "@/components/Copy";
import Robot from "@/components/illust/Robot";
import Icon, { type IconName } from "@/components/illust/Icons";
import * as M from "@/components/mock/Mocks";
import { ROUTES, AI_PROMPT, CHECKS, HOSTS, TROUBLES, type Step } from "@/data/setup";

export const metadata: Metadata = {
  title: "公開のしかた",
  description: "ターミナルを使わずに、手元で作ったサイトを公開する手順。画面の見本つき。ドラッグで置く方法と、GitHub＋Vercelで自動公開する方法。",
};

const VISUAL: Record<string, React.ReactNode> = {
  signup: <M.SignUpMock />,
  drop: <M.DropMock />,
  "done-netlify": <M.DoneMock url="mysite.netlify.app" />,
  redrop: <M.RedropMock />,
  gitignore: <M.GitignoreMock />,
  addrepo: <M.AddRepoMock />,
  publish: <M.PublishMock />,
  "vercel-signup": <M.VercelSignUpMock />,
  import: <M.ImportMock />,
  env: <M.EnvMock />,
  "done-vercel": <M.DoneMock url="mysite.vercel.app" />,
  commit: <M.CommitMock />,
  push: <M.PushMock />,
  askai: <M.AskAiMock />,
};

const withVisual = (steps: Step[]) => steps.map((s) => ({ ...s, visual: s.visual ? VISUAL[s.visual] : undefined }));

const ROUTE_LOOK: Record<string, { icon: IconName; color: string; tone: "sky" | "grape" | "coral"; bg: string }> = {
  a: { icon: "folder", color: "#3d6ff5", tone: "sky", bg: "bg-sky-bg" },
  b: { icon: "github", color: "#7a55e6", tone: "grape", bg: "bg-grape-bg" },
  c: { icon: "robot", color: "#f0533f", tone: "coral", bg: "bg-coral-bg" },
};

const CHECK_ICONS: IconName[] = ["folder", "refresh", "key", "search", "map"];

export default function SetupPage() {
  return (
    <>
      <PageHero
        en="PUBLISH"
        tone="sky"
        icon="rocket"
        title="作ったサイトを、◆みんなに見せる。"
        lead="黒い画面（ターミナル）は使いません。ブラウザとアプリのボタンだけで、URLを送れば誰でも見られる状態にします。"
        art={
          <div className="relative mx-auto aspect-square w-full max-w-[340px]">
            <div className="absolute inset-[8%] rounded-full bg-card/70" />
            <Robot pose="cheer" body="#3d6ff5" className="ag-float absolute inset-[14%]" />
          </div>
        }
      />

      <Section id="how" icon="map" tone="sky" kicker="STEP 1" title="公開って、何をすること？" lead="自分のパソコンにあるファイルを、ネット上の「置き場所」にコピーすることです。" wide>
        <PublishScene />
      </Section>

      <Section id="check" icon="check" tone="mint" kicker="STEP 2" title="置く前に、5つだけ確かめる" lead="ここでつまずく人がいちばん多いところ。ひとつずつ見ていきましょう。" wide>
        <ol className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHECKS.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 60} className="ag-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-mint-bg text-mint">
                  <Icon name={CHECK_ICONS[i]} className="h-6 w-6" />
                </span>
                <span className="font-round text-[2rem] font-extrabold leading-none text-ink/10">{i + 1}</span>
              </div>
              <p className="mt-3 font-round text-[1.12rem] font-extrabold">
                <J text={c.title} />
              </p>
              <p className="mt-1.5 text-[0.97rem]">
                <Rich text={c.body} />
              </p>
            </Reveal>
          ))}
          <Reveal as="li" delay={300} className="flex flex-col items-center justify-center gap-2 rounded-[24px] bg-mint-bg p-6 text-center">
            <Robot pose="cheer" body="#0f9f76" className="w-24" />
            <p className="font-round font-extrabold">
              <J text="ぜんぶOKなら、◇いよいよ公開！" />
            </p>
          </Reveal>
        </ol>
      </Section>

      <Section id="finder" icon="spark" tone="coral" kicker="STEP 3" title="あなたに合う方法を選ぶ" lead="3つの質問に答えると、おすすめのルートがわかります。" wide>
        <RouteFinder />
      </Section>

      <Section icon="rocket" tone="sky" kicker="STEP 4" title="手順どおりに、公開する" lead="ルートを選ぶと、画面の見本つきで手順が出ます。光っているボタンを押していきます。" wide>
        <RouteTabs tabs={ROUTES.map((r) => ({ id: r.id, tag: `ROUTE ${r.id.toUpperCase()}`, name: r.name, icon: ROUTE_LOOK[r.id].icon, color: ROUTE_LOOK[r.id].color }))}>
          {ROUTES.map((r) => {
            const look = ROUTE_LOOK[r.id];
            return (
              <div key={r.id}>
                <div className={`grid gap-6 rounded-[28px] p-6 sm:p-8 md:grid-cols-[1.3fr_1fr] ${look.bg}`}>
                  <div>
                    <p className="font-round text-[1.5rem] font-extrabold leading-snug sm:text-[1.9rem]">
                      <J text={r.catch} />
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3.5 py-1 text-[0.9rem] font-bold">
                        ⏱ {r.time}
                      </span>
                      {r.need.map((n) => (
                        <span key={n} className="inline-flex items-center gap-1.5 rounded-full bg-card px-3.5 py-1 text-[0.9rem] font-bold">
                          <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid content-start gap-3 text-[0.95rem]">
                    <div className="rounded-2xl bg-card p-4">
                      <p className="font-bold" style={{ color: look.color }}>
                        向いている人
                      </p>
                      <ul className="mt-1 grid gap-1">
                        {r.fit.map((f) => (
                          <li key={f} className="flex gap-2">
                            <Icon name="heart" className="mt-1 h-4 w-4 flex-none" strokeWidth={2.6} />
                            <span className="min-w-0">
                              <Rich text={f.replace("package.json", "`package.json`")} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {r.notFit.length > 0 && (
                      <p className="px-2 text-[0.88rem] text-soft">
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
                </div>

                <h3 className="mt-12 flex items-center gap-2 text-[1.35rem] font-extrabold">
                  <Icon name="rocket" className="h-6 w-6" />
                  はじめて公開する
                </h3>
                <div className="mt-5">
                  <Steps steps={withVisual(r.steps)} tone={look.tone} />
                </div>

                {r.id === "c" && (
                  <div className="ag-card mt-8 overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between gap-3 bg-coral px-5 py-3.5 text-white">
                      <p className="flex items-center gap-2 font-round font-extrabold">
                        <Icon name="chat" className="h-5 w-5" />
                        AIに貼るお願い文
                      </p>
                      <Copy text={AI_PROMPT} />
                    </div>
                    <pre className="whitespace-pre-wrap break-words p-5 font-sans text-[0.97rem] leading-relaxed sm:p-7">{AI_PROMPT}</pre>
                  </div>
                )}

                {r.update && (
                  <>
                    <h3 className="mt-14 flex items-center gap-2 text-[1.35rem] font-extrabold">
                      <Icon name="refresh" className="h-6 w-6" />
                      直したあと、更新する
                    </h3>
                    <div className="mt-5">
                      <Steps steps={withVisual(r.update)} tone={look.tone} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </RouteTabs>
      </Section>

      <Section id="hosts" icon="cloud" tone="grape" kicker="もっと知りたい" title="置き場所のくらべ" lead="どれも無料で始められます。条件は変わるので、使う前に公式ページも見てください。" wide>
        <ul className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOSTS.map((h, i) => (
            <Reveal as="li" key={h.name} delay={i * 50} className="ag-card flex flex-col p-6">
              <div className="flex items-center justify-between gap-2">
                <p className="font-round text-[1.2rem] font-extrabold">{h.name}</p>
                <span className={`rounded-full px-3 py-0.5 text-[0.8rem] font-bold ${h.how === "ドラッグ" ? "bg-sky-bg text-sky" : "bg-grape-bg text-grape"}`}>{h.how}</span>
              </div>
              <p className="mt-3 flex gap-2 text-[0.95rem]">
                <Icon name="heart" className="mt-1 h-4 w-4 flex-none text-mint" strokeWidth={2.6} />
                <span className="min-w-0">
                  <J text={h.good} />
                </span>
              </p>
              <p className="mt-1.5 flex gap-2 text-[0.95rem]">
                <Icon name="warn" className="mt-1 h-4 w-4 flex-none text-coral" strokeWidth={2.6} />
                <span className="min-w-0">
                  <J text={h.care} />
                </span>
              </p>
              <a href={h.url} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-1 pt-4 text-[0.9rem] font-bold text-grape hover:underline">
                公式ページ
                <Icon name="arrow" className="h-4 w-4" strokeWidth={2.8} />
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section id="trouble" icon="warn" tone="coral" kicker="こまったら" title="困ったとき" lead="押すと答えが開きます。" wide>
        <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
          <div className="grid gap-3">
            {TROUBLES.map((t) => (
              <details key={t.q} className="ag-card group overflow-hidden">
                <summary className="flex items-center gap-3 px-5 py-4 font-round font-extrabold sm:px-6">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-coral-bg text-coral">?</span>
                  <span className="min-w-0 flex-1">
                    <J text={t.q} />
                  </span>
                  <span className="ag-chev text-soft transition-transform" aria-hidden>
                    ▶
                  </span>
                </summary>
                <p className="bg-paper-2/60 px-5 py-4 sm:px-6">
                  <Rich text={t.a} />
                </p>
              </details>
            ))}
          </div>
          <div className="flex flex-col items-center gap-3 rounded-[28px] bg-sun-bg p-6 text-center lg:self-start">
            <Robot pose="think" body="#f5b100" className="w-28" />
            <p className="font-round font-extrabold">
              <J text="ここにない困りごとは？" />
            </p>
            <p className="text-[0.93rem] text-soft">
              <J text="エラーの文と、画面のスクリーンショットをAIに渡すのが近道。" />
            </p>
            <a href="/prompts#error" className="ag-btn bg-ink text-white">
              頼み方を見る
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
