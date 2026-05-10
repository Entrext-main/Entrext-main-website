// One-shot photo compressor for /public/members/**.
// Reads JPG/PNG, writes WebP at max 960px width, then removes the original.
// Run with: node scripts/compress-photos.mjs

import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../public/members");
const MAX_WIDTH = 960;
const QUALITY = 78;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const files = (await walk(root)).filter((f) => /\.(jpe?g|png)$/i.test(f));

let totalIn = 0;
let totalOut = 0;

for (const file of files) {
  const before = (await stat(file)).size;
  const out = file.replace(/\.(jpe?g|png)$/i, ".webp");

  await sharp(file)
    .rotate() // honor EXIF orientation
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 5 })
    .toFile(out);

  const after = (await stat(out)).size;
  totalIn += before;
  totalOut += after;

  if (file !== out) await unlink(file);

  const pct = ((1 - after / before) * 100).toFixed(1);
  console.log(
    `${path.relative(root, file).padEnd(28)} ${(before / 1024).toFixed(0).padStart(6)}KB → ${(after / 1024).toFixed(0).padStart(5)}KB  (-${pct}%)`,
  );
}

console.log(
  `\nTotal: ${(totalIn / 1024 / 1024).toFixed(2)}MB → ${(totalOut / 1024 / 1024).toFixed(2)}MB  (-${(((totalIn - totalOut) / totalIn) * 100).toFixed(1)}%)`,
);
