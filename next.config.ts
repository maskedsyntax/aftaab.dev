import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Do not bundle markdown-it (Turbopack/webpack transforms break its parser;
   * runtime errors like `isSpace is not defined`). Node resolves the real CJS build.
   */
  serverExternalPackages: ["markdown-it"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  /**
   * Case studies retired when the site refocused on the apps. Each product
   * still appears on /projects, so send the old slugs there rather than 404.
   */
  async redirects() {
    const retired = [
      "cairnly",
      "botttle",
      "apimask",
      "queriously",
      "trelay",
      "openconduit",
    ];
    return retired.map((slug) => ({
      source: `/projects/${slug}`,
      destination: "/projects",
      permanent: true,
    }));
  },
  /** Reduces dev rebuild thrash (webpack fallback only; default dev uses Turbopack). */
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        aggregateTimeout: 200,
        ignored: ["**/node_modules/**", "**/.git/**"],
      };
    }
    return config;
  },
};

export default nextConfig;
