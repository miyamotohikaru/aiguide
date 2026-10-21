"use client";

import { useEffect, useRef } from "react";
import { Bubble, Cloud, Laptop, PaperPlane, Phone } from "@/components/doodle/Doodles";

/**
 * トップの扉の、浮かんでいる絵。
 * ・1つずつ、ゆっくり上下にゆれる（CSS の ag-bob）。
 * ・マウスとスクロールに合わせて、奥行きの違う動き方をする（depth が大きいほど手前で、よく動く）。
 * html に .motion が無いときは、置いてあるだけで動かない。
 */
const ITEMS = [
  { Pic: Cloud, left: "4%", top: "6%", width: "26%", depth: 0.5, dur: 7.5, delay: -1 },
  { Pic: PaperPlane, left: "52%", top: "0%", width: "34%", depth: 1.3, dur: 5.5, delay: -3 },
  { Pic: Bubble, left: "30%", top: "36%", width: "24%", depth: 0.8, dur: 6.5, delay: -2 },
  { Pic: Laptop, left: "2%", top: "58%", width: "30%", depth: 1, dur: 8, delay: -4 },
  { Pic: Phone, left: "64%", top: "52%", width: "24%", depth: 0.6, dur: 7, delay: -0.5 },
];

export default function HeroDoodles({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("motion")) return;
    let mx = 0;
    let my = 0;
    let raf = 0;
    const paint = () => {
      raf = 0;
      el.style.setProperty("--mx", mx.toFixed(3));
      el.style.setProperty("--my", my.toFixed(3));
      el.style.setProperty("--sy", String(Math.min(window.scrollY, 900)));
    };
    const ask = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    const onMove = (e: PointerEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
      ask();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", ask, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", ask);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className={`ag-hero-pics relative ${className}`}>
      {ITEMS.map(({ Pic, left, top, width, depth, dur, delay }, i) => (
        <div
          key={i}
          className="ag-hero-pic absolute"
          style={{ left, top, width, ["--d" as string]: depth } as React.CSSProperties}
        >
          <div className="ag-bob" style={{ animationDuration: `${dur}s`, animationDelay: `${delay}s` }}>
            <Pic className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
