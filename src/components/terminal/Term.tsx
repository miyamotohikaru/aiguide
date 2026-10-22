import type { TermLine } from "@/data/terminal";

/**
 * ターミナルの画面。黒い背景やアニメは使わず、紙の上に等幅で静かに置く。
 * 自分で打つ行は、白い地と左の線と鉛筆の絵で示す。画面に出る結果は、うすい色で地なし。
 * 結果の中の「> 」で始まる行は、Claude Code に打つ言葉なので、これも打つ行として見せる。
 */
/** 鉛筆の小さな絵（行ごとに出すので、フィルターは使わず軽く描く） */
function Pencil({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className}>
      <path d="M4 20 L5.5 14.5 L16 4 L20 8 L9.5 18.5 Z" fill="#e4bf72" stroke="#2f2c28" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 6 L18 10" stroke="#2f2c28" strokeWidth="1.5" />
      <path d="M4 20 L5.5 14.5 L9.5 18.5 Z" fill="#f0e6d6" stroke="#2f2c28" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 20 L4.8 17.2 L6.8 19.2 Z" fill="#2f2c28" />
    </svg>
  );
}

function Typed({ prompt, text }: { prompt: string; text: string }) {
  return (
    <span className="-mx-5 flex items-baseline gap-3 border-l-2 border-ink bg-white/80 px-5 text-ink">
      {/* 狭い幅では、札に重ならないように折り返す */}
      <span className="min-w-0 flex-1 whitespace-pre-wrap break-words">
        <span className="text-soft">{prompt}</span>
        {text}
      </span>
      <span className="flex-none self-center">
        <Pencil className="h-4 w-4" />
        <span className="sr-only">自分で打つ</span>
      </span>
    </span>
  );
}

export default function Term({ lines, caption }: { lines: TermLine[]; caption?: string }) {
  return (
    <figure className="ag-box bg-paper-2">
      <figcaption className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-line px-5 py-2.5">
        <span className="ag-label">{caption}</span>
        <span className="flex items-center gap-2 text-[0.72rem] text-soft">
          <span aria-hidden className="inline-flex h-4 items-center border-l-2 border-ink bg-white/80 px-1">
            <Pencil className="h-3 w-3" />
          </span>
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
