import J from "./J";

/**
 * ページの中の節。
 * 上に細い罫線、左に小さな番号とラベル、右に本文という組み。
 */
export default function Section({
  id,
  no,
  title,
  lead,
  children,
  wide = false,
}: {
  id?: string;
  no?: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  /** 見出しを上に出して、中身を紙幅いっぱいに使う（一覧やブロック並びのとき） */
  wide?: boolean;
}) {
  return (
    <section id={id} className="mx-auto max-w-[1180px] scroll-mt-24 px-6 pt-16 sm:px-10 sm:pt-24">
      <div className="border-t border-line pt-8 sm:pt-10">
        {wide ? (
          <>
            <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
              <div>
                {no && <p className="ag-num">{no}</p>}
                <h2 className="mt-1 text-[1.4rem] leading-snug sm:text-[1.7rem]">
                  <J text={title} />
                </h2>
              </div>
              {lead && (
                <p className="max-w-[36em] text-soft">
                  <J text={lead} />
                </p>
              )}
            </div>
            <div className="mt-8">{children}</div>
          </>
        ) : (
          <div className="grid gap-x-10 gap-y-4 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
            <div>
              {no && <p className="ag-num">{no}</p>}
              <h2 className="mt-1 text-[1.4rem] leading-snug sm:text-[1.7rem]">
                <J text={title} />
              </h2>
            </div>
            <div className="min-w-0">
              {lead && (
                <p className="max-w-[36em] text-soft">
                  <J text={lead} />
                </p>
              )}
              <div className={lead ? "mt-8" : ""}>{children}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
