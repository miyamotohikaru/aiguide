import J from "./J";

/** 各ページの頭。ラベル・大きな見出し・前書きだけ */
export default function PageHead({ en, title, lead }: { en: string; title: string; lead: string }) {
  return (
    <header className="mx-auto max-w-[1180px] px-6 pb-14 pt-14 sm:px-10 sm:pb-20 sm:pt-20">
      <p className="ag-label">{en}</p>
      <h1 className="mt-6 max-w-[22em] text-[2rem] leading-[1.45] sm:text-[2.9rem]">
        <J text={title} />
      </h1>
      <p className="mt-7 max-w-[34em] text-soft">
        <J text={lead} />
      </p>
    </header>
  );
}
