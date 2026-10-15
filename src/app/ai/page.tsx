import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import Note from "@/components/Note";
import J from "@/components/J";
import AiChooser from "@/components/ai/AiChooser";
import { Tools } from "@/components/doodle/Doodles";
import ToolDex from "@/components/ai/ToolDex";
import { PURPOSE_DOODLE, TYPE_DOODLE } from "@/components/doodle/AiDoodles";
import { AI_CHECKED, COMBOS, TOOLS, TYPES } from "@/data/ai";
import { PURPOSES } from "@/data/purposes";

export const metadata: Metadata = {
  title: "AIの選び方",
  description: `サイトやアプリを作るとき、どのAIを使えばいい？チャット型・ノーコード生成型・エディタ型・エージェント型の4タイプと、${TOOLS.length}のツールをくらべる。`,
};

export default function AiPage() {
  return (
    <>
      <div className="relative">
        <PageHead
          en="Choose AI"
          title="どのAIを使う？◆まずはタイプから。"
          lead="AIの道具は、たくさんあって迷います。でも、タイプは4つだけ。自分に合うタイプがわかれば、選ぶのはかんたんです。"
        />
        <Tools className="pointer-events-none absolute right-6 top-14 w-20 sm:right-10 sm:top-20 sm:w-28" />
      </div>

      <Section id="types" no="01" title="AIには、4つのタイプがある" lead="チャット型とノーコード生成型は、気軽に始められる。エディタ型とエージェント型は、自由で強力。">
        {/* 左の2つは気軽に、右の2つは本格的に。スマホでも上の段と下の段で分かれる */}
        <ul className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
          {TYPES.map((t, i) => {
            const Pic = TYPE_DOODLE[t.id];
            return (
              <li key={t.id} className="flex min-w-0 flex-col border-t border-line-soft pt-5">
                {Pic && <Pic className="w-full max-w-[11rem]" />}
                <p className="ag-label mt-4">{i < 2 ? "気軽に始める" : "自由で強力"}</p>
                <h3 className="mt-1.5 text-[1.08rem]">
                  <span className="ag-tag">{t.label}</span>
                </h3>
                <p className="mt-2 text-[0.95rem] leading-[1.7]">
                  <J text={t.one} />
                </p>
                <p className="mt-2 text-[0.88rem] leading-[1.6] text-soft">
                  <J text={`たとえるなら、${t.like}`} />
                </p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section id="purpose" no="02" title="やりたいことで選ぶ" lead="資料づくり、リサーチ、画像、アプリ。目的ごとに、いちばんいいAIと、うまく作る手順をまとめました。">
        <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {PURPOSES.map((p) => {
            const Pic = PURPOSE_DOODLE[p.id];
            return (
              <li key={p.id} className="min-w-0 border-t border-line-soft">
                <Link href={`/ai/purpose#${p.id}`} className="group flex h-full flex-col pt-4">
                  {Pic && <Pic className="w-20 flex-none" />}
                  <span className="mt-3 text-[0.98rem] leading-[1.6] group-hover:underline">
                    <J text={p.label} />
                  </span>
                  <span className="mt-1.5 text-[0.82rem] leading-[1.5] text-soft">
                    いちばん：<J text={p.best.tool} />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-8">
          <Link href="/ai/purpose" className="ag-btn">
            目的別のくわしい手順を見る
          </Link>
        </p>
      </Section>

      <Section id="choose" no="03" title="3つの質問で選ぶ" lead="3つの質問に答えると、合いそうな道具を2つ出します。">
        <AiChooser />
      </Section>

      <Section id="dex" no="04" title={`AIツール図鑑（${TOOLS.length}種）`} lead="タイプでしぼりこめます。「くわしく見る」で、得意・苦手やモードの違いが読めます。">
        <ToolDex />
        <p className="mt-10 text-[0.88rem] text-soft">
          <J text={`料金と条件は、${AI_CHECKED}に各社の公式ページで確認したものです。◇ドル表示は月払いの金額。変わることがあるので、使う前に公式サイトで確かめてください。`} />
        </p>
        <div className="mt-5 max-w-[40em]">
          <Note kind="warn">
            <J text="Firebase Studio は、新しく始めることができなくなりました（2027年3月に終了予定）。◇これから始めるなら、Google AI Studio か、Google Antigravity を選びます。" />
          </Note>
        </div>
      </Section>

      <Section id="combo" no="05" title="おすすめの組み合わせ" lead="1つのAIで全部やらなくて大丈夫。得意なところをつなげます。">
        <ol className="grid grid-cols-[minmax(0,1fr)]">
          {COMBOS.map((c) => (
            <li key={c.title} className="border-t border-line-soft py-7">
              <div className="grid gap-x-10 gap-y-2 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
                <div>
                  <h3 className="text-[1.08rem]">{c.title}</h3>
                  <p className="mt-1 text-[0.9rem] text-soft">
                    <J text={c.lead} />
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-[1.02rem]">
                    {c.steps.map((s, i) => (
                      <span key={s.tool} className="j-s">
                        {i > 0 && <span className="mx-2 text-soft">→</span>}
                        {s.tool}
                      </span>
                    ))}
                  </p>
                  <p className="mt-1 text-[0.9rem] text-soft">
                    {c.steps.map((s, i) => (
                      <span key={s.tool} className="j-s">
                        {i > 0 && <span className="mx-2">・</span>}
                        <J text={s.act} />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="next" no="06" title="作ったら、公開しよう">
        <ul className="grid grid-cols-[minmax(0,1fr)]">
          {[
            { href: "/setup#route-a", t: "HTMLができた", b: "フォルダをドラッグして公開する（ルートA）。" },
            { href: "/setup#route-b", t: "何度も直していきたい", b: "GitHub と Vercel で、自動で公開する（ルートB）。" },
            { href: "/prompts", t: "AIへの頼み方に迷う", b: "そのまま貼れるお願い文を使う。" },
            { href: "/links", t: "もっとくわしく知りたい", b: "公式の手引きや、スキルの配布サイトを見る。" },
          ].map((x) => (
            <li key={x.href} className="border-t border-line-soft">
              <Link href={x.href} className="grid gap-x-10 gap-y-1 py-5 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
                <span className="text-[1.02rem]">
                  <J text={x.t} />
                </span>
                <span className="min-w-0 text-soft">
                  <J text={x.b} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="care" no="07" title="使う前に、3つだけ気をつける">
        <ol className="grid max-w-[40em] grid-cols-[minmax(0,1fr)]">
          {[
            "料金やプランは、よく変わります。申し込む前に、公式の料金ページを見ます。",
            "APIキー、パスワード、他人の個人情報は、AIに貼りません。",
            "作ったものでお金をもらうなら、そのサービスの利用規約（商用利用）を確かめます。",
          ].map((t, i) => (
            <li key={t} className="grid gap-x-8 border-t border-line-soft py-5 sm:grid-cols-[3rem_minmax(0,1fr)]">
              <span className="ag-num pt-1">{String(i + 1).padStart(2, "0")}</span>
              <span className="min-w-0">
                <J text={t} />
              </span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
