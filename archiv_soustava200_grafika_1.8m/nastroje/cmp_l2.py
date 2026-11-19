# porovnání L1 (zvětšená) × L2 (dlaždice) na výřezu kolem bodu (lat, lon); výstup PNG
import sys, os, json, numpy as np
from PIL import Image, ImageDraw
Image.MAX_IMAGE_PIXELS = None
root = '/home/claude/slunecnisoustava2026/dist/maps'
bid, lat, lon, out = sys.argv[1], float(sys.argv[2]), float(sys.argv[3]), sys.argv[4]
win = int(sys.argv[5]) if len(sys.argv) > 5 else 600
man = json.load(open('/home/claude/slunecnisoustava2026/src/data/l2.json'))
gw, gh = man[bid]; W2, H2 = gw * 1024, gh * 1024
cx = int((lon + 180) / 360 * W2); cy = int((90 - lat) / 180 * H2)
x0, y0 = cx - win // 2, max(0, cy - win // 2)
reg = np.zeros((win, win, 3), np.uint8)
for yy in range(win):
    pass
tiles = {}
def tile(ty, tx):
    k = (ty, tx)
    if k not in tiles: tiles[k] = np.asarray(Image.open(f'{root}/l2/{bid}/{ty}-{tx % gw}.webp').convert('RGB'))
    return tiles[k]
for ty in range(y0 // 1024, (y0 + win - 1) // 1024 + 1):
    for tx in range((x0) // 1024, (x0 + win - 1) // 1024 + 1):
        t = tile(ty, tx)[1:1025, 1:1025]
        ax0, ay0 = tx * 1024, ty * 1024
        sx0, sy0 = max(x0, ax0), max(y0, ay0); sx1, sy1 = min(x0 + win, ax0 + 1024), min(y0 + win, ay0 + 1024)
        if sx1 > sx0 and sy1 > sy0:
            reg[sy0 - y0:sy1 - y0, sx0 - x0:sx1 - x0] = t[sy0 - ay0:sy1 - ay0, sx0 - ax0:sx1 - ax0]
L1 = Image.open(f'{root}/hi/{bid}.webp').convert('RGB'); W1 = L1.size[0]; k = W2 / W1
c1 = L1.crop((x0 / k, y0 / k, (x0 + win) / k, (y0 + win) / k)).resize((win, win), Image.BILINEAR)
im = Image.new('RGB', (win * 2 + 10, win + 24), (20, 20, 20)); im.paste(c1, (0, 24)); im.paste(Image.fromarray(reg), (win + 10, 24))
d = ImageDraw.Draw(im); d.text((6, 5), f'{bid} L1 {W1} px (dnes)', fill=(255, 255, 255)); d.text((win + 16, 5), f'L2 {W2} px (novinka)', fill=(255, 255, 255))
im.save(out); print(out)
