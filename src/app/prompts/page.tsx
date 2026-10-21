import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import PromptsView from "@/components/PromptsView";
import Link from "next/link";
import J from "@/components/J";
import Copy from "@/components/Copy";
import { Bubble } from "@/components/doodle/Doodles";
import { PROMPTS } from "@/data/prompts";

export const metadata: Metadata = {
  title: "プロンプト集",
  description: `AIにそのまま貼れるお願い文${PROMPTS.length}本。公開する、作る、見た目を直す、調べる、困ったとき。調べものに使うコマンドつき。`,
};

const TIPS: { t: string; bad: string; good: string }[] = [
  { t: "何を、どうしたいか", bad: "きれいにして", good: "スマホで文字を大きく" },
  { t: "変えないでほしい所", bad: "直して", good: "文章は変えずに、色だけ直して" },
  { t: "見本を渡す", bad: "なんか変", good: "（スクリーンショットとエラーの文を貼る）" },
];

/** 調べものに使う Claude Code のコマンド（説明は /commands と同じ公式ドキュメントに合わせる） */
const RESEARCH_CMDS: { cmd: string; when: string }[] = [
  { cmd: "/deep-research", when: "ネットを広く調べて、出典つきのレポートにまとめてもらう。調べものの本命。" },
  { cmd: "/plan", when: "いきなり調べさせず、先に「何をどう調べるか」の計画を出してもらう。" },
  { cmd: "/effort", when: "考える深さを変える。込み入った調べものは high 以上に。" },
  { cmd: "/btw", when: "調べている途中で、流れを止めずに言葉の意味などを聞く。" },
  { cmd: "/compact", when: "長い調べもので記憶が埋まったら、要約して空きを作る。埋まり具合は /context で見られる。" },
  { cmd: "/export", when: "調べた結果を、テキストにして保存する。" },
  { cmd: "/resume", when: "前の調べものを、続きから始める。/rename で名前を付けておくと探しやすい。" },
];

/** 調べものをAIに頼むときに、気をつけること */
const RESEARCH_TIPS: { t: string; b: string }[] = [
  { t: "問いを1文にする", b: "「AIについて調べて」ではなく、「個人で使える画像生成AIの料金をくらべたい」のように絞る。" },
  { t: "範囲を決める", b: "期間（2025年以降）、地域（日本）、数（5つまで）を、先に伝える。" },
  { t: "出典のURLを付けさせる", b: "URLのない情報は、使わない前提にする。" },
  { t: "事実と推測を分けさせる", b: "確かな情報と、AIの推測を混ぜないように頼む。" },
  { t: "日付を確かめる", b: "料金やサービスの名前はよく変わる。いつの情報かを書かせる。" },
  { t: "最後は自分で開いて見る", b: "AIは、それらしい嘘を書くことがある。大事な数字は、出典のページを自分で開いて確かめる。" },
];

export default function PromptsPage() {
  return (
    <>
      <div className="mx-auto max-w-[1180px] px-6 pt-12 sm:px-10 sm:pt-16">
        <Bubble className="w-24 sm:w-28" />
      </div>

      <PageHead
        en="Prompts"
        title="コピーして、◆貼るだけ。"
        lead={`AIへのお願い文を${PROMPTS.length}本。【 】の中だけ、自分の言葉に書き換えてください。`}
      />

      <Section no="01" title="うまく頼む3つのコツ">
        <ul className="grid grid-cols-[minmax(0,1fr)] border-t border-line">
          {TIPS.map((x) => (
            <li key={x.t} className="grid gap-x-10 gap-y-3 border-b border-line-soft py-6 md:grid-cols-[14rem_minmax(0,1fr)]">
              <p className="text-[1.05rem]">
                <J text={x.t} />
              </p>
              <div className="min-w-0 max-w-[36em] grid gap-2">
                <p className="text-soft">
                  <span className="mr-3 text-[0.72rem] tracking-[0.18em]">よくない例</span>
                  <J text={`「${x.bad}」`} />
                </p>
                <p>
                  <span className="mr-3 text-[0.72rem] tracking-[0.18em] text-soft">よい例</span>
                  <J text={`「${x.good}」`} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        no="02"
        title="調べものの頼み方"
        lead="Claude Code で調べものをするときに使うコマンドと、気をつけること。大きな調べものは、先に /plan で計画を見てから /deep-research に進むと、やり直しが減ります。"
      >
        <h3 className="border-b border-line pb-3 text-[1.05rem]">使うコマンド</h3>
        <ul className="grid grid-cols-[minmax(0,1fr)]">
          {RESEARCH_CMDS.map((c) => (
            <li key={c.cmd} className="grid items-start gap-x-8 gap-y-2 border-b border-line-soft py-4 lg:grid-cols-[11rem_minmax(0,1fr)_auto]">
              <p>
                <span className="ag-code text-[0.98rem]">{c.cmd}</span>
              </p>
              <p className="min-w-0 max-w-[34em] text-[0.95rem] leading-[1.7]">
                <J text={c.when} />
              </p>
              <p>
                <Copy text={c.cmd} />
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[0.88rem] text-soft">
          <Link href="/commands" className="ag-link">
            ほかのコマンドの一覧を見る
          </Link>
        </p>

        <h3 className="mt-14 border-b border-line pb-3 text-[1.05rem]">気をつけること</h3>
        <ol className="grid grid-cols-[minmax(0,1fr)]">
          {RESEARCH_TIPS.map((x, i) => (
            <li key={x.t} className="grid gap-x-8 gap-y-1 border-b border-line-soft py-4 lg:grid-cols-[3rem_12rem_minmax(0,1fr)]">
              <p className="ag-num pt-0.5">{String(i + 1).padStart(2, "0")}</p>
              <p>
                <J text={x.t} />
              </p>
              <p className="min-w-0 max-w-[34em] text-[0.95rem] leading-[1.7] text-soft">
                <J text={x.b} />
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-6">
          <a href="#research-basic" className="ag-link">
            調べもの用のお願い文を見る
          </a>
        </p>
      </Section>

      <Section no="03" title="お願い文" lead={`${PROMPTS.length}本あります。目的でしぼれます。`}>
        <PromptsView />
      </Section>
    </>
  );
}
