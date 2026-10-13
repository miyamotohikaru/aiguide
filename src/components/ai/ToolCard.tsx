import Link from "next/link";
import J from "../J";
import { TYPES, type Tool } from "@/data/ai";

const TERM = { yes: "ターミナル不要", partly: "アプリならターミナル不要", no: "ターミナルを使う" };
export const EASY = { 3: "はじめてでも", 2: "すこし慣れが要る", 1: "なれてから" } as const;

/** 枠で囲んだ小さな紹介。おすすめの結果などで使う */
export default function ToolCard({ tool, why }: { tool: Tool; why?: string }) {
  const type = TYPES.find((t) => t.id === tool.type)!;
  return (
    <article className="ag-box flex h-full flex-col p-6">
      <p className="ag-label">{type.label}</p>
      <h3 className="mt-2 text-[1.2rem] leading-snug">
        <J text={tool.name} />
      </h3>
      <p className="mt-1 text-[0.85rem] text-soft">{tool.maker}</p>
      {why && (
        <p className="mt-4 border-t border-line-soft pt-4">
          <J text={why} />
        </p>
      )}
      <p className="mt-3 text-[0.95rem] text-soft">
        <J text={tool.one} />
      </p>
      <dl className="mt-5 grid gap-1 border-t border-line-soft pt-4 text-[0.88rem]">
        <div className="flex gap-3">
          <dt className="w-[5.5em] flex-none text-soft">ターミナル</dt>
          <dd className="min-w-0">{TERM[tool.noTerminal]}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-[5.5em] flex-none text-soft">料金</dt>
          <dd className="min-w-0">
            <J text={tool.price} />
          </dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-[5.5em] flex-none text-soft">むずかしさ</dt>
          <dd className="min-w-0">{EASY[tool.easy]}</dd>
        </div>
      </dl>
      {tool.note && (
        <p className="mt-3 text-[0.88rem] text-soft">
          <J text={tool.note} />
        </p>
      )}
      <div className="mt-auto flex flex-wrap items-baseline gap-5 pt-6 text-[0.92rem]">
        <Link href={`/ai/${tool.id}`} className="ag-link">
          くわしく見る
        </Link>
        <a href={tool.url} target="_blank" rel="noreferrer" className="ag-link text-soft">
          公式サイト
        </a>
      </div>
    </article>
  );
}
