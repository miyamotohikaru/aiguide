"use client";

import { useState } from "react";
import J from "./J";

type A = "yes" | "no" | "idk";

const QS: { key: "pkg" | "env" | "upd"; q: string; hint: string; opts: { v: A; label: string }[] }[] = [
  {
    key: "pkg",
    q: "サイトのフォルダに、package.json というファイルはありますか？",
    hint: "あれば、公開の前に「ビルド」が要る形です。",
    opts: [
      { v: "yes", label: "ある" },
      { v: "no", label: "ない" },
      { v: "idk", label: "わからない" },
    ],
  },
  {
    key: "env",
    q: "APIキーやパスワードを使っていますか？",
    hint: "AIのAPI、地図、決済などを使っていると、たいてい使っています。",
    opts: [
      { v: "yes", label: "使っている" },
      { v: "no", label: "使っていない" },
      { v: "idk", label: "わからない" },
    ],
  },
  {
    key: "upd",
    q: "公開したあと、何度も直していきますか？",
    hint: "",
    opts: [
      { v: "yes", label: "何度も直す" },
      { v: "no", label: "一度見せられればいい" },
    ],
  },
];

const RESULT = {
  a: { name: "ルートA　ドラッグで置く", why: "HTMLだけでできたサイトなので、フォルダを置くだけで公開できます。", href: "#route-a" },
  b: { name: "ルートB　GitHub につないで自動で公開", why: "ビルドや秘密の設定、くり返しの更新を、Vercel がまとめて引き受けてくれます。", href: "#route-b" },
  c: { name: "ルートC　AI に手伝ってもらう", why: "まずAIにフォルダを見てもらい、どの形か確かめるのが近道です。", href: "#route-c" },
};

export default function RouteFinder({ base = "" }: { base?: string }) {
  const [ans, setAns] = useState<Partial<Record<"pkg" | "env" | "upd", A>>>({});
  const done = QS.every((q) => ans[q.key]);
  const result =
    ans.pkg === "idk" || ans.env === "idk"
      ? RESULT.c
      : ans.pkg === "yes" || ans.env === "yes" || ans.upd === "yes"
        ? RESULT.b
        : RESULT.a;

  return (
    <div className="ag-box ag-shadow p-5 sm:p-7">
      <ol className="grid gap-6">
        {QS.map((q, i) => (
          <li key={q.key}>
            <p className="flex items-start gap-2.5 font-bold">
              <span className="ag-num mt-0.5 text-[0.8rem]">Q{i + 1}</span>
              <span className="pt-1">
                <J text={q.q} />
              </span>
            </p>
            {q.hint && (
              <p className="mt-1 pl-[2.9rem] text-[0.9rem] text-soft">
                <J text={q.hint} />
              </p>
            )}
            <div className="mt-2.5 flex flex-wrap gap-2 pl-[2.9rem]" role="radiogroup" aria-label={q.q}>
              {q.opts.map((o) => {
                const on = ans[q.key] === o.v;
                return (
                  <button
                    key={o.v}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setAns({ ...ans, [q.key]: o.v })}
                    className={`rounded-full border-2 border-ink px-4 py-1 text-[0.95rem] font-bold transition-colors ${
                      on ? "bg-ink text-white" : "bg-card hover:bg-yellow-bg"
                    }`}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>
      <div
        className={`mt-7 rounded-xl border-2 border-dashed p-5 ${done ? "border-blue bg-blue-bg" : "border-line"}`}
        aria-live="polite"
      >
        {done ? (
          <>
            <p className="text-[0.85rem] font-bold text-blue">あなたにおすすめ</p>
            <p className="mt-1 text-[1.25rem] font-bold">{result.name}</p>
            <p className="mt-1.5 text-soft">
              <J text={result.why} />
            </p>
            <a
              href={`${base}${result.href}`}
              className="mt-4 inline-block rounded-full border-2 border-ink bg-ink px-5 py-1.5 font-bold text-white hover:bg-blue"
            >
              手順を見る →
            </a>
          </>
        ) : (
          <p className="text-soft">
            <J text="3つ答えると、ここにおすすめの公開ルートが出ます。" />
          </p>
        )}
      </div>
    </div>
  );
}
