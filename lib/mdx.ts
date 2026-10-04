import fs from "node:fs";
import path from "node:path";
import { compile, run } from "@mdx-js/mdx";
import matter from "gray-matter";
import type { MDXComponents, MDXContent } from "mdx/types";
import { createElement } from "react";
import * as runtime from "react/jsx-runtime";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";

const writingDirectory = path.join(process.cwd(), "content", "writing");

export type WritingPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  type: string;
};

function toPost(slug: string, source: string): WritingPost {
  const { data } = matter(source);

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    updated: String(data.updated ?? data.date ?? ""),
    type: String(data.type ?? "Note"),
  };
}

export function getWritingPosts(): WritingPost[] {
  return fs
    .readdirSync(writingDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const source = fs.readFileSync(
        path.join(writingDirectory, fileName),
        "utf8",
      );
      return toPost(slug, source);
    })
    .sort((first, second) => second.date.localeCompare(first.date));
}

export function getWritingPost(slug: string): WritingPost | undefined {
  const filePath = path.join(writingDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  return toPost(slug, fs.readFileSync(filePath, "utf8"));
}

export async function getWritingPostContent(
  slug: string,
  components: MDXComponents,
): Promise<MDXContent | undefined> {
  const filePath = path.join(writingDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  const { content } = matter(fs.readFileSync(filePath, "utf8"));
  const compiled = await compile(content, {
    outputFormat: "function-body",
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeKatex, { output: "htmlAndMathml" }],
      [rehypePrettyCode, { theme: "monokai" }],
    ],
  });
  const { default: Content } = await run(compiled, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return (props) => createElement(Content, { ...props, components });
}
