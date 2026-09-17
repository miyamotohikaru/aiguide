export const SITE_URL = "https://hajimete-aiguide.vercel.app";
export const SITE_NAME = "はじめてのAIガイド";

/** 章。色は globals.css のトークン名 */
export const SECTIONS = [
  { href: "/setup", label: "公開のしかた", en: "SETUP", color: "blue", desc: "作ったサイトを◆ネットに出す手順。" },
  { href: "/commands", label: "スラッシュコマンド", en: "COMMANDS", color: "green", desc: "「/」で始まる◆命令の一覧。" },
  { href: "/words", label: "用語集", en: "WORDS", color: "yellow", desc: "デザインとHPの◆言葉の意味。" },
  { href: "/prompts", label: "プロンプト集", en: "PROMPTS", color: "pink", desc: "AIにそのまま渡せる◆頼み方。" },
] as const;

export type SectionColor = (typeof SECTIONS)[number]["color"];
