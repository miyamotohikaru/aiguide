import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import PromptsView from "@/components/PromptsView";
import Reveal from "@/components/Reveal";
import J from "@/components/J";
import Robot from "@/components/illust/Robot";
import Icon, { type IconName } from "@/components/illust/Icons";
import { PROMPTS } from "@/data/prompts";

export const metadata: Metadata = {
  title: "プロンプト集",
  description: `AIにそのまま貼れるお願い文${PROMPTS.length}本。公開する、作る、見た目を直す、困ったとき。`,
};

const TIPS: { t: string; bad: string; good: string; icon: IconName }[] = [
  { t: "何を、どうしたいか", bad: "きれいにして", good: "スマホで文字を大きく", icon: "search" },
  { t: "変えないでほしい所", bad: "直して", good: "文章は変えずに、色だけ直して", icon: "lock" },
  { t: "見本を渡す", bad: "なんか変", good: "（スクショ＋エラー文を貼る）", icon: "pc" },
];

function Art() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]" aria-hidden>
      <div className="ml-auto w-fit max-w-[90%] rounded-3xl rounded-br-md bg-pink px-5 py-3 font-bold text-white shadow-[0_4px_0_rgba(35,35,63,0.9)]">
        <J text="スマホで崩れているのを、直してください。" />
      </div>
      <div className="mt-3 flex items-end gap-2">
        <Robot pose="wave" body="#e0487a" className="w-24 flex-none" />
        <div className="rounded-3xl rounded-bl-md bg-card px-4 py-3 shadow-[0_4px_0_rgba(35,35,63,0.9)]">
          <J text="まかせて！◇メニューのはみ出しを、直しました。" />
        </div>
      </div>
    </div>
  );
}

export default function PromptsPage() {
  return (
    <>
      <PageHero
        en="PROMPTS"
        tone="pink"
        icon="chat"
        title="コピーして、◆貼るだけ。"
        lead={`AIへのお願い文を${PROMPTS.length}本。黄色い【 】の中だけ、自分の言葉に書き換えてください。`}
        art={<Art />}
      />
      <Section icon="bulb" tone="sun" kicker="コツ" title="うまく頼む3つのコツ" wide>
        <ul className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-3">
          {TIPS.map((x, i) => (
            <Reveal as="li" key={x.t} delay={i * 80} className="ag-card p-6">
              <p className="flex items-center gap-2.5 font-round text-[1.15rem] font-extrabold">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sun-bg text-[#9a6b00]">
                  <Icon name={x.icon} className="h-5 w-5" />
                </span>
                {x.t}
              </p>
              <div className="mt-4 grid gap-2 text-[0.95rem]">
                <p className="flex items-center gap-2 rounded-xl bg-coral-bg px-3 py-2">
                  <span className="font-bold text-coral">✕</span>
                  <span className="min-w-0">「{x.bad}」</span>
                </p>
                <p className="flex items-center gap-2 rounded-xl bg-mint-bg px-3 py-2">
                  <span className="font-bold text-mint">◯</span>
                  <span className="min-w-0">
                    <J text={`「${x.good}」`} />
                  </span>
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>
      <Section icon="chat" tone="pink" kicker={`${PROMPTS.length}本`} title="お願い文" wide>
        <PromptsView />
      </Section>
    </>
  );
}
