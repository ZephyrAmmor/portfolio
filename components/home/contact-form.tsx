"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import styles from "@/app/page.module.css";
import { siteConfig } from "@/lib/metadata";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      String(form.get("subject") || "Portfolio message"),
    );
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        Subject
        <input name="subject" type="text" required />
      </label>
      <label>
        Message
        <textarea name="message" rows={6} required />
      </label>
      <div className={styles.formFooter}>
        <button className={styles.primaryButton} type="submit">
          Open email client <span aria-hidden="true">↗</span>
        </button>
        {sent && (
          <span className={styles.formStatus}>
            Your message is ready to send.
          </span>
        )}
      </div>
    </form>
  );
}
