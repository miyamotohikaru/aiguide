import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CommandsView from "@/components/CommandsView";
import Reveal from "@/components/Reveal";
import Copy from "@/components/Copy";
import J from "@/components/J";
import Robot from "@/components/illust/Robot";
import { COMMANDS, COMMANDS_CHECKED, COMMANDS_SOURCE } from "@/data/commands";

export const metadata: Metadata = {
  title: "スラッシュコマンド一覧",
  description: `Claude Code の「/」で始まるコマンド${COMMANDS.length}個を、初心者向けの言葉で。まず覚える10個つき。`,
};

/** 入力欄に「/」を打つと候補が出る、の絵 */
function SlashMenuArt() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]" aria-hidden>
      <div className="rounded-3xl border-[3px] border-ink bg-ink p-4 font-mono text-[13px] text-white shadow-[0_6px_0_rgba(15,159,118,0.9)]">
        <div className="grid gap-1 rounded-2xl bg-white/8 p-2">
          {[
            ["/clear", "会話をまっさらに"],
            ["/compact", "会話を要約"],
            ["/context", "記憶の使い方を見る"],
          ].map(([c, d], i) => (
            <div key={c} className={`flex items-center justify-between gap-3 rounded-lg px-2.5 py-1.5 ${i === 0 ? "bg-mint text-white" : "text-white/70"}`}>
              <span className="font-semibold">{c}</span>
              <span className="truncate font-sans text-[11px]">{d}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-xl border-2 border-white/30 px-3 py-2.5 text-[15px]">
          <span className="text-[#7ff0c8]">&gt;</span>
          <span>/c</span>
          <span className="ag-caret -ml-1 inline-block h-4 w-2 bg-white" />
        </div>
      </div>
      <Robot pose="wave" body="#0f9f76" className="absolute -bottom-14 -right-6 w-24" />
    </div>
  );
}

export default function CommandsPage() {
  const stars = COMMANDS.filter((c) => c.star);
  return (
    <>
      <PageHero
        en="SLASH COMMANDS"
        tone="mint"
        icon="slash"
        title="「/」で始まる、◆AIの操作ボタン。"
        lead={`Claude Code で使えるスラッシュコマンドを、${COMMANDS.length}個ぜんぶ、やさしい言葉にしました。まずは★の10個だけで十分です。`}
        art={<SlashMenuArt />}
      />

      <Section icon="play" tone="mint" kicker="使い方" title="3ステップで使える" wide>
        <ol className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-3">
          {[
            { t: "「/」を打つ", b: "入力欄に、半角でスラッシュを1つ。", k: "/" },
            { t: "候補から選ぶ", b: "続けて文字を打つと、しぼりこめる。", k: "/co" },
            { t: "Enter で実行", b: "コマンドのあとに言葉を足せるものもある。", k: "⏎" },
          ].map((x, i) => (
            <Reveal as="li" key={x.t} delay={i * 80} className="ag-card flex items-center gap-4 p-5">
              <span className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-ink font-mono text-[1.4rem] font-semibold text-[#7ff0c8] shadow-[0_4px_0_rgba(15,159,118,0.9)]">
                {x.k}
              </span>
              <div className="min-w-0">
                <p className="font-round text-[1.1rem] font-extrabold">
                  {i + 1}. {x.t}
                </p>
                <p className="text-[0.93rem] text-soft">
                  <J text={x.b} />
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
        <p className="mt-5 rounded-2xl bg-mint-bg px-5 py-3 text-[0.95rem]">
          <J text="スラッシュコマンドは、AIへのお願いではなく、道具そのものの操作です。◇ふつうのお願いは、いつもどおり文章で書きます。" />
        </p>
      </Section>

      <Section icon="star" tone="sun" kicker="まず覚える" title="この10個で、だいたい困らない" wide>
        <ul className="grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {stars.map((c, i) => (
            <Reveal as="li" key={c.cmd} delay={i * 40} className="ag-card flex flex-col p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[1.05rem] font-semibold text-mint">{c.cmd}</span>
                <Copy text={c.cmd} />
              </div>
              <p className="mt-2 text-[0.9rem]">
                <J text={c.desc} />
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section icon="book" tone="mint" kicker={`${COMMANDS.length}個`} title="ぜんぶの一覧" wide>
        <CommandsView />
        <p className="mt-8 text-[0.85rem] text-soft">
          <J text={`${COMMANDS_CHECKED}に、公式ドキュメントと照らし合わせました。◇プランや使う場所（ターミナル・デスクトップアプリ・VS Code）によって、出ないコマンドもあります。`} />{" "}
          <a href={COMMANDS_SOURCE} target="_blank" rel="noreferrer" className="font-bold underline underline-offset-4">
            公式の一覧（英語）
          </a>
        </p>
      </Section>
    </>
  );
}
