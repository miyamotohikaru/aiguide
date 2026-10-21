/**
 * 言葉がゆっくり横に流れる帯。同じ並びを2つつなげて、半分進んだら頭に戻す（継ぎ目が見えない）。
 * 動きを減らす設定のときは止まる（globals.css）。読み上げでは1回だけ読む。
 */
export default function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          <span className="px-6">{t}</span>
          <span className="text-line" aria-hidden>
            ／
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="ag-marquee overflow-hidden border-y border-line-soft py-4 text-[1.05rem] text-soft sm:text-[1.2rem]">
      <div className="ag-marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
