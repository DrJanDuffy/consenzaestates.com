/**
 * Check that headshot images exist and are valid size (not placeholders).
 * Run: node scripts/check-headshots.cjs
 * Min size: 10KB (real JPEGs are usually 50KB+).
 */
const fs = require('fs');
const path = require('path');

const headshotsDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'headshots');
const minBytes = 10 * 1024; // 10KB
const names = ['jan-duffy-1.jpg', 'jan-duffy-2.jpg', 'jan-duffy-3.jpg', 'jan-duffy-4.jpg', 'jan-duffy-5.jpg', 'jan-duffy-6.jpg'];

let failed = false;
for (const name of names) {
  const filePath = path.join(headshotsDir, name);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing: ${name}`);
    failed = true;
    continue;
  }
  const stat = fs.statSync(filePath);
  if (stat.size < minBytes) {
    console.error(`${name}: too small (${stat.size} bytes). Replace with a real JPEG (typically 50KB+).`);
    failed = true;
  }
}
if (failed) {
  console.error('\nHeadshots will show as broken images until real JPEG files are in public/assets/images/headshots/');
  process.exit(1);
}
console.log('Headshots OK (all 6 files present and size >= 10KB).');
