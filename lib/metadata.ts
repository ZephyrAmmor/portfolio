import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl =
  configuredSiteUrl && !configuredSiteUrl.includes("your-domain.example")
    ? configuredSiteUrl
    : "https://amorzephyr.vercel.app";

export const siteConfig = {
  name: "Abdul Samad",
  shortName: "Abdul Samad",
  description:
    "Abdul Samad's portfolio and notebook: software projects, computer science learning, and a thoughtful path into intelligent systems.",
  url: siteUrl,
  email: "amorzephyr@gmail.com",
  location: "Multan, Pakistan",
  locale: "en_US",
  keywords: [
    "Abdul Samad",
    "computer science student",
    "software projects",
    "artificial intelligence",
    "intelligent systems",
    "technical writing",
    "Multan developer",
  ],
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
  modifiedTime?: string;
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
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: { canonical: pageUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: pageDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: options.type ?? "website",
      images: ["/opengraph-image"],
      ...(options.publishedTime
        ? { publishedTime: options.publishedTime }
        : {}),
      ...(options.modifiedTime ? { modifiedTime: options.modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      creator: "@amorzephyr",
      title: `${title} | ${siteConfig.name}`,
      description: pageDescription,
      images: ["/opengraph-image"],
    },
  };
}
