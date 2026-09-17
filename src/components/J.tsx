import BreakText from "./BreakText";

/**
 * 和文を「、」「。」の切れ目でしか折らないように組む。
 *
 * 1. 文を句読点ごとの塊（inline-block）に分ける。
 *    幅が足りなくなると、塊の境目＝句読点の後ろで次の行に送られる。
 * 2. 1つの塊が1行に収まらないとき（スマホの狭い枠）のために、
 *    塊の中をさらに「漢字・カタカナ・英字 ＋ 後ろのひらがな」の文節に分け、
 *    文節の中では折らない（「見/る」「状/態」のような割れを防ぐ）。
 *    Intl.Segmenter はブラウザとサーバーで結果が変わりうるので使わず、
 *    文字の種類だけで決める。
 *
 * 手で折りたい場所には記号を埋める（BreakText が開く）。
 *   ◆ … 携帯のときだけ改行
 *   ◇ … いつでも改行
 */

/** 文節の頭になる文字（この文字が「しっぽ」の後に来たら、新しい文節） */
const HEAD = /[一-龠々〆ヵヶァ-ヴーA-Za-z0-9０-９Ａ-Ｚａ-ｚ「『（【〈《［“"'`/:.#@_\-+＋]/;
/** 1文節がこれより長いときは、中で折れてもよい（はみ出し防止） */
const MAX = 8;

function phrases(s: string): string[] {
  const out: string[] = [];
  let cur = "";
  let tail = false;
  for (const ch of s) {
    const head = HEAD.test(ch);
    // 開き括弧は、前が何であっても新しい文節の頭にする
    if (cur && ((head && tail) || /[「『（【〈《［“]/.test(ch))) {
      out.push(cur);
      cur = "";
    }
    cur += ch;
    tail = !head;
    // 英単語のあとの空白は、そこで折ってよい
    if (ch === " ") {
      out.push(cur);
      cur = "";
    }
  }
  if (cur) out.push(cur);
  return out;
}

export default function J({ text }: { text: string }) {
  const parts = text.split(/(?<=[。、！？])|(?=[◆◇])|(?<=[◆◇])/).filter(Boolean);
  return (
    <>
      {parts.map((p, i) =>
        p === "◆" || p === "◇" ? (
          <BreakText key={i} text={p} />
        ) : (
          <span key={i} className="j-s">
            {phrases(p).map((w, k) =>
              w.length > MAX ? (
                <span key={k}>{w}</span>
              ) : (
                <span key={k} className="j-w">
                  {w}
                </span>
              ),
            )}
          </span>
        ),
      )}
    </>
  );
}
