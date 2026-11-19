# kontaktní arch: pro každé těleso dlaždice s nejvíce detaily (největší soubor) – výřez L1 (zvětšená) vs L2, 1:1 v pixelech L2
import os, json, sys, numpy as np
from PIL import Image, ImageDraw
Image.MAX_IMAGE_PIXELS = None
root = '/home/claude/slunecnisoustava2026/dist/maps'
man = json.load(open('/home/claude/slunecnisoustava2026/src/data/l2.json'))
ids = sys.argv[1].split(',') if len(sys.argv) > 1 else list(man)
out = sys.argv[2] if len(sys.argv) > 2 else '/tmp/sheet.jpg'
C = 360
rows = []
stats = []
for bid in ids:
    gw, gh = man[bid]; d = f'{root}/l2/{bid}'
    fs = sorted(os.listdir(d), key=lambda f: -os.path.getsize(f'{d}/{f}'))
    f = fs[min(len(fs) - 1, len(fs) // 6)]  # ne úplně nejextrémnější, ale z horní šestiny
    ty, tx = map(int, f[:-5].split('-'))
    t = Image.open(f'{d}/{f}').convert('RGB').crop((1, 1, 1025, 1025))
    L1 = Image.open(f'{root}/hi/{bid}.webp').convert('RGB'); W1 = L1.size[0]; k = gw * 1024 / W1
    x0 = tx * 1024 + 512 - C // 2; y0 = ty * 1024 + 512 - C // 2
    c2 = t.crop((512 - C // 2, 512 - C // 2, 512 + C // 2, 512 + C // 2))
    c1 = L1.crop((x0 / k, y0 / k, (x0 + C) / k, (y0 + C) / k)).resize((C, C), Image.BILINEAR)
    a1 = np.asarray(c1, np.float32).mean(2); a2 = np.asarray(c2, np.float32).mean(2)
    hf = float(np.sqrt(((a2 - a1) ** 2).mean()))
    tot = sum(os.path.getsize(f'{d}/{x}') for x in fs) / 1048576
    stats.append((bid, gw * 1024, hf, tot))
    row = Image.new('RGB', (C * 2 + 8, C + 18), (15, 15, 15)); row.paste(c1, (0, 18)); row.paste(c2, (C + 8, 18))
    dr = ImageDraw.Draw(row); dr.text((4, 3), f'{bid}  L1 {W1}', fill=(255, 255, 255)); dr.text((C + 12, 3), f'L2 {gw*1024}  +detail {hf:.1f}  {tot:.1f} MB', fill=(255, 220, 90))
    rows.append(row)
n = len(rows); cols = 2; R = (n + cols - 1) // cols
sh = Image.new('RGB', (cols * (C * 2 + 8) + (cols - 1) * 12, R * (C + 18) + (R - 1) * 8), (0, 0, 0))
for i, r in enumerate(rows): sh.paste(r, ((i % cols) * (C * 2 + 20), (i // cols) * (C + 26)))
sh.save(out, quality=86)
for s in sorted(stats, key=lambda s: -s[2]): print(f'{s[0]:10s} {s[1]:6d}  detail {s[2]:5.1f}  {s[3]:5.1f} MB')
