import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { mdxComponents } from "@/components/mdx/mdx-components";
import NowContent from "@/content/now.mdx";
import { createMetadata } from "@/lib/metadata";
import styles from "@/styles/pages.module.css";
import pageStyles from "./page.module.css";

export const metadata: Metadata = createMetadata(
  "Now",
  "What Abdul Samad is studying, building, and thinking about right now.",
);

export default function NowPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <p className={styles.eyebrow}>Now</p>
        <h1 className={styles.title}>What is holding my attention.</h1>
        <p className={styles.intro}>
          A living page for the subjects, projects, and questions currently in
          motion. The source for this page is a single editable MDX file.
        </p>
        <hr className={styles.rule} />
        <article className={pageStyles.content}>
          <NowContent components={mdxComponents} />
        </article>
      </main>
    </SiteShell>
  );
}
