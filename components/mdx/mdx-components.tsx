import type { ComponentPropsWithoutRef } from "react";
import { CodeBlock } from "./code-block";
import styles from "./mdx-components.module.css";

type CodeProps = ComponentPropsWithoutRef<"code">;

type HeadingProps = ComponentPropsWithoutRef<"h2">;

export const mdxComponents = {
  h2: ({ className, ...props }: HeadingProps) => (
    <h2 className={`${styles.heading} ${className ?? ""}`} {...props} />
  ),
  h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3 className={`${styles.subheading} ${className ?? ""}`} {...props} />
  ),
  p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p className={`${styles.paragraph} ${className ?? ""}`} {...props} />
  ),
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul className={`${styles.list} ${className ?? ""}`} {...props} />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol className={`${styles.list} ${className ?? ""}`} {...props} />
  ),
  a: ({ className, ...props }: ComponentPropsWithoutRef<"a">) => (
    <a className={`${styles.link} ${className ?? ""}`} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className={`${styles.quote} ${className ?? ""}`} {...props} />
  ),
  pre: CodeBlock,
  code: ({ className, ...props }: CodeProps) => (
    <code className={`${styles.code} ${className ?? ""}`} {...props} />
  ),
};
