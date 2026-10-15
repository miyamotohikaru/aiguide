import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import WordsView from "@/components/WordsView";
import J from "@/components/J";
import { Book } from "@/components/doodle/Doodles";
import PageParts from "@/components/doodle/PageParts";
import { WORDS } from "@/data/words";

export const metadata: Metadata = {
  title: "用語集",
  description: `デザイン、ホームページ、AIの言葉${WORDS.length}語を、一言とたとえで。ページの部位の名前の一覧つき。`,
};

/** ページの部位。AIに場所を伝えるときの呼び名。並び順は図（PageParts）の番号と対応 */
const PARTS: { name: string; where: string; note: string }[] = [
  { name: "ヘッダー", where: "ページのいちばん上の帯。", note: "サイト名とメニューが入る。どのページでも同じ。" },
  { name: "ナビゲーション", where: "ヘッダーの中の、リンクの並び。", note: "ほかのページへ行くためのメニュー。" },
  { name: "ハンバーガーメニュー", where: "スマホのヘッダーの右。", note: "三本線のボタン。押すとメニューが開く。" },
  { name: "ヒーロー", where: "ヘッダーのすぐ下、最初に見える場所。", note: "いちばん大きな見出しと、ひとこと説明。" },
  { name: "ファーストビュー", where: "スクロールせずに見える範囲ぜんぶ。", note: "ここで何のサイトか伝わるかが大事。" },
  { name: "CTA", where: "ヒーローや各節の終わり。", note: "いちばん押してほしいボタン。1画面に1つが基本。" },
  { name: "カード", where: "本文の中の、くり返し並ぶ四角。", note: "画像・見出し・説明をひとまとめにした部品。" },
  { name: "グリッド／カラム", where: "カードや文章の並び方。", note: "見えないマス目。そろえると整って見える。" },
  { name: "フッター", where: "ページのいちばん下の帯。", note: "連絡先、リンク、著作権の表示。" },
];

export default function WordsPage() {
  return (
    <>
      <div className="mx-auto max-w-[1180px] px-6 pt-12 sm:px-10 sm:pt-16">
        <Book className="w-24 sm:w-28" />
      </div>

      <PageHead
        en="Words"
        title="言葉がわかると、◆頼み方が変わる。"
        lead={`「なんかいい感じに」より「余白を広く」。デザインとホームページとAIの言葉${WORDS.length}語を、一言で説明しました。`}
      />

      <Section
        no="01"
        title="ページの部位の名前"
        lead="AIに「ヒーローの見出しを大きく」と言えるだけで、伝わり方がぐっと変わります。図の番号と、下の一覧が対応しています。"
      >
        {/* 狭い幅では名前が読めない大きさになるので、番号だけの図に替える */}
        <PageParts className="hidden w-full sm:block" />
        <PageParts compact className="block w-full sm:hidden" />

        <ol className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-x-8 border-t border-line sm:grid-cols-2">
          {PARTS.map((p, i) => (
            <li key={p.name} className="grid grid-cols-[2rem_minmax(0,1fr)] border-b border-line-soft py-4">
              <span className="ag-num pt-0.5">{i + 1}</span>
              <div>
                <p>{p.name}</p>
                <p className="mt-1 text-soft">
                  <J text={p.note} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section no="02" title="言葉をさがす" lead={`${WORDS.length}語あります。分野でしぼるか、言葉で検索してください。`}>
        <WordsView />
      </Section>
    </>
  );
}
