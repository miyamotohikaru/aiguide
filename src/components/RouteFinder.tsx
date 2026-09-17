"use client";

import { useState } from "react";
import J from "./J";
import Robot from "./illust/Robot";
import Icon from "./illust/Icons";

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
  a: { tag: "ROUTE A", name: "ドラッグで置く", why: "HTMLだけのサイトなので、フォルダを置くだけで公開できます。いちばん早い方法です。", href: "#route-a", icon: "folder" },
  b: { tag: "ROUTE B", name: "GitHub につないで自動で公開", why: "ビルドも、秘密の設定も、くり返しの更新も、Vercel がまとめて引き受けてくれます。", href: "#route-b", icon: "github" },
  c: { tag: "ROUTE C", name: "AI に手伝ってもらう", why: "まずAIにフォルダを見てもらって、どの形か確かめるのが近道です。", href: "#route-c", icon: "robot" },
} as const;

export default function RouteFinder({ base = "" }: { base?: string }) {
  const [ans, setAns] = useState<Partial<Record<Key, A>>>({});
  const step = QS.findIndex((q) => !ans[q.key]);
  const done = step === -1;
  const result =
    ans.pkg === "idk" || ans.env === "idk"
      ? RESULT.c
      : ans.pkg === "yes" || ans.env === "yes" || ans.upd === "yes"
        ? RESULT.b
        : RESULT.a;

  return (
    <div className="ag-card overflow-hidden">
      <div className="grid md:grid-cols-[1fr_280px]">
        <ol className="grid gap-6 p-6 sm:p-8">
          {QS.map((q, i) => {
            const active = i === step;
            const answered = !!ans[q.key];
            return (
              <li key={q.key} className={`transition-opacity ${!answered && !active ? "opacity-40" : ""}`}>
                <p className="flex items-start gap-3 font-round text-[1.1rem] font-extrabold leading-snug">
                  <span className={`ag-num text-[0.85rem] ${answered ? "bg-mint" : active ? "bg-coral" : ""}`}>
                    {answered ? <Icon name="check" className="h-4 w-4" strokeWidth={3.2} /> : `Q${i + 1}`}
                  </span>
                  <span className="pt-1.5">
                    <J text={q.q} />
                  </span>
                </p>
                {q.hint && (
                  <p className="mt-1 pl-[3.2rem] text-[0.9rem] text-soft">
                    <J text={q.hint} />
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-2 pl-[3.2rem]" role="radiogroup" aria-label={q.q}>
                  {q.opts.map((o) => {
                    const on = ans[q.key] === o.v;
                    return (
                      <button
                        key={o.v}
                        type="button"
                        role="radio"
                        aria-checked={on}
                        onClick={() => setAns({ ...ans, [q.key]: o.v })}
                        className={`rounded-full px-5 py-2 font-bold transition-all ${
                          on ? "bg-ink text-white shadow-[0_3px_0_#0f9f76]" : "bg-paper-2 hover:-translate-y-0.5 hover:bg-sun-bg"
                        }`}
                      >
                        {o.label}
                      </button>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ol>
        <div className={`flex flex-col items-center justify-center gap-3 p-6 text-center transition-colors sm:p-8 ${done ? "bg-sky-bg" : "bg-paper-2"}`} aria-live="polite">
          <Robot pose={done ? "cheer" : "think"} body={done ? "#3d6ff5" : "#7a55e6"} className="h-32 w-32" />
          {done ? (
            <>
              <p className="text-[0.8rem] font-bold tracking-[0.15em] text-sky">{result.tag}</p>
              <p className="font-round text-[1.3rem] font-extrabold leading-snug">
                <J text={result.name} />
              </p>
              <p className="text-[0.92rem] text-soft">
                <J text={result.why} />
              </p>
              <a href={`${base}${result.href}`} className="ag-btn mt-2 bg-coral text-white">
                手順を見る
                <Icon name="arrow" className="h-4 w-4" strokeWidth={3} />
              </a>
              <button type="button" onClick={() => setAns({})} className="text-[0.85rem] font-bold text-soft underline underline-offset-4">
                もう一度
              </button>
            </>
          ) : (
            <p className="font-bold text-soft">
              <J text={`あと${QS.length - Object.keys(ans).length}問で、◇おすすめが出ます。`} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
