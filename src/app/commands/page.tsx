import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import CommandsView from "@/components/CommandsView";
import J from "@/components/J";
import Rich from "@/components/Rich";
import { COMMANDS, COMMANDS_CHECKED, COMMANDS_SOURCE } from "@/data/commands";

export const metadata: Metadata = {
  title: "スラッシュコマンド一覧",
  description: `Claude Code の「/」で始まるコマンド${COMMANDS.length}個を、初心者向けの言葉で。まず覚える10個つき。`,
};

const HOW = [
  "入力欄に、半角で `/` を打つ。",
  "候補の一覧が出る。続けて文字を打つと、しぼりこめる。",
  "選んで［Enter］。コマンドのあとに言葉を足せるものもある。",
];

export default function CommandsPage() {
  return (
    <>
      <PageHead
        en="SLASH COMMANDS"
        color="green"
        title="「/」で始まる、◆AIの操作ボタン。"
        lead={`Claude Code で使えるスラッシュコマンドを、${COMMANDS.length}個ぜんぶ、やさしい言葉にしました。まずは★の10個だけ覚えれば十分です。`}
      />
      <Section no="1" title="使い方">
        <ol className="grid gap-3 sm:grid-cols-3">
          {HOW.map((h, i) => (
            <li key={h} className="ag-box flex gap-3 p-4">
              <span className="ag-num text-[0.85rem]">{i + 1}</span>
              <p className="pt-0.5">
                <Rich text={h} />
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-[0.92rem] text-soft">
          <J text="スラッシュコマンドは、AIへのお願いではなく、道具そのものの操作です。◇ふつうのお願いは、いつもどおり文章で書きます。" />
        </p>
      </Section>
      <Section no="2" title="一覧">
        <CommandsView />
        <p className="mt-8 text-[0.85rem] text-soft">
          <J text={`${COMMANDS_CHECKED}に、公式ドキュメントと照らし合わせました。◇プランや使う場所（ターミナル・デスクトップアプリ・VS Code）によって、出ないコマンドもあります。`} />{" "}
          <a href={COMMANDS_SOURCE} target="_blank" rel="noreferrer" className="underline underline-offset-4">
            公式の一覧（英語）
          </a>
        </p>
      </Section>
    </>
  );
}
