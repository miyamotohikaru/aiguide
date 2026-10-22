/**
 * リンク先のサムネイル。tools/shoot-thumbs.mjs で自分のブラウザから撮って、
 * public/thumbs/ に置いたもの（よそのサーバーの画像は読みこまない）。
 * 撮れなかったリンクは、この一覧に入らないので、ページ側では文字だけで出す。
 */
export const THUMBS = new Set<string>([
  "21st-dev",
  "animista-net-play-basic",
  "blog-google-intl-ja-jp",
  "claude-com-resources-articles",
  "code-claude-com-docs-ja-overview",
  "codepen-io-collection-aamxqd",
  "codepen-io-collection-xpwony",
  "colorhunt-co",
  "coolors-co",
  "cursor-com-docs",
  "developer-mozilla-org-ja-docs-learn-web-development",
  "developers-cloudflare-com-pages",
  "developers-openai-com",
  "docs-github-com-ja-desktop",
  "docs-github-com-ja-pages",
  "docs-netlify-com",
  "experiments-withgoogle-com-search-q-particles",
  "fonts-google-com",
  "freefrontend-com-javascript-mouse-interaction",
  "github-com-anthropics-claude-code-blob-main-changelog-md",
  "github-com-anthropics-claude-cookbooks",
  "github-com-anthropics-skills",
  "goworkship-com-magazine-css-javascript-cursor-effects",
  "ja-javascript-info",
  "jsprimer-net",
  "lucide-dev",
  "pigment-shapefactory-co",
  "platform-claude-com-docs-ja-build-with-claude-prompt-enginee",
  "platform-claude-com-docs-ja-home",
  "platform-claude-com-docs-ja-release-notes-overview",
  "progate-com",
  "rico-supply-categories-cards",
  "sankoudesign-com-category-parallax",
  "skillry-dev",
  "skills-kosukuma-com",
  "speckyboy-com-css-javascript-cursor-effects",
  "speckyboy-com-repelling-effect-in-web-design",
  "support-claude-com-ja",
  "support-google-com-gemini-hl-ja",
  "tool-aistudio",
  "tool-antigravity",
  "tool-bolt",
  "tool-chatgpt",
  "tool-claude",
  "tool-claudecode",
  "tool-codex",
  "tool-copilot",
  "tool-cursor",
  "tool-devin",
  "tool-gemini",
  "tool-geminicli",
  "tool-lovable",
  "tool-notebook",
  "tool-replit",
  "tool-v0",
  "undraw-co-illustrations",
  "unsplash-com-ja",
  "vercel-com-changelog",
  "vercel-com-docs",
  "web-dev-learn-hl-ja",
  "www-awwwards-com",
  "www-evoworx-co-jp-blog-awwwards",
  "www-japandesign-ne-jp",
  "www-pexels-com-ja-jp",
  "www-pxbee-com-ai-image-extender"
]);

/** URL からサムネのファイル名を作る（撮影スクリプトと同じ決まり） */
export function thumbSlug(url: string): string {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60)
    .toLowerCase();
}

/** リンク用のサムネの場所。無ければ null */
export function thumbForUrl(url: string): string | null {
  const s = thumbSlug(url);
  return THUMBS.has(s) ? `/thumbs/${s}.jpg` : null;
}

/** AIツール用のサムネの場所。無ければ null */
export function thumbForTool(id: string): string | null {
  const s = `tool-${id}`;
  return THUMBS.has(s) ? `/thumbs/${s}.jpg` : null;
}
