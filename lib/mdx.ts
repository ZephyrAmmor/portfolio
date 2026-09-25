import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

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
