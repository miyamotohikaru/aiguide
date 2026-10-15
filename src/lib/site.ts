export const SITE_URL = "https://hajimete-aiguide.vercel.app";
export const SITE_NAME = "はじめてのAIガイド";

/** 章。順番は「読む順」 */
export const SECTIONS = [
  { href: "/ai", label: "AIの選び方", short: "AIの選び方", en: "CHOOSE AI", desc: "どのAIを使えばいい？◆目的別にくらべる。" },
  { href: "/setup", label: "公開のしかた", short: "公開", en: "PUBLISH", desc: "作ったサイトを、◆みんなに見せる手順。" },
  { href: "/terminal", label: "ターミナル入門", short: "ターミナル", en: "TERMINAL", desc: "黒い画面、◆こわくない使い方。" },
  { href: "/commands", label: "スラッシュコマンド", short: "コマンド", en: "COMMANDS", desc: "「/」で始まる◆命令の一覧。" },
  { href: "/words", label: "用語集", short: "用語", en: "WORDS", desc: "デザインとHPの◆言葉の意味。" },
  { href: "/prompts", label: "プロンプト集", short: "プロンプト", en: "PROMPTS", desc: "AIにそのまま渡せる◆頼み方。" },
  { href: "/links", label: "参考リンク", short: "リンク", en: "LINKS", desc: "もっと知るための◆外のサイト。" },
] as const;
