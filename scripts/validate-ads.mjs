// Gera os arquivos do Google Ads (google-ads/*.csv e *.txt) e confere os limites de caracteres.
// Rode: npm run check:ads
import { writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { site } from "../src/data/site.mjs";

const OUT = fileURLToPath(new URL("../google-ads/", import.meta.url));
import { CAMPAIGN, groups, negatives, sitelinks, callouts, snippets } from "./ads-data.mjs";
const url = (p = "") => `${site.url}/${p}`;

/* ---------- Validação ---------- */
const errors = [];
const check = (label, s, max) => { if ([...s].length > max) errors.push(`${label} tem ${[...s].length}/${max}: "${s}"`); };
for (const g of groups) {
  if (g.headlines.length < 3 || g.headlines.length > 15) errors.push(`${g.name}: precisa de 3 a 15 títulos`);
  if (g.descriptions.length < 2 || g.descriptions.length > 4) errors.push(`${g.name}: precisa de 2 a 4 descrições`);
  g.headlines.forEach((h, i) => check(`${g.name} título ${i + 1}`, h, 30));
  g.descriptions.forEach((d, i) => check(`${g.name} descrição ${i + 1}`, d, 90));
  g.paths.forEach((p, i) => check(`${g.name} caminho ${i + 1}`, p, 15));
  const dup = g.headlines.filter((h, i) => g.headlines.indexOf(h) !== i);
  if (dup.length) errors.push(`${g.name}: títulos repetidos ${dup.join(", ")}`);
  g.keywords.forEach((k) => { if (k.split(" ").length > 10 || k.length > 80) errors.push(`${g.name}: palavra-chave longa demais "${k}"`); });
}
sitelinks.forEach((s) => { check("Sitelink", s.text, 25); check("Sitelink linha 1", s.d1, 35); check("Sitelink linha 2", s.d2, 35); });
callouts.forEach((c) => check("Frase de destaque", c, 25));
snippets.values.forEach((v) => check("Snippet", v, 25));

if (errors.length) {
  console.error("Erros:\n- " + errors.join("\n- "));
  process.exit(1);
}

/* ---------- Arquivos ---------- */
const csv = (rows) => rows.map((r) => r.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\r\n") + "\r\n";
await mkdir(OUT, { recursive: true });

const kwRows = [["Campaign", "Ad group", "Keyword", "Criterion Type", "Final URL"]];
for (const g of groups) for (const k of g.keywords) for (const t of ["Exact", "Phrase"]) kwRows.push([CAMPAIGN, g.name, k, t, url(g.path)]);
await writeFile(OUT + "palavras-chave.csv", "﻿" + csv(kwRows));

const adHead = ["Campaign", "Ad group", ...Array.from({ length: 15 }, (_, i) => `Headline ${i + 1}`), ...Array.from({ length: 4 }, (_, i) => `Description ${i + 1}`), "Path 1", "Path 2", "Final URL"];
const adRows = [adHead];
for (const g of groups) {
  const hs = [...g.headlines, ...Array(15 - g.headlines.length).fill("")];
  const ds = [...g.descriptions, ...Array(4 - g.descriptions.length).fill("")];
  adRows.push([CAMPAIGN, g.name, ...hs, ...ds, g.paths[0], g.paths[1], url(g.path)]);
}
await writeFile(OUT + "anuncios-rsa.csv", "﻿" + csv(adRows));

const negRows = [["Campaign", "Keyword", "Criterion Type"]];
for (const n of negatives) negRows.push([CAMPAIGN, n, "Negative Phrase"]);
await writeFile(OUT + "negativas.csv", "﻿" + csv(negRows));
await writeFile(OUT + "negativas.txt", negatives.map((n) => `"${n}"`).join("\r\n") + "\r\n");

const sl = [["Sitelink text", "Description line 1", "Description line 2", "Final URL"], ...sitelinks.map((s) => [s.text, s.d1, s.d2, s.url])];
await writeFile(OUT + "sitelinks.csv", "﻿" + csv(sl));
await writeFile(
  OUT + "extensoes.txt",
  `FRASES DE DESTAQUE (callouts)\r\n${callouts.join("\r\n")}\r\n\r\nSNIPPET ESTRUTURADO\r\nCabeçalho: ${snippets.header}\r\nValores: ${snippets.values.join(", ")}\r\n`
);

const total = groups.reduce((n, g) => n + g.keywords.length * 2, 0);
console.log(`OK: ${groups.length} grupos, ${total} palavras-chave (exata + frase), ${groups.length} anúncios RSA, ${negatives.length} negativas, ${sitelinks.length} sitelinks, ${callouts.length} frases de destaque.`);
