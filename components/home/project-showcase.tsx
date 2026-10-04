"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/page.module.css";
import { featuredProjects } from "@/lib/projects";

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof featuredProjects)[number] | null
  >(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", closeOnEscape);
      const closeOnOutsideClick = (event: MouseEvent) => {
        if (
          dialogRef.current &&
          !dialogRef.current.contains(event.target as Node)
        ) {
          setSelectedProject(null);
        }
      };
      document.addEventListener("mousedown", closeOnOutsideClick);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", closeOnEscape);
        document.removeEventListener("mousedown", closeOnOutsideClick);
      };
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  return (
    <>
      <div className={styles.projectGrid}>
        {featuredProjects.map((project, index) => (
          <article className={styles.card} key={project.name}>
            <button
              type="button"
              className={styles.cardToggle}
              onClick={() => setSelectedProject(project)}
              aria-label={`Open details for ${project.name}`}
            >
              <div className={styles.cardTop}>
                <span>0{index + 1}</span>
                <span>{project.language}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span className={styles.cardActionLabel}>
                View project journey <span aria-hidden="true">↗</span>
              </span>
            </button>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div className={styles.dialogBackdrop}>
          <div
            ref={dialogRef}
            className={styles.projectDialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
          >
            <button
              type="button"
              className={styles.dialogClose}
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>
            <div className={styles.dialogKicker}>
              {selectedProject.language} · {selectedProject.context}
            </div>
            <h2 id="project-dialog-title">{selectedProject.name}</h2>
            <p className={styles.dialogDescription}>
              {selectedProject.description}
            </p>
            <div className={styles.dialogRule} />
            <p className={styles.dialogStory}>{selectedProject.story}</p>
            <div className={styles.cardLinks}>
              <a href={selectedProject.url} target="_blank" rel="noreferrer">
                Repository <span aria-hidden="true">↗</span>
              </a>
              {selectedProject.livePreview && (
                <a
                  href={selectedProject.livePreview}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live preview <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
