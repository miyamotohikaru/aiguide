"use client";

import { useEffect, useRef } from "react";

/**
 * 画面に入ったら、ふわっと出す。
 * JS が動かない環境では最初から見える（隠すのは html.js のときだけ）。
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // 撮影ツールやクローラー（自動操作のブラウザ）では、最初から全部見せる
    if (navigator.webdriver || !("IntersectionObserver" in window)) {
      el.setAttribute("data-static", "");
      return;
    }
    const io = new IntersectionObserver(
      (es) => {
        for (const e of es)
          if (e.isIntersecting) {
            el.setAttribute("data-shown", "");
            io.disconnect();
          }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    // @ts-expect-error 要素の種類を切り替えるだけ
    <Tag ref={ref} className={`ag-reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
