"use client";

/** 絞り込みの丸いボタンの列 */
export default function Chips<T extends string>({
  items,
  value,
  onChange,
  label,
  active = "bg-ink text-white",
}: {
  items: { id: T; label: string; count?: number }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
  active?: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {items.map((it) => {
        const on = it.id === value;
        return (
          <button
            key={it.id}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(it.id)}
            className={`rounded-full px-4 py-1.5 text-[0.92rem] font-bold transition-all ${
              on ? `${active} shadow-[0_3px_0_rgba(35,35,63,0.9)]` : "bg-card text-ink shadow-[0_1px_0_rgba(35,35,63,0.08),0_4px_14px_-8px_rgba(35,35,63,0.3)] hover:-translate-y-0.5"
            }`}
          >
            {it.label}
            {it.count !== undefined && <span className="ml-1.5 text-[0.8rem] opacity-70">{it.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
