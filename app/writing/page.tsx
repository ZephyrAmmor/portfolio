import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { getWritingPosts } from "@/lib/mdx";
import { createMetadata } from "@/lib/metadata";
import styles from "@/styles/pages.module.css";

export const metadata: Metadata = createMetadata(
  "Writing",
  "Notes on computer science, mathematics, programming, and learning by Abdul Samad.",
);

export default function WritingPage() {
  const notes = getWritingPosts();

  return (
    <SiteShell>
      <main className={styles.page}>
        <p className={styles.eyebrow}>Writing</p>
        <h1 className={styles.title}>Notes from the workbench.</h1>
        <p className={styles.intro}>
          Writing is how I slow down enough to find out whether I actually
          understand something. These notes will be published as I study, build,
          and change my mind.
        </p>
        <hr className={styles.rule} />
        <section
          className={styles.contentGrid}
          aria-labelledby="notebook-title"
        >
          <h2 id="notebook-title">The notebook</h2>
          {notes.length > 0 ? (
            <ul className={styles.list}>
              {notes.map((note) => (
                <li className={styles.listItem} key={note.slug}>
                  <div>
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                    <Link
                      className={styles.link}
                      href={`/writing/${note.slug}`}
                    >
                      Read the note{" "}
                      <span className={styles.arrow} aria-hidden="true">
                        ↑
                      </span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.emptyState}>
              No published notes yet. I am still learning what is worth writing
              down, and this space will begin when I have something honest to
              share.
            </p>
          )}
        </section>
      </main>
    </SiteShell>
  );
}
