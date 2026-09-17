import Icon from "../illust/Icons";
import J from "../J";
import { TYPES, type Tool } from "@/data/ai";
import { TONE } from "@/lib/site";

const TERM = {
  yes: { label: "ターミナル不要", cls: "bg-mint-bg text-mint" },
  partly: { label: "アプリならターミナル不要", cls: "bg-sun-bg text-[#9a6b00]" },
  no: { label: "ターミナルを使う", cls: "bg-grape-bg text-grape" },
};

export default function ToolCard({ tool, why }: { tool: Tool; why?: string }) {
  const type = TYPES.find((t) => t.id === tool.type)!;
  const tone = TONE[type.tone];
  return (
    <article className="ag-card flex h-full flex-col overflow-hidden">
      <div className={`h-2 ${tone.solid}`} aria-hidden />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3">
          <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-2xl text-white ${tone.solid}`}>
            <Icon name={type.icon} className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <div className="min-w-0">
            <h3 className="text-[1.15rem] font-extrabold leading-snug">
              <J text={tool.name} />
            </h3>
            <p className="text-[0.8rem] text-soft">
              <span className="j-s">{tool.maker}・</span>
              <span className={`j-s ${tone.fg}`}>{type.label}</span>
            </p>
          </div>
        </div>
        {why && (
          <p className="mt-3 rounded-2xl bg-coral-bg px-3.5 py-2 text-[0.93rem] font-bold">
            <J text={why} />
          </p>
        )}
        <p className="mt-3 text-[0.95rem]">
          <J text={tool.one} />
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[0.78rem] font-bold">
          <span className={`rounded-full px-2.5 py-0.5 ${TERM[tool.noTerminal].cls}`}>{TERM[tool.noTerminal].label}</span>
          <span className={`rounded-full px-2.5 py-0.5 ${tool.free ? "bg-sky-bg text-sky" : "bg-coral-bg text-coral"}`}>
            {tool.free ? "無料で始められる" : "有料プランのみ"}
          </span>
        </div>
        <dl className="mt-3 grid gap-1 text-[0.85rem]">
          <div className="flex gap-2">
            <dt className="w-20 flex-none text-soft">はじめて度</dt>
            <dd aria-label={`5段階ではなく3段階中${tool.easy}`} className="tracking-widest text-sun">
              {"★".repeat(tool.easy)}
              <span className="text-line">{"★".repeat(3 - tool.easy)}</span>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-20 flex-none text-soft">料金</dt>
            <dd className="min-w-0">
              <J text={tool.price} />
            </dd>
          </div>
        </dl>
        {tool.note && <p className="mt-2 text-[0.85rem] font-bold text-coral">{tool.note}</p>}
        <a
          href={tool.url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-1 self-start pt-4 text-[0.9rem] font-bold underline decoration-2 underline-offset-4 hover:text-coral"
        >
          公式サイト
          <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
