import os
import re

portfolio_images = [
    "/assets/img/portfolio/1.png",
    "/assets/img/portfolio/2.png",
    "/assets/img/portfolio/3.png",
    "/assets/img/portfolio/4.png",
    "/assets/img/portfolio/co1.png",
    "/assets/img/portfolio/co2.png",
    "/assets/img/portfolio/dr1.png",
    "/assets/img/portfolio/dr2.png",
    "/assets/img/portfolio/01.png",
    "/assets/img/portfolio/10.png",
]

def process_file(file_path):
    global img_idx
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    changed = False
    if "/proje/" in content:
        # Replace src="/proje/..."
        def repl_src(match):
            global img_idx
            new_img = portfolio_images[img_idx % len(portfolio_images)]
            img_idx += 1
            return 'src="' + new_img + '"'
            
        new_content = re.sub(r'src="/proje/[^"]+"', repl_src, content)
        
        # Replace icon: '/proje/...'
        def repl_icon(match):
            global img_idx
            new_img = portfolio_images[img_idx % len(portfolio_images)]
            img_idx += 1
            return "icon: '" + new_img + "'"
            
        new_content = re.sub(r"icon:\s*'/proje/[^']+'", repl_icon, new_content)
        
        if new_content != content:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated {file_path}")
            return True
    return False

src_dir = "frontend/src"
img_idx = 0

for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(".tsx"):
            process_file(os.path.join(root, file))

