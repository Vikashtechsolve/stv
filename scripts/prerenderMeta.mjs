#!/usr/bin/env node
/**
 * Post-build: writes route-specific HTML copies (e.g. dist/generative-ai/index.html)
 * with per-route <title>, <meta description>, canonical, OG tags and JSON-LD.
 *
 * This is a lightweight alternative to full SSR/prerendering. The body is still
 * the same SPA bundle (React Router takes over on hydration), but crawlers and
 * social cards get the correct meta immediately without waiting for JS.
 *
 * Hosts like Vercel, Netlify and Cloudflare Pages will serve the route-specific
 * index.html automatically when configured for SPA fallback (most common setup).
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "..", "dist");
const indexHtmlPath = resolve(distDir, "index.html");

if (!existsSync(indexHtmlPath)) {
  console.warn("[prerender] dist/index.html not found — run `vite build` first.");
  process.exit(0);
}

const baseHtml = readFileSync(indexHtmlPath, "utf8");
const SITE_URL = "https://vikastechsolutions.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/genai-og.png`;
const LOGO_URL =
  "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759848700/vks_fav_icon_2_rjzspg.svg";

const routes = [
  {
    path: "/generative-ai",
    title:
      "Generative AI Course Online (3 Months) | LLMs, RAG, AI Agents | VTS",
    description:
      "Join VTS Generative AI program: 3 months of live mentor-led training (2 months + 1 month internship). Build real AI apps with LLMs, Prompt Engineering, RAG, AI Agents, OpenAI, Gemini, LangChain. PPO opportunity + 1 interview call. Book your seat from ₹99.",
    keywords:
      "Generative AI course, GenAI training, LLM course, RAG, AI Agents, Prompt Engineering, AI internship India, OpenAI course, Gemini, LangChain, Hugging Face, Vikash Tech Solution, online AI bootcamp, Generative AI certification, AI developer course",
    ogImage: `${SITE_URL}/genai-og.png`,
  },
  {
    path: "/fullstack-developer",
    title:
      "Full Stack Developer Course | React, Node.js, MongoDB | Vikash Tech Solution",
    description:
      "Become a job-ready Full Stack Developer with VTS. Live mentor-led 6-month program covering React, Node.js, Express, MongoDB, deployment and real projects.",
    keywords:
      "Full Stack Developer course, MERN stack training, React course, Node.js bootcamp, MongoDB, full stack online course India, Vikash Tech Solution",
    ogImage: DEFAULT_OG_IMAGE,
  },
  {
    path: "/data-analytics",
    title:
      "Data Analytics Program | SQL, Python, Power BI | Vikash Tech Solution",
    description:
      "Master Data Analytics with VTS: SQL, Python, Power BI, Excel and real business datasets. Mentor-led 4-month program for data-driven career roles.",
    keywords:
      "Data Analytics course, SQL training, Python for data, Power BI course, Excel analytics, data analyst bootcamp India, Vikash Tech Solution",
    ogImage: DEFAULT_OG_IMAGE,
  },
  {
    path: "/aboutus",
    title: "About Vikash Tech Solution | Mentor-Led Tech Programs",
    description:
      "Vikash Tech Solution (VTS) is a tech learning platform offering industry-led programs in Generative AI, Full Stack and Data Analytics with real projects and career support.",
    keywords:
      "About VTS, Vikash Tech Solution, tech learning platform India, mentor-led courses",
    ogImage: DEFAULT_OG_IMAGE,
  },
  {
    path: "/contactus",
    title: "Contact Vikash Tech Solution | Get Course Counselling",
    description:
      "Have questions about VTS programs? Talk to our counselling team or write to us. We help you choose the right tech learning path.",
    keywords: "Contact VTS, Vikash Tech Solution support, course counselling",
    ogImage: DEFAULT_OG_IMAGE,
  },
];

function escapeAttr(s) {
  return String(s).replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function injectMeta(html, r) {
  const pageUrl = `${SITE_URL}${r.path}`;
  let out = html;

  out = out.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeAttr(r.title)}</title>`
  );

  const replaceMeta = (name, content, prop = false) => {
    const attr = prop ? "property" : "name";
    const re = new RegExp(
      `<meta\\s+${attr}=\"${name}\"\\s+content=\"[^\"]*\"\\s*/>`
    );
    const tag = `<meta ${attr}="${name}" content="${escapeAttr(content)}" />`;
    if (re.test(out)) {
      out = out.replace(re, tag);
    } else {
      out = out.replace(/<\/head>/, `    ${tag}\n  </head>`);
    }
  };

  const replaceLink = (rel, href) => {
    const re = new RegExp(`<link\\s+rel=\"${rel}\"\\s+href=\"[^\"]*\"\\s*/>`);
    const tag = `<link rel="${rel}" href="${escapeAttr(href)}" />`;
    if (re.test(out)) out = out.replace(re, tag);
    else out = out.replace(/<\/head>/, `    ${tag}\n  </head>`);
  };

  replaceMeta("description", r.description);
  replaceMeta("keywords", r.keywords);
  replaceLink("canonical", pageUrl);

  replaceMeta("og:url", pageUrl, true);
  replaceMeta("og:title", r.title, true);
  replaceMeta("og:description", r.description, true);
  replaceMeta("og:image", r.ogImage, true);

  replaceMeta("twitter:title", r.title);
  replaceMeta("twitter:description", r.description);
  replaceMeta("twitter:image", r.ogImage);

  return out;
}

let count = 0;
for (const r of routes) {
  const outPath = resolve(distDir, r.path.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  const html = injectMeta(baseHtml, r);
  writeFileSync(outPath, html, "utf8");
  count += 1;
}

console.log(`[prerender] Wrote ${count} route-specific index.html files.`);
