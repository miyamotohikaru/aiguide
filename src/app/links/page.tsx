import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import J from "@/components/J";
import Icon, { type IconName } from "@/components/illust/Icons";
import Robot from "@/components/illust/Robot";
import { LINKS, LINK_CATS, LINKS_CHECKED } from "@/data/links";
import { TONE, type Tone } from "@/lib/site";

export const metadata: Metadata = {
  title: "参考リンク",
  description: "公式ドキュメント、スキルやプロンプトの配布、公開サービスの手引き、学習サイト、デザイン素材。実際に開いて確かめた参考リンクを、やさしい説明つきでまとめました。",
};

const LANG = {
  日本語: "bg-mint-bg text-mint",
  日本語あり: "bg-sky-bg text-sky",
  英語: "bg-paper-2 text-soft",
} as const;

function Art() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px]">
      <div className="absolute inset-[8%] rounded-full bg-card/70" />
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="ag-float absolute flex h-16 w-16 items-center justify-center rounded-2xl bg-card shadow-[0_4px_0_rgba(35,35,63,0.9)]"
          style={{ top: ["4%", "20%", "64%", "78%"][i], left: ["6%", "70%", "0%", "62%"][i], animationDelay: `${i * 0.5}s` }}
          aria-hidden
        >
          <Icon name={(["book", "globe", "spark", "heart"] as IconName[])[i]} className="h-7 w-7 text-mint" strokeWidth={2.2} />
        </span>
      ))}
      <Robot pose="point" body="#0f9f76" className="absolute inset-[22%]" />
    </div>
  );
}

export default function LinksPage() {
  return (
    <>
      <PageHero
        en="LINKS"
        tone="mint"
        icon="globe"
        title="知りたくなったら、◇ここから。"
        lead={`公式の手引き、スキルやプロンプトの配布、学習サイト、素材集。${LINKS.length}件を実際に開いて、何が載っているかを確かめました。`}
        art={<Art />}
      />

      <nav aria-label="このページの目次" className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <ul className="flex flex-wrap gap-2 text-[0.9rem] font-bold">
          {LINK_CATS.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="flex items-center gap-1.5 rounded-full bg-card px-4 py-1.5 shadow-[0_6px_18px_-12px_rgba(35,35,63,0.5)] hover:-translate-y-0.5">
                <Icon name={c.icon as IconName} className={`h-4 w-4 ${TONE[c.tone as Tone].fg}`} strokeWidth={2.6} />
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {LINK_CATS.map((c) => {
        const items = LINKS.filter((l) => l.category === c.id);
        const tone = TONE[c.tone as Tone];
        return (
          <Section key={c.id} id={c.id} icon={c.icon as IconName} tone={c.tone as Tone} title={c.label} lead={c.lead} wide>
            <ul className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-2 xl:grid-cols-3">
              {items.map((l, i) => (
                <Reveal as="li" key={l.url} delay={i * 40}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="ag-card group flex h-full flex-col p-5 transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[1.1rem] font-extrabold leading-snug">
                        <J text={l.name} />
                      </h3>
                      <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-full ${tone.bg} ${tone.fg}`}>
                        <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.8} />
                      </span>
                    </div>
                    <p className="mt-2 text-[0.95rem]">
                      <J text={l.desc} />
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5 text-[0.78rem] font-bold">
                      <span className={`rounded-full px-2.5 py-0.5 ${LANG[l.lang]}`}>{l.lang}</span>
                      <span className={`rounded-full px-2.5 py-0.5 ${l.cost === "有料" ? "bg-coral-bg text-coral" : "bg-sun-bg text-[#9a6b00]"}`}>{l.cost}</span>
                    </div>
                    {l.note && (
                      <p className="mt-2 text-[0.85rem] text-soft">
                        <J text={l.note} />
                      </p>
                    )}
                    <p className="mt-auto break-all pt-3 font-mono text-[0.75rem] text-soft">{l.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</p>
                  </a>
                </Reveal>
              ))}
            </ul>
          </Section>
        );
      })}

      <Section icon="warn" tone="coral" title="外のサイトを見るときに" wide>
        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-6 md:grid-cols-[1fr_180px]">
          <ul className="grid gap-3">
            {[
              "ここはよそのサイトです。内容や料金は、作っているところが決めています。",
              "有料のものを申し込む前に、料金のページを自分の目で確かめます。",
              "英語のページは、ブラウザの翻訳や、AIに「日本語で要約して」と頼むと読めます。",
              `${LINKS_CHECKED}に開いて確かめました。リンク切れや中身の変更は、起こります。`,
            ].map((t, i) => (
              <li key={t} className="ag-card flex items-start gap-3 p-4 sm:p-5">
                <span className="ag-num bg-coral text-[0.9rem]">{i + 1}</span>
                <p className="pt-0.5">
                  <J text={t} />
                </p>
              </li>
            ))}
          </ul>
          <Robot pose="think" body="#f0533f" className="mx-auto hidden w-40 md:block" />
        </div>
      </Section>
    </>
  );
}
