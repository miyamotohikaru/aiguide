/**
 * ファビコンと OGP 画像を焼く。 node tools/make-images.mjs
 * ファビコンは余白ゼロ・横幅いっぱい（他サイトと並べて小さく見えないように）。
 */
import puppeteer from "puppeteer-core";
import { writeFileSync } from "node:fs";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const FONT = `<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@800&family=IBM+Plex+Mono:wght@600&display=block" rel="stylesheet">`;

const ICON = (size) => `<!doctype html><html><head>${FONT}<style>
html,body{margin:0;background:transparent}
.c{width:${size}px;height:${size}px;border-radius:50%;background:#23233f;display:flex;align-items:center;justify-content:center;
color:#fff;font-family:'IBM Plex Mono',monospace;font-weight:600;font-size:${size * 0.5}px;letter-spacing:-${size * 0.02}px}
</style></head><body><div class="c">AI</div></body></html>`;

const OG = `<!doctype html><html><head>${FONT}<style>
html,body{margin:0}
.w{width:1200px;height:630px;box-sizing:border-box;background:#fffaf1;padding:72px 84px;position:relative;overflow:hidden;font-family:'M PLUS Rounded 1c',sans-serif;color:#23233f}
.dots{position:absolute;inset:0;background-image:radial-gradient(rgba(35,35,63,.12) 2px,transparent 2.4px);background-size:28px 28px}
.sun{position:absolute;right:-120px;top:-120px;width:520px;height:520px;border-radius:50%;background:#fff1c2}
.tag{position:relative;display:inline-block;border-radius:999px;background:#fff;padding:8px 28px;font-size:30px;box-shadow:0 6px 20px -10px rgba(35,35,63,.5)}
h1{position:relative;margin:30px 0 0;font-size:104px;line-height:1.1;letter-spacing:-2px;white-space:nowrap}
.sub{position:relative;margin-top:18px;font-size:42px}
.sub b{background:linear-gradient(transparent 58%,#f5b10088 58%)}
.chips{position:absolute;left:84px;bottom:66px;display:flex;gap:14px}
.chips span{border-radius:18px;padding:10px 22px;font-size:28px;color:#fff;box-shadow:0 5px 0 #23233f}
</style></head><body><div class="w"><div class="dots"></div><div class="sun"></div>
<span class="tag">ターミナルを使ったことがない人へ</span>
<h1>はじめてのAIガイド</h1>
<p class="sub">作ったサイトを、<b>みんなに</b>届けよう。</p>
<div class="chips"><span style="background:#f0533f">AIの選び方</span><span style="background:#3d6ff5">公開</span><span style="background:#7a55e6">ターミナル</span><span style="background:#0f9f76">コマンド</span><span style="background:#e0487a">プロンプト</span></div>
</div></body></html>`;

const b = await puppeteer.launch({ executablePath: CHROME, args: ["--headless=new"] });
const p = await b.newPage();
async function shot(html, w, h, out, transparent = true) {
  await p.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
  await p.setContent(html, { waitUntil: "load" });
  await p.evaluate(() => document.fonts.ready);
  writeFileSync(out, await p.screenshot({ omitBackground: transparent, clip: { x: 0, y: 0, width: w, height: h } }));
  console.log("wrote", out);
}
await shot(ICON(512), 512, 512, "src/app/icon.png");
await shot(ICON(180), 180, 180, "src/app/apple-icon.png");
await shot(OG, 1200, 630, "src/app/opengraph-image.png", false);
await b.close();
