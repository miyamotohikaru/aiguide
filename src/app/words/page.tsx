import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import WordsView from "@/components/WordsView";
import { WORDS } from "@/data/words";

export const metadata: Metadata = {
  title: "用語集",
  description: `デザイン、ホームページ、AIの言葉${WORDS.length}語を、一言とたとえで。AIに頼むときに、そのまま使える言葉。`,
};

export default function WordsPage() {
  return (
    <>
      <PageHead
        en="WORDS"
        color="yellow"
        title="言葉がわかると、◆頼み方が変わる。"
        lead={`「なんかいい感じに」より「余白を広く」。デザインとホームページとAIの言葉${WORDS.length}語を、一言で説明しました。`}
      />
      <Section title="さがす">
        <WordsView />
      </Section>
    </>
  );
}
