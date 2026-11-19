# Archiv grafiky ze Sluneční soustavy 200, verze 1.8m (19. 11. 2026)

Podklady, které vznikly nebo se stáhly při práci na podrobných mapách těles (sešna „Grafika povrchů a strategie načítání“,
repo `SlunecniSoustava2026`, větev `iterace-21`) a které se do aplikace nedostaly vůbec nebo jen zčásti. Uloženo na
Ondřejovo přání pro jiné projekty. Je to samostatná větev bez společné historie s ostatním obsahem tohoto repa – nic jiného
tu nemění.

Hotové mapy, které aplikace používá (pyramidy dlaždic 8k/16k/32k pro 13 těles, velké mapy 4096 px, noční světla Země,
reliéf Měsíce), jsou v repu `SlunecniSoustava2026` v `dist/maps/` a nástroje k jejich výrobě v `tools/maps/`. Postup a zdroje
popisuje tamní `zdroje/MAPY.md`, licence `CREDITS.md`.

## Měsíc (`mesic/`)
| Soubor | Co to je | Zdroj a licence |
|---|---|---|
| `lroc_wac_morfologie_100m_16384x8192_seda.jpg` | Globální „morfologická“ mozaika LRO WAC zmenšená na 16 384 × 8 192 (667 m/px), šedá. Snímky při šikmém Slunci (od západu) – krátery se stínem. Aplikace z ní bere jen nejjemnější kresbu stupně 32k | USGS Astrogeology, `Lunar_LRO_LROC-WAC_Mosaic_global_100m_June2013.tif` (109 164 × 54 582, 6,0 GB); NASA/GSFC/Arizona State University, volné dílo, „please cite“ |
| `nasa_svs_cgi_moon_kit_barva_16384x8192.jpg` | Barevná mapa (albedo) v původních tónech. Velká mapa aplikace je proti ní zesvětlená; stupně 8k/16k v aplikaci jsou tato mapa převedená na tóny velké mapy | NASA Scientific Visualization Studio 4720, CGI Moon Kit, `lroc_color_poles_16k.tif`; volné dílo NASA |
| `lola_vyska_5760x2880_16bit.png` | Výšková mapa, 16 bitů: výška v metrech = (hodnota − 32 768) · 0,5 nad koulí 1 737,4 km; 5760 × 2880 (1,9 km/px), délka −180…180° (střed obrázku = 0°). Aplikace z ní má jen sklony; celá výška se hodí na 3D model Měsíce | USGS Astrogeology, `Lunar_LRO_LOLA_DEM_Global_128ppd_v04.cub` (2,1 GB, průměr 8 × 8); NASA/GSFC, LOLA Science Team, volné dílo |

## Země (`zeme/`)
| Soubor | Co to je | Zdroj a licence |
|---|---|---|
| `nasa_black_marble_2016_3km_seda_13500x6750.jpg` | Noční světla, originál | NASA Earth Observatory, Black Marble 2016 (`BlackMarble_2016_3km_gray.jpg`, image record 144897); volné dílo NASA |
| `nocni_svetla_8192_q80_nepouzito.webp` | Varianta nočních světel 8192 × 4096 s kvalitou 80 (aplikace má kvalitu 88) | dtto |

## Náhledy (`nahledy/`)
Srovnání před a po ze všech tří kol (Měsíc, Merkur, Alpy, noc nad Evropou, Antarktida, reliéf Měsíce u terminátoru), volba γ
pro Měsíc 32k (0,3 / 0,6 / 1,0) a volba kvality WebP (78 / 66 / 60). Snímky z emulace v Chromiu bez grafické karty.

## Pomocné skripty (`nastroje/`)
Jednorázové skripty, které nejsou v repu aplikace: složení Země 32k z 8 dlaždic Blue Marble (`bmng32.mjs`), rozbor Měsíce SVS × WAC
(`moon_an.py`), zkouška γ (`moon_try.py`), kontrola polohy LOLA proti WAC (`lola_chk.py`), měření startu ukázky (`tutstart.mjs`),
stahování po částech (`dl.py`), srovnávací výřezy a mřížky (`cmp_l2.py`, `sheet.py`). Cesty v nich jsou z pracovního prostředí sešny.
