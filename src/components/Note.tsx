import Rich from "./Rich";

const LABEL = { tip: "ヒント", warn: "注意", good: "できたら" } as const;

/** 注記。色を使わず、左の細い罫線と小さなラベルで示す */
export default function Note({ kind, text, children }: { kind: keyof typeof LABEL; text?: string; children?: React.ReactNode }) {
  return (
    <p className="ag-note">
      <span className="mr-2 inline-block text-[0.75rem] tracking-[0.18em] text-ink">{LABEL[kind]}</span>
      {text ? <Rich text={text} /> : children}
    </p>
  );
}
