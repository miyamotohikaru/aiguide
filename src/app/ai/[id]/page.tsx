import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import J from "@/components/J";
import Icon from "@/components/illust/Icons";
import Robot from "@/components/illust/Robot";
import ProsCons from "@/components/ai/ProsCons";
import ModeCards from "@/components/ai/ModeCards";
import DepthGauge from "@/components/ai/DepthGauge";
import { TOOLS, TYPES, AI_CHECKED } from "@/data/ai";
import { DETAILS } from "@/data/ai-details";
import { PURPOSES } from "@/data/purposes";
import { TONE } from "@/lib/site";

export function generateStaticParams() {
  return TOOLS.filter((t) => DETAILS[t.id]).map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const tool = TOOLS.find((t) => t.id === id);
  if (!tool) return {};
  return {
    title: `${tool.name}の使い方`,
    description: `${tool.name}の得意・苦手、メリット・デメリット、モードの違い、うまく使うコツ。`,
  };
}

const TERM = { yes: "ターミナル不要", partly: "アプリならターミナル不要", no: "ターミナルを使う" };

export default async function ToolPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tool = TOOLS.find((t) => t.id === id);
  const d = DETAILS[id];
  if (!tool || !d) notFound();
  const type = TYPES.find((t) => t.id === tool.type)!;
  const tone = TONE[type.tone];
  const idx = TOOLS.findIndex((t) => t.id === id);
  const prev = TOOLS[(idx - 1 + TOOLS.length) % TOOLS.length];
  const next = TOOLS[(idx + 1) % TOOLS.length];
  const purposes = d.bestFor.map((p) => PURPOSES.find((x) => x.id === p)).filter(Boolean);

  return (
    <>
      <PageHero
        en={`${type.label}　${tool.maker}`}
        tone={type.tone}
        icon={type.icon}
        title={tool.name}
        lead={tool.one}
        art={
          <div className="ag-card relative mx-auto w-full max-w-[380px] p-6">
            <Robot pose="point" body={tone.hex} className="absolute -right-4 -top-16 w-24" />
            <dl className="grid gap-3 text-[0.95rem]">
              <div>
                <dt className="text-[0.8rem] font-bold text-soft">料金</dt>
                <dd className="font-bold">
                  <J text={tool.price} />
                </dd>
              </div>
              <div>
                <dt className="text-[0.8rem] font-bold text-soft">ターミナル</dt>
                <dd className="font-bold">{TERM[tool.noTerminal]}</dd>
              </div>
              <div>
                <dt className="text-[0.8rem] font-bold text-soft">はじめて度</dt>
                <dd className="text-[1.2rem] tracking-widest text-sun">
                  {"★".repeat(tool.easy)}
                  <span className="text-line">{"★".repeat(3 - tool.easy)}</span>
                </dd>
              </div>
            </dl>
            <a href={tool.url} target="_blank" rel="noreferrer" className="ag-btn mt-5 text-white" style={{ background: tone.hex }}>
              公式サイトへ
              <Icon name="arrow" className="h-4 w-4" strokeWidth={3} />
            </a>
          </div>
        }
      />

      <nav aria-label="このページの目次" className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <ul className="flex flex-wrap gap-2 text-[0.9rem] font-bold">
          {[
            ["#good", "得意・苦手"],
            ["#merit", "メリット・デメリット"],
            ...(d.modes.length ? [["#modes", "モード"]] : []),
            ...(d.thinking.length ? [["#depth", d.thinkingTitle ?? "考える深さ"]] : []),
            ["#tips", "うまく使うコツ"],
            ["#for", "向いている用途"],
          ].map(([h, l]) => (
            <li key={h}>
              <a href={h} className="block rounded-full bg-card px-4 py-1.5 shadow-[0_6px_18px_-12px_rgba(35,35,63,0.5)] hover:-translate-y-0.5">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Section id="good" icon="star" tone={type.tone} title="得意なこと・苦手なこと" wide>
        <ProsCons good={d.strengths} bad={d.weaknesses} goodLabel="得意" badLabel="苦手・注意" />
      </Section>

      <Section id="merit" icon="heart" tone={type.tone} title="メリット・デメリット" wide>
        <ProsCons good={d.merits} bad={d.demerits} goodLabel="メリット" badLabel="デメリット" />
      </Section>

      {d.modes.length > 0 && (
        <Section id="modes" icon="map" tone={type.tone} title="モードと機能" lead="画面で切り替えられるもの。名前は画面の表記のままです。" wide>
          <ModeCards modes={d.modes} color={tone.hex} />
        </Section>
      )}

      {d.thinking.length > 0 && (
        <Section id="depth" icon="bulb" tone={type.tone} title={d.thinkingTitle ?? "考える深さ"} lead={d.thinkingKind === "levels" ? "深く考えるほど、答えはていねいに。そのぶん時間と使用量がかかります。" : "どのモデルで、どれくらい考えさせるか。賢くするほど、使う量が増えます。"} wide>
          {d.thinkingKind === "levels" ? <DepthGauge items={d.thinking} color={tone.hex} /> : <ModeCards modes={d.thinking} color={tone.hex} />}
        </Section>
      )}

      <Section id="tips" icon="bulb" tone="sun" title="うまく使うコツ" wide>
        <ol className="grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-2">
          {d.tips.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 40} className="ag-card flex items-start gap-4 p-5">
              <span className="ag-num text-[0.95rem]" style={{ background: tone.hex }}>
                {i + 1}
              </span>
              <p className="pt-1">
                <J text={t} />
              </p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="for" icon="spark" tone={type.tone} title="こんなことに向いている" lead="押すと、その目的でいちばんのAIと、うまく作る手順が見られます。" wide>
        <ul className="flex flex-wrap gap-3">
          {purposes.map((p) => (
            <li key={p!.id}>
              <Link href={`/ai/purpose#${p!.id}`} className="flex items-center gap-2 rounded-2xl bg-card px-4 py-3 font-round font-extrabold shadow-[0_8px_22px_-14px_rgba(35,35,63,0.5)] transition-transform hover:-translate-y-0.5">
                <span aria-hidden>{p!.emoji}</span>
                {p!.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[0.85rem] text-soft">
          <J text={`${AI_CHECKED}に、公式サイト・公式ドキュメントで確認しました。得意・苦手は、その内容をもとにしたこのサイトの評価です。`} />
        </p>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[0.8rem] text-soft">
          {d.sources.map((s) => (
            <li key={s} className="min-w-0 break-all">
              <a href={s} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                {s.replace(/^https?:\/\//, "")}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <nav aria-label="ほかのツール" className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 px-5 sm:px-8">
        <Link href={`/ai/${prev.id}`} className="ag-card p-4 hover:-translate-y-0.5">
          <span className="text-[0.8rem] text-soft">← まえ</span>
          <span className="block font-round font-extrabold">{prev.name}</span>
        </Link>
        <Link href={`/ai/${next.id}`} className="ag-card p-4 text-right hover:-translate-y-0.5">
          <span className="text-[0.8rem] text-soft">つぎ →</span>
          <span className="block font-round font-extrabold">{next.name}</span>
        </Link>
        <Link href="/ai#dex" className="col-span-2 rounded-2xl bg-coral-bg p-3 text-center font-bold text-coral">
          AIツール図鑑にもどる
        </Link>
      </nav>
    </>
  );
}
