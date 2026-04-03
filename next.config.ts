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
