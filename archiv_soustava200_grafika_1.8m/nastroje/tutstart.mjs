// čas od kliknutí na #sp-tut do běžící ukázky (a stav úvodu)
import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
import http from 'http'; import fs from 'fs'; import path from 'path';
const dir = process.argv[2];
const srv = http.createServer((q, r) => { const f = path.join(dir, q.url === '/' ? '/index.html' : q.url.split('?')[0]);
  fs.readFile(f, (e, d) => { if (e) { r.writeHead(404); r.end(); } else { r.writeHead(200, { 'content-type': f.endsWith('.html') ? 'text/html' : f.endsWith('.js') ? 'text/javascript' : 'application/octet-stream' }); r.end(d); } }); }).listen(0);
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage({ viewport: { width: 960, height: 600 } });
await page.goto(`http://localhost:${srv.address().port}/`);
await page.waitForFunction(() => window.S200);
const t0 = Date.now();
await page.click('#sp-tut');
const tr = [];
for (let i = 0; i < 120; i++) {
  const s = await page.evaluate(() => ({ r: S200.ui.tut.running(), sp: !!document.querySelector('#splash.on'), n: document.querySelector('#tut-n').textContent }));
  tr.push(`${Date.now() - t0}ms r=${s.r} splash=${s.sp} n=${s.n}`);
  if (s.r && !s.sp) break;
  await page.waitForTimeout(250);
}
console.log(tr.filter((x, i) => i < 3 || i > tr.length - 4).join('\n'));
await browser.close(); srv.close();
