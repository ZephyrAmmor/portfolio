import type { Metadata } from "next";

export const siteConfig = {
  name: "Abdul Samad",
  shortName: "Abdul Samad",
  description:
    "The portfolio and notebook of Abdul Samad, a computer science student exploring software, artificial intelligence, and computing fundamentals.",
  url: "https://example.com",
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
      ...(options.publishedTime
        ? { publishedTime: options.publishedTime }
        : {}),
    },
    twitter: {
      card: "summary",
      title: `${title} | ${siteConfig.name}`,
      description: pageDescription,
    },
  };
}
