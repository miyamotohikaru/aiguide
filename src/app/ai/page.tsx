import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import J from "@/components/J";
import Icon from "@/components/illust/Icons";
import Robot from "@/components/illust/Robot";
import HeroArt from "@/components/ai/HeroArt";
import TypeMap from "@/components/ai/TypeMap";
import AiChooser from "@/components/ai/AiChooser";
import ToolDex from "@/components/ai/ToolDex";
import Combos from "@/components/ai/Combos";
import { AI_CHECKED, TOOLS } from "@/data/ai";
import { PURPOSES } from "@/data/purposes";

export const metadata: Metadata = {
  title: "AIの選び方",
  description: `サイトやアプリを作るとき、どのAIを使えばいい？チャット型・ノーコード生成型・エディタ型・エージェント型の4タイプと、${TOOLS.length}のツールを図でくらべる。`,
};

export default function AiPage() {
  return (
    <>
      <PageHero
        en="CHOOSE AI"
        tone="coral"
        icon="spark"
        title="どのAIを使う？◆まずはタイプから。"
        lead="AIの道具は、たくさんあって迷います。でも、タイプは4つだけ。自分に合うタイプがわかれば、選ぶのはかんたんです。"
        art={<HeroArt />}
      />

      <Section id="types" icon="map" tone="coral" kicker="STEP 1" title="AIには、4つのタイプがある" lead="チャット型とノーコード生成型は、気軽に始められる。エディタ型とエージェント型は、自由で強力。" wide>
        <TypeMap />
      </Section>

      <Section id="purpose" icon="star" tone="coral" kicker="目的から" title="やりたいことで選ぶ" lead="資料づくり、リサーチ、画像、アプリ。目的ごとに、いちばんいいAIと、うまく作る手順をまとめました。" wide>
        <ul className="grid grid-cols-[minmax(0,1fr)] gap-3 min-[380px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {PURPOSES.map((p) => (
            <li key={p.id}>
              <Link href={`/ai/purpose#${p.id}`} className="ag-card group flex h-full items-center gap-3 p-4 transition-transform hover:-translate-y-1">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-coral-bg text-[1.4rem]" aria-hidden>
                  {p.emoji}
                </span>
                <span className="min-w-0">
                  <span className="block font-round text-[0.95rem] font-extrabold leading-snug">
                    <J text={p.label} />
                  </span>
                  <span className="block text-[0.78rem] font-bold text-coral">🏆 {p.best.tool}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/ai/purpose" className="ag-btn bg-coral text-white">
            目的別のくわしい手順を見る
            <Icon name="arrow" className="h-4 w-4" strokeWidth={3} />
          </Link>
        </div>
      </Section>

      <Section id="choose" icon="search" tone="coral" kicker="STEP 2" title="3つの質問で選ぶ" lead="3つの質問に答えると、合いそうな道具を2つ出します。" wide>
        <AiChooser />
      </Section>

      <Section id="dex" icon="book" tone="coral" kicker="STEP 3" title={`AIツール図鑑（${TOOLS.length}種）`} lead="タイプでしぼりこめます。★が多いほど、はじめての人向け。" wide>
        <ToolDex />
        <p className="mt-5 text-[0.85rem] text-soft">
          <J text={`料金と条件は、${AI_CHECKED}に各社の公式ページで確認したものです。◇ドル表示は月払いの金額。変わることがあるので、使う前に公式サイトで確かめてください。`} />
        </p>
        <div className="mt-4">
          <Callout kind="warn">
            <J text="Firebase Studio は、新しく始めることができなくなりました（2027年3月に終了予定）。◇これから始めるなら、Google AI Studio か、Google Antigravity を選びます。" />
          </Callout>
        </div>
      </Section>

      <Section id="combo" icon="refresh" tone="coral" kicker="STEP 4" title="おすすめの組み合わせ" lead="1つのAIで全部やらなくて大丈夫。得意なところをつなげます。" wide>
        <Combos />
      </Section>

      <Section id="next" icon="rocket" tone="coral" title="作ったら、公開しよう" wide>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-3">
          {[
            { href: "/setup#route-a", t: "HTMLができた", b: "フォルダをドラッグして公開する（ルートA）。", tone: "bg-sky-bg", fg: "text-sky", icon: "folder" as const },
            { href: "/setup#route-b", t: "何度も直していきたい", b: "GitHub と Vercel で、自動で公開する（ルートB）。", tone: "bg-sky-bg", fg: "text-sky", icon: "github" as const },
            { href: "/prompts", t: "AIへの頼み方に迷う", b: "そのまま貼れるお願い文を使う。", tone: "bg-pink-bg", fg: "text-pink", icon: "chat" as const },
          ].map((x) => (
            <Link key={x.href} href={x.href} className={`group flex flex-col rounded-3xl p-6 transition-transform hover:-translate-y-1 ${x.tone}`}>
              <span className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-card ${x.fg}`}>
                <Icon name={x.icon} className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <p className="mt-3 font-round text-[1.15rem] font-extrabold">{x.t}</p>
              <p className="mt-1 text-[0.95rem]">
                <J text={x.b} />
              </p>
              <p className={`mt-auto flex items-center gap-1 pt-3 font-bold ${x.fg}`}>
                見にいく <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="care" icon="lock" tone="coral" title="使う前に、3つだけ気をつける" wide>
        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-6 md:grid-cols-[1fr_180px]">
          <ul className="grid grid-cols-[minmax(0,1fr)] gap-3">
            {[
              "料金やプランは、よく変わります。申し込む前に、公式の料金ページを見ます。",
              "APIキー、パスワード、他人の個人情報は、AIに貼りません。",
              "作ったものでお金をもらうなら、そのサービスの利用規約（商用利用）を確かめます。",
            ].map((t, i) => (
              <li key={t} className="ag-card flex items-start gap-3 p-4 sm:p-5">
                <span className="ag-num bg-coral text-[0.9rem]">{i + 1}</span>
                <p className="pt-0.5">
                  <J text={t} />
                </p>
              </li>
            ))}
          </ul>
          <Robot pose="point" body="#f0533f" className="mx-auto hidden h-44 w-44 md:block" />
        </div>
      </Section>
    </>
  );
}
