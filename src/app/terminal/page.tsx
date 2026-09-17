import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Steps from "@/components/Steps";
import Callout from "@/components/Callout";
import Reveal from "@/components/Reveal";
import Copy from "@/components/Copy";
import J from "@/components/J";
import Rich from "@/components/Rich";
import Robot from "@/components/illust/Robot";
import Icon from "@/components/illust/Icons";
import HeroArt from "@/components/terminal/HeroArt";
import CompareFigure from "@/components/terminal/CompareFigure";
import TerminalWindow from "@/components/terminal/TerminalWindow";
import Tabs from "@/components/terminal/Tabs";
import Keycap from "@/components/terminal/Keycap";
import MiniPic from "@/components/terminal/MiniPic";
import GitFlow from "@/components/terminal/GitFlow";
import PlacesFigure from "@/components/terminal/PlacesFigure";
import RulePic from "@/components/terminal/RulePic";
import {
  DEMO_HELLO,
  DEMO_DEPLOY,
  DEMO_CLAUDE,
  OPEN_WAYS,
  BASICS,
  DEPLOY_STEPS,
  INSTALLS,
  CLAUDE_KEYS,
  RULES,
} from "@/data/terminal";

export const metadata: Metadata = {
  title: "ターミナル入門",
  description:
    "黒い画面（ターミナル）の開きかた、まず覚える8つの命令、ターミナルで公開する方法、Claude Code のインストールと使い方。こわくないためのルールつき。",
};

