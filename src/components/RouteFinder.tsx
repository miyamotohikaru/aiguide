"use client";

import { useState } from "react";
import J from "./J";

type A = "yes" | "no" | "idk";
type Key = "pkg" | "env" | "upd";

const QS: { key: Key; q: string; hint: string; opts: { v: A; label: string }[] }[] = [
  {
    key: "pkg",
    q: "サイトのフォルダに、package.json というファイルはある？",
    hint: "あれば、公開の前に「ビルド」が要る形です。",
    opts: [
      { v: "yes", label: "ある" },
      { v: "no", label: "ない" },
      { v: "idk", label: "わからない" },
    ],
  },
  {
    key: "env",
    q: "APIキーやパスワードを使っている？",
    hint: "AI・地図・決済などを組みこんでいたら、たぶん使っています。",
    opts: [
      { v: "yes", label: "使っている" },
      { v: "no", label: "使っていない" },
      { v: "idk", label: "わからない" },
    ],
  },
  {
    key: "upd",
    q: "公開したあと、何度も直していく？",
    hint: "",
    opts: [
      { v: "yes", label: "何度も直す" },
      { v: "no", label: "一度見せられればOK" },
    ],
  },
];

const RESULT = {
  a: { tag: "ROUTE A", name: "ドラッグで置く", why: "HTMLだけのサイトなので、フォルダを置くだけで公開できます。いちばん早い方法です。", href: "#route-a" },
  b: { tag: "ROUTE B", name: "GitHub につないで自動で公開", why: "ビルドも、秘密の設定も、くり返しの更新も、Vercel がまとめて引き受けてくれます。", href: "#route-b" },
  c: { tag: "ROUTE C", name: "AI に手伝ってもらう", why: "まずAIにフォルダを見てもらって、どの形か確かめるのが近道です。", href: "#route-c" },
} as const;

export default function RouteFinder({ base = "" }: { base?: string }) {
  const [ans, setAns] = useState<Partial<Record<Key, A>>>({});
  const done = QS.every((q) => ans[q.key]);
  const result =
    ans.pkg === "idk" || ans.env === "idk"
      ? RESULT.c
      : ans.pkg === "yes" || ans.env === "yes" || ans.upd === "yes"
        ? RESULT.b
        : RESULT.a;

  return (
    <div className="ag-box">
      <ol className="grid grid-cols-[minmax(0,1fr)]">
        {QS.map((q, i) => (
          <li key={q.key} className="border-b border-line-soft px-6 py-7 sm:px-8">
            <div className="grid gap-x-8 gap-y-2 sm:grid-cols-[3rem_minmax(0,1fr)]">
              <p className="ag-num pt-1">Q{i + 1}</p>
              <div className="min-w-0">
                <p className="text-[1.08rem] leading-snug">
                  <J text={q.q} />
                </p>
                {q.hint && (
                  <p className="mt-1 text-[0.9rem] text-soft">
                    <J text={q.hint} />
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2" role="radiogroup" aria-label={q.q}>
                  {q.opts.map((o) => (
                    <button
                      key={o.v}
                      type="button"
                      role="radio"
                      aria-checked={ans[q.key] === o.v}
                      onClick={() => setAns({ ...ans, [q.key]: o.v })}
                      className="ag-pick"
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="px-6 py-8 sm:px-8" aria-live="polite">
        {done ? (
          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-[3rem_minmax(0,1fr)]">
            <p className="ag-label pt-1">A</p>
            <div className="min-w-0">
              <p className="ag-label">{result.tag}</p>
              <p className="mt-1 text-[1.3rem] leading-snug">
                <J text={result.name} />
              </p>
              <p className="mt-2 max-w-[34em] text-soft">
                <J text={result.why} />
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <a href={`${base}${result.href}`} className="ag-btn ag-btn-solid">
                  手順を見る
                </a>
                <button type="button" onClick={() => setAns({})} className="ag-link text-[0.9rem] text-soft">
                  もう一度
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-soft">
            <J text={`あと${QS.length - Object.keys(ans).length}問で、おすすめが出ます。`} />
          </p>
        )}
      </div>
    </div>
  );
}
