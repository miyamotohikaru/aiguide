"use client";

import { useState } from "react";

/**
 * 写す。押した手応えを必ず返す。
 * クリップボードが使えない場面でも黙って失敗しない。
 */
export default function Copy({ text, label = "コピー" }: { text: string; label?: string }) {
  const [state, setState] = useState<"idle" | "done" | "fail">("idle");

  const run = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState("done");
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setState("done");
      } catch {
        setState("fail");
      }
    }
    setTimeout(() => setState("idle"), 1800);
  };

  return (
    <button type="button" className="ag-copy" onClick={run} data-state={state} aria-live="polite">
      {state === "done" ? "コピーしました" : state === "fail" ? "コピーできませんでした" : label}
    </button>
  );
}
