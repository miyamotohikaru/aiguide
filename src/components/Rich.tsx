import { Fragment } from "react";
import J from "./J";

/**
 * 手順の文を組む。文の中に書ける印は3つ。
 *   ［Deploy］   … 画面のボタン名・メニュー名（キーの形で出す）
 *   `index.html` … ファイル名・入力する文字
 *   ◆ ◇        … 改行（J と同じ）
 * ボタン名やコードのすぐ後ろの句読点は、行頭にひとりで落ちないよう、くっつけて組む。
 */
export default function Rich({ text }: { text: string }) {
  const parts = text.split(/(［[^］]+］|`[^`]+`)/).filter(Boolean);
  const out: React.ReactNode[] = [];
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    const isKey = p.startsWith("［");
    const isCode = p.startsWith("`") && p.endsWith("`") && p.length > 1;
    if (isKey || isCode) {
      const el = isKey ? <kbd className="ag-key">{p.slice(1, -1)}</kbd> : <code className="ag-code">{p.slice(1, -1)}</code>;
      const next = parts[i + 1];
      const m = next?.match(/^[。、）」』！？]+/);
      if (m) {
        out.push(
          <span key={i} className="whitespace-nowrap">
            {el}
            {m[0]}
          </span>,
        );
        parts[i + 1] = next.slice(m[0].length);
      } else {
        out.push(<Fragment key={i}>{el}</Fragment>);
      }
      continue;
    }
    if (p) out.push(<J key={i} text={p} />);
  }
  return <>{out}</>;
}
