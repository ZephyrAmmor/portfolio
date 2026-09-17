import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://amorzephyr.vercel.app";

export const siteConfig = {
  name: "Abdul Samad",
  shortName: "Abdul Samad",
  description:
    "The portfolio and notebook of Abdul Samad, a computer science student exploring software, artificial intelligence, and computing fundamentals.",
  url: siteUrl,
  email: "amorzephyr@gmail.com",
  location: "Multan, Pakistan",
  social: {
    github: "https://github.com/ZephyrAmmor",
    linkedin: "https://www.linkedin.com/in/amorzephyr",
    x: "https://x.com/amorzephyr",
  },
};

type MetadataOptions = {
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function createMetadata(
  title: string,
  description?: string,
  options: MetadataOptions = {},
): Metadata {
  const pageDescription = description ?? siteConfig.description;
  const pageUrl = new URL(options.path ?? "/", siteConfig.url).toString();

  return {
    title,
    description: pageDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: pageDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      type: options.type ?? "website",
      images: ["/opengraph-image"],
      ...(options.publishedTime
        ? { publishedTime: options.publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: pageDescription,
      images: ["/opengraph-image"],
    },
  };
}
