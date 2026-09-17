"use client";

import Icon from "./illust/Icons";

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
    <label className="ag-card flex items-center gap-3 px-5 py-3.5">
      <Icon name="search" className="h-5 w-5 flex-none text-soft" />
      <span className="sr-only">{placeholder}</span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full min-w-0 bg-transparent text-[1.05rem] outline-none placeholder:text-soft/70"
      />
    </label>
  );
}
