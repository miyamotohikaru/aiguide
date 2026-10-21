"use client";

import { useEffect, useRef, useState } from "react";

/** 「105個」のような文字の、頭の数字を、見えたときに 0 から数え上げる */
export default function CountUp({ text }: { text: string }) {
  const m = text.match(/^(\D*)(\d+)(.*)$/);
  const target = m ? Number(m[2]) : 0;
  const [n, setN] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!m || !el || !document.documentElement.classList.contains("motion")) return;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / 1100);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      setN(0);
      raf = requestAnimationFrame(step);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  if (!m) return <>{text}</>;
  return (
    <span ref={ref} className="tabular-nums">
      {m[1]}
      {n}
      {m[3]}
    </span>
  );
}
