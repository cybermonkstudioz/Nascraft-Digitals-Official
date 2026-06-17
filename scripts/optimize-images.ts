import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve(import.meta.dirname, "../client/public");

async function optimizeImages() {
  console.log(`Scanning directory: ${PUBLIC_DIR}`);
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error("Public directory does not exist!");
    return;
  }

  const files = fs.readdirSync(PUBLIC_DIR);
  const imageExtensions = [".png", ".jpg", ".jpeg"];

  for (const file of files) {
    const filePath = path.join(PUBLIC_DIR, file);
    const ext = path.extname(file).toLowerCase();

    // Skip directories and non-images
    if (fs.statSync(filePath).isDirectory() || !imageExtensions.includes(ext)) {
      continue;
    }

    // Skip favicon.png and og-image.png to maintain standard browser/platform support
    if (file === "favicon.png" || file === "og-image.png") {
      console.log(`Skipping: ${file}`);
      continue;
    }

    const baseName = path.basename(file, ext);
    const destPath = path.join(PUBLIC_DIR, `${baseName}.webp`);

    console.log(`Converting: ${file} -> ${baseName}.webp`);

    try {
      // Load image, compress and save to WebP
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(destPath);

      console.log(`Successfully converted ${file}. File size: ${fs.statSync(destPath).size} bytes`);

      // Delete the original file
      fs.unlinkSync(filePath);
      console.log(`Deleted original: ${file}`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }

  console.log("Image optimization complete!");
}

optimizeImages().catch(console.error);
