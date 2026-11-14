import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";
import { cityPath, getAllCities } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/pricing",
    "/projects",
    "/about",
    "/contact",
    "/blog",
    "/testimonials",
    "/privacy",
    "/serving-orange-county",
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path === "/contact" || path === "/pricing" ? 0.9 : 0.7,
  }));

  const posts = getAllPosts();
  const postEntries = posts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityEntries = getAllCities().map((city) => ({
    url: `${SITE.url}${cityPath(city.slug)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...postEntries, ...cityEntries];
}
