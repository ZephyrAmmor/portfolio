"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import { learningChapters } from "@/lib/learning";

export function LearningTimeline() {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  return (
    <div className={styles.timeline}>
      {learningChapters.map((chapter, index) => {
        const isExpanded = expandedChapter === chapter.title;

        return (
          <article
            className={`${styles.timelineItem} ${isExpanded ? styles.timelineItemExpanded : ""}`}
            key={chapter.title}
          >
            <span className={styles.timelineMarker}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className={styles.timelineContent}>
              <button
                className={styles.timelineToggle}
                type="button"
                aria-expanded={isExpanded}
                onClick={() =>
                  setExpandedChapter((current) =>
                    current === chapter.title ? null : chapter.title,
                  )
                }
              >
                <span>
                  <strong>{chapter.title}</strong>
                  <small>{isExpanded ? "Collapse" : "Read more"}</small>
                </span>
                <b aria-hidden="true">{isExpanded ? "−" : "+"}</b>
              </button>
              <div className={styles.timelineDetails}>
                <p>{chapter.body}</p>
                <p className={styles.timelineTakeaway}>{chapter.takeaway}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
