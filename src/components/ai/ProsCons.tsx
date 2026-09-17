import J from "../J";
import Icon from "../illust/Icons";
import Reveal from "../Reveal";

/** 左右2列でくらべる（得意/苦手、メリット/デメリット） */
export default function ProsCons({
  good,
  bad,
  goodLabel,
  badLabel,
}: {
  good: string[];
  bad: string[];
  goodLabel: string;
  badLabel: string;
}) {
  const col = (items: string[], label: string, ok: boolean) => (
    <Reveal className={`rounded-[28px] p-6 sm:p-7 ${ok ? "bg-mint-bg" : "bg-coral-bg"}`}>
      <p className={`flex items-center gap-2.5 font-round text-[1.2rem] font-extrabold ${ok ? "text-mint" : "text-coral"}`}>
        <span className={`flex h-9 w-9 items-center justify-center rounded-full text-white ${ok ? "bg-mint" : "bg-coral"}`}>
          <Icon name={ok ? "heart" : "warn"} className="h-5 w-5" strokeWidth={2.6} />
        </span>
        {label}
      </p>
      <ul className="mt-4 grid gap-2.5">
        {items.map((t) => (
          <li key={t} className="flex gap-2.5 rounded-2xl bg-card px-4 py-2.5">
            <span className={`mt-0.5 font-bold ${ok ? "text-mint" : "text-coral"}`}>{ok ? "◯" : "△"}</span>
            <span className="min-w-0">
              <J text={t} />
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-2">
      {col(good, goodLabel, true)}
      {col(bad, badLabel, false)}
    </div>
  );
}
