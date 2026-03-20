"""Extract embedded images from PDF; skip very small assets (icons)."""
import os
import fitz

PDF = r"c:\Users\shams\Downloads\2022-2025 Ervin Vartoomian Portfolio.pdf"
OUT = r"c:\Users\shams\Documents\Client Websites\evdesignstudio\public\portfolio"

MIN_AREA = 80_000  # skip tiny UI bits (tune if needed)

os.makedirs(OUT, exist_ok=True)
doc = fitz.open(PDF)
manifest = []

for page_idx in range(doc.page_count):
    page = doc[page_idx]
    imgs = page.get_images(full=True)
    for img_idx, info in enumerate(imgs):
        xref = info[0]
        try:
            base = doc.extract_image(xref)
        except Exception as e:
            print("skip xref", xref, e)
            continue
        w, h = base["width"], base["height"]
        area = w * h
        if area < MIN_AREA:
            continue
        ext = base["ext"]
        name = f"p{page_idx + 1:02d}_img{img_idx + 1:02d}_{w}x{h}.{ext}"
        path = os.path.join(OUT, name)
        with open(path, "wb") as f:
            f.write(base["image"])
        manifest.append((area, name, page_idx + 1, w, h))

manifest.sort(reverse=True)
print(f"Extracted {len(manifest)} images (area >= {MIN_AREA}) to {OUT}\n")
print("Top 40 by area:")
for row in manifest[:40]:
    print(row)

# Also dump page text snippets for pages with few images (title pages)
print("\n--- Page text (first 200 chars) for navigation ---")
for i in range(doc.page_count):
    t = doc[i].get_text().strip().replace("\n", " ")[:200]
    if t:
        print(f"p{i+1}: {t}")
