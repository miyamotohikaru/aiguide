import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import CommandsView from "@/components/CommandsView";
import Copy from "@/components/Copy";
import J from "@/components/J";
import { Slash } from "@/components/doodle/Doodles";
import { COMMANDS, COMMANDS_CHECKED, COMMANDS_SOURCE } from "@/data/commands";

export const metadata: Metadata = {
  title: "スラッシュコマンド一覧",
  description: `Claude Code の「/」で始まるコマンド${COMMANDS.length}個を、初心者向けの言葉で。まず覚える10個つき。`,
};

const HOW = [
  { t: "「/」を打つ", b: "入力欄に、半角でスラッシュを1つ。" },
  { t: "候補から選ぶ", b: "続けて文字を打つと、しぼりこめる。" },
  { t: "Enter で実行", b: "コマンドのあとに、言葉を足せるものもある。" },
];

export default function CommandsPage() {
  const stars = COMMANDS.filter((c) => c.star);
  return (
    <>
      <div className="mx-auto max-w-[1180px] px-6 pt-12 sm:px-10 sm:pt-16">
        <Slash className="w-24 sm:w-28" />
      </div>

      <PageHead
        en="Slash Commands"
        title="「/」で始まる、◆AIの操作ボタン。"
        lead={`Claude Code で使えるスラッシュコマンドを、${COMMANDS.length}個ぜんぶ、やさしい言葉にしました。まずは10個だけで十分です。`}
      />

      <Section no="01" title="使い方" lead="スラッシュコマンドは、AIへのお願いではなく、道具そのものの操作です。ふつうのお願いは、いつもどおり文章で書きます。">
        <ol className="grid grid-cols-[minmax(0,1fr)] border-t border-line">
          {HOW.map((x, i) => (
            <li key={x.t} className="grid gap-x-8 gap-y-1 border-b border-line-soft py-5 sm:grid-cols-[4rem_minmax(0,1fr)]">
              <p className="ag-num pt-1">{String(i + 1).padStart(2, "0")}</p>
              <div className="min-w-0">
                <p className="text-[1.05rem]">
                  <J text={x.t} />
                </p>
                <p className="mt-0.5 text-soft">
                  <J text={x.b} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section no="02" title="まず覚える10個" lead="この10個を知っていれば、たいていのことは足ります。">
        <ul className="grid grid-cols-[minmax(0,1fr)] border-t border-line">
          {stars.map((c) => (
            <li key={c.cmd} className="grid gap-x-8 gap-y-1 border-b border-line-soft py-4 sm:grid-cols-[12rem_minmax(0,1fr)]">
              <div className="flex items-baseline justify-between gap-3 sm:pr-4">
                <span className="ag-code text-[1rem]">{c.cmd}</span>
                <span className="shrink-0">
                  <Copy text={c.cmd} />
                </span>
              </div>
              <p className="min-w-0 max-w-[38em]">
                <J text={c.desc} />
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section no="03" title="ぜんぶの一覧" lead={`${COMMANDS.length}個あります。検索と、種類でのしぼりこみができます。`}>
        <CommandsView />
        <p className="mt-10 max-w-[38em] text-[0.85rem] text-soft">
          <J
            text={`${COMMANDS_CHECKED}に、公式ドキュメントと照らし合わせました。◇プランや使う場所（ターミナル・デスクトップアプリ・VS Code）によって、出ないコマンドもあります。`}
          />{" "}
          <a href={COMMANDS_SOURCE} target="_blank" rel="noreferrer" className="ag-link text-ink">
            公式の一覧（英語）
          </a>
          <span className="mx-2">・</span>
          <Link href="/links" className="ag-link text-ink">
            ほかの参考リンク
          </Link>
        </p>
      </Section>
    </>
  );
}
