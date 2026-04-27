/**
 * Regenerate src/content/menu/*.md — run: node scripts/seed-menu-md.mjs
 * Schema: title, description?, price, category, image? (no slug/sort/featured)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "src", "content", "menu");

/** [fileSlug, title, description, price, category, image|null] */
const rows = [
  ["manti-quarter-sheet-tray", "Manti (1/4 sheet tray)", "Frozen dumplings, quarter sheet tray", "$20.00", "Frozen food", null],
  ["pelmeni-beef", "Pelmeni (beef)", "Frozen beef dumplings", "$18.00", "Frozen food", null],
  ["pelmeni-chicken", "Pelmeni (chicken)", "Frozen chicken dumplings", "$18.00", "Frozen food", null],
  ["khinkali", "Khinkali", "Georgian-style dumplings", "$18.00", "Frozen food", null],
  ["blinchik", "Blinchik", "Stuffed crepes", "$18.00", "Frozen food", null],
  ["ajaraski-pack-2", "Ajaraski (frozen/small) pack of 2", "Adjarian khachapuri-style, small frozen, two per pack", "$8.00", "Frozen food", null],
  ["gata", "Gata", "Sweet Armenian pastry by the pound", "$12.00 / lb", "Pastry", "/media/uploads/gata.jpg"],
  ["eclair", "Eclair", "Cream-filled choux pastry", "$2.00 each", "Pastry", "/media/uploads/eclair.jpg"],
  ["cream-puff", "Cream puff", "Light choux with sweet cream", "$2.50 each", "Pastry", "/media/uploads/cream-puff.jpg"],
  ["napolion", "Napolion", "Layered cake slice", "$4.00 each", "Pastry", "/media/uploads/napolion.jpg"],
  ["double-chocolate-pastry", "Double Chocolate Pastry", "Layered chocolate cake and mousse with chocolate shavings", "$3.00", "Pastry", "/media/uploads/double-chocolate-pastry.jpg"],
  ["cheese-borek-khachapouri", "Cheese borek (Khachapouri)", "Cheese-filled phyllo", "$2.50", "Boreks", "/media/uploads/cheese-borek-khachapouri.png"],
  ["mini-cheese-borek", "Mini cheese borek", "Bite-size cheese borek", "$1.50", "Boreks", "/media/uploads/mini-cheese-borek.jpg"],
  ["beef-borek", "Beef borek", "Seasoned beef in flaky layers", "$2.50", "Boreks", "/media/uploads/beef-borek.jpg"],
  ["spinach-borek", "Spinach borek", "Spinach and cheese filling", "$3.00", "Boreks", "/media/uploads/spinach-borek.jpg"],
  ["beef-piroshki", "Beef piroshki", "Hand pie with seasoned beef", "$2.75", "Hot food", "/media/uploads/beef-piroshki.jpg"],
  ["potato-piroshki", "Potato piroshki", "Hand pie with potato filling", "$2.75", "Hot food", "/media/uploads/potato-piroshki.jpg"],
  ["hotdog-sandwich", "Hotdog Sandwich", "", "$17.00", "Hot food", "/media/uploads/hotdog-sandwich.png"],
  ["ponchik", "Ponchik", "Filled doughnut", "$3.00", "Hot food", "/media/uploads/ponchik.jpg"],
  ["lahmajun", "Lahmajun", "Thin flatbread with seasoned meat and herbs", "$2.50", "Hot food", "/media/uploads/lahmajun.jpg"],
  ["chebureki", "Chebureki", "Crispy turnover with savory filling", "$5.50", "Hot food", null],
  ["abali-yogurt", "Abali yogurt", "Drinkable yogurt", "$3.00", "Drinks", "/media/uploads/abali-yogurt.jpg"],
  ["abali-yogurt-half-galon", "Abali yogurt 1/2 galon", "", "$7.00", "Drinks", "/media/uploads/abali-yogurt-half-galon.jpg"],
  ["soda", "Soda", "Assorted soft drinks", "$3.00", "Drinks", "/media/uploads/soda.jpg"],
  ["lemonade", "Lemonade", "Chilled lemonade", "$1.90", "Drinks", null],
  ["sparkling-water", "Sparkling water", "Carbonated water", "$2.00", "Drinks", "/media/uploads/sparkling-water.jpg"],
];

function yamlEscape(s) {
  if (s === "" || s == null) return '""';
  if (s.startsWith("/") || /[:#\n"]/.test(s)) return JSON.stringify(s);
  return s;
}

fs.mkdirSync(outDir, { recursive: true });

for (const row of rows) {
  const [fileSlug, title, description, price, category, image] = row;
  const parts = [
    "---",
    `title: ${yamlEscape(title)}`,
    description ? `description: ${yamlEscape(description)}` : null,
    `price: ${yamlEscape(price)}`,
    `category: ${category}`,
    image ? `image: ${yamlEscape(image)}` : null,
    "---",
    "",
  ];
  fs.writeFileSync(path.join(outDir, `${fileSlug}.md`), parts.filter(Boolean).join("\n"), "utf8");
}

console.log(`Wrote ${rows.length} files to ${outDir}`);
