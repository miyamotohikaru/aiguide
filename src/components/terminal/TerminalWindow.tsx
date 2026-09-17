"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { TermLine } from "@/data/terminal";

/**
 * Mac 風のターミナルの窓。命令が1文字ずつ打たれて、結果が出る。
 * 画面に入ったら1回だけ自動で再生し、あとは「もう一度」で何度でも。
 * 動きを減らす設定の人には、最初から全文を出す。
 */
type Shown = { cmd: string; out: string[]; done: boolean };

const PROMPT = "you@mac mysite %";

export default function TerminalWindow({
  lines,
  title = "ターミナル",
  className = "",
}: {
  lines: TermLine[];
  title?: string;
  className?: string;
}) {
  const full: Shown[] = lines.map((l) => ({ cmd: l.cmd, out: l.out ?? [], done: true }));
  const [shown, setShown] = useState<Shown[]>(full);
  const [playing, setPlaying] = useState(false);
  const timers = useRef<number[]>([]);
  const box = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  const clear = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const play = useCallback(() => {
    clear();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(full);
      return;
    }
    setPlaying(true);
    setShown([]);
    let t = 400;
    const at = (ms: number, fn: () => void) => timers.current.push(window.setTimeout(fn, ms));
    lines.forEach((l, i) => {
      at(t, () => setShown((s) => [...s, { cmd: "", out: [], done: false }]));
      for (let k = 1; k <= l.cmd.length; k++) {
        t += 55 + (l.cmd[k - 1] === " " ? 40 : 0);
        at(t, () => setShown((s) => s.map((x, j) => (j === i ? { ...x, cmd: l.cmd.slice(0, k) } : x))));
      }
      t += 350;
      at(t, () => setShown((s) => s.map((x, j) => (j === i ? { ...x, out: l.out ?? [], done: true } : x))));
      t += 500 + (l.out?.length ?? 0) * 150;
    });
    at(t, () => setPlaying(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines]);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting) && !started.current) {
          started.current = true;
          play();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clear();
    };
  }, [play]);

  const last = shown.length - 1;

  return (
    <div ref={box} className={`overflow-hidden rounded-2xl bg-[#1d1d33] text-left shadow-[0_18px_40px_-18px_rgba(35,35,63,0.6)] ${className}`}>
      <div className="flex items-center gap-2 bg-[#2b2b48] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-2 min-w-0 flex-1 truncate text-center text-[0.8rem] font-bold text-white/60">{title}</span>
        <button
          type="button"
          onClick={play}
          disabled={playing}
          className="flex-none rounded-full bg-white/10 px-3 py-0.5 text-[0.75rem] font-bold text-white transition-colors hover:bg-white/20 disabled:opacity-40"
        >
          {playing ? "再生中…" : "▶ もう一度"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <pre className="min-h-[9.5rem] px-4 py-4 font-mono text-[0.85rem] leading-[1.8] text-[#e8e8f5] sm:text-[0.9rem]" aria-label={`${title}の例`}>
          {shown.map((s, i) => (
            <div key={i}>
              <span className="text-[#7ff0c8]">{PROMPT}</span> <span className="text-white">{s.cmd}</span>
              {i === last && !s.done && <span className="ag-caret ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] bg-[#7ff0c8]" />}
              {s.out.map((o, k) => (
                <div key={k} className="text-[#b9b9d6]">
                  {o}
                </div>
              ))}
            </div>
          ))}
          {!playing && (
            <div>
              <span className="text-[#7ff0c8]">{PROMPT}</span>{" "}
              <span className="ag-caret inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] bg-[#7ff0c8]" />
            </div>
          )}
        </pre>
      </div>
    </div>
  );
}
