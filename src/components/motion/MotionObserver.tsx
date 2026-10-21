"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * 見えたものに .is-in を付ける係。
 * 対象は [data-reveal]（下から出る）・[data-reveal-stagger]（ずらして出る）・.ag-doodle（線から描かれる）。
 * 絞り込みなどで後から増えた要素も拾えるように、DOM の変化も見張る。
 * html に .motion が無いとき（動きを減らす設定・自動の撮影）は何もしない。
 */
const SELECTOR = "[data-reveal]:not(.is-in), [data-reveal-stagger]:not(.is-in), .ag-doodle:not(.is-in)";

export default function MotionObserver() {
  const path = usePathname();

  useEffect(() => {
    (window as unknown as { __agMotionReady?: boolean }).__agMotionReady = true;
    const html = document.documentElement;
    if (!html.classList.contains("motion")) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    const scan = (root: ParentNode) => root.querySelectorAll(SELECTOR).forEach((el) => io.observe(el));
    scan(document);

    const mo = new MutationObserver((list) => {
      for (const m of list) {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          if (n.matches(SELECTOR)) io.observe(n);
          scan(n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [path]);

  return null;
}
