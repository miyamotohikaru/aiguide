import Link from "next/link";
import J from "./J";
import Icon from "./illust/Icons";
import Reveal from "./Reveal";
import { SECTIONS, TONE } from "@/lib/site";

/**
 * このサイトの章を「すごろく」のように1本の道で並べる。
 * パソコンでは2段の蛇行、スマホでは縦1列。
 */
const STEP_NOTE: Record<string, string> = {
  "/ai": "スタート",
  "/setup": "いちばん大事",
  "/terminal": "やらなくてもOK",
  "/commands": "困ったら",
  "/words": "困ったら",
  "/prompts": "いつでも",
};

export default function JourneyMap() {
  return (
    <ol className="grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SECTIONS.map((s, i) => {
        const t = TONE[s.tone];
        return (
          <Reveal as="li" key={s.href} delay={i * 70}>
            <Link
              href={s.href}
              className="ag-card group relative flex h-full flex-col overflow-hidden p-6 transition-transform duration-200 hover:-translate-y-1.5"
            >
              <span className={`absolute -right-8 -top-8 h-28 w-28 rounded-full ${t.bg} transition-transform duration-300 group-hover:scale-125`} aria-hidden />
              <div className="relative flex items-center justify-between">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_4px_0_rgba(35,35,63,0.9)] ${t.solid}`}>
                  <Icon name={s.icon} className="h-7 w-7" strokeWidth={2.3} />
                </span>
                <span className="font-round text-[2.4rem] font-extrabold leading-none text-ink/10">0{i + 1}</span>
              </div>
              <p className={`relative mt-4 text-[0.8rem] font-bold ${t.fg}`}>{STEP_NOTE[s.href]}</p>
              <p className="relative font-round text-[1.4rem] font-extrabold">{s.label}</p>
              <p className="relative mt-1 text-soft">
                <J text={s.desc} />
              </p>
              <p className={`relative mt-auto flex items-center gap-1.5 pt-4 font-bold ${t.fg}`}>
                ひらく
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.8} />
              </p>
            </Link>
          </Reveal>
        );
      })}
    </ol>
  );
}
