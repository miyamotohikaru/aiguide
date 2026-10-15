import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import PromptsView from "@/components/PromptsView";
import J from "@/components/J";
import { Bubble } from "@/components/doodle/Doodles";
import { PROMPTS } from "@/data/prompts";

export const metadata: Metadata = {
  title: "プロンプト集",
  description: `AIにそのまま貼れるお願い文${PROMPTS.length}本。公開する、作る、見た目を直す、困ったとき。`,
};

const TIPS: { t: string; bad: string; good: string }[] = [
  { t: "何を、どうしたいか", bad: "きれいにして", good: "スマホで文字を大きく" },
  { t: "変えないでほしい所", bad: "直して", good: "文章は変えずに、色だけ直して" },
  { t: "見本を渡す", bad: "なんか変", good: "（スクリーンショットとエラーの文を貼る）" },
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

      <Section no="02" title="お願い文" lead={`${PROMPTS.length}本あります。目的でしぼれます。`}>
        <PromptsView />
      </Section>
    </>
  );
}
