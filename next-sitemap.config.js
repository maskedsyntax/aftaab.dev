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

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://aftaab.xyz",
  generateRobotsTxt: true,
  additionalPaths: async () => {
    const dir = path.join(process.cwd(), "content");
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
    return files.map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      const loc = `/blog/${slugifyTitle(data.title)}`;
      return {
        loc,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: data.date
          ? new Date(data.date.split("-").reverse().join("-")).toISOString()
          : new Date().toISOString(),
      };
    });
  },
  transform: async (config, path) => {
    const isHome = path === "/";
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: isHome ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
