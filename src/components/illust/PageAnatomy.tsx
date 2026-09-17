/**
 * ホームページの部位の名前を、ページの絵に番号札で書きこんだ図。
 * パソコンの画面とスマホの画面を並べる。
 */
const TAGS = [
  { n: 1, t: "ヘッダー", d: "上の帯。サイト名とメニュー" },
  { n: 2, t: "ナビゲーション", d: "ほかのページへのメニュー" },
  { n: 3, t: "ヒーロー", d: "いちばん上の大きな見出し" },
  { n: 4, t: "CTA", d: "いちばん押してほしいボタン" },
  { n: 5, t: "カード", d: "画像と文をまとめた四角" },
  { n: 6, t: "グリッド／カラム", d: "マス目にそろえた並び" },
  { n: 7, t: "フッター", d: "下の帯。連絡先やリンク" },
  { n: 8, t: "ハンバーガーメニュー", d: "スマホの三本線ボタン" },
];

function Tag({ n, className = "" }: { n: number; className?: string }) {
  return (
    <span className={`absolute z-10 flex h-7 w-7 items-center justify-center rounded-full bg-coral font-round text-[0.85rem] font-extrabold text-white shadow-[0_2px_0_rgba(35,35,63,0.9)] ${className}`}>
      {n}
    </span>
  );
}

export default function PageAnatomy() {
  return (
    <figure className="ag-card overflow-hidden p-5 sm:p-8">
      <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
        {/* パソコン */}
        <div className="relative rounded-2xl border-[3px] border-ink bg-card" aria-hidden>
          <div className="relative flex items-center gap-3 border-b-[3px] border-ink bg-sun-bg px-4 py-3">
            <Tag n={1} className="-left-3 -top-3" />
            <span className="h-5 w-16 rounded-md bg-ink" />
            <div className="relative ml-auto flex gap-3">
              <Tag n={2} className="-right-3 -top-6" />
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-2.5 w-10 rounded-full bg-ink/40" />
              ))}
            </div>
          </div>
          <div className="relative grid gap-3 bg-sky-bg px-6 py-8 sm:grid-cols-[1.4fr_1fr]">
            <Tag n={3} className="-left-3 top-6" />
            <div className="grid content-center gap-2.5">
              <span className="h-5 w-4/5 rounded-md bg-ink" />
              <span className="h-5 w-3/5 rounded-md bg-ink" />
              <span className="h-2.5 w-full rounded-full bg-ink/25" />
              <span className="relative mt-2 inline-block h-9 w-32 rounded-full bg-coral">
                <Tag n={4} className="-right-4 -top-3" />
              </span>
            </div>
            <div className="hidden rounded-xl bg-card/80 sm:block" />
          </div>
          <div className="relative grid grid-cols-3 gap-3 px-6 py-6">
            <Tag n={5} className="left-3 top-3" />
            <Tag n={6} className="-right-3 top-1/2" />
            {[0, 1, 2].map((i) => (
              <div key={i} className="grid gap-1.5 rounded-xl border-2 border-line p-2">
                <span className="h-10 rounded-md bg-mint-bg sm:h-14" />
                <span className="h-2 w-4/5 rounded-full bg-ink/40" />
                <span className="h-2 w-3/5 rounded-full bg-ink/20" />
              </div>
            ))}
          </div>
          <div className="relative flex items-center gap-4 rounded-b-[13px] bg-ink px-6 py-4">
            <Tag n={7} className="-left-3 -top-3" />
            <span className="h-2.5 w-20 rounded-full bg-white/50" />
            <span className="h-2.5 w-14 rounded-full bg-white/30" />
          </div>
        </div>
        {/* スマホ */}
        <div className="relative mx-auto w-40 rounded-[26px] border-[3px] border-ink bg-card p-2" aria-hidden>
          <div className="relative flex items-center justify-between rounded-t-[18px] bg-sun-bg px-3 py-2.5">
            <span className="h-3 w-12 rounded bg-ink" />
            <span className="relative grid gap-1">
              <Tag n={8} className="-right-5 -top-6" />
              {[0, 1, 2].map((i) => (
                <span key={i} className="block h-[3px] w-5 rounded bg-ink" />
              ))}
            </span>
          </div>
          <div className="grid gap-1.5 bg-sky-bg px-3 py-4">
            <span className="h-3 w-4/5 rounded bg-ink" />
            <span className="h-3 w-3/5 rounded bg-ink" />
            <span className="mt-1 h-5 w-20 rounded-full bg-coral" />
          </div>
          <div className="grid gap-2 p-2">
            {[0, 1].map((i) => (
              <span key={i} className="h-12 rounded-lg border-2 border-line bg-mint-bg/60" />
            ))}
          </div>
          <div className="h-6 rounded-b-[18px] bg-ink" />
        </div>
      </div>
      <figcaption className="mt-7">
        <ol className="grid grid-cols-[minmax(0,1fr)] gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {TAGS.map((t) => (
            <li key={t.n} className="flex items-start gap-2.5">
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-coral font-round text-[0.85rem] font-extrabold text-white">{t.n}</span>
              <span className="min-w-0 leading-snug">
                <span className="block font-round font-extrabold">{t.t}</span>
                <span className="block text-[0.85rem] text-soft">{t.d}</span>
              </span>
            </li>
          ))}
        </ol>
      </figcaption>
    </figure>
  );
}
