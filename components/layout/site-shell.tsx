"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";
import { siteConfig } from "@/lib/metadata";
import styles from "./site-shell.module.css";

type SiteShellProps = {
  children: ReactNode;
};

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#learning", label: "Learning" },
  { href: "/writing", label: "Writing" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const finishLoading = () => setFontsReady(true);
    const fontReady = document.fonts?.ready.then(finishLoading);
    const timeout = window.setTimeout(finishLoading, 900);
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const isDark = storedTheme ? storedTheme === "dark" : prefersDark;
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    setDarkMode(isDark);

    return () => {
      void fontReady;
      window.clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname.split("/")[1] || "top");
      return;
    }

    const sectionIds = [
      "top",
      "work",
      "learning",
      "writing",
      "about",
      "contact",
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    let frame = 0;
    const syncActiveSection = () => {
      frame = 0;
      const readingLine = window.scrollY + 150;
      let current = sections[0]?.id ?? "top";

      for (const section of sections) {
        if (section.offsetTop <= readingLine) {
          current = section.id;
        } else {
          break;
        }
      }

      setActiveSection((previous) =>
        previous === current ? previous : current,
      );
    };
    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(syncActiveSection);
      }
    };

    syncActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-reveal-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
    requestAnimationFrame(() => {
      revealElements
        .filter((element) => {
          const bounds = element.getBoundingClientRect();
          return bounds.top < window.innerHeight && bounds.bottom > 0;
        })
        .forEach((element) => {
          element.classList.add("section-reveal-visible");
          revealObserver.unobserve(element);
        });
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      revealObserver.disconnect();
    };
  }, [pathname]);

  function toggleTheme() {
    const nextTheme = darkMode ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setDarkMode(nextTheme === "dark");
  }

  return (
    <div className={styles.shell} aria-busy={!fontsReady}>
      {!fontsReady && (
        <output className={styles.loader} aria-label="Loading">
          <span className={styles.loaderMark}>AS</span>
          <span className={styles.loaderLine} />
        </output>
      )}
      <header className={styles.header}>
        <Link
          className={styles.wordmark}
          href="/"
          aria-label="Abdul Samad home"
        >
          {siteConfig.name}
          <span>.</span>
        </Link>
        <nav
          id="primary-navigation"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <Link
              className={
                activeSection === link.href.replace("/#", "").replace("/", "")
                  ? styles.active
                  : undefined
              }
              href={link.href}
              key={link.href}
              aria-current={
                activeSection === link.href.replace("/#", "").replace("/", "")
                  ? "location"
                  : undefined
              }
              onClick={() => setMenuOpen(false)}
              onNavigate={(event) => {
                if (pathname !== "/" || !link.href.startsWith("/#")) {
                  return;
                }

                const id = link.href.replace("/#", "");
                const target = document.getElementById(id);
                if (target) {
                  event.preventDefault();
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.replaceState(null, "", `/#${id}`);
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.headerActions}>
          <button
            className={styles.themeButton}
            type="button"
            aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
            onClick={toggleTheme}
          >
            <span aria-hidden="true">{darkMode ? "☼" : "☾"}</span>
          </button>
          <button
            className={styles.menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span />
              <span />
            </span>
            <span className={styles.menuLabel}>
              {menuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <span>© 2026 {siteConfig.name}</span>
        <div className={styles.footerLinks}>
          <a href={siteConfig.social.github}>GitHub</a>
          <a href={siteConfig.social.linkedin}>LinkedIn</a>
          <a href={siteConfig.social.x}>X</a>
        </div>
      </footer>
    </div>
  );
}
