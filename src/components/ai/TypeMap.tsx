import Icon from "../illust/Icons";
import J from "../J";
import Reveal from "../Reveal";
import { TYPES } from "@/data/ai";
import { TONE } from "@/lib/site";

/**
 * 4つのタイプを、2本の軸の地図に置く。
 * 横: かんたん ↔ 自由に作りこめる / 縦: 話して教わる ↔ おまかせで作ってくれる
 * パソコン幅は地図、スマホ幅は縦積みのカード。
 */
export default function TypeMap() {
  return (
    <>
      {/* パソコン: 地図 */}
      <div className="ag-card relative hidden overflow-hidden p-6 md:block">
        <div className="relative mx-auto aspect-[16/10] w-full">
          {/* 軸 */}
          <svg viewBox="0 0 1000 625" className="absolute inset-0 h-full w-full" aria-hidden preserveAspectRatio="none">
            <rect x="0" y="0" width="500" height="312" fill="#e6eeff" opacity="0.6" />
            <rect x="500" y="0" width="500" height="312" fill="#d9f5ea" opacity="0.6" />
            <rect x="0" y="312" width="500" height="313" fill="#ffe2ec" opacity="0.6" />
            <rect x="500" y="312" width="500" height="313" fill="#ece6ff" opacity="0.6" />
            <path d="M40 312H960M500 30V600" stroke="#23233f" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 14" />
            <path d="M960 312l-16-10v20zM500 600l-10-16h20z" fill="#23233f" />
          </svg>
          {/* 軸のことば */}
          <span className="absolute left-3 top-1/2 -translate-y-[130%] rounded-full bg-card px-3 py-0.5 text-[0.8rem] font-bold">かんたん</span>
          <span className="absolute right-3 top-1/2 -translate-y-[130%] rounded-full bg-card px-3 py-0.5 text-[0.8rem] font-bold">自由に作りこめる →</span>
          <span className="absolute left-1/2 top-2 ml-3 rounded-full bg-card px-3 py-0.5 text-[0.8rem] font-bold">話して教わる</span>
          <span className="absolute bottom-2 left-1/2 ml-3 rounded-full bg-card px-3 py-0.5 text-[0.8rem] font-bold">↓ おまかせで作ってくれる</span>
          {TYPES.map((t, i) => (
            <div
              key={t.id}
              className="absolute w-[36%] -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${t.x * 100}%`, top: `${t.y * 100}%` }}
            >
              <Reveal delay={i * 120}>
                <div className="ag-card flex items-start gap-3 p-4">
                  <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl text-white ${TONE[t.tone].solid} ${i % 2 ? "ag-float-slow" : "ag-float"}`}>
                    <Icon name={t.icon} className="h-6 w-6" strokeWidth={2.4} />
                  </span>
                  <div className="min-w-0">
                    <p className={`font-round text-[1.1rem] font-extrabold ${TONE[t.tone].fg}`}>{t.label}</p>
                    <p className="text-[0.92rem] leading-relaxed">
                      <J text={t.one} />
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      {/* スマホ: カード */}
      <ul className="grid grid-cols-[minmax(0,1fr)] gap-3 md:hidden">
        {TYPES.map((t, i) => (
          <Reveal as="li" key={t.id} delay={i * 80}>
            <div className={`flex items-start gap-4 rounded-3xl p-5 ${TONE[t.tone].bg}`}>
              <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl text-white ${TONE[t.tone].solid}`}>
                <Icon name={t.icon} className="h-6 w-6" strokeWidth={2.4} />
              </span>
              <div className="min-w-0">
                <p className={`font-round text-[1.12rem] font-extrabold ${TONE[t.tone].fg}`}>{t.label}</p>
                <p className="mt-0.5">
                  <J text={t.one} />
                </p>
                <p className="mt-1 text-[0.88rem] text-soft">
                  <J text={`たとえるなら、${t.like}`} />
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
      <p className="mt-4 hidden text-[0.92rem] text-soft md:block">
        {TYPES.map((t) => (
          <span key={t.id} className="j-s mr-4">
            <span className={`font-bold ${TONE[t.tone].fg}`}>{t.label}</span>＝{t.like}
          </span>
        ))}
      </p>
    </>
  );
}