function OpenPanel({ way }: { way: (typeof OPEN_WAYS)[keyof typeof OPEN_WAYS] }) {
  return (
    <div className="ag-card grid grid-cols-[minmax(0,1fr)] gap-6 p-5 sm:p-7 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
      <div className="flex items-center justify-center gap-3 rounded-3xl bg-grape-bg px-6 py-7">
        {way.keys.map((k, i) => (
          <span key={k} className="flex items-center gap-3">
            {i > 0 && <span className="font-round text-[1.3rem] font-extrabold text-grape">＋</span>}
            <Keycap k={k} big />
          </span>
        ))}
      </div>
      <div>
        <ol className="grid gap-3">
          {way.steps.map((st, i) => (
            <li key={st} className="flex gap-3">
              <span className="ag-num text-[0.85rem]" style={{ background: "var(--ag-grape)" }}>
                {i + 1}
              </span>
              <p className="min-w-0 pt-1">
                <Rich text={st} />
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-4">
          <Callout kind="tip" text={way.tip} />
        </div>
      </div>
    </div>
  );
}

export default function TerminalPage() {
  return (
    <>
      <PageHero
        en="TERMINAL"
        tone="grape"
        icon="terminal"
        title="黒い画面は、◆こわくない。"
        lead="ターミナルは、パソコンに文字で話しかける窓です。いくつか覚えるだけで、公開もAIも、ぐっと身近になります。"
        art={<HeroArt />}
      />

      {/* 1. ターミナルってなに？ */}
      <Section id="what" icon="bulb" tone="grape" kicker="STEP 1" title="ターミナルって◆なに？" lead="いつもマウスでしていることを、文字でやるだけです。">
        <CompareFigure />
        <Reveal className="mt-8">
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            <div className="flex items-end gap-3">
              <Robot pose="think" body="#7a55e6" className="w-28 flex-none sm:w-32" />
              <p className="ag-card mb-6 rounded-bl-md p-4 text-[0.98rem]">
                <J text="ボタンが無い代わりに、◇「何をしたいか」を短い言葉で打ちます。◇下の窓で、動くところを見てみましょう。" />
              </p>
            </div>
            <TerminalWindow lines={DEMO_HELLO} title="mysite — いまどこ？中を見る" />
          </div>
        </Reveal>
      </Section>

      {/* 2. 開きかた */}
      <Section id="open" icon="play" tone="grape" kicker="STEP 2" title="開きかた" lead="使っているパソコンを選んでください。">
        <Tabs
          label="パソコンの種類"
          tabs={[
            { id: "mac", label: "Mac", content: <OpenPanel way={OPEN_WAYS.mac} /> },
            { id: "win", label: "Windows", content: <OpenPanel way={OPEN_WAYS.win} /> },
          ]}
        />
      </Section>

      {/* 3. まず覚える8つ */}
      <Section id="basics" icon="star" tone="grape" kicker="STEP 3" title="まず覚える、8つの命令" lead="これだけで、フォルダの中を自由に歩けます。" wide>
        <ul className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BASICS.map((b, i) => (
            <Reveal as="li" key={b.cmd} delay={i * 60} className="ag-card flex flex-col p-5">
              <div className="rounded-2xl bg-grape-bg px-2 py-2">
                <MiniPic pic={b.pic} />
              </div>
              <p className="mt-4 font-round text-[1.15rem] font-extrabold">{b.name}</p>
              <div className="mt-2 flex items-center justify-between gap-2">
                <code className="min-w-0 overflow-x-auto whitespace-nowrap rounded-lg bg-[#1d1d33] px-3 py-1 font-mono text-[0.95rem] text-white">
                  {b.cmd}
                </code>
                {b.copy && <Copy text={b.cmd} />}
              </div>
              <p className="mt-3 text-[0.95rem]">
                <Rich text={b.desc} />
              </p>
              {b.win && (
                <p className="mt-auto pt-3 text-[0.85rem] text-soft">
                  <span className="mr-1 rounded-full bg-sky-bg px-2 py-0.5 font-bold text-sky">Win</span>
                  <Rich text={b.win} />
                </p>
              )}
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 4. ターミナルで公開する */}
      <Section id="deploy" icon="rocket" tone="grape" kicker="STEP 4" title="ターミナルで公開する" lead="Vercel の道具（Vercel CLI）を使うと、命令2つで公開できます。">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-8">
          <TerminalWindow lines={DEMO_DEPLOY} title="mysite — Vercel に公開" />
          <Steps steps={DEPLOY_STEPS} tone="grape" />
        </div>

        <div className="mt-14">
          <h3 className="font-round text-[1.35rem] font-extrabold">
            <J text="GitHub に送るときは、「選ぶ → セーブ → 送る」" />
          </h3>
          <p className="mt-2 text-soft">
            <J text="GitHub とつないだ公開サービスは、送るだけで自動で更新されます。" />
          </p>
          <div className="mt-6">
            <GitFlow />
          </div>
          <div className="mt-6">
            <Callout
              kind="tip"
              text="`git add -A` や `git add .` は、全部をまとめて選ぶ命令。いらないファイルや秘密まで入りやすいので、`git add index.html` のようにファイルを指定するくせをつけると安心。"
            />
          </div>
        </div>
      </Section>

      {/* 5. Claude Code */}
      <Section id="claude" icon="robot" tone="grape" kicker="STEP 5" title="Claude Code をターミナルで使う" lead="フォルダの中身を読んで、直して、動かすところまでやってくれるAIです。">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-10">
          <div>
            <h3 className="font-round text-[1.2rem] font-extrabold">① インストールする</h3>
            <p className="mt-1 text-soft">
              <Rich text="1行をコピーして、ターミナルに貼って［Enter］。" />
            </p>
            <div className="mt-4">
              <Tabs
                label="インストールの方法"
                tabs={INSTALLS.map((ins) => ({
                  id: ins.id,
                  label: ins.label,
                  content: (
                    <div className="ag-card p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-[#1d1d33] p-3 pl-4">
                        <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-[0.9rem] text-white">
                          <span className="mr-2 text-[#7ff0c8]">%</span>
                          {ins.cmd}
                        </code>
                        <Copy text={ins.cmd} />
                      </div>
                      <p className="mt-3 text-[0.95rem]">
                        <Rich text={ins.note} />
                      </p>
                    </div>
                  ),
                }))}
              />
            </div>
            <div className="mt-4">
              <Callout kind="warn" text="Claude Code は、Pro 以上の有料プランで使えます。無料プランでは使えません。" />
            </div>
          </div>

          <div>
            <h3 className="font-round text-[1.2rem] font-extrabold">② フォルダに入って、呼び出す</h3>
            <p className="mt-1 text-soft">
              <Rich text="`claude` と打つと始まります。はじめてのときは、ブラウザでログインします。" />
            </p>
            <div className="mt-4">
              <TerminalWindow lines={DEMO_CLAUDE} title="mysite — Claude Code" />
            </div>
          </div>

          <div>
            <h3 className="font-round text-[1.2rem] font-extrabold">③ 覚えておくと便利なキー</h3>
            <ul className="mt-4 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2">
              {CLAUDE_KEYS.map((k) => (
                <li key={k.keys.join("+")} className="ag-card flex flex-col items-start gap-3 p-4 min-[420px]:flex-row min-[420px]:items-center min-[420px]:gap-4">
                  <span className="flex flex-none items-center gap-1.5">
                    {k.keys.map((key, i) => (
                      <span key={key} className="flex items-center gap-1.5">
                        {i > 0 && <span className="font-extrabold text-grape">＋</span>}
                        <Keycap k={key} />
                      </span>
                    ))}
                  </span>
                  <p className="min-w-0 text-[0.95rem]">
                    <J text={k.desc} />
                    {"link" in k && (
                      <Link href={k.link} className="ml-1 font-bold text-grape underline underline-offset-4">
                        一覧を見る
                      </Link>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] bg-grape-bg p-5 sm:p-8">
            <h3 className="font-round text-[1.2rem] font-extrabold">
              <J text="ターミナルが苦手でも、大丈夫。" />
            </h3>
            <p className="mt-1 text-soft">
              <J text="Claude Code は、ターミナル以外の場所でも使えます。" />
            </p>
            <div className="mt-5">
              <PlacesFigure />
            </div>
          </div>
        </div>
      </Section>

      {/* 6. ルール */}
      <Section id="rules" icon="warn" tone="coral" kicker="おまもり" title="こわくないための、4つのルール" lead="これさえ守れば、まず大丈夫。">
        <ul className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2">
          {RULES.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 80} className="ag-card flex flex-col items-start gap-4 p-5 min-[420px]:flex-row sm:p-6">
              <RulePic pic={r.pic} />
              <div className="min-w-0">
                <p className="font-round text-[1.12rem] font-extrabold leading-snug">
                  <Rich text={r.title} />
                </p>
                <p className="mt-2 text-[0.95rem]">
                  <Rich text={r.body} />
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 7. 次へ */}
      <section className="mx-auto max-w-5xl px-5 pt-20 sm:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-ink p-6 text-white sm:p-10">
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-6 md:grid-cols-[auto_minmax(0,1fr)]">
            <span className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-grape-bg sm:h-48 sm:w-48">
              <Robot pose="cheer" body="#7a55e6" className="w-28 sm:w-36" />
            </span>
            <div>
              <h2 className="font-round text-[1.5rem] font-extrabold sm:text-[1.9rem]">
                <J text="次は、AIに話しかけてみよう。" />
              </h2>
              <div className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2">
                <Link href="/commands" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/20">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-mint text-white">
                    <Icon name="slash" className="h-5 w-5" strokeWidth={2.4} />
                  </span>
                  <span>
                    <span className="block font-round font-extrabold">スラッシュコマンド</span>
                    <span className="text-[0.85rem] text-white/70">「/」で始まる操作の一覧</span>
                  </span>
                </Link>
                <Link href="/prompts" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/20">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-pink text-white">
                    <Icon name="chat" className="h-5 w-5" strokeWidth={2.4} />
                  </span>
                  <span>
                    <span className="block font-round font-extrabold">プロンプト集</span>
                    <span className="text-[0.85rem] text-white/70">ターミナルを使わない頼み方も</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
