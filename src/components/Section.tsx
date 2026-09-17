import J from "./J";

/** 章の中の節。番号つき見出し＋本文 */
export default function Section({
  id,
  no,
  title,
  lead,
  children,
}: {
  id?: string;
  no?: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-20">
      <div className="flex items-start gap-3">
        {no && <span className="ag-num mt-0.5 text-[0.95rem]">{no}</span>}
        <div>
          <h2 className="text-[1.55rem] font-bold leading-snug sm:text-[1.9rem]">
            <J text={title} />
          </h2>
          {lead && (
            <p className="mt-2 text-soft">
              <J text={lead} />
            </p>
          )}
        </div>
      </div>
      <div className="mt-7">{children}</div>
    </section>
  );
}
