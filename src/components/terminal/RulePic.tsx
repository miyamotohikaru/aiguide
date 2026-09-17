/** こわくないためのルールの絵 */
const INK = "#23233f";
const s = { stroke: INK, strokeWidth: 5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export default function RulePic({ pic }: { pic: "question" | "danger" | "paste" | "stop" }) {
  return (
    <svg viewBox="0 0 100 100" className="h-20 w-20 flex-none" aria-hidden>
      {pic === "question" && (
        <>
          <circle cx="50" cy="50" r="42" fill="#fff1c2" {...s} />
          <path d="M38 38a12 12 0 1 1 18 10c-4 3-6 5-6 10" fill="none" {...s} strokeWidth={7} />
          <circle cx="50" cy="72" r="4.5" fill={INK} />
        </>
      )}
      {pic === "danger" && (
        <>
          <path d="M50 8 94 88H6z" fill="#f0533f" {...s} />
          <path d="M50 38v22" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
          <circle cx="50" cy="74" r="5" fill="#fff" />
        </>
      )}
      {pic === "paste" && (
        <>
          <rect x="14" y="16" width="46" height="60" rx="8" fill="#ffe3dd" {...s} />
          <path d="M24 34h26M24 46h20M24 58h24" stroke="#f0533f" strokeWidth="5" strokeLinecap="round" />
          <path d="M62 56h12m-6-6 6 6-6 6" fill="none" {...s} />
          <rect x="72" y="30" width="22" height="30" rx="7" fill="#fff" {...s} />
          <circle cx="79" cy="42" r="2.5" fill={INK} />
          <circle cx="87" cy="42" r="2.5" fill={INK} />
        </>
      )}
      {pic === "stop" && (
        <>
          <path d="M34 8h32l26 26v32L66 92H34L8 66V34z" fill="#f0533f" {...s} />
          <text x="50" y="60" textAnchor="middle" fontSize="24" fontWeight="900" fill="#fff" fontFamily="sans-serif">
            ^C
          </text>
        </>
      )}
    </svg>
  );
}
