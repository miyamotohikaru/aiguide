import { Fragment } from "react";
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
        <ul className="flex flex-wrap gap-x-7 gap-y-2 border-t border-line pt-6 text-[0.95rem]">
          {LINK_CATS.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="ag-link">
                {c.label}
              </a>
            </li>
          ))}
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
            {/* PCは横4列、タブレットは2列、スマホは1列 */}
            <ul data-reveal-stagger className="grid grid-cols-[minmax(0,1fr)] gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((l) => {
                const thumb = thumbForUrl(l.url);
                return (
                  <li key={l.url} className="min-w-0 border-t border-line-soft pt-5">
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
                      <p className={`${thumb ? "mt-4" : ""} text-[1.02rem] leading-[1.9]`}>
                        {/*
                          灰色の地を行ごとにつなげるため、中は inline のまま（J の inline-block は使わない）。
                          折るのは「（」の前だけ。ほかの所では折らない。
                        */}
                        <span className="ag-tag transition-colors group-hover:bg-ink">
                          {l.name.split(/(?=（)/).map((part, pi) => (
                            <Fragment key={pi}>
                              {pi > 0 && <wbr />}
                              <span className="whitespace-nowrap">{part}</span>
                            </Fragment>
                          ))}
                        </span>
                      </p>
                      <p className="mt-1 text-[0.8rem] text-soft">
                        {l.lang}　{l.cost}
                      </p>
                      <p className="mt-2 text-[0.9rem] leading-[1.65]">
                        <J text={l.desc} />
                      </p>
                      {l.note && (
                        <p className="mt-1.5 text-[0.82rem] leading-[1.6] text-soft">
                          <J text={l.note} />
                        </p>
                      )}
                      <p className="mt-auto pt-3 font-mono text-[0.72rem] tracking-normal text-soft [overflow-wrap:anywhere]">
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
