#!/usr/bin/env node
/**
 * Stamps `<lastmod>` on every `<url>` in public/sitemap.xml using today's date.
 * Run automatically before `vite build` via the `prebuild` npm script.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sitemapPath = resolve(__dirname, "..", "public", "sitemap.xml");

if (!existsSync(sitemapPath)) {
  console.warn("[sitemap] public/sitemap.xml not found — skipping lastmod stamp.");
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
let xml = readFileSync(sitemapPath, "utf8");

xml = xml.replace(/<lastmod>[^<]*<\/lastmod>\s*/g, "");

xml = xml.replace(
  /<loc>([^<]+)<\/loc>/g,
  (match, loc) => `<loc>${loc}</loc>\n    <lastmod>${today}</lastmod>`
);

writeFileSync(sitemapPath, xml, "utf8");
console.log(`[sitemap] Stamped ${today} on all <url> entries.`);
