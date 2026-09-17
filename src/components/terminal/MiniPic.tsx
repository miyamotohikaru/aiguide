import type { Basic } from "@/data/terminal";

/** 8つの命令のミニ図。フォルダと矢印だけで描く */
const INK = "#23233f";
const s = { stroke: INK, strokeWidth: 4, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Folder({ x, y, fill = "#ece6ff", w = 44 }: { x: number; y: number; fill?: string; w?: number }) {
  const h = w * 0.72;
  return <path d={`M${x} ${y + 6}a5 5 0 0 1 5-5h12l5 5h${w - 22}a5 5 0 0 1 5 5v${h - 11}a5 5 0 0 1-5 5H${x + 5}a5 5 0 0 1-5-5z`} fill={fill} {...s} />;
}

export default function MiniPic({ pic }: { pic: Basic["pic"] }) {
  return (
    <svg viewBox="0 0 120 64" className="h-16 w-full" aria-hidden>
      {pic === "where" && (
        <>
          <Folder x={38} y={16} fill="#7a55e6" />
          <path d="M60 4c-8 0-13 6-13 12 0 9 13 20 13 20s13-11 13-20c0-6-5-12-13-12z" fill="#f0533f" {...s} transform="translate(0 -2) scale(1)" />
          <circle cx="60" cy="14" r="3.5" fill="#fff" />
        </>
      )}
      {pic === "list" && (
        <>
          <Folder x={10} y={14} fill="#7a55e6" />
          <path d="M62 34h8" {...s} />
          {[12, 30, 48].map((y) => (
            <rect key={y} x="78" y={y - 6} width="34" height="11" rx="3" fill="#fff" {...s} strokeWidth={3} />
          ))}
        </>
      )}
      {pic === "move" && (
        <>
          <Folder x={66} y={14} fill="#7a55e6" w={48} />
          <circle cx="22" cy="34" r="10" fill="#f5b100" {...s} />
          <path d="M36 34h24m-8-8 8 8-8 8" fill="none" {...s} />
        </>
      )}
      {pic === "up" && (
        <>
          <rect x="30" y="4" width="60" height="56" rx="8" fill="#ece6ff" {...s} />
          <Folder x={44} y={28} fill="#fff" w={32} />
          <path d="M60 30V14m-7 7 7-7 7 7" fill="none" {...s} />
        </>
      )}
      {pic === "make" && (
        <>
          <Folder x={30} y={14} fill="#fff" w={48} />
          <circle cx="86" cy="18" r="12" fill="#0f9f76" {...s} />
          <path d="M86 12v12M80 18h12" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        </>
      )}
      {pic === "open" && (
        <>
          <rect x="14" y="10" width="40" height="44" rx="6" fill="#1d1d33" {...s} />
          <path d="M22 26l6 5-6 5" stroke="#7ff0c8" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M60 32h12m-5-5 5 5-5 5" fill="none" {...s} />
          <rect x="78" y="10" width="34" height="44" rx="6" fill="#fff" {...s} />
          <Folder x={84} y={24} fill="#7a55e6" w={22} />
        </>
      )}
      {pic === "clear" && (
        <>
          <rect x="30" y="6" width="60" height="52" rx="8" fill="#1d1d33" {...s} />
          <path d="M40 22h24M40 32h32M40 42h16" stroke="#b9b9d6" strokeWidth="3.5" strokeLinecap="round" opacity="0.4" />
          <path d="M84 48l14-30 10 5-14 30z" fill="#f5b100" {...s} strokeWidth={3} />
        </>
      )}
      {pic === "keys" && (
        <>
          <rect x="18" y="14" width="36" height="36" rx="8" fill="#fff" {...s} />
          <path d="M36 42V24m-7 7 7-7 7 7" fill="none" {...s} />
          <rect x="62" y="14" width="44" height="36" rx="8" fill="#fff" {...s} />
          <text x="84" y="38" textAnchor="middle" fontSize="15" fontWeight="800" fill={INK}>
            Tab
          </text>
        </>
      )}
    </svg>
  );
}
