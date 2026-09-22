# Statek Novák Jarpice - Kamenice

Statický web. Žádný build, žádné závislosti.

- `index.html` - celá stránka, tři záložky
- `img/` - fotografie galerie
- `fotky.js` - seznam fotek, generovaný automaticky
- `generuj-fotky.js` - generátor seznamu
- `publicita/` - plakát publicity EU (PDF + JPG)
- `NAVOD.md` - návod na přidání fotky pro uživatele

Nahrání fotky do `img/` spustí workflow, který přegeneruje `fotky.js`
a commitne ho. Seznam se řadí podle data prvního commitu souboru, nejnovější první.

Lokální náhled: `python -m http.server 8000`
