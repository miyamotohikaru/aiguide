export const SITE_URL = "https://hajimete-aiguide.vercel.app";
export const SITE_NAME = "はじめてのAIガイド";

export type Tone = "sky" | "grape" | "coral" | "mint" | "sun" | "pink";

/** 章。順番は「読む順」。icon は components/illust/Icons.tsx の名前 */
export const SECTIONS = [
  { href: "/ai", label: "AIの選び方", short: "AI", en: "CHOOSE AI", tone: "coral", icon: "spark", desc: "どのAIを使えばいい？◆目的別にくらべる。" },
  { href: "/setup", label: "公開のしかた", short: "公開", en: "PUBLISH", tone: "sky", icon: "rocket", desc: "作ったサイトを、◆みんなに見せる手順。" },
  { href: "/terminal", label: "ターミナル入門", short: "ターミナル", en: "TERMINAL", tone: "grape", icon: "terminal", desc: "黒い画面、◆こわくない使い方。" },
  { href: "/commands", label: "スラッシュコマンド", short: "コマンド", en: "COMMANDS", tone: "mint", icon: "slash", desc: "「/」で始まる◆命令の一覧。" },
  { href: "/words", label: "用語集", short: "用語", en: "WORDS", tone: "sun", icon: "book", desc: "デザインとHPの◆言葉の意味。" },
  { href: "/prompts", label: "プロンプト集", short: "プロンプト", en: "PROMPTS", tone: "pink", icon: "chat", desc: "AIにそのまま渡せる◆頼み方。" },
] as const;

export type SectionIcon = (typeof SECTIONS)[number]["icon"];

/** Tailwind はクラス名を文字列から組み立てると拾えないので、ここで全部書いておく */
export const TONE = {
  sky: { fg: "text-sky", bg: "bg-sky-bg", solid: "bg-sky", border: "border-sky", hex: "#3d6ff5", soft: "#e6eeff" },
  grape: { fg: "text-grape", bg: "bg-grape-bg", solid: "bg-grape", border: "border-grape", hex: "#7a55e6", soft: "#ece6ff" },
  coral: { fg: "text-coral", bg: "bg-coral-bg", solid: "bg-coral", border: "border-coral", hex: "#f0533f", soft: "#ffe3dd" },
  mint: { fg: "text-mint", bg: "bg-mint-bg", solid: "bg-mint", border: "border-mint", hex: "#0f9f76", soft: "#d9f5ea" },
  sun: { fg: "text-[#9a6b00]", bg: "bg-sun-bg", solid: "bg-sun", border: "border-sun", hex: "#f5b100", soft: "#fff1c2" },
  pink: { fg: "text-pink", bg: "bg-pink-bg", solid: "bg-pink", border: "border-pink", hex: "#e0487a", soft: "#ffe2ec" },
} as const;
