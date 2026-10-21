"use client";

export default function SearchBox({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    // 文字を入れる場所だと分かるように、四角い枠と虫めがねを付ける（押せるボタンとは地の色で分ける）
    <label className="flex items-center gap-3 border border-soft/50 bg-white/70 px-4 transition-colors focus-within:border-ink hover:border-ink">
      <svg aria-hidden viewBox="0 0 20 20" className="h-[1.1rem] w-[1.1rem] flex-none text-soft">
        <circle cx="8.5" cy="8.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12.6 12.6 L17 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="sr-only">{placeholder}</span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent py-3.5 text-[1.05rem] outline-none placeholder:text-soft/70"
      />
    </label>
  );
}
