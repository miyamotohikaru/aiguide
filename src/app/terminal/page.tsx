import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import Steps from "@/components/Steps";
import Note from "@/components/Note";
import Copy from "@/components/Copy";
import J from "@/components/J";
import Rich from "@/components/Rich";
import Tabs from "@/components/terminal/Tabs";
import Term from "@/components/terminal/Term";
import { Window } from "@/components/doodle/Doodles";
import {
  DEMO_HELLO,
  DEMO_DEPLOY,
  DEMO_CLAUDE,
  OPEN_WAYS,
  BASICS,
  DEPLOY_STEPS,
  GIT_FLOW,
  INSTALLS,
  CLAUDE_PLACES,
  CLAUDE_KEYS,
  RULES,
} from "@/data/terminal";

export const metadata: Metadata = {
  title: "ターミナル入門",
  description:
    "黒い画面（ターミナル）の開きかた、まず覚える8つの命令、ターミナルで公開する方法、Claude Code のインストールと使い方。こわくないためのルールつき。",
};

const INDEX = [
  ["#what", "ターミナルって何？"],
  ["#open", "開きかた"],
  ["#basics", "8つの命令"],
  ["#deploy", "ターミナルで公開する"],
  ["#claude", "Claude Code"],
  ["#rules", "こわくないルール"],
];

const COMPARE = [
  { term: "いつものやり方", sub: "マウス", body: "フォルダの絵を探して、ダブルクリックして開く。" },
  { term: "ターミナルのやり方", sub: "文字", body: "`cd mysite` と打って入り、`open .` で開く。やっていることは同じ。" },
];

