import fitz  # pymupdf

pdf_path = r"c:\Users\shams\Downloads\2022-2025 Ervin Vartoomian Portfolio.pdf"
doc = fitz.open(pdf_path)
print("pages:", doc.page_count)
for i in range(min(doc.page_count, 30)):
    page = doc[i]
    text = page.get_text()[:500].replace("\n", " | ")
    imgs = page.get_images(full=True)
    print(f"--- page {i+1} --- images: {len(imgs)}")
    print(text[:400])
