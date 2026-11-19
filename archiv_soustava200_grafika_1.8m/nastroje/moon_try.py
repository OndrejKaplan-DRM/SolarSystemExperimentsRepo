import numpy as np
from PIL import Image, ImageDraw, ImageFont
W=np.memmap('/tmp/w/moon_wac32.raw',np.uint8,'r',shape=(16384,32768))
S=np.memmap('/tmp/w/moon_svs16.raw',np.uint8,'r',shape=(8192,16384,3))
def box(a,k):
    h,w=a.shape[:2]; return a.reshape(h//k,k,w//k,k,*a.shape[2:]).mean((1,3))
def up2(a):  # bilinear 2x like GPU
    h,w=a.shape[:2]
    ys=(np.arange(2*h)+0.5)/2-0.5; xs=(np.arange(2*w)+0.5)/2-0.5
    i0=np.clip(np.floor(ys).astype(int),0,h-1); i1=np.clip(i0+1,0,h-1); fy=np.clip(ys-np.floor(ys),0,1)[:,None,None]
    j0=np.clip(np.floor(xs).astype(int),0,w-1); j1=np.clip(j0+1,0,w-1); fx=(xs-np.floor(xs))[None,:,None]
    a=a.reshape(h,w,-1)
    r=(a[i0][:,j0]*(1-fx)+a[i0][:,j1]*fx)*(1-fy)+(a[i1][:,j0]*(1-fx)+a[i1][:,j1]*fx)*fy
    return r
font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',18)
rows=[]
for (yy,xx,nm) in [(6600,15800,'rovník/moře'),(4200,6000,'vysočiny 40°S? '),(9800,26000,'')]:
    yy-=yy%2; xx-=xx%2; n=512
    w=W[yy:yy+n, xx:xx+n].astype(np.float32)
    s=S[yy//2-1:yy//2+n//2+1, xx//2-1:xx//2+n//2+1].astype(np.float32)
    su=up2(s)[2:-2,2:-2]
    wl=up2(box(W[yy-2:yy+n+2, xx-2:xx+n+2].astype(np.float32),2)[...,None])[2:-2,2:-2,0]
    tiles=[su]
    for g in (0.3,0.6,1.0):
        r=((w+6)/(wl+6))**g
        tiles.append(su*np.clip(r,0.25,4)[...,None])
    tiles.append(np.repeat(w[...,None],3,2))
    rows.append(np.concatenate([np.clip(t,0,255) for t in tiles],1))
im=Image.fromarray(np.concatenate(rows,0).astype(np.uint8))
d=ImageDraw.Draw(im)
for i,t in enumerate(['SVS 16k zvětšená','γ 0,3','γ 0,6','γ 1,0','WAC 100 m (zdroj)']): d.text((8+512*i,6),t,fill=(255,255,0),font=font)
im.save('/home/claude/tmp/moon_try.jpg',quality=88); print(im.size)