function OpenPanel({ way }: { way: (typeof OPEN_WAYS)[keyof typeof OPEN_WAYS] }) {
  return (
    <div>
      <p className="flex flex-wrap items-center gap-2">
        {way.keys.map((k, i) => (
          <span key={k} className="flex items-center gap-2">
            {i > 0 && <span className="text-soft">＋</span>}
            <span className="ag-key px-3 py-1 text-[0.95rem]">{k}</span>
          </span>
        ))}
      </p>
      <ol className="mt-6 grid grid-cols-[minmax(0,1fr)]">
        {way.steps.map((st, i) => (
          <li key={st} className="grid gap-x-8 border-t border-line-soft py-4 first:border-t-0 first:pt-0 sm:grid-cols-[3rem_minmax(0,1fr)]">
            <p className="ag-num pt-1">{String(i + 1).padStart(2, "0")}</p>
            <p className="min-w-0 max-w-[36em]">
              <Rich text={st} />
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-6 max-w-[36em]">
        <Note kind="tip" text={way.tip} />
      </div>
    </div>
  );
}

export default function TerminalPage() {
  return (
    <>
      <div className="mx-auto max-w-[1180px] px-6 pt-12 sm:px-10 sm:pt-16">
        <Window className="w-24 sm:w-28" />
      </div>

      <PageHead
        en="Terminal"
        title="黒い画面は、◆こわくない。"
        lead="ターミナルは、パソコンに文字で話しかける窓です。いくつか覚えるだけで、公開もAIも、ぐっと身近になります。"
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

      <Section id="what" no="01" title="ターミナルって、なに？" lead="いつもマウスでしていることを、文字でやるだけです。">
        <dl className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 md:gap-x-10">
          {COMPARE.map((c) => (
            <div key={c.term} className="border-t border-line-soft py-6 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0">
              <dt>
                <span className="ag-label">{c.sub}</span>
                <span className="mt-1 block text-[1.15rem]">{c.term}</span>
              </dt>
              <dd className="mt-3 max-w-[32em] text-[0.97rem] text-soft">
                <Rich text={c.body} />
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 max-w-[38em]">
          <J text="ボタンが無いかわりに、「何をしたいか」を短い言葉で打ちます。◇下の画面が、実際のやり取りです。" />
        </p>
        <div className="mt-6 max-w-[42em]">
          <Term lines={DEMO_HELLO} caption="いまどこ？　中を見る" />
        </div>
      </Section>

      <Section id="open" no="02" title="開きかた" lead="使っているパソコンを選んでください。">
        <Tabs
          label="パソコンの種類"
          tabs={[
            { id: "mac", label: OPEN_WAYS.mac.label, content: <OpenPanel way={OPEN_WAYS.mac} /> },
            { id: "win", label: OPEN_WAYS.win.label, content: <OpenPanel way={OPEN_WAYS.win} /> },
          ]}
        />
      </Section>

      <Section id="basics" no="03" title="まず覚える、8つの命令" lead="これだけで、フォルダの中を自由に歩けます。">
        <ul className="grid grid-cols-[minmax(0,1fr)]">
          {BASICS.map((b) => (
            <li key={b.cmd} className="grid gap-x-10 gap-y-2 border-t border-line-soft py-6 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
              <div className="flex flex-wrap items-center gap-3">
                <code className="ag-code text-[0.98rem]">{b.cmd}</code>
                {b.copy && <Copy text={b.cmd} />}
              </div>
              <div className="min-w-0">
                <h3 className="text-[1.05rem] leading-snug">
                  <J text={b.name} />
                </h3>
                <p className="mt-1.5 max-w-[36em] text-soft">
                  <Rich text={b.desc} />
                </p>
                {b.win && (
                  <p className="mt-2 max-w-[36em] text-[0.9rem] text-soft">
                    <Rich text={b.win} />
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="deploy" no="04" title="ターミナルで公開する" lead="Vercel の道具（Vercel CLI）を使うと、命令2つで公開できます。">
        <div className="max-w-[42em]">
          <Term lines={DEMO_DEPLOY} caption="Vercel に公開する" />
        </div>
        <div className="mt-10">
          <Steps steps={DEPLOY_STEPS} />
        </div>

        <h3 className="mt-16 border-b border-line pb-3 text-[1.05rem]">GitHub に送るときは、選ぶ → セーブ → 送る</h3>
        <p className="mt-6 max-w-[38em] text-soft">
          <J text="GitHub とつないだ公開サービスは、送るだけで自動で更新されます。" />
        </p>
        <ol className="mt-6 grid grid-cols-[minmax(0,1fr)]">
          {GIT_FLOW.map((g, i) => (
            <li key={g.cmd} className="grid gap-x-10 gap-y-2 border-t border-line-soft py-5 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="ag-num">{String(i + 1).padStart(2, "0")}</span>
                <code className="ag-code text-[0.95rem]">{g.cmd}</code>
              </div>
              <p className="min-w-0 text-soft">
                <span className="mr-3 text-ink">{g.name}</span>
                <J text={g.desc} />
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-8 max-w-[38em]">
          <Note
            kind="tip"
            text="`git add -A` や `git add .` は、全部をまとめて選ぶ命令。いらないファイルや秘密まで入りやすいので、`git add index.html` のようにファイルを指定するくせをつけると安心。"
          />
        </div>
      </Section>

      <Section id="claude" no="05" title="Claude Code をターミナルで使う" lead="フォルダの中身を読んで、直して、動かすところまでやってくれるAIです。">
        <h3 className="border-b border-line pb-3 text-[1.05rem]">① インストールする</h3>
        <p className="mt-6 max-w-[38em] text-soft">
          <Rich text="1行をコピーして、ターミナルに貼って［Enter］。" />
        </p>
        <div className="mt-6">
          <Tabs
            label="インストールの方法"
            tabs={INSTALLS.map((ins) => ({
              id: ins.id,
              label: ins.label,
              content: (
                <div className="max-w-[42em]">
                  <div className="ag-box flex flex-wrap items-center justify-between gap-3 bg-paper-2 px-5 py-4">
                    <code className="ag-code min-w-0 flex-1 overflow-x-auto whitespace-nowrap">{ins.cmd}</code>
                    <Copy text={ins.cmd} />
                  </div>
                  <p className="mt-3 text-[0.95rem] text-soft">
                    <Rich text={ins.note} />
                  </p>
                </div>
              ),
            }))}
          />
        </div>
        <div className="mt-8 max-w-[38em]">
          <Note kind="warn" text="Claude Code は、Pro 以上の有料プランで使えます。無料プランでは使えません。" />
        </div>

        <h3 className="mt-16 border-b border-line pb-3 text-[1.05rem]">② フォルダに入って、呼び出す</h3>
        <p className="mt-6 max-w-[38em] text-soft">
          <Rich text="`claude` と打つと始まります。はじめてのときは、ブラウザでログインします。" />
        </p>
        <div className="mt-6 max-w-[42em]">
          <Term lines={DEMO_CLAUDE} caption="Claude Code を呼び出す" />
        </div>

        <h3 className="mt-16 border-b border-line pb-3 text-[1.05rem]">③ 覚えておくと便利なキー</h3>
        <ul className="mt-6 grid grid-cols-[minmax(0,1fr)]">
          {CLAUDE_KEYS.map((k) => (
            <li key={k.keys.join("+")} className="grid gap-x-10 gap-y-2 border-t border-line-soft py-5 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)]">
              <p className="flex flex-wrap items-center gap-2">
                {k.keys.map((key, i) => (
                  <span key={key} className="flex items-center gap-2">
                    {i > 0 && <span className="text-soft">＋</span>}
                    <span className="ag-key">{key}</span>
                  </span>
                ))}
              </p>
              <p className="min-w-0 max-w-[36em] text-soft">
                <J text={k.desc} />
                {"link" in k && (
                  <Link href={k.link} className="ag-link ml-2 text-ink">
                    一覧を見る
                  </Link>
                )}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="mt-16 border-b border-line pb-3 text-[1.05rem]">④ ターミナルが苦手でも、大丈夫</h3>
        <p className="mt-6 max-w-[38em] text-soft">
          <J text="Claude Code は、ターミナル以外の場所でも使えます。" />
        </p>
        <ul className="mt-6 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 sm:gap-x-10">
          {CLAUDE_PLACES.map((p) => (
            <li key={p.name} className="border-t border-line-soft py-5">
              <p className="text-[1.05rem]">
                <J text={p.name} />
              </p>
              <p className="mt-1 text-[0.95rem] text-soft">
                <Rich text={p.sub} />
                <span className="ml-3 text-[0.85rem]">{p.terminal ? "ターミナルを使う" : "ターミナルは要らない"}</span>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="rules" no="06" title="こわくないための、4つのルール" lead="これさえ守れば、まず大丈夫。">
        <ul className="grid grid-cols-[minmax(0,1fr)]">
          {RULES.map((r, i) => (
            <li key={r.title} className="grid gap-x-10 gap-y-1 border-t border-line-soft py-6 first:border-t-0 first:pt-0 sm:grid-cols-[4rem_minmax(0,1fr)]">
              <p className="ag-num pt-1">{String(i + 1).padStart(2, "0")}</p>
              <div className="min-w-0">
                <h3 className="text-[1.08rem] leading-snug">
                  <Rich text={r.title} />
                </h3>
                <p className="mt-1.5 max-w-[38em] text-soft">
                  <Rich text={r.body} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="次に読む" lead="ターミナルに慣れたら、AIへの話しかけ方を見てみてください。">
        <ul className="grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 sm:gap-x-10">
          {[
            { href: "/commands", name: "スラッシュコマンド", desc: "「/」で始まる操作の一覧。" },
            { href: "/prompts", name: "プロンプト集", desc: "そのまま貼れる、お願い文。" },
          ].map((x) => (
            <li key={x.href} className="border-t border-line-soft py-5">
              <Link href={x.href} className="ag-link text-[1.05rem]">
                {x.name}
              </Link>
              <p className="mt-1 text-soft">
                <J text={x.desc} />
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
