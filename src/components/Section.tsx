import J from "./J";
import Icon, { type IconName } from "./illust/Icons";
import { TONE, type Tone } from "@/lib/site";

/** ページの中の節。色つきのアイコン玉＋大きな見出し */
export default function Section({
  id,
  icon,
  tone = "sky",
  kicker,
  title,
  lead,
  children,
  wide = false,
}: {
  id?: string;
  icon?: IconName;
  tone?: Tone;
  kicker?: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  const t = TONE[tone];
  return (
    <section id={id} className={`mx-auto px-5 pt-16 sm:px-8 sm:pt-24 ${wide ? "max-w-6xl" : "max-w-5xl"}`}>
      <div className="flex items-start gap-4">
        {icon && (
          <span className={`mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-2xl ${t.solid} text-white shadow-[0_4px_0_rgba(35,35,63,0.9)]`}>
            <Icon name={icon} className="h-6 w-6" strokeWidth={2.4} />
          </span>
        )}
        <div className="min-w-0">
          {kicker && <p className={`text-[0.85rem] font-bold ${t.fg}`}>{kicker}</p>}
          <h2 className="text-[1.6rem] font-extrabold leading-snug sm:text-[2.1rem]">
            <J text={title} />
          </h2>
          {lead && (
            <p className="mt-2 max-w-3xl text-soft">
              <J text={lead} />
            </p>
          )}
        </div>
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
