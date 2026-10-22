import type { TermLine } from "@/data/terminal";

/**
 * ターミナルの画面。黒い背景やアニメは使わず、紙の上に等幅で静かに置く。
 * 自分で打つ行は、白い地と左の線と「打つ」の札で示す。画面に出る結果は、うすい色で地なし。
 * 結果の中の「> 」で始まる行は、Claude Code に打つ言葉なので、これも打つ行として見せる。
 */
function Typed({ prompt, text }: { prompt: string; text: string }) {
  return (
    <span className="-mx-5 flex items-baseline gap-3 border-l-2 border-ink bg-white/80 px-5 text-ink">
      {/* 狭い幅では、札に重ならないように折り返す */}
      <span className="min-w-0 flex-1 whitespace-pre-wrap break-words">
        <span className="text-soft">{prompt}</span>
        {text}
      </span>
      <span className="flex-none font-serif text-[0.7rem] tracking-[0.18em] text-soft">打つ</span>
    </span>
  );
}

export default function Term({ lines, caption }: { lines: TermLine[]; caption?: string }) {
  return (
    <figure className="ag-box bg-paper-2">
      <figcaption className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-line px-5 py-2.5">
        <span className="ag-label">{caption}</span>
        <span className="flex items-center gap-2 text-[0.72rem] text-soft">
          <span aria-hidden className="inline-block h-3 w-4 border-l-2 border-ink bg-white/80" />
          自分で打つ行
        </span>
      </figcaption>
      <pre className="ag-code overflow-x-auto px-5 py-5 leading-[1.9]">
        {lines.map((l, i) => (
          <span key={i} className="block">
            <Typed prompt="% " text={l.cmd} />
            {(l.out ?? []).map((o, k) =>
              o.startsWith("> ") ? (
                <Typed key={k} prompt="> " text={o.slice(2)} />
              ) : (
                <span key={k} className="block text-soft">
                  {o}
                </span>
              ),
            )}
          </span>
        ))}
      </pre>
    </figure>
  );
}
