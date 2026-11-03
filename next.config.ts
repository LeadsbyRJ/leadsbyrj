import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  // MDX posts are read from disk via process.cwd(). Next's tracer
  // cannot follow that path, so include them on every blog-related route.
  outputFileTracingIncludes: {
    "/blog": ["./content/blog/**/*"],
    "/blog/[slug]": ["./content/blog/**/*"],
    "/rss.xml": ["./content/blog/**/*"],
    "/sitemap.xml": ["./content/blog/**/*"],
  },
};

export default nextConfig;
