import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { createMetadata } from "@/lib/metadata";
import { projects } from "@/lib/projects";
import styles from "@/styles/pages.module.css";

export const metadata: Metadata = createMetadata(
  "Projects",
  "A selective record of Abdul Samad's software projects, experiments, and lessons learned.",
);

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <p className={styles.eyebrow}>Projects</p>
        <h1 className={styles.title}>A few things, built deliberately.</h1>
        <p className={styles.intro}>
          These are the three projects that mark the clearest steps in my early
          development. Each one taught me something different about turning an
          idea into a working system.
        </p>
        <hr className={styles.rule} />
        <section
          className={styles.contentGrid}
          aria-labelledby="projects-title"
        >
          <h2 id="projects-title">The projects</h2>
          <ul className={styles.list}>
            {projects.map((project) => (
              <li className={styles.listItem} key={project.name}>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p>{project.story}</p>
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
                  {project.context}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </SiteShell>
  );
}
