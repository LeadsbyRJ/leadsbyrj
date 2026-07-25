"""Crop excess black padding from logo.png so it doesn't render as a black box."""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
src = ROOT / "public" / "logo.png"
# Keep original backup once
backup = ROOT / "public" / "logo-full.png"

im = Image.open(src).convert("RGBA")
print("original", im.size, im.mode)

if not backup.exists():
    im.save(backup)
    print("saved backup", backup)

px = im.load()
w, h = im.size
xs, ys = [], []
# Treat near-black as background; keep any non-black / non-transparent pixels
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if a > 8 and (r > 12 or g > 12 or b > 12):
            xs.append(x)
            ys.append(y)

if not xs:
    raise SystemExit("No content pixels found")

left, top, right, bottom = min(xs), min(ys), max(xs), max(ys)
print("bbox", left, top, right, bottom)
print("content", right - left + 1, bottom - top + 1)

# Small padding around content (keeps glow edges intact)
pad = 24
left = max(0, left - pad)
top = max(0, top - pad)
right = min(w - 1, right + pad)
bottom = min(h - 1, bottom + pad)

cropped = im.crop((left, top, right + 1, bottom + 1))

# Make pure black fully transparent so no rectangular box shows
data = cropped.getdata()
new_data = []
for r, g, b, a in data:
    # Near-black → transparent; preserve greys and neon green
    if r < 10 and g < 10 and b < 10:
        new_data.append((0, 0, 0, 0))
    else:
        new_data.append((r, g, b, a))
cropped.putdata(new_data)

out = ROOT / "public" / "logo.png"
cropped.save(out, optimize=True)
print("saved", out, cropped.size)
