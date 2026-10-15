/**
 * ファビコンと OGP 画像を焼く。 node tools/make-images.mjs
 * ファビコンは余白ゼロ・横幅いっぱい（他サイトと並べて小さく見えないように）。
 */
import puppeteer from "puppeteer-core";
import { writeFileSync } from "node:fs";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const FONT = `<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500&family=EB+Garamond:wght@400;500&display=block" rel="stylesheet">`;

const ICON = (size) => `<!doctype html><html><head>${FONT}<style>
html,body{margin:0;background:transparent}
.c{width:${size}px;height:${size}px;background:#171614;display:flex;align-items:center;justify-content:center;
color:#f7f6f1;font-family:'EB Garamond',serif;font-weight:400;font-size:${size * 0.52}px;letter-spacing:${size * 0.02}px}
</style></head><body><div class="c">AI</div></body></html>`;

const OG = `<!doctype html><html><head>${FONT}<style>
html,body{margin:0}
.w{width:1200px;height:630px;box-sizing:border-box;background:#f7f6f1;padding:78px 90px;position:relative;
font-family:'Noto Serif JP','EB Garamond',serif;color:#171614}
.label{font-family:'EB Garamond',serif;font-size:22px;letter-spacing:5px;color:#5f5d57}
h1{margin:48px 0 0;font-size:84px;font-weight:400;line-height:1.45;letter-spacing:1px}
.sub{margin-top:40px;font-size:30px;line-height:1.9;color:#5f5d57}
.rule{position:absolute;left:90px;right:90px;bottom:150px;height:1px;background:#d8d4c9}
.foot{position:absolute;left:90px;right:90px;bottom:84px;display:flex;justify-content:space-between;
font-family:'EB Garamond',serif;font-size:22px;letter-spacing:4px;color:#5f5d57}
</style></head><body><div class="w">
<p class="label">A GUIDE FOR BEGINNERS</p>
<h1>作ったサイトを、<br>みんなに届けよう。</h1>
<p class="sub">はじめてのAIガイド</p>
<div class="rule"></div>
<div class="foot"><span>CHOOSE AI &nbsp;·&nbsp; PUBLISH &nbsp;·&nbsp; TERMINAL &nbsp;·&nbsp; WORDS</span><span>hajimete-aiguide.vercel.app</span></div>
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
await shot(ICON(512), 512, 512, "src/app/icon.png", false);
await shot(ICON(180), 180, 180, "src/app/apple-icon.png", false);
await shot(OG, 1200, 630, "src/app/opengraph-image.png", false);
await b.close();
