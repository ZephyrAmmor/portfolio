import type { ComponentPropsWithoutRef } from "react";
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
  a: ({ className, ...props }: ComponentPropsWithoutRef<"a">) => (
    <a className={`${styles.link} ${className ?? ""}`} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className={`${styles.quote} ${className ?? ""}`} {...props} />
  ),
  pre: ({ className, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre className={`${styles.pre} ${className ?? ""}`} {...props} />
  ),
  code: ({ className, ...props }: CodeProps) => (
    <code className={`${styles.code} ${className ?? ""}`} {...props} />
  ),
};
