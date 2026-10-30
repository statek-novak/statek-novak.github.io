const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const FOTO = /\.(jpe?g|png|webp|gif|avif|svg|bmp)$/i;
const PREVOD = /\.(pdf|heic|heif)$/i;
const VIDEO = /\.(mp4|webm|mov|m4v)$/i;

const typ = f => /\.pdf$/i.test(f) ? 'pdf' : VIDEO.test(f) ? 'video' : 'foto';

const popis = f => {
  let base = path.parse(f).name.normalize('NFC')
    .replace(/_+/g, ' ').replace(/(\S)-(?=\S)/g, '$1 ').replace(/\s+/g, ' ').trim();
  base = base.replace(/^stroj\s*(\d+)$/i, 'Stroj $1');
  return base.charAt(0).toUpperCase() + base.slice(1);
};

const seznam = dir => {
  const files = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter(f => FOTO.test(f) || PREVOD.test(f) || VIDEO.test(f)) : [];
  const dated = files.map(f => {
    let ts = 0;
    try {
      const out = execFileSync('git', ['log', '-1', '--diff-filter=A', '--format=%ct', '--', path.join(dir, f)],
        { encoding: 'utf8', stdio: ['ignore','pipe','ignore'] }).trim();
      ts = out ? Number(out) * 1000 : 0;
    } catch {}
    if (!ts) ts = fs.statSync(path.join(dir, f)).mtimeMs;
    return { soubor: f, ts };
  });
  dated.sort((a, b) => b.ts - a.ts || a.soubor.localeCompare(b.soubor, 'cs'));
  return dated.map(({ soubor }) => ({
    soubor: dir + '/' + soubor,
    nahled: PREVOD.test(soubor) ? dir + '/nahledy/' + soubor + '.jpg' : dir + '/' + soubor,
    popis: popis(soubor),
    typ: typ(soubor)
  }));
};

const fotky = seznam('img');
const publicita = seznam('publicita');

fs.writeFileSync('fotky.js',
  'window.FOTKY = ' + JSON.stringify(fotky, null, 2) + ';\n');
fs.writeFileSync('publicita.js',
  'window.PUBLICITA = ' + JSON.stringify(publicita, null, 2) + ';\n');

console.log(`fotky.js: ${fotky.length} souborů, publicita.js: ${publicita.length} souborů`);
