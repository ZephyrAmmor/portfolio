import type { MetadataRoute } from "next";
import { getWritingPosts } from "@/lib/mdx";
import { siteConfig } from "@/lib/metadata";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/writing", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/projects", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/learning", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.65, changeFrequency: "yearly" as const },
  { path: "/now", priority: 0.65, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency,
    priority,
  }));

  const writingRoutes = getWritingPosts().map((post) => ({
    url: new URL(`/writing/${post.slug}`, siteConfig.url).toString(),
    lastModified: post.updated
      ? new Date(post.updated)
      : post.date
        ? new Date(post.date)
        : undefined,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...writingRoutes];
}
