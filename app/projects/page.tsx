import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { certifications } from "@/lib/certifications";
import { createMetadata } from "@/lib/metadata";
import { projects } from "@/lib/projects";
import styles from "@/styles/pages.module.css";

export const metadata: Metadata = createMetadata(
  "Projects",
  "A selective record of Abdul Samad's software projects, experiments, and lessons learned.",
);

export default function ProjectsPage() {
  const groups = [
    "Selected work",
    "Self-learning",
    "University coursework",
  ] as const;

  return (
    <SiteShell>
      <main className={styles.page}>
        <p className={styles.eyebrow}>Projects</p>
        <h1 className={styles.title}>A few things, built deliberately.</h1>
        <p className={styles.intro}>
          I am more interested in the problem a project explores and what it
          taught me than in collecting technologies. This is a working index of
          public repositories; deeper project notes will follow as I write them.
        </p>
        <hr className={styles.rule} />
        {groups.map((group) => (
          <section
            className={styles.contentGrid}
            key={group}
            aria-labelledby={`${group}-title`}
          >
            <h2 id={`${group}-title`}>{group}</h2>
            <ul className={styles.list}>
              {projects
                .filter((project) => project.group === group)
                .map((project) => (
                  <li className={styles.listItem} key={project.name}>
                    <div>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <a
                        className={styles.link}
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View repository{" "}
                        <span className={styles.arrow} aria-hidden="true">
                          ↑
                        </span>
                      </a>
                    </div>
                    <span className={styles.meta}>
                      {project.language ? `${project.language} · ` : ""}
                      {project.source}
                    </span>
                  </li>
                ))}
            </ul>
          </section>
        ))}
        <section
          className={styles.contentGrid}
          aria-labelledby="certifications-title"
        >
          <h2 id="certifications-title">Certifications &amp; courses</h2>
          <ul className={styles.list}>
            {certifications.map((certification) => (
              <li className={styles.listItem} key={certification.name}>
                <div>
                  <h3>{certification.name}</h3>
                  <p>{certification.description}</p>
                  <a
                    className={styles.link}
                    href={certification.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View course or certificate{" "}
                    <span className={styles.arrow} aria-hidden="true">
                      ↑
                    </span>
                  </a>
                </div>
                <span className={styles.meta}>
                  {certification.status} · {certification.provider}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </SiteShell>
  );
}
