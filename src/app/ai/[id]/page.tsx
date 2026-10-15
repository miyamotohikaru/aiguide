import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import J from "@/components/J";
import { TOOLS, TYPES, AI_CHECKED } from "@/data/ai";
import { DETAILS } from "@/data/ai-details";
import { PURPOSES } from "@/data/purposes";
import { thumbForTool } from "@/data/thumbs";
import type { Mode } from "@/data/ai-detail-types";
import { EASY } from "@/components/ai/ToolCard";

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

/** 2列の定義リスト（左に見出し、右に箇条書き） */
function Pair({ a, b, aLabel, bLabel }: { a: string[]; b: string[]; aLabel: string; bLabel: string }) {
  const col = (items: string[], label: string) => (
    <div className="border-t border-line-soft pt-6">
      <p className="ag-label">{label}</p>
      <ul className="mt-4 grid gap-3">
        {items.map((t) => (
          <li key={t} className="flex gap-3">
            <span aria-hidden className="text-soft">
              —
            </span>
            <span className="min-w-0">
              <J text={t} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-x-12 gap-y-8 md:grid-cols-2">
      {col(a, aLabel)}
      {col(b, bLabel)}
    </div>
  );
}

/** モード・設定の表 */
function ModeTable({ rows, numbered }: { rows: Mode[]; numbered?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left align-top">
        <thead>
          <tr className="border-b border-line">
            {numbered && <th scope="col" className="w-12 pb-3 pr-4 font-normal" />}
            <th scope="col" className="w-[15rem] pb-3 pr-6 font-normal text-soft text-[0.85rem] tracking-[0.1em]">
              名前
            </th>
            <th scope="col" className="pb-3 pr-6 font-normal text-soft text-[0.85rem] tracking-[0.1em]">
              何が変わるか
            </th>
            <th scope="col" className="w-[18rem] pb-3 font-normal text-soft text-[0.85rem] tracking-[0.1em]">
              使いどき
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((m, i) => (
            <tr key={m.name} className="border-b border-line-soft align-top">
              {numbered && <td className="ag-num py-4 pr-4">{String(i + 1).padStart(2, "0")}</td>}
              <td className="py-4 pr-6">
                <J text={m.name} />
              </td>
              <td className="py-4 pr-6">
                <J text={m.what} />
              </td>
              <td className="py-4 text-soft">
                <J text={m.when} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function ToolPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tool = TOOLS.find((t) => t.id === id);
  const d = DETAILS[id];
  if (!tool || !d) notFound();
  const type = TYPES.find((t) => t.id === tool.type)!;
  const idx = TOOLS.findIndex((t) => t.id === id);
  const prev = TOOLS[(idx - 1 + TOOLS.length) % TOOLS.length];
  const next = TOOLS[(idx + 1) % TOOLS.length];
  const purposes = d.bestFor.map((p) => PURPOSES.find((x) => x.id === p)).filter((p) => p !== undefined);
  const levels = d.thinkingKind === "levels";
  const thumb = thumbForTool(tool.id);

  return (
    <>
      <PageHead en={`${type.label}　${tool.maker}`} title={tool.name} lead={tool.one} />

      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        {thumb && (
          <img
            src={thumb}
            alt=""
            width={480}
            height={300}
            loading="lazy"
            className="mb-12 w-full max-w-[22rem] border border-line-soft object-cover"
          />
        )}
        <dl className="grid grid-cols-[minmax(0,1fr)] border-t border-line sm:grid-cols-3">
          {[
            ["料金", tool.price],
            ["ターミナル", TERM[tool.noTerminal]],
            ["むずかしさ", EASY[tool.easy]],
          ].map(([k, v]) => (
            <div key={k} className="border-b border-line-soft py-5 sm:border-b-0 sm:pr-8">
              <dt className="ag-label">{k}</dt>
              <dd className="mt-1">
                <J text={v} />
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 flex flex-wrap items-center gap-6">
          <a href={tool.url} target="_blank" rel="noreferrer" className="ag-btn">
            公式サイトへ
          </a>
          {tool.note && (
            <span className="text-[0.92rem] text-soft">
              <J text={tool.note} />
            </span>
          )}
        </p>

        <nav aria-label="このページの目次" className="mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-line-soft pt-6 text-[0.9rem]">
          {[
            ["#good", "得意・苦手"],
            ["#merit", "メリット・デメリット"],
            ...(d.modes.length ? [["#modes", "モードと機能"]] : []),
            ...(d.thinking.length ? [["#depth", d.thinkingTitle ?? "考える深さ"]] : []),
            ["#tips", "うまく使うコツ"],
            ["#for", "向いている用途"],
          ].map(([h, l]) => (
            <a key={h} href={h} className="ag-link text-soft">
              {l}
            </a>
          ))}
        </nav>
      </div>

      <Section id="good" no="01" title="得意なこと・苦手なこと">
        <Pair a={d.strengths} b={d.weaknesses} aLabel="得意" bLabel="苦手・注意" />
      </Section>

      <Section id="merit" no="02" title="メリット・デメリット">
        <Pair a={d.merits} b={d.demerits} aLabel="メリット" bLabel="デメリット" />
      </Section>

      {d.modes.length > 0 && (
        <Section id="modes" no="03" title="モードと機能" lead="画面で切り替えられるもの。名前は画面の表記のままです。">
          <ModeTable rows={d.modes} />
        </Section>
      )}

      {d.thinking.length > 0 && (
        <Section
          id="depth"
          no="04"
          title={d.thinkingTitle ?? "考える深さ"}
          lead={levels ? "上から下へ、だんだん深く考えます。深いほど、時間と使用量がかかります。" : "どのモデルで、どれくらい考えさせるか。賢くするほど、使う量が増えます。"}
        >
          <ModeTable rows={d.thinking} numbered={levels} />
        </Section>
      )}

      <Section id="tips" no="05" title="うまく使うコツ">
        <ol className="grid max-w-[44em] grid-cols-[minmax(0,1fr)]">
          {d.tips.map((t, i) => (
            <li key={t} className="grid gap-x-8 border-t border-line-soft py-4 sm:grid-cols-[3rem_minmax(0,1fr)]">
              <span className="ag-num pt-1">{String(i + 1).padStart(2, "0")}</span>
              <span className="min-w-0">
                <J text={t} />
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="for" no="06" title="こんなことに向いている" lead="押すと、その目的でいちばんのAIと、うまく作る手順が見られます。">
        <ul className="grid max-w-[44em] grid-cols-[minmax(0,1fr)]">
          {purposes.map((p) => (
            <li key={p.id} className="border-t border-line-soft">
              <Link href={`/ai/purpose#${p.id}`} className="flex items-start justify-between gap-5 py-3.5">
                <span className="min-w-0">
                  <J text={p.label} />
                </span>
                <span className="shrink-0 text-[0.85rem] text-soft">{p.best.tool}</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-[0.88rem] text-soft">
          <J text={`${AI_CHECKED}に、公式サイト・公式ドキュメントで確認しました。得意・苦手は、その内容をもとにしたこのサイトの評価です。`} />
        </p>
        <ul className="mt-3 grid gap-1 text-[0.8rem] text-soft">
          {d.sources.map((s) => (
            <li key={s} className="min-w-0 break-all">
              <a href={s} target="_blank" rel="noreferrer" className="ag-link">
                {s.replace(/^https?:\/\//, "")}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <nav aria-label="ほかのツール" className="mx-auto mt-20 max-w-[1180px] px-6 sm:px-10">
        <div className="grid grid-cols-2 border-t border-line">
          <Link href={`/ai/${prev.id}`} className="border-r border-line-soft py-6 pr-5">
            <span className="ag-label">まえ</span>
            <span className="mt-1 block">{prev.name}</span>
          </Link>
          <Link href={`/ai/${next.id}`} className="py-6 pl-5 text-right">
            <span className="ag-label">つぎ</span>
            <span className="mt-1 block">{next.name}</span>
          </Link>
        </div>
        <p className="border-t border-line-soft py-6 text-center">
          <Link href="/ai#dex" className="ag-link">
            AIツール図鑑にもどる
          </Link>
        </p>
      </nav>
    </>
  );
}
