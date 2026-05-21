import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const publicDir = path.resolve("public");
const files = ["sitemap-index.xml", "sitemap-0.xml"];

for (const file of files) {
  const source = path.join(distDir, file);
  if (!fs.existsSync(source)) {
    console.error(`[sync-sitemap] Missing ${source}. Run astro build first.`);
    process.exit(1);
  }
  fs.copyFileSync(source, path.join(publicDir, file));
  console.log(`[sync-sitemap] Copied ${file} to public/`);
}
