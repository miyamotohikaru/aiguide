import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import WordsView from "@/components/WordsView";
import PageAnatomy from "@/components/illust/PageAnatomy";
import Robot from "@/components/illust/Robot";
import { WORDS } from "@/data/words";

export const metadata: Metadata = {
  title: "用語集",
  description: `デザイン、ホームページ、AIの言葉${WORDS.length}語を、一言とたとえで。ページの部位の図解つき。`,
};

function Art() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px]">
      <div className="absolute inset-[6%] rounded-full bg-card/70" />
      {["ヒーロー", "余白", "CTA", "ドメイン"].map((w, i) => (
        <span
          key={w}
          className="ag-float absolute rounded-2xl bg-card px-3.5 py-1.5 font-round font-extrabold shadow-[0_4px_0_rgba(35,35,63,0.9)]"
          style={{ top: ["6%", "44%", "58%", "82%"][i], left: ["2%", "72%", "-2%", "56%"][i], animationDelay: `${i * 0.6}s` }}
        >
          {w}
        </span>
      ))}
      <Robot pose="think" body="#f5b100" className="absolute inset-[20%]" />
    </div>
  );
}

export default function WordsPage() {
  return (
    <>
      <PageHero
        en="WORDS"
        tone="sun"
        icon="book"
        title="言葉がわかると、◆頼み方が変わる。"
        lead={`「なんかいい感じに」より「余白を広く」。デザインとホームページとAIの言葉${WORDS.length}語を、一言で説明しました。`}
        art={<Art />}
      />
      <Section icon="map" tone="pink" kicker="まずは図で" title="ページの部位の名前" lead="AIに「ヒーローの見出しを大きく」と言えるだけで、伝わり方がぐっと変わります。" wide>
        <PageAnatomy />
      </Section>
      <Section icon="search" tone="sun" kicker={`${WORDS.length}語`} title="言葉をさがす" wide>
        <WordsView />
      </Section>
    </>
  );
}
