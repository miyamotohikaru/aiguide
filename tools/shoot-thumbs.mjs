/**
 * リンク先のサムネイルを撮る。
 *   node tools/shoot-thumbs.mjs [--only <slug>]
 *
 * ・自分のブラウザで実際に開いて撮る（よそのサーバーの画像は借りない）。
 * ・public/thumbs/<slug>.png に、幅480pxで保存する（縮小は tools/thumb-resize.py）。
 * ・撮れなかったURLは done.json に理由を残し、ページ側では文字だけで見せる。
 */
import puppeteer from "puppeteer-core";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT = "public/thumbs";
const only = process.argv.includes("--only") ? process.argv[process.argv.indexOf("--only") + 1] : null;

/** data/*.ts から URL を拾う（TS をそのまま読まずに、正規表現で足りる） */
function pick(file, re) {
  const src = readFileSync(file, "utf8");
  const out = [];
  let m;
  while ((m = re.exec(src))) out.push(m);
  return out;
}

const targets = [];
// 参考リンク（name と url の組）
{
  const src = readFileSync("src/data/links.ts", "utf8");
  const re = /name:\s*"([^"]+)",\s*\n\s*url:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(src))) targets.push({ slug: slugOf(m[2]), name: m[1], url: m[2] });
}
// AIツール（id と url）
{
  const src = readFileSync("src/data/ai.ts", "utf8");
  const re = /id:\s*"([a-z0-9]+)",[\s\S]{0,400}?url:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(src))) targets.push({ slug: `tool-${m[1]}`, name: m[1], url: m[2] });
}

function slugOf(url) {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60)
    .toLowerCase();
}

mkdirSync(OUT, { recursive: true });
const donePath = `${OUT}/done.json`;
const done = existsSync(donePath) ? JSON.parse(readFileSync(donePath, "utf8")) : {};

const browser = await puppeteer.launch({
  executablePath: CHROME,
  args: ["--headless=new", "--hide-scrollbars", "--disable-features=IsolateOrigins"],
});

for (const t of targets) {
  if (only && t.slug !== only) continue;
  if (done[t.slug]?.ok && existsSync(`${OUT}/${t.slug}.png`)) {
    console.log("skip", t.slug);
    continue;
  }
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36",
  );
  try {
    await page.goto(t.url, { waitUntil: "domcontentloaded", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 3500));
    await page.screenshot({ path: `${OUT}/${t.slug}.png`, clip: { x: 0, y: 0, width: 1280, height: 800 } });
    done[t.slug] = { ok: true, url: t.url, name: t.name, at: new Date().toISOString().slice(0, 10) };
    console.log("ok  ", t.slug);
  } catch (e) {
    done[t.slug] = { ok: false, url: t.url, name: t.name, why: String(e).slice(0, 120) };
    console.log("NG  ", t.slug, String(e).slice(0, 80));
  }
  await page.close();
  writeFileSync(donePath, JSON.stringify(done, null, 2));
}

await browser.close();
console.log("done:", Object.values(done).filter((d) => d.ok).length, "/", Object.keys(done).length);
