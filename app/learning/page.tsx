import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { learningActivities, learningCertificates } from "@/lib/learning";
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
        <h1 className={styles.title}>A foundation, built in public.</h1>
        <p className={styles.intro}>
          I learn through a mixture of structured courses, project work, and
          returning to ideas until they stop feeling borrowed. This is the short
          list of learning activities that have shaped how I build.
        </p>
        <hr className={styles.rule} />
        <section
          className={styles.contentGrid}
          aria-labelledby="activities-title"
        >
          <h2 id="activities-title">Major activities</h2>
          <ul className={styles.list}>
            {learningActivities.map((activity) => (
              <li className={styles.listItem} key={activity.name}>
                <div>
                  <h3>{activity.name}</h3>
                  <p>{activity.description}</p>
                  {activity.url && (
                    <a
                      className={styles.link}
                      href={activity.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit course{" "}
                      <span className={styles.arrow} aria-hidden="true">
                        ↑
                      </span>
                    </a>
                  )}
                </div>
                <span className={styles.meta}>
                  {activity.status} · {activity.provider}
                </span>
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
