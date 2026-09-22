import sys, pymupdf

src = sys.argv[1] if len(sys.argv) > 1 else "publicita/publicita-emise-zv-2025.pdf"
dst = sys.argv[2] if len(sys.argv) > 2 else "publicita/publicita-emise-zv-2025.jpg"

doc = pymupdf.open(src)
page = doc[0]
pix = page.get_pixmap(dpi=110)
pix.save(dst, jpg_quality=88)
print(f"{dst}  {pix.width}x{pix.height}")
