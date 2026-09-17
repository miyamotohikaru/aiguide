import Rich from "./Rich";
import Icon from "./illust/Icons";

const KIND = {
  tip: { label: "ヒント", icon: "bulb", cls: "bg-sky-bg", fg: "text-sky" },
  warn: { label: "注意", icon: "warn", cls: "bg-coral-bg", fg: "text-coral" },
  good: { label: "できた！", icon: "check", cls: "bg-mint-bg", fg: "text-mint" },
} as const;

export default function Callout({ kind, text, children }: { kind: keyof typeof KIND; text?: string; children?: React.ReactNode }) {
  const k = KIND[kind];
  return (
    <div className={`flex gap-3 rounded-2xl px-4 py-3 text-[0.95rem] ${k.cls}`}>
      <span className={`mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-card ${k.fg}`}>
        <Icon name={k.icon} className="h-4 w-4" strokeWidth={2.6} />
      </span>
      <div className="min-w-0">
        <span className={`mr-1.5 font-bold ${k.fg}`}>{k.label}</span>
        {text ? <Rich text={text} /> : children}
      </div>
    </div>
  );
}
