import os, subprocess, pymupdf

DIR = "publicita"


def zmeneno(path):
    out = subprocess.run(["git", "log", "-1", "--format=%ct", "--", path],
                         capture_output=True, text=True).stdout.strip()
    return int(out) if out else int(os.path.getmtime(path))


soubory = os.listdir(DIR)
pdfka = {os.path.splitext(f)[0]: f for f in soubory if f.lower().endswith(".pdf")}

for base, pdf in pdfka.items():
    src, dst = os.path.join(DIR, pdf), os.path.join(DIR, base + ".jpg")
    if os.path.exists(dst) and zmeneno(src) <= zmeneno(dst):
        continue
    pix = pymupdf.open(src)[0].get_pixmap(dpi=110)
    pix.save(dst, jpg_quality=88)
    print(f"{dst}  {pix.width}x{pix.height}")

# Previews are generated, so one whose PDF was deleted goes too.
for f in soubory:
    base, ext = os.path.splitext(f)
    if ext.lower() == ".jpg" and base not in pdfka:
        os.remove(os.path.join(DIR, f))
        print(f"smazano {f}")
