import J from "./J";
import type { SectionColor } from "@/lib/site";

const BG: Record<SectionColor, string> = {
  blue: "bg-blue-bg",
  green: "bg-green-bg",
  yellow: "bg-yellow-bg",
  pink: "bg-pink-bg",
};
const FG: Record<SectionColor, string> = {
  blue: "text-blue",
  green: "text-green",
  yellow: "text-ink",
  pink: "text-pink",
};

export default function PageHead({
  en,
  title,
  lead,
  color,
}: {
  en: string;
  title: string;
  lead: string;
  color: SectionColor;
}) {
  return (
    <div className={`border-b-2 border-ink ${BG[color]}`}>
      <div className="mx-auto max-w-5xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14">
        <p className={`font-mono text-[0.85rem] font-semibold tracking-[0.2em] ${FG[color]}`}>{en}</p>
        <h1 className="mt-2 text-[2rem] font-bold leading-tight tracking-tight sm:text-[2.8rem]">
          <J text={title} />
        </h1>
        <p className="mt-4 max-w-2xl text-[1.02rem] text-soft sm:text-[1.1rem]">
          <J text={lead} />
        </p>
      </div>
    </div>
  );
}
