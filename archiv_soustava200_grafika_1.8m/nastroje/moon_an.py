import numpy as np
from scipy.ndimage import gaussian_filter as gf
W=np.memmap('/tmp/w/moon_wac32.raw',np.uint8,'r',shape=(16384,32768))
S=np.memmap('/tmp/w/moon_svs16.raw',np.uint8,'r',shape=(8192,16384,3))
lw=np.array([0.299,0.587,0.114],np.float32)
def box(a,k):
    h,w=a.shape[:2]; return a.reshape(h//k,k,w//k,k,*a.shape[2:]).mean((1,3))
# 4096 luminance for alignment
Wd=np.empty((2048,4096),np.float32); Sd=np.empty((2048,4096),np.float32)
for y in range(0,16384,1024): Wd[y//8:(y+1024)//8]=box(W[y:y+1024].astype(np.float32),8)
for y in range(0,8192,1024): Sd[y//4:(y+1024)//4]=box(S[y:y+1024].astype(np.float32)@lw,4)
print('mean WAC',Wd.mean(),'SVS',Sd.mean(), 'black frac WAC', (Wd<3).mean())
sl=slice(2048//6,5*2048//6)
A=Wd[sl]-Wd[sl].mean(); B=Sd[sl]-Sd[sl].mean()
cc=np.fft.irfft(np.fft.rfft(B,axis=1)*np.conj(np.fft.rfft(A,axis=1)),n=4096,axis=1).sum(0)/np.sqrt((A**2).sum()*(B**2).sum())
k=int(cc.argmax()); print('posun',k,'kor',cc[k], 'cc0',cc[0], 'sorted', np.sort(cc)[-3:])
# row correlation (lat shift)
for dy in [-2,-1,0,1,2]:
    a=np.roll(Wd,dy,0)[sl]; a=a-a.mean()
    print('dy',dy, (a*B).sum()/np.sqrt((a*a).sum()*(B*B).sum()))
# octave std in log, region lat +-50
def oct_std(Y):
    l=np.log(Y+6.0); h,w=l.shape
    lo=box(l,2); up=np.repeat(np.repeat(lo,2,0),2,1)
    return float((l-up).std())
# sample patches: rows around equator band at full res
rs=[]; ss=[]
for yy in [5000,6500,8000,9500,11000]:
    for xx in [2000,9000,16000,23000,30000]:
        w=W[yy:yy+1024, xx:xx+1024].astype(np.float32)
        s=S[yy//2:yy//2+512, xx//2:xx//2+512].astype(np.float32)@lw
        w2=box(w,2)  # at 16k
        rs.append(oct_std(w)); ss.append(oct_std(s)); 
        ss_w16=oct_std(w2)
print('WAC 32k octave std',np.median(rs),' SVS 16k octave std',np.median(ss))
# WAC octave at 16k level for ratio comparison
r16=[]
for yy in [5000,6500,8000,9500,11000]:
    for xx in [2000,9000,16000,23000,30000]:
        w=box(W[yy:yy+1024, xx:xx+1024].astype(np.float32),2); r16.append(oct_std(w))
print('WAC 16k octave std',np.median(r16), ' => gamma(svs16/wac32)', np.median(ss)/np.median(rs), ' decay wac', np.median(rs)/np.median(r16))
