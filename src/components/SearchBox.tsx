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
    <label className="ag-box flex items-center gap-2.5 px-4 py-2.5">
      <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none" aria-hidden>
        <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span className="sr-only">{placeholder}</span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full min-w-0 bg-transparent text-[1rem] outline-none placeholder:text-soft/70"
      />
    </label>
  );
}
