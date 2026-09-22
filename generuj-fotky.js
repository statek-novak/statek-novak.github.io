const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DIR = 'img';
const EXT = /\.(jpe?g|png|webp|gif)$/i;

const files = fs.existsSync(DIR) ? fs.readdirSync(DIR).filter(f => EXT.test(f)) : [];

const dated = files.map(f => {
  let ts = 0;
  try {
    const out = execSync(`git log -1 --diff-filter=A --format=%ct -- "${path.join(DIR, f)}"`,
      { encoding: 'utf8', stdio: ['ignore','pipe','ignore'] }).trim();
    ts = out ? Number(out) * 1000 : 0;
  } catch {}
  if (!ts) ts = fs.statSync(path.join(DIR, f)).mtimeMs;
  return { soubor: f, ts };
});

dated.sort((a, b) => b.ts - a.ts || a.soubor.localeCompare(b.soubor, 'cs'));

const popis = f => {
  const base = f.replace(EXT, '').replace(/[-_]+/g, ' ').trim();
  return base.charAt(0).toUpperCase() + base.slice(1);
};

const out = dated.map(d => ({ soubor: d.soubor, popis: popis(d.soubor) }));

fs.writeFileSync('fotky.js',
  'window.FOTKY = ' + JSON.stringify(out, null, 2) + ';\n');

console.log(`fotky.js: ${out.length} fotografií`);
