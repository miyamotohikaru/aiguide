"use client";

import { useState } from "react";
import Chips from "../Chips";
import ToolCard from "./ToolCard";
import { TOOLS, TYPES, type AiType } from "@/data/ai";

type F = "all" | AiType;

export default function ToolDex() {
  const [f, setF] = useState<F>("all");
  const list = TOOLS.filter((t) => f === "all" || t.type === f);
  const items = [
    { id: "all" as F, label: "すべて", count: TOOLS.length },
    ...TYPES.map((t) => ({ id: t.id as F, label: t.label, count: TOOLS.filter((x) => x.type === t.id).length })),
  ];
  return (
    <div>
      <Chips items={items} value={f} onChange={setF} label="タイプでしぼる" active="bg-coral text-white" />
      <ul className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t) => (
          <li key={t.id}>
            <ToolCard tool={t} />
          </li>
        ))}
      </ul>
    </div>
  );
}
