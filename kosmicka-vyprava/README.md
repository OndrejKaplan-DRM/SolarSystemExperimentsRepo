# Kosmická výprava

Gamifikovaný 3D model Sluneční soustavy v prohlížeči. Nezávislá alternativa k aplikaci NASA Eyes on the Solar System pro děti a nadšence, postavená jako „negativní kontrola“ k projektu Sluneční soustava 200 (bez nahlížení do jeho kódu a dokumentace).

Stav: verze 1.0 ze 14. 11. 2026, 35 těles, bez sond.

## Co umí

- Dva režimy rozhraní: Děti (Kadet) a Dospělí (Navigátor).
- Polohy planet a Pluta z Keplerových elementů JPL, natočení Země podle času, fáze Měsíce.
- Přehledné a skutečné měřítko s plynulým přechodem, čas od skutečného po 10 let za sekundu.
- Vesmírný pas s razítky, body a hodnosti, 14 misí pro každý režim, kvíz.
- Laboratoř: porovnání velikostí ve 3D, váha a věk na jiných světech, doba cesty ze Země.

## Struktura

| Cesta | Obsah |
| --- | --- |
| `index.html` | stránka, veškeré CSS |
| `src/main.js` | engine, scéna, UI, herní logika |
| `src/data.js` | tělesa, texty, mise, kvíz, zdroje |
| `app.js` | sestavený balík (three.js + `src/`), commitnutý, aby šla stránka otevřít bez buildu |
| `tex/` | textury (JPG, jeden PNG prstence) |
| `icon/` | ikona hry: `icon.svg` a PNG 512, 192, 64, 32 px |
| `tests/` | kouřové testy v Playwrightu (Python, softwarové WebGL) |

## Spuštění a build

```
npm install
npm run build      # src/ -> app.js
npm run serve      # http://localhost:8765
```

Stránka načítá textury relativní cestou, proto potřebuje HTTP server; přes `file://` se nenačtou.

Testy: `python3 tests/smoke_desktop.py` (vyžaduje `playwright` s Chromiem). Snímky ukládají do aktuálního adresáře. `tests/check_positions.py` vypíše heliocentrické délky planet pro 14. 11. 2026 12:00 UT.

## Přesnost

- Planety a Pluto: střední elementy JPL (Standish), platné 1800–2050.
- Ceres, Haumea, Makemake, Eris, Halleyova kometa: přibližné dráhy.
- Měsíce ostatních planet: kruhové dráhy se správnou periodou a směrem, okamžitá poloha ilustrační.
- Textury Haumey, Makemake a Eris jsou umělecké představy.

## Zdroje a licence podkladů

- Textury planet, Měsíce, Slunce a Mléčné dráhy: Solar System Scope, CC BY 4.0, https://www.solarsystemscope.com/textures/
- Textury měsíců, Ceres, Pluta a Charonu: projekt Stellarium (Oleg Pluton / Helleformer, Kexitt, Snowfall, FarGetaNik, Magenta Meteorite, CC BY 4.0; Callisto John van Vliet a RVS, CC BY-SA; Dione a Enceladus NASA/CICLOPS; Triton a Phobos NASA/JPL), https://github.com/Stellarium/stellarium
- Dráhové elementy: JPL Solar System Dynamics, https://ssd.jpl.nasa.gov/planets/approx_pos.html
- three.js, licence MIT.

Textury jsou zmenšené a překomprimované. Licence vlastního kódu zatím není určena.
