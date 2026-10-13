import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import WordsView from "@/components/WordsView";
import J from "@/components/J";
import { WORDS } from "@/data/words";

export const metadata: Metadata = {
  title: "用語集",
  description: `デザイン、ホームページ、AIの言葉${WORDS.length}語を、一言とたとえで。ページの部位の名前の一覧つき。`,
};

/** ページの部位。AIに場所を伝えるときの呼び名 */
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
      <PageHead
        en="Words"
        title="言葉がわかると、◆頼み方が変わる。"
        lead={`「なんかいい感じに」より「余白を広く」。デザインとホームページとAIの言葉${WORDS.length}語を、一言で説明しました。`}
      />

      <Section
        no="01"
        title="ページの部位の名前"
        lead="AIに「ヒーローの見出しを大きく」と言えるだけで、伝わり方がぐっと変わります。上から順に、ページの上から下の並びです。"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[38rem] border-collapse text-left">
            <thead>
              <tr className="border-y border-line">
                <th scope="col" className="ag-label py-2.5 pr-6 font-normal">
                  名前
                </th>
                <th scope="col" className="ag-label py-2.5 pr-6 font-normal">
                  どこのこと
                </th>
                <th scope="col" className="ag-label py-2.5 font-normal">
                  ひとこと
                </th>
              </tr>
            </thead>
            <tbody>
              {PARTS.map((p) => (
                <tr key={p.name} className="border-b border-line-soft align-top">
                  <th scope="row" className="w-[13rem] whitespace-nowrap py-4 pr-6 font-normal">
                    {p.name}
                  </th>
                  <td className="w-[16rem] py-4 pr-6 text-soft">
                    <J text={p.where} />
                  </td>
                  <td className="py-4">
                    <J text={p.note} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section no="02" title="言葉をさがす" lead={`${WORDS.length}語あります。分野でしぼるか、言葉で検索してください。`}>
        <WordsView />
      </Section>
    </>
  );
}
