import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import J from "@/components/J";
import { LINKS, LINK_CATS, LINKS_CHECKED } from "@/data/links";

export const metadata: Metadata = {
  title: "参考リンク",
  description: "公式ドキュメント、スキルやプロンプトの配布、公開サービスの手引き、学習サイト、デザイン素材。実際に開いて確かめた参考リンクを、やさしい説明つきでまとめました。",
};

const CARE = [
  "ここはよそのサイトです。内容や料金は、作っているところが決めています。",
  "有料のものを申し込む前に、料金のページを自分の目で確かめます。",
  "英語のページは、ブラウザの翻訳や、AIに「日本語で要約して」と頼むと読めます。",
];

export default function LinksPage() {
  return (
    <>
      <PageHead
        en="LINKS"
        title="知りたくなったら、◇ここから。"
        lead={`公式の手引き、スキルやプロンプトの配布、学習サイト、素材集。${LINKS.length}件を実際に開いて、何が載っているかを確かめました。`}
      />

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
        return (
          <Section key={c.id} id={c.id} no={String(ci + 1).padStart(2, "0")} title={c.label} lead={c.lead}>
            <ul>
              {items.map((l) => (
                <li key={l.url} className="border-b border-line-soft first:border-t first:border-line-soft">
                  <a href={l.url} target="_blank" rel="noreferrer" className="group grid gap-x-8 gap-y-2 py-6 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
                    <div>
                      <p className="text-[1.08rem] leading-snug">
                        <span className="group-hover:border-b group-hover:border-ink">
                          <J text={l.name} />
                        </span>
                      </p>
                      <p className="mt-1.5 text-[0.85rem] text-soft">
                        {l.lang}　{l.cost}
                      </p>
                    </div>
                    <div className="min-w-0">
                      <p className="max-w-[34em]">
                        <J text={l.desc} />
                      </p>
                      {l.note && (
                        <p className="mt-1 max-w-[34em] text-[0.92rem] text-soft">
                          <J text={l.note} />
                        </p>
                      )}
                      <p className="mt-2 font-mono text-[0.76rem] tracking-normal text-soft">
                        {l.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        );
      })}

      <Section no="07" title="外のサイトを見るときに">
        <ul className="max-w-[36em]">
          {CARE.map((t) => (
            <li key={t} className="border-b border-line-soft py-4 first:border-t first:border-line-soft">
              <J text={t} />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[0.88rem] text-soft">
          <J text={`${LINKS_CHECKED}に、すべて開いて確かめました。◇リンク切れや、中身の変更は起こります。`} />
        </p>
      </Section>
    </>
  );
}
