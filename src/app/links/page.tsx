import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import J from "@/components/J";
import { LINKS, LINK_CATS } from "@/data/links";
import { thumbForUrl } from "@/data/thumbs";
import { Map } from "@/components/doodle/Doodles";
import { LINK_DOODLE } from "@/components/doodle/LinkDoodles";

export const metadata: Metadata = {
  title: "参考リンク",
  description: "公式ドキュメント、スキルやプロンプトの配布、公開サービスの手引き、学習サイト、デザイン素材。参考リンクを、やさしい説明つきでまとめました。",
};

const CARE = [
  "ここはよそのサイトです。内容や料金は、作っているところが決めています。",
  "有料のものを申し込む前に、料金のページを自分の目で確かめます。",
  "英語のページは、ブラウザの翻訳や、AIに「日本語で要約して」と頼むと読めます。",
];

export default function LinksPage() {
  return (
    <>
      <div className="relative">
        <PageHead
          en="LINKS"
          title="知りたくなったら、◇ここから。"
          lead="公式の手引き、スキルやプロンプトの配布、学習サイト、素材集。"
        />
        <Map className="pointer-events-none absolute right-6 top-14 w-20 sm:right-10 sm:top-20 sm:w-28" />
      </div>

      <nav aria-label="このページの目次" className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <ul className="flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-6 text-[0.95rem]">
          {LINK_CATS.map((c) => {
            const Pic = LINK_DOODLE[c.id];
            return (
              <li key={c.id}>
                <a href={`#${c.id}`} className="group inline-flex items-center gap-2">
                  {Pic && <Pic className="w-8 flex-none" />}
                  <span className="ag-link">{c.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {LINK_CATS.map((c, ci) => {
        const items = LINKS.filter((l) => l.category === c.id);
        const Pic = LINK_DOODLE[c.id];
        return (
          <Section
            key={c.id}
            id={c.id}
            no={String(ci + 1).padStart(2, "0")}
            title={c.label}
            lead={c.lead}
            wide
            pic={Pic && <Pic className="w-20 sm:w-24" />}
          >
            {/* PCは横4列、タブレットとスマホは2列。スマホでは説明を3行までにして、ひと目で多く見せる */}
            <ul data-reveal-stagger className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
              {items.map((l) => {
                const thumb = thumbForUrl(l.url);
                // 「（」の前と、空白のあとで分ける（GitHub Pages ドキュメント → GitHub / Pages / ドキュメント）
                const parts = l.name.split(/(?=（)|(?<= )/).map((t) => ({ t: t.trimEnd(), space: t.endsWith(" ") }));
                return (
                  <li key={l.url} className="min-w-0 border-t border-line-soft pt-3 sm:pt-5">
                    <a href={l.url} target="_blank" rel="noreferrer" className="group flex h-full flex-col">
                      {thumb && (
                        <span className="ag-thumb block border border-line-soft">
                          <img
                            src={thumb}
                            alt=""
                            width={480}
                            height={300}
                            loading="lazy"
                            className="block aspect-[8/5] w-full object-cover"
                          />
                        </span>
                      )}
                      <p className={`${thumb ? "mt-2.5 sm:mt-4" : ""} text-[0.88rem] leading-[1.75] sm:text-[1.02rem] sm:leading-[1.9]`}>
                        {/*
                          名前は「（」の前で分けて、かたまりごとに灰色の地を付ける。
                          かたまりの中では折らず、幅が足りないときはかたまりごと次の行へ送る。
                          （ひとつの地の中で折ると、行によって地が欠けることがあった）
                        */}
                        {parts.map((part, pi) => (
                          <span
                            key={pi}
                            className={`ag-tag inline-block max-w-full transition-colors group-hover:bg-ink ${pi > 0 ? "pl-0" : ""} ${
                              pi < parts.length - 1 ? (part.space ? "pr-[0.3em]" : "pr-0") : ""
                            }`}
                          >
                            {part.t}
                          </span>
                        ))}
                      </p>
                      <p className="mt-1 text-[0.72rem] text-soft sm:text-[0.8rem]">
                        {l.lang}　{l.cost}
                        {l.by && <span className="block whitespace-nowrap sm:ml-3 sm:inline">{l.by}</span>}
                      </p>
                      <p className="mt-1.5 line-clamp-3 text-[0.8rem] leading-[1.6] sm:mt-2 sm:line-clamp-none sm:text-[0.9rem] sm:leading-[1.65]">
                        <J text={l.desc} />
                      </p>
                      {l.note && (
                        <p className="mt-1.5 hidden text-[0.82rem] leading-[1.6] text-soft sm:block">
                          <J text={l.note} />
                        </p>
                      )}
                      <p className="mt-auto hidden pt-3 font-mono text-[0.72rem] tracking-normal text-soft [overflow-wrap:anywhere] sm:block">
                        {l.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Section>
        );
      })}

      <Section no={String(LINK_CATS.length + 1).padStart(2, "0")} title="外のサイトを見るときに">
        <ul className="max-w-[36em]">
          {CARE.map((t) => (
            <li key={t} className="border-b border-line-soft py-4 first:border-t first:border-line-soft">
              <J text={t} />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[0.88rem] text-soft">
          <J text="リンク切れや、中身の変更は起こります。" />
        </p>
      </Section>
    </>
  );
}
