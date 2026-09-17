import type { MetadataRoute } from "next";
import { getWritingPosts } from "@/lib/mdx";
import { siteConfig } from "@/lib/metadata";

const staticRoutes = ["/", "/about", "/projects", "/now", "/writing"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = staticRoutes.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency:
      path === "/now" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.8,
  }));

  const writingRoutes = getWritingPosts().map((post) => ({
    url: new URL(`/writing/${post.slug}`, siteConfig.url).toString(),
    lastModified: post.date ? new Date(post.date) : undefined,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...writingRoutes];
}
