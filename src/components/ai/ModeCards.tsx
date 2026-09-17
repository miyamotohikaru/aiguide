import J from "../J";
import Reveal from "../Reveal";
import type { Mode } from "@/data/ai-detail-types";

/** モード・機能のカード */
export default function ModeCards({ modes, color }: { modes: Mode[]; color: string }) {
  return (
    <ul className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {modes.map((m, i) => (
        <Reveal as="li" key={m.name} delay={i * 40} className="ag-card flex flex-col p-5">
          <p>
            <span className="inline-block rounded-xl px-3 py-1 font-round text-[1rem] font-extrabold text-white" style={{ background: color }}>
              {m.name}
            </span>
          </p>
          <p className="mt-3 text-[0.97rem]">
            <J text={m.what} />
          </p>
          <p className="mt-auto pt-3">
            <span className="block rounded-xl bg-paper-2 px-3 py-2 text-[0.88rem]">
              <span className="mr-1.5 font-bold">使いどき</span>
              <J text={m.when} />
            </span>
          </p>
        </Reveal>
      ))}
    </ul>
  );
}
