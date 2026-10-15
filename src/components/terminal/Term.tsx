import type { TermLine } from "@/data/terminal";

/**
 * ターミナルの画面。黒い背景やアニメは使わず、
 * 紙の上に等幅で静かに置く。打つ文字は黒、結果はうすい色。
 */
export default function Term({ lines, caption }: { lines: TermLine[]; caption?: string }) {
  return (
    <figure className="ag-box bg-paper-2">
      {caption && <figcaption className="ag-label border-b border-line px-5 py-2.5">{caption}</figcaption>}
      <pre className="ag-code overflow-x-auto px-5 py-5 leading-[1.9]">
        {lines.map((l, i) => (
          <span key={i} className="block">
            <span className="text-soft">% </span>
            {l.cmd}
            {(l.out ?? []).map((o, k) => (
              <span key={k} className="block text-soft">
                {o}
              </span>
            ))}
          </span>
        ))}
      </pre>
    </figure>
  );
}
