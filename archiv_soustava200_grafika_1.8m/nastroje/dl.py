# robustní stahování po částech (Range) s obnovou; použití: python3 dl.py URL OUT [částí]
import sys, os, subprocess, concurrent.futures as cf
url, out = sys.argv[1], sys.argv[2]; N = int(sys.argv[3]) if len(sys.argv) > 3 else 6
size = int([l for l in subprocess.run(['curl','-sSIL',url],capture_output=True,text=True).stdout.splitlines() if l.lower().startswith('content-length')][-1].split(':')[1])
P = (size + N - 1) // N
def part(i):
    a, b = i * P, min(size, (i + 1) * P) - 1; fn = f'{out}.p{i}'
    for _ in range(30):
        have = os.path.getsize(fn) if os.path.exists(fn) else 0
        if have >= b - a + 1: return
        subprocess.run(['curl','-sS','-m','1800','-r',f'{a+have}-{b}',url],stdout=open(fn,'ab'))
    raise SystemExit('selhalo ' + fn)
with cf.ThreadPoolExecutor(N) as ex: list(ex.map(part, range(N)))
with open(out, 'wb') as o:
    for i in range(N):
        with open(f'{out}.p{i}','rb') as f:
            while True:
                c = f.read(1 << 24)
                if not c: break
                o.write(c)
        os.remove(f'{out}.p{i}')
assert os.path.getsize(out) == size, (os.path.getsize(out), size)
print(out, size)
