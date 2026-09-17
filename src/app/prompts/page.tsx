import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import PromptsView from "@/components/PromptsView";
import J from "@/components/J";
import { PROMPTS } from "@/data/prompts";

export const metadata: Metadata = {
  title: "プロンプト集",
  description: `AIにそのまま貼れるお願い文${PROMPTS.length}本。公開する、作る、見た目を直す、困ったとき。`,
};

const TIPS = [
  { t: "何を、どうしたいか", b: "「きれいにして」より、「スマホで文字を大きく」。" },
  { t: "変えないでほしい所", b: "「文章は変えないで」と書くと、頼んでいない所が変わりにくい。" },
  { t: "見本を渡す", b: "スクリーンショットやエラーの文は、説明するより貼るほうが早い。" },
];

export default function PromptsPage() {
  return (
    <>
      <PageHead
        en="PROMPTS"
        color="pink"
        title="コピーして、◆貼るだけ。"
        lead={`AIへのお願い文を${PROMPTS.length}本用意しました。色のついた【 】の中だけ、自分の言葉に書き換えてください。`}
      />
      <Section no="1" title="うまく頼む3つのコツ">
        <ul className="grid gap-3 sm:grid-cols-3">
          {TIPS.map((x) => (
            <li key={x.t} className="ag-box p-4 sm:p-5">
              <p className="font-bold">{x.t}</p>
              <p className="mt-1.5 text-[0.95rem]">
                <J text={x.b} />
              </p>
            </li>
          ))}
        </ul>
      </Section>
      <Section no="2" title="お願い文">
        <PromptsView />
      </Section>
    </>
  );
}
