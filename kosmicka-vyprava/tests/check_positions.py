import asyncio, os, sys, subprocess, time
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
from playwright.async_api import async_playwright
srv = subprocess.Popen([sys.executable,'-m','http.server','8765','--directory',ROOT],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
time.sleep(1)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'])
        pg = await b.new_page(viewport={'width':1440,'height':860})
        logs=[]
        pg.on('console', lambda m: logs.append(m.type+': '+m.text) if m.type=='error' else None)
        pg.on('pageerror', lambda e: logs.append('PAGEERR: '+str(e)))
        await pg.goto('http://localhost:8765/index.html')
        await pg.wait_for_timeout(4000)
        await pg.click('[data-start="pro"]')
        await pg.evaluate("__app.time.jd=2461359.0; __app.time.paused=true")
        await pg.wait_for_timeout(600)
        print(await pg.evaluate("""(()=>{const B=__app.B,o={};for(const k of ['mercury','venus','earth','mars','jupiter','saturn','uranus','neptune','pluto','ceres','halley']){const h=B[k].h;o[k]=[((Math.atan2(-h[2],h[0])*180/Math.PI+360)%360).toFixed(1),B[k].r.toFixed(3)]}
          const m=B.moon,e=B.earth;o.moonGeoLon=((Math.atan2(-(m.p[2]-e.p[2]),m.p[0]-e.p[0])*180/Math.PI+360)%360).toFixed(1);return JSON.stringify(o)})()"""))
        await pg.evaluate("__app.time.paused=false; __app.flyTo(__app.B.earth)")
        await pg.wait_for_timeout(5000)
        await pg.screenshot(path='v1_pro_earth.png')
        await pg.evaluate("__app.time.jd=2474000.5; __app.time.paused=true; __app.flyTo(__app.B.halley)")
        await pg.wait_for_timeout(4500)
        await pg.screenshot(path='v2_halley.png')
        await pg.click('[data-mode="kid"]')
        await pg.evaluate("__app.flyTo(__app.B.titan)")
        await pg.wait_for_timeout(5200)
        await pg.screenshot(path='v3_titan.png')
        print('\n'.join(logs[:20]))
        await b.close()
asyncio.run(main()); srv.terminate()
