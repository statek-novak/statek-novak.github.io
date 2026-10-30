# Statek Novák Jarpice - Kamenice

Web: **https://statek-novak.github.io**

---

# Jak přidat fotku nebo PDF na web

Fotky, PDF i krátká videa se dají nahrát do obou záložek:

- složka **img** = záložka **Fotogalerie**
- složka **publicita** = záložka **Publicita**

Web umí zobrazit:

- **fotky:** JPG, PNG, WebP, GIF, AVIF, SVG, BMP a fotky z iPhonu (HEIC)
- **PDF:** web sám vytvoří náhled první stránky
- **videa:** MP4, WebM, MOV

Jiné soubory (např. Word nebo Excel) se na webu nezobrazí.

## 1. Nejdřív soubor přejmenovat

Název souboru se zobrazí jako popisek pod fotkou na webu.
Přejmenovat je potřeba **v počítači předem**, ne až na GitHubu.

Mezery a pomlčky nevadí. Háčky a čárky raději vynechat.

| Název souboru | Popisek na webu |
|---|---|
| `stroj4.jpg` | Stroj 4 |
| `sklizen-2026.jpg` | Sklizen 2026 |
| `mlekomat vrata.jpg` | Mlekomat vrata |
| `Palecek - kanaly a jimka.jpg` | Palecek - kanaly a jimka |

## 2. Nahrát soubor

1. Otevřít https://github.com/statek-novak/statek-novak.github.io
2. Přihlásit se (jméno `statek-novak`).
3. Kliknout na složku **img** (Fotogalerie) nebo **publicita** (Publicita).
4. Vpravo nahoře **Add file** → **Upload files**.
5. Přetáhnout soubory myší do okna prohlížeče.
6. Sjet dolů a kliknout na zelené tlačítko **Commit changes**.

Najednou se dá přetáhnout i víc souborů. Jeden soubor může mít nejvýš 25 MB.

## 3. Zkontrolovat, že se soubor zobrazil

Počkat asi dvě minuty, pak otevřít **https://statek-novak.github.io**
a kliknout na záložku **Fotogalerie** nebo **Publicita**.

Nový soubor je vždy úplně nahoře. PDF a videa mají u popisku značku **PDF** nebo **VIDEO**.

Pokud tam ještě není, obnovit stránku klávesami **Ctrl + F5** a chvíli počkat.
Web se needituje ručně, aktualizuje se sám.

## Smazání nebo výměna

- **Smazání:** ve složce kliknout na soubor → ikona koše vpravo nahoře → dole **Commit changes**.
  U PDF a fotek z iPhonu zmizí sám i jejich náhled.
- **Výměna:** nahrát nový soubor se stejným názvem.

Složku **nahledy** vytváří web sám, nic v ní neměnit.

---

# O webu

Web má tři záložky:

- **Úvod** - popis firmy, telefony, adresy
- **Fotogalerie** - fotky, PDF a videa, po kliknutí se otevřou v plné velikosti
- **Publicita** - plakáty, fotky, PDF a videa k projektům spolufinancovaným EU

Stránka funguje na mobilu i na počítači a sama se přizpůsobí
světlému nebo tmavému režimu.

Web je zdarma, hostovaný na GitHub Pages. Nic se neplatí a nic nevyprší.

### Změna textu, telefonů nebo adres

Kliknout na soubor `index.html` → ikona tužky vpravo nahoře →
upravit → dole **Commit changes**.

### Vlastní doména

Web může později běžet na placené adrese (např. `www.stateknovak.cz`).
Je to nastavení v **Settings → Pages**, stránka se kvůli tomu nemusí předělávat.

---

# Seznam souborů

| Soubor | K čemu je |
|---|---|
| `index.html` | Celá stránka - text, vzhled, záložky |
| `img/` | Soubory do Fotogalerie (sem se nahrávají nové) |
| `publicita/` | Soubory do Publicity (sem se nahrávají nové) |
| `img/nahledy/`, `publicita/nahledy/` | Náhledy PDF a fotek z iPhonu, vytváří se samy - needitovat |
| `fotky.js` | Seznam Fotogalerie, vytváří se sám - needitovat |
| `publicita.js` | Seznam Publicity, vytváří se sám - needitovat |
| `generuj-seznamy.js` | Program, který oba seznamy vytváří |
| `prevod-nahledy.py` | Vytváří náhledy z PDF a fotek z iPhonu |
| `.github/workflows/fotky.yml` | Spouští obnovu seznamů po nahrání souboru |

Soubory se řadí podle data nahrání, nejnovější nahoře.
