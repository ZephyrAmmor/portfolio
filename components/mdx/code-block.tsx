"use client";

import {
  type ComponentPropsWithoutRef,
  isValidElement,
  type ReactNode,
  useState,
} from "react";
import styles from "./mdx-components.module.css";

type CodeBlockProps = ComponentPropsWithoutRef<"pre">;

function getTextContent(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getTextContent).join("");
  }

  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return getTextContent(props.children);
  }

  return "";
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(getTextContent(children));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className={styles.codeFrame}>
      <button
        className={styles.copyButton}
        type="button"
        onClick={copyCode}
        aria-label={copied ? "Code copied" : "Copy code"}
        title={copied ? "Copied" : "Copy code"}
      >
        <svg
          className={styles.copyIcon}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
        </svg>
      </button>
      <pre className={`${styles.pre} ${className ?? ""}`} {...props}>
        {children}
      </pre>
    </div>
  );
}
