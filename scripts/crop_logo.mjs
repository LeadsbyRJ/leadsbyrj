import sharp from "sharp";
import { copyFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public", "logo.png");
const backup = join(root, "public", "logo-full.png");

if (!existsSync(backup)) {
  copyFileSync(src, backup);
  console.log("backup saved", backup);
}

const image = sharp(src).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
console.log("original", width, height, channels);

let minX = width,
  minY = height,
  maxX = 0,
  maxY = 0;
let found = false;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = channels > 3 ? data[i + 3] : 255;
    if (a > 8 && (r > 12 || g > 12 || b > 12)) {
      found = true;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }
}

if (!found) {
  throw new Error("No content pixels found");
}

const pad = 24;
const left = Math.max(0, minX - pad);
const top = Math.max(0, minY - pad);
const right = Math.min(width - 1, maxX + pad);
const bottom = Math.min(height - 1, maxY + pad);
const cropW = right - left + 1;
const cropH = bottom - top + 1;

console.log("bbox", minX, minY, maxX, maxY);
console.log("crop", left, top, cropW, cropH);

// Extract crop, then make near-black transparent
const { data: cropData, info: cropInfo } = await sharp(src)
  .ensureAlpha()
  .extract({ left, top, width: cropW, height: cropH })
  .raw()
  .toBuffer({ resolveWithObject: true });

const out = Buffer.from(cropData);
const c = cropInfo.channels;
for (let i = 0; i < out.length; i += c) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  if (r < 10 && g < 10 && b < 10) {
    out[i] = 0;
    out[i + 1] = 0;
    out[i + 2] = 0;
    out[i + 3] = 0;
  }
}

await sharp(out, {
  raw: { width: cropW, height: cropH, channels: 4 },
})
  .png()
  .toFile(src);

console.log("saved", src, cropW, "x", cropH);
