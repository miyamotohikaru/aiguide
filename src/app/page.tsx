import Link from "next/link";
import J from "@/components/J";
import RouteFinder from "@/components/RouteFinder";
import { SECTIONS } from "@/lib/site";
import { COMMANDS } from "@/data/commands";
import { WORDS } from "@/data/words";
import { PROMPTS } from "@/data/prompts";

const CARD: Record<string, { bg: string; fg: string }> = {
  blue: { bg: "bg-blue-bg", fg: "text-blue" },
  green: { bg: "bg-green-bg", fg: "text-green" },
  yellow: { bg: "bg-yellow-bg", fg: "text-ink" },
  pink: { bg: "bg-pink-bg", fg: "text-pink" },
};
const COUNT: Record<string, string> = {
  "/setup": "3つのルート",
  "/commands": `${COMMANDS.length}個`,
  "/words": `${WORDS.length}語`,
  "/prompts": `${PROMPTS.length}本`,
};

/** 住所が「自分のパソコン」から「みんなのURL」に変わる絵 */
function AddressBars() {
  return (
    <div className="ag-box ag-shadow min-w-0 overflow-hidden" aria-hidden>
      <div className="flex items-center gap-1.5 border-b-2 border-ink bg-paper px-3 py-2">
        <span className="h-3 w-3 rounded-full border-2 border-ink bg-pink" />
        <span className="h-3 w-3 rounded-full border-2 border-ink bg-yellow" />
        <span className="h-3 w-3 rounded-full border-2 border-ink bg-green" />
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)] gap-3 p-4 sm:p-5">
        <div>
          <p className="text-[0.78rem] font-bold text-soft">いま（自分にしか見えない）</p>
          <p className="mt-1 truncate rounded-full border-2 border-line bg-paper px-3 py-1 font-mono text-[0.85rem] text-soft line-through decoration-pink decoration-2">
            file:///Users/you/mysite/index.html
          </p>
        </div>
        <p className="text-center text-2xl font-bold leading-none text-blue">↓</p>
        <div>
          <p className="text-[0.78rem] font-bold text-blue">公開したあと（誰でも見られる）</p>
          <p className="mt-1 truncate rounded-full border-2 border-ink bg-blue-bg px-3 py-1 font-mono text-[0.85rem] font-semibold">
            <span className="mr-1">🔒</span>https://mysite.vercel.app
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="border-b-2 border-ink">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 pb-14 pt-12 sm:px-6 md:grid-cols-[1.15fr_1fr] md:pb-20 md:pt-20">
          <div>
            <p className="inline-block rounded-full border-2 border-ink bg-yellow-bg px-3 py-0.5 text-[0.85rem] font-bold">
              ターミナルを使わない人のための
            </p>
            <h1 className="mt-5 text-[2.3rem] font-bold leading-[1.25] tracking-tight sm:text-[3.3rem]">
              <J text="作ったサイトを、◇みんなに届けよう。" />
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] sm:text-[1.15rem]">
              <J text="AIと一緒に作ったサイトを、URLで誰でも見られるように◆するまでの道案内です。◇わからない言葉も、AIへの頼み方も、ここにあります。" />
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/setup"
                className="rounded-full border-2 border-ink bg-ink px-6 py-2.5 font-bold text-white ag-shadow hover:bg-blue"
              >
                公開のしかたを見る →
              </Link>
              <a href="#finder" className="rounded-full border-2 border-ink bg-card px-6 py-2.5 font-bold hover:bg-yellow-bg">
                自分に合う方法を調べる
              </a>
            </div>
          </div>
          <AddressBars />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-20">
        <h2 className="text-[1.55rem] font-bold sm:text-[1.9rem]">このサイトでわかること</h2>
        <ul className="mt-7 grid gap-4 sm:grid-cols-2">
          {SECTIONS.map((s, i) => (
            <li key={s.href}>
              <Link href={s.href} className={`ag-box group flex h-full flex-col p-5 transition-transform hover:-translate-y-0.5 sm:p-6 ${CARD[s.color].bg}`}>
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[0.8rem] font-semibold tracking-[0.2em] ${CARD[s.color].fg}`}>
                    0{i + 1} {s.en}
                  </span>
                  <span className="rounded-full border-2 border-ink bg-card px-2.5 text-[0.8rem] font-bold">{COUNT[s.href]}</span>
                </div>
                <p className="mt-3 text-[1.45rem] font-bold">{s.label}</p>
                <p className="mt-1 text-soft">
                  <J text={s.desc} />
                </p>
                <p className="mt-auto pt-4 font-bold group-hover:underline">ひらく →</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="finder" className="mx-auto max-w-5xl px-4 pt-20 sm:px-6">
        <h2 className="text-[1.55rem] font-bold sm:text-[1.9rem]">
          <J text="あなたに合う公開の方法は？" />
        </h2>
        <p className="mt-2 text-soft">
          <J text="3つ答えると、おすすめのルートと手順のページが出ます。" />
        </p>
        <div className="mt-7">
          <RouteFinder base="/setup" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-20 sm:px-6">
        <div className="rounded-2xl border-2 border-ink bg-ink p-6 text-white sm:p-10">
          <h2 className="text-[1.4rem] font-bold sm:text-[1.7rem]">迷ったら、この順番で。</h2>
          <ol className="mt-6 grid gap-5 sm:grid-cols-3">
            {[
              ["公開のしかた", "まず「準備の5つのチェック」だけ読む。"],
              ["プロンプト集", "「公開していい状態か、見てもらう」をAIに貼る。"],
              ["用語集", "AIの返事でわからない言葉が出たら、引く。"],
            ].map(([t, b], i) => (
              <li key={t} className="flex gap-3">
                <span className="ag-num ag-num-inv text-[0.85rem]">{i + 1}</span>
                <div>
                  <p className="font-bold">{t}</p>
                  <p className="mt-1 text-[0.95rem] text-white/80">
                    <J text={b} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
