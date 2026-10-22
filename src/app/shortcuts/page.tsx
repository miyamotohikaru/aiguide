import type { Metadata } from "next";
import { Fragment } from "react";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import J from "@/components/J";
import { Keyboard } from "@/components/doodle/Doodles";
import { SHORTCUT_GROUPS } from "@/data/shortcuts";

const TOTAL = SHORTCUT_GROUPS.reduce((n, g) => n + g.items.length, 0);

export const metadata: Metadata = {
  title: "ショートカットキー",
  description: `マウスを使わずに、キーの組み合わせで一瞬で済ませる。Mac と Windows のショートカットキー${TOTAL}個。文字、ブラウザ、スクリーンショット、ファイル、Claude Code。`,
};

/** キーの並び。押せるボタンと見分けるため、枠ではなく灰色の地で示す（.ag-key） */
function Keys({ keys }: { keys: string[] }) {
  if (keys.length === 0) return <span className="text-soft">—</span>;
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      {keys.map((k, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="text-[0.75em] text-soft">＋</span>}
          <kbd className="ag-key font-serif">{k}</kbd>
        </Fragment>
      ))}
    </span>
  );
}

export default function ShortcutsPage() {
  return (
    <>
      <div className="relative">
        <PageHead
          en="SHORTCUTS"
          title="キーを押すだけで、◆何でも時短。"
          lead={`マウスで探してクリックする代わりに、キーの組み合わせで一瞬で済ませます。Mac と Windows の${TOTAL}個。全部覚えなくて大丈夫。1日に1つずつ、使ってみてください。`}
        />
        <Keyboard className="pointer-events-none absolute right-6 top-12 w-20 sm:right-10 sm:top-20 sm:w-28" />
      </div>

      <nav aria-label="このページの目次" className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <ul className="flex flex-wrap gap-x-7 gap-y-2 border-t border-line pt-6 text-[0.95rem]">
          {SHORTCUT_GROUPS.map((g) => (
            <li key={g.id}>
              <a href={`#${g.id}`} className="ag-link">
                {g.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {SHORTCUT_GROUPS.map((g, gi) => (
        <Section key={g.id} id={g.id} no={String(gi + 1).padStart(2, "0")} title={g.label} lead={g.lead}>
          <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,11rem)_minmax(0,11rem)] gap-x-6 border-b border-line pb-2 sm:grid">
            <span className="ag-label">すること</span>
            <span className="ag-label">Mac</span>
            <span className="ag-label">Windows</span>
          </div>
          <ul data-reveal-stagger>
            {g.items.map((s) => (
              <li
                key={s.act}
                className="grid grid-cols-2 gap-x-4 gap-y-1.5 border-b border-line-soft py-3.5 sm:grid-cols-[minmax(0,1fr)_minmax(0,11rem)_minmax(0,11rem)] sm:gap-x-6 sm:py-4"
              >
                <div className="col-span-2 sm:col-span-1">
                  <p>
                    <J text={s.act} />
                  </p>
                  {s.tip && (
                    <p className="mt-0.5 text-[0.85rem] leading-[1.6] text-soft">
                      <J text={s.tip} />
                    </p>
                  )}
                </div>
                <p className="text-[0.95rem]">
                  <span className="mr-2 text-[0.7rem] tracking-[0.12em] text-soft sm:hidden">Mac</span>
                  <Keys keys={s.mac} />
                </p>
                <p className="text-[0.95rem]">
                  <span className="mr-2 text-[0.7rem] tracking-[0.12em] text-soft sm:hidden">Win</span>
                  <Keys keys={s.win} />
                </p>
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}
