import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/site-shell";
import { mdxComponents } from "@/components/mdx/mdx-components";
import LayoutTest from "@/content/writing/layout-test.mdx";
import { getWritingPost, getWritingPosts } from "@/lib/mdx";
import { createMetadata, siteConfig } from "@/lib/metadata";
import styles from "./page.module.css";

const postComponents = {
  "layout-test": LayoutTest,
};

type WritingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWritingPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingPost(slug);

  return post
    ? createMetadata(post.title, post.description, {
        path: `/writing/${post.slug}`,
        type: "article",
        publishedTime: post.date,
      })
    : createMetadata("Writing");
}

export default async function WritingPostPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const post = getWritingPost(slug);
  const Post = postComponents[slug as keyof typeof postComponents];

  if (!post || !Post) {
    notFound();
  }

  return (
    <SiteShell>
      <main className={styles.page}>
        <article>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              dateModified: post.date,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": new URL(
                  `/writing/${post.slug}`,
                  siteConfig.url,
                ).toString(),
              },
              author: {
                "@type": "Person",
                name: siteConfig.name,
                url: siteConfig.url,
              },
              publisher: {
                "@type": "Person",
                name: siteConfig.name,
              },
            })}
          </script>
          <header className={styles.header}>
            <p className={styles.kicker}>{post.type}</p>
            <h1>{post.title}</h1>
            <p className={styles.description}>{post.description}</p>
            <time dateTime={post.date}>{post.date}</time>
          </header>
          <div className={styles.content}>
            <Post components={mdxComponents} />
          </div>
        </article>
      </main>
    </SiteShell>
  );
}
