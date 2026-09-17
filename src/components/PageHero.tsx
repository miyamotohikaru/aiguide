import J from "./J";
import Icon from "./illust/Icons";
import { TONE, type Tone } from "@/lib/site";
import type { IconName } from "./illust/Icons";

/** 各ページの頭。左に大きな見出し、右にイラスト */
export default function PageHero({
  en,
  title,
  lead,
  tone,
  icon,
  art,
}: {
  en: string;
  title: string;
  lead: string;
  tone: Tone;
  icon: IconName;
  art?: React.ReactNode;
}) {
  const t = TONE[tone];
  return (
    <div className={`relative overflow-hidden ${t.bg}`}>
      <div className="ag-dots pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-12 pt-10 sm:px-8 md:grid-cols-[1.2fr_1fr] md:pb-16 md:pt-16">
        <div>
          <p className={`inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-1 text-[0.8rem] font-bold tracking-[0.15em] ${t.fg}`}>
            <Icon name={icon} className="h-4 w-4" strokeWidth={2.6} />
            {en}
          </p>
          <h1 className="mt-4 text-[2.1rem] font-extrabold leading-[1.3] sm:text-[3rem]">
            <J text={title} />
          </h1>
          <p className="mt-4 max-w-xl text-[1.02rem] text-soft sm:text-[1.1rem]">
            <J text={lead} />
          </p>
        </div>
        {art && <div className="mx-auto w-full max-w-[380px] md:max-w-none">{art}</div>}
      </div>
      {/* 下のなみなみ */}
      <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="relative block h-6 w-full sm:h-10" aria-hidden>
        <path d="M0 40V20c120 18 240 18 360 0s240-18 360 0 240 18 360 0 240-18 360 0v20z" fill="var(--ag-paper)" />
      </svg>
    </div>
  );
}
