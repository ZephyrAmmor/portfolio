import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { featuredProjects } from "@/lib/projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <SiteShell>
      <div className={styles.page}>
        <main>
          <section className={styles.hero} aria-labelledby="hero-title">
            <p className={styles.eyebrow}>Computer science student · Multan</p>
            <h1 id="hero-title">
              Learning how computers work, then building things that matter.
            </h1>
            <div className={styles.heroBottom}>
              <p className={styles.heroCopy}>
                I&apos;m a third-semester CS student at NUML exploring software,
                artificial intelligence, and the foundations beneath both.
              </p>
              <Link className={styles.textLink} href="/projects">
                Explore the work <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </section>

          <section className={styles.now} aria-labelledby="now-title">
            <div className={styles.sectionLabel}>
              <span>01</span>
              <h2 id="now-title">Now</h2>
            </div>
            <div className={styles.nowContent}>
              <p className={styles.nowLead}>
                A small snapshot of what is occupying my attention lately.
              </p>
              <dl className={styles.nowList}>
                <div>
                  <dt>Studying</dt>
                  <dd>
                    Data structures, linear algebra, and mathematical proof
                  </dd>
                </div>
                <div>
                  <dt>Exploring</dt>
                  <dd>
                    How intelligent systems connect perception, language, and
                    action
                  </dd>
                </div>
                <div>
                  <dt>Thinking about</dt>
                  <dd>
                    Building a slower, more deliberate kind of software
                    portfolio
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          <section
            className={styles.work}
            id="work"
            aria-labelledby="work-title"
          >
            <div className={styles.sectionLabel}>
              <span>02</span>
              <h2 id="work-title">Selected work</h2>
            </div>
            <div className={styles.workIntro}>
              <div>
                <p>
                  A small selection from the work I have built with classmates,
                  while studying independently, and during university
                  coursework.
                </p>
                <Link className={styles.textLink} href="/projects">
                  See the project shelf <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <ul className={styles.featuredList}>
                {featuredProjects.map((project) => (
                  <li key={project.name}>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <span>{project.name}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className={styles.writing}
            id="writing"
            aria-labelledby="writing-title"
          >
            <div className={styles.sectionLabel}>
              <span>03</span>
              <h2 id="writing-title">From the notebook</h2>
            </div>
            <div className={styles.writingIntro}>
              <p>
                Notes on computer science, learning, and the questions that stay
                interesting after the code runs.
              </p>
              <Link className={styles.textLink} href="/writing">
                Browse the notebook <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>

          <section
            className={styles.about}
            id="about"
            aria-labelledby="about-title"
          >
            <div className={styles.sectionLabel}>
              <span>04</span>
              <h2 id="about-title">A little context</h2>
            </div>
            <p className={styles.aboutCopy}>
              I&apos;m early in the journey, and that is part of the point. I
              learn by building, looking closely at what I misunderstood, and
              returning with better questions. This site is a record of that
              process.
            </p>
          </section>
        </main>
      </div>
    </SiteShell>
  );
}
