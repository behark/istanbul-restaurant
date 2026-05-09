import QRCode from "qrcode";
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const target = "https://miamon.at/speisekarte";
const outDir = "/home/behar/Desktop/Mia-Mon-QR";
mkdirSync(outDir, { recursive: true });

const opts = {
  errorCorrectionLevel: "H",
  margin: 2,
  color: { dark: "#14231D", light: "#ffffff" },
};

const sizes = [
  { name: "small-512", width: 512 },
  { name: "medium-1024", width: 1024 },
  { name: "large-2048", width: 2048 },
  { name: "print-4096", width: 4096 },
];

for (const s of sizes) {
  const file = join(outDir, `mia-mon-qr-${s.name}.png`);
  await QRCode.toFile(file, target, { ...opts, width: s.width, type: "png" });
  console.log(`✓ ${file}`);
}

const svg = await QRCode.toString(target, { ...opts, type: "svg", width: 2048 });
const svgFile = join(outDir, "mia-mon-qr.svg");
writeFileSync(svgFile, svg);
console.log(`✓ ${svgFile}`);

console.log(`\nQR-Codes gespeichert in: ${outDir}`);
console.log(`Ziel: ${target}`);
