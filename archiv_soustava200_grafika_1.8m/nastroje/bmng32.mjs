// Země 32k: 8 dlaždic NASA Blue Marble NG (500 m, 21600²) → každá 8192² → jedna surová mapa 32768 × 16384 × 3
import fs from 'fs';
import { createRequire } from 'module';
const sharp = createRequire('/home/claude/slunecnisoustava2026/package.json')('sharp');
const [dir, out] = process.argv.slice(2);
const S = 8192, W = 4 * S, H = 2 * S;
sharp.cache(false);
const fd = fs.openSync(out, 'w');
fs.ftruncateSync(fd, W * H * 3);
for (const [ci, L] of ['A', 'B', 'C', 'D'].entries())
  for (const ri of [0, 1]) {
    const f = `${dir}/${L}${ri + 1}.jpg`;
    const t0 = Date.now();
    const { data, info } = await sharp(f, { limitInputPixels: false, sequentialRead: true })
      .resize(S, S, { fit: 'fill', kernel: 'lanczos3' }).removeAlpha().toColourspace('srgb')
      .raw().toBuffer({ resolveWithObject: true });
    if (info.width !== S || info.height !== S || info.channels !== 3) throw new Error('rozměr ' + JSON.stringify(info));
    for (let y = 0; y < S; y++) fs.writeSync(fd, data, y * S * 3, S * 3, ((ri * S + y) * W + ci * S) * 3);
    console.log(f, 'hotovo', Date.now() - t0, 'ms');
  }
fs.closeSync(fd);
fs.writeFileSync(out + '.json', JSON.stringify({ w: W, h: H, c: 3, src: 'NASA BMNG world.topo.200407.3x21600x21600 A1..D2 (500 m)' }));
console.log('ok', out);
