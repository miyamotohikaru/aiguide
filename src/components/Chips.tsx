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
            className={`rounded-full border-2 border-ink px-3.5 py-0.5 text-[0.9rem] font-bold transition-colors ${
              on ? active : "bg-card hover:bg-paper"
            }`}
          >
            {it.label}
            {it.count !== undefined && <span className="ml-1.5 font-mono text-[0.8rem] opacity-70">{it.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
