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

export function createMetadata(title: string, description?: string): Metadata {
  return {
    title,
    description: description ?? siteConfig.description,
    alternates: { canonical: siteConfig.url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: description ?? siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}
