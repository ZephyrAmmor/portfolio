"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/metadata";
import styles from "./site-shell.module.css";
import { ThemeToggle } from "./theme-toggle";

type SiteShellProps = {
  children: ReactNode;
};

const links = [
  { href: "/now", label: "Now" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Link
          className={styles.wordmark}
          href="/"
          aria-label="Abdul Samad home"
        >
          {siteConfig.name}
          <span>.</span>
        </Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          {links.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                className={isActive ? styles.active : undefined}
                href={link.href}
                key={link.href}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className={styles.headerActions}>
          <a className={styles.headerLink} href={`mailto:${siteConfig.email}`}>
            Get in touch <span aria-hidden="true">↑</span>
          </a>
          <ThemeToggle />
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
