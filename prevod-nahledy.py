import os, subprocess, pymupdf
from PIL import Image, ImageOps
from pillow_heif import register_heif_opener

register_heif_opener()

DIRS = ["img", "publicita"]
PREVOD = (".pdf", ".heic", ".heif")


def zmeneno(path):
    out = subprocess.run(["git", "log", "-1", "--format=%ct", "--", path],
                         capture_output=True, text=True).stdout.strip()
    return int(out) if out else int(os.path.getmtime(path))


def nahled(src, dst):
    if src.lower().endswith(".pdf"):
        pix = pymupdf.open(src)[0].get_pixmap(dpi=110)
        pix.save(dst, jpg_quality=88)
        return pix.width, pix.height
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    im.thumbnail((2048, 2048))
    im.save(dst, quality=88)
    return im.size


for d in DIRS:
    if not os.path.isdir(d):
        continue
    nahledy = os.path.join(d, "nahledy")
    zdroje = [f for f in os.listdir(d) if f.lower().endswith(PREVOD)]

    for f in zdroje:
        src, dst = os.path.join(d, f), os.path.join(nahledy, f + ".jpg")
        if os.path.exists(dst) and zmeneno(src) <= zmeneno(dst):
            continue
        os.makedirs(nahledy, exist_ok=True)
        w, h = nahled(src, dst)
        print(f"{dst}  {w}x{h}")

    # Previews live apart from uploads, so only this folder is ever cleaned up.
    if os.path.isdir(nahledy):
        for f in os.listdir(nahledy):
            if f[:-4] not in zdroje:
                os.remove(os.path.join(nahledy, f))
                print(f"smazano {nahledy}/{f}")
