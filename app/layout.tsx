import type { Metadata } from "next";
import { siteConfig } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Computer Science Student`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  classification: "Portfolio and technical notebook",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: `${siteConfig.name} | Computer Science Student`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio and notebook`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@amorzephyr",
    title: `${siteConfig.name} | Computer Science Student`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      email: `mailto:${siteConfig.email}`,
      jobTitle: "Computer science student",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Multan",
        addressCountry: "PK",
      },
      sameAs: Object.values(siteConfig.social),
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      author: { "@type": "Person", name: siteConfig.name },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      name: `${siteConfig.name} | Portfolio`,
      url: siteConfig.url,
      mainEntity: {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </body>
    </html>
  );
}
