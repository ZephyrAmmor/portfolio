import Image from "next/image";
import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { createMetadata, siteConfig } from "@/lib/metadata";
import styles from "@/styles/pages.module.css";

export const metadata: Metadata = createMetadata(
  "About",
  `Learn about ${siteConfig.name}, a computer science student in Multan building strong foundations in software and artificial intelligence.`,
);

export default function AboutPage() {
  return (
    <SiteShell>
      <main className={styles.page}>
        <section className={styles.aboutHero} aria-label="About introduction">
          <div className={styles.aboutText}>
            <p className={styles.eyebrow}>About</p>
            <h1 className={styles.title}>Still learning. Paying attention.</h1>
            <p className={styles.intro}>
              I am Abdul Samad, a computer science student studying at NUML
              Multan. This page is about the direction I am taking, not a claim
              that I have already arrived.
            </p>
          </div>
          <div className={styles.photoWrap}>
            <Image
              src="/profile.webp"
              alt="Abdul Samad"
              width={480}
              height={560}
              priority
              className={styles.profileImage}
            />
          </div>
        </section>
        <hr className={styles.rule} />
        <section
          className={styles.contentGrid}
          aria-labelledby="background-title"
        >
          <h2 id="background-title">Background</h2>
          <div className={styles.copy}>
            <p>
              I became serious about computer science about two and a half years
              ago. The beginning was uneven: I struggled to follow CS50x, then
              returned to it after building a stronger foundation through web
              development. That second attempt changed how I learned.
            </p>
            <p>
              Today I am strengthening my foundations in algorithms,
              mathematics, systems, and software engineering while exploring the
              intersection of software and intelligent systems.
            </p>
            <p>
              I learn best by building something, examining what I
              misunderstood, and trying again with better questions. This site
              is where I keep that process visible.
            </p>
          </div>
        </section>
        <section
          className={styles.contentGrid}
          aria-labelledby="interests-title"
        >
          <h2 id="interests-title">Interests</h2>
          <div className={styles.copy}>
            <p>
              My long-term direction is AI, especially where robotics, natural
              language processing, computer vision, and intelligent systems
              meet. I am deliberately keeping the foundation broad: linear
              algebra, discrete mathematics, calculus, proof, databases, and
              systems all matter to the kind of engineer I want to become.
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
