const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const popis = f => {
  let base = path.parse(f).name.replace(/[-_]+/g, ' ').trim();
  base = base.replace(/^stroj\s*(\d+)$/i, 'Stroj $1');
  return base.charAt(0).toUpperCase() + base.slice(1);
};

const seznam = (dir, ext) => {
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => ext.test(f)) : [];
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
  return dated.map(d => d.soubor);
};

const fotky = seznam('img', /\.(jpe?g|png|webp|gif)$/i)
  .map(f => ({ soubor: f, popis: popis(f) }));

const publicita = seznam('publicita', /\.pdf$/i)
  .map(f => ({ soubor: f, nahled: path.parse(f).name + '.jpg', popis: popis(f) }));

fs.writeFileSync('fotky.js',
  'window.FOTKY = ' + JSON.stringify(fotky, null, 2) + ';\n');
fs.writeFileSync('publicita.js',
  'window.PUBLICITA = ' + JSON.stringify(publicita, null, 2) + ';\n');

console.log(`fotky.js: ${fotky.length} fotografií, publicita.js: ${publicita.length} PDF`);
