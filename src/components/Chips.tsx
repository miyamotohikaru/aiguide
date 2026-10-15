"use client";

/** 絞り込み。枠だけの小さなボタンを並べる */
export default function Chips<T extends string>({
  items,
  value,
  onChange,
  label,
}: {
  items: { id: T; label: string; count?: number }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {items.map((it) => (
        <button key={it.id} type="button" aria-pressed={it.id === value} onClick={() => onChange(it.id)} className="ag-pick">
          {it.label}
          {it.count !== undefined && <span className="ml-2 text-[0.78rem] opacity-60">{it.count}</span>}
        </button>
      ))}
    </div>
  );
}
