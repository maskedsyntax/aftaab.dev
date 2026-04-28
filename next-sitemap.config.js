const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function slugifyTitle(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");
}

function readJSONFromTs(file) {
  // Lightweight extractor: pulls `id: "..."` literals from portfolio-data.ts so
  // we don't need to compile TS at sitemap time.
  const src = fs.readFileSync(file, "utf8");
  const featuredBlock = src.match(
    /export const featuredProjects[^[]*\[([\s\S]*?)\];/
  );
  if (!featuredBlock) return [];
  const ids = [...featuredBlock[1].matchAll(/id:\s*"([^"]+)"/g)].map(
    (m) => m[1]
  );
  return ids;
}

const FREQ_BY_PREFIX = [
  ["/blog/", "monthly", 0.7],
  ["/blog", "weekly", 0.6],
  ["/projects/", "monthly", 0.8],
  ["/projects", "weekly", 0.7],
  ["/fun/", "yearly", 0.4],
  ["/fun", "yearly", 0.4],
];

function pickFreqPriority(loc) {
  for (const [prefix, freq, priority] of FREQ_BY_PREFIX) {
    if (loc === prefix || loc.startsWith(prefix)) return { freq, priority };
  }
  return { freq: "monthly", priority: 0.5 };
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://aftaab.dev",
  generateRobotsTxt: false,
  changefreq: "monthly",
  priority: 0.6,
  exclude: [
    "*/opengraph-image",
    "*/opengraph-image*",
    "*/twitter-image",
    "*/twitter-image*",
    "/_next/*",
    "/api/*",
  ],
  additionalPaths: async () => {
    const paths = [];

    // Blog posts
    const dir = path.join(process.cwd(), "content");
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      const loc = `/blog/${slugifyTitle(data.title)}`;
      paths.push({
        loc,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: data.date
          ? new Date(data.date.split("-").reverse().join("-")).toISOString()
          : new Date().toISOString(),
      });
    }

    // Per-project case studies
    const projectIds = readJSONFromTs(
      path.join(process.cwd(), "src/lib/portfolio-data.ts")
    );
    for (const id of projectIds) {
      paths.push({
        loc: `/projects/${id}`,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    }

    return paths;
  },
  transform: async (config, loc) => {
    const isHome = loc === "/";
    if (isHome) {
      return {
        loc,
        changefreq: "weekly",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    const { freq, priority } = pickFreqPriority(loc);
    return {
      loc,
      changefreq: freq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
