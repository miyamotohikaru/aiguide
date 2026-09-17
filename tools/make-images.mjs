/**
 * ファビコンと OGP 画像を焼く。 node tools/make-images.mjs
 * ファビコンは余白ゼロ・横幅いっぱい（他サイトと並べて小さく見えないように）。
 */
import puppeteer from "puppeteer-core";
import { writeFileSync } from "node:fs";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const FONT = `<link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@700&family=IBM+Plex+Mono:wght@600&display=block" rel="stylesheet">`;

const ICON = (size) => `<!doctype html><html><head>${FONT}<style>
html,body{margin:0;background:transparent}
.c{width:${size}px;height:${size}px;border-radius:50%;background:#1b1b1d;display:flex;align-items:center;justify-content:center;
color:#fff;font-family:'IBM Plex Mono',monospace;font-weight:600;font-size:${size * 0.5}px;letter-spacing:-${size * 0.02}px}
</style></head><body><div class="c">AI</div></body></html>`;

const OG = `<!doctype html><html><head>${FONT}<style>
html,body{margin:0}
.w{width:1200px;height:630px;box-sizing:border-box;background:#f6f4ee;border:14px solid #1b1b1d;padding:70px 80px;position:relative;font-family:'Zen Kaku Gothic New',sans-serif;color:#1b1b1d}
.tag{display:inline-block;border:4px solid #1b1b1d;border-radius:999px;background:#fdf1c9;padding:6px 26px;font-size:30px;font-weight:700}
h1{margin:34px 0 0;font-size:112px;line-height:1.1;letter-spacing:-2px}
.sub{margin-top:28px;font-size:40px;font-weight:700}
.dots{position:absolute;right:80px;bottom:70px;display:flex;gap:18px}
.dots span{width:46px;height:46px;border-radius:50%;border:4px solid #1b1b1d}
.bar{position:absolute;left:80px;bottom:78px;font-family:'IBM Plex Mono',monospace;font-size:30px;border:4px solid #1b1b1d;border-radius:999px;background:#e6ecfd;padding:6px 26px}
</style></head><body><div class="w">
<span class="tag">ターミナルを使わない人のための</span>
<h1>はじめてのAIガイド</h1>
<p class="sub">作ったサイトを、みんなに届けるまで。</p>
<div class="bar">https://your-site.vercel.app</div>
<div class="dots"><span style="background:#2f5be0"></span><span style="background:#13875c"></span><span style="background:#f0b400"></span><span style="background:#d9486f"></span></div>
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
