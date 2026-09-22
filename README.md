# Statek Novák Jarpice - Kamenice

Web: **https://statek-novak.github.io**

---

# Jak přidat fotku na web

## 1. Nejdřív fotku přejmenovat

Název souboru se zobrazí jako popisek pod fotkou na webu.
Přejmenovat je potřeba **v počítači předem**, ne až na GitHubu.

Používat jen písmena bez háčků a čárek, číslice a pomlčky.

| Název souboru | Popisek na webu |
|---|---|
| `stroj4.jpg` | Stroj 4 |
| `sklizen-2026.jpg` | Sklizen 2026 |
| `novy-traktor.jpg` | Novy traktor |

Háčky, čárky a mezery v názvu můžou fotku na webu rozbít.

## 2. Nahrát fotku

1. Otevřít https://github.com/statek-novak/statek-novak.github.io
2. Přihlásit se (jméno `statek-novak`).
3. Kliknout na složku **img**.
4. Vpravo nahoře **Add file** → **Upload files**.
5. Přetáhnout fotku myší do okna prohlížeče.
6. Sjet dolů a kliknout na zelené tlačítko **Commit changes**.

Najednou se dá přetáhnout i víc fotek.

## 3. Zkontrolovat, že se fotka zobrazila

Počkat asi minutu, pak otevřít **https://statek-novak.github.io**
a kliknout na záložku **Fotogalerie**.

Nová fotka je vždy úplně nahoře.

Pokud tam ještě není, obnovit stránku klávesami **Ctrl + F5** a chvíli počkat.
Web se needituje ručně, aktualizuje se sám.

## Smazání fotky

Ve složce **img** kliknout na fotku → ikona koše vpravo nahoře →
dole **Commit changes**.

---

# O webu

Web má tři záložky:

- **Úvod** - popis firmy, telefony, adresy
- **Fotogalerie** - fotky strojů, po kliknutí se zvětší
- **Publicita** - plakát projektu EU, pod ním odkaz na původní PDF

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
| `img/` | Fotky do galerie (sem se nahrávají nové) |
| `publicita/` | Plakát publicity EU (PDF a JPG) |
| `fotky.js` | Seznam fotek, vytváří se sám - needitovat |
| `generuj-fotky.js` | Program, který ten seznam vytváří |
| `prevod-pdf.py` | Převod PDF plakátu na obrázek |
| `.github/workflows/fotky.yml` | Spouští obnovu seznamu po nahrání fotky |

Fotky se řadí podle data nahrání, nejnovější nahoře.
