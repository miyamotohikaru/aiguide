import { Fragment } from "react";
import J from "./J";

/**
 * 手順の文を組む。文の中に書ける印は3つ。
 *   ［Deploy］   … 画面のボタン名・メニュー名（キーの形で出す）
 *   `index.html` … ファイル名・入力する文字
 *   ◆ ◇        … 改行（J と同じ）
 */
export default function Rich({ text }: { text: string }) {
  const parts = text.split(/(［[^］]+］|`[^`]+`)/).filter(Boolean);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("［")) return <kbd key={i} className="ag-key">{p.slice(1, -1)}</kbd>;
        if (p.startsWith("`")) return <code key={i} className="ag-code">{p.slice(1, -1)}</code>;
        return <Fragment key={i}><J text={p} /></Fragment>;
      })}
    </>
  );
}
