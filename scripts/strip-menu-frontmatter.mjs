/**
 * Removes deprecated front matter keys from src/content/menu/*.md
 * Run: node scripts/strip-menu-frontmatter.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "src", "content", "menu");

const DROP = new Set(["slug", "sortorder", "featured", "featuredorder"]);

function splitFrontmatter(text) {
  if (!text.startsWith("---")) return null;
  let i = 3;
  if (text[i] === "\r") i++;
  if (text[i] !== "\n") return null;
  i++;
  const start = i;
  while (i < text.length) {
    if (text.slice(i, i + 3) === "---") {
      const after = text[i + 3];
      if (after === "\n" || after === "\r" || after === undefined || i + 3 === text.length) {
        const fm = text.slice(start, i).replace(/\r/g, "");
        let end = i + 3;
        if (text[end] === "\r") end++;
        if (text[end] === "\n") end++;
        const body = text.slice(end);
        return { fm: fm.trimEnd(), body };
      }
    }
    i++;
  }
  return null;
}

for (const name of fs.readdirSync(dir)) {
  if (!name.endsWith(".md")) continue;
  const fp = path.join(dir, name);
  const text = fs.readFileSync(fp, "utf8");
  const parsed = splitFrontmatter(text);
  if (!parsed) {
    console.warn("Skip:", name);
    continue;
  }
  const lines = parsed.fm.split("\n");
  const kept = lines.filter((line) => {
    const t = line.trim();
    if (!t) return true;
    const key = t.split(":")[0].trim().toLowerCase();
    return !DROP.has(key);
  });
  const newFm = kept.join("\n");
  fs.writeFileSync(fp, `---\n${newFm}\n---\n${parsed.body}`, "utf8");
}
console.log("Stripped slug/sort/featured fields from menu markdown.");
