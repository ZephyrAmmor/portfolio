import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/home/contact-form";
import { LearningTimeline } from "@/components/home/learning-timeline";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { SiteShell } from "@/components/layout/site-shell";
import { getLatestWritingPosts } from "@/lib/mdx";
import { siteConfig } from "@/lib/metadata";
import styles from "./page.module.css";

export default function Home() {
  const notes = getLatestWritingPosts(3);

  return (
    <SiteShell>
      <main className={styles.page}>
        <section
          className={`${styles.hero} section-reveal`}
          id="top"
          aria-labelledby="hero-title"
          data-reveal
        >
          <div className={styles.heroGlow} />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Computer science student · Multan</p>
            <h1 id="hero-title">
              Building a thoughtful path into <em>intelligent systems.</em>
            </h1>
            <p className={styles.lede}>
              I&apos;m Abdul Samad, learning how computers work, then turning
              that understanding into useful software.
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#work">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a
                className={styles.secondaryButton}
                href={`mailto:${siteConfig.email}`}
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
          <div className={styles.scrollHint}>
            Scroll to explore <span>↓</span>
          </div>
        </section>

        <section
          className={`${styles.section} section-reveal`}
          id="work"
          aria-labelledby="work-title"
          data-reveal
        >
          <div className={styles.sectionHeading}>
            <span>01 / Selected work</span>
            <h2 id="work-title">
              Things I&apos;ve built
              <br />
              <em>with intent.</em>
            </h2>
          </div>
          <ProjectShowcase />
        </section>

        <section
          className={`${styles.section} section-reveal`}
          id="learning"
          aria-labelledby="learning-title"
          data-reveal
        >
          <div className={styles.sectionHeading}>
            <span>02 / The process</span>
            <h2 id="learning-title">
              Still learning.
              <br />
              <em>Paying attention.</em>
            </h2>
          </div>
          <div className={styles.learningGrid}>
            <p className={styles.sectionLead}>
              I did not arrive here through a single smooth curriculum. This is
              the story of the courses, detours, unfinished edges, and repeated
              attempts shaping how I learn to build.
            </p>
            <LearningTimeline />
          </div>
        </section>

        <section
          className={`${styles.section} section-reveal`}
          id="writing"
          aria-labelledby="writing-title"
          data-reveal
        >
          <div className={styles.sectionHeading}>
            <span>03 / From the notebook</span>
            <h2 id="writing-title">
              Ideas worth
              <br />
              <em>writing down.</em>
            </h2>
          </div>
          <div className={styles.notes}>
            <p className={styles.sectionLead}>
              I write to slow down enough to find out whether I actually
              understand something.
            </p>
            {notes.map((note) => (
              <Link
                className={styles.note}
                href={`/writing/${note.slug}`}
                key={note.slug}
              >
                <span>{note.type}</span>
                <h3>{note.title}</h3>
                <b>↗</b>
              </Link>
            ))}
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.aboutSection} section-reveal`}
          id="about"
          aria-labelledby="about-title"
          data-reveal
        >
          <div className={styles.sectionHeading}>
            <span>04 / A little context</span>
            <h2 id="about-title">
              Curious by nature.
              <br />
              <em>Deliberate by choice.</em>
            </h2>
          </div>
          <div className={styles.aboutLayout}>
            <div className={styles.aboutPhoto}>
              <Image
                src="/profile.webp"
                alt="Abdul Samad"
                width={420}
                height={520}
                sizes="(max-width: 800px) 100vw, 32vw"
              />
            </div>
            <p className={styles.aboutCopy}>
              I am Abdul Samad, a computer science student studying at NUML
              Multan. I learn best by building something, examining what I
              misunderstood, and trying again with better questions.
              <br />
              <br />
              My long-term direction is AI, especially where robotics, natural
              language processing, computer vision, and intelligent systems
              meet. For now, that means strengthening mathematics, algorithms,
              software engineering, and the habit of finishing useful projects.
              <br />
              <br />I became serious about computer science about two and a half
              years ago. The beginning was uneven: I struggled to follow CS50x,
              then returned to it after building a stronger foundation through
              web development. That second attempt changed how I learned.
            </p>
          </div>
        </section>
        <section
          className={`${styles.section} ${styles.contactSection} section-reveal`}
          id="contact"
          aria-labelledby="contact-title"
          data-reveal
        >
          <div className={styles.sectionHeading}>
            <span>05 / Contact</span>
            <h2 id="contact-title">
              Have a question?
              <br />
              <em>Let&apos;s start a conversation.</em>
            </h2>
          </div>
          <ContactForm />
        </section>
      </main>
    </SiteShell>
  );
}
