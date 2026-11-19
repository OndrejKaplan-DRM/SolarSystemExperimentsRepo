import numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter as gf
Image.MAX_IMAGE_PIXELS=None
Hm=np.load('/tmp/w/moon_h5760.npy'); W=5760; H=2880
R=1737400.0; dx=2*np.pi*R/W
sE=(np.roll(Hm,-1,1)-np.roll(Hm,1,1))/(2*dx); Hp=np.pad(Hm,((1,1),(0,0)),mode='edge'); sN=(Hp[:-2]-Hp[2:])/(2*dx)
w=np.memmap('/tmp/w/moon_wac32.raw',np.uint8,'r',shape=(16384,32768))
wl=np.asarray(Image.fromarray(np.asarray(w)).resize((W,H),Image.BOX),np.float32)
lw=np.log(wl+6); hp=lw-gf(lw,8,mode=('nearest','wrap'))
sl=slice(H//6,5*H//6)
def corr(a,b): a=a-a.mean(); b=b-b.mean(); return float((a*b).sum()/np.sqrt((a*a).sum()*(b*b).sum()))
print('corr WAC_hp vs -sE (osvit od východu):', corr(hp[sl],-sE[sl]), ' vs sE:', corr(hp[sl],sE[sl]), ' vs -sN (od severu):', corr(hp[sl],-sN[sl]), ' vs sN', corr(hp[sl],sN[sl]))
best=None
for sh in range(-6,7,2):
    c=corr(hp[sl],-np.roll(sE,sh,1)[sl]); print('posun',sh,'px',round(c,3))
