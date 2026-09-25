import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { learningCertificates, learningChapters } from "@/lib/learning";
import { createMetadata } from "@/lib/metadata";
import styles from "@/styles/pages.module.css";

export const metadata: Metadata = createMetadata(
  "Learning",
  "The courses, curricula, and certificates shaping Abdul Samad's computer science foundations.",
);

export default function LearningPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <p className={styles.eyebrow}>Learning</p>
        <h1 className={styles.title}>The long way into computer science.</h1>
        <p className={styles.intro}>
          I did not arrive here through a single smooth curriculum. This is the
          story of the courses, detours, unfinished edges, and repeated attempts
          that are shaping how I learn to build.
        </p>
        <hr className={styles.rule} />
        <section className={styles.contentGrid} aria-labelledby="story-title">
          <h2 id="story-title">The story so far</h2>
          <ul className={styles.list}>
            {learningChapters.map((chapter) => (
              <li className={styles.listItem} key={chapter.title}>
                <div>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.body}</p>
                  <p className={styles.takeaway}>{chapter.takeaway}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section
          className={styles.contentGrid}
          aria-labelledby="certificates-title"
        >
          <h2 id="certificates-title">Certificates</h2>
          <ul className={styles.list}>
            {learningCertificates.map((certificate) => (
              <li className={styles.listItem} key={certificate.name}>
                <div>
                  <h3>{certificate.name}</h3>
                  <p>{certificate.description}</p>
                  <a
                    className={styles.link}
                    href={certificate.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View certificate{" "}
                    <span className={styles.arrow} aria-hidden="true">
                      ↑
                    </span>
                  </a>
                </div>
                <span className={styles.meta}>
                  {certificate.status} · {certificate.provider}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </SiteShell>
  );
}
