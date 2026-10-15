/** 画面の幅からはみ出している要素を探す。 node tools/overflow.mjs <パス> [幅] */
import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const [path = "/", width = "390"] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: CHROME, args: ["--headless=new"] });
const p = await b.newPage();
await p.setViewport({ width: +width, height: 900 });
await p.goto(`http://localhost:3015${path}`, { waitUntil: "networkidle0" });
const out = await p.evaluate((w) => {
  const r = [];
  for (const el of document.querySelectorAll("body *")) {
    if (el.closest(".overflow-x-auto")) continue;
    const b = el.getBoundingClientRect();
    if (b.right > w + 1 && el.children.length === 0) r.push(`${Math.round(b.right)} ${el.tagName} ${el.className} :: ${el.textContent.slice(0, 40)}`);
  }
  return r;
}, +width);
console.log(`${path} @${width}: ${out.length}`);
out.slice(0, 20).forEach((l) => console.log(" ", l));
await b.close();
