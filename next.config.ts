import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      "remark-mdx-frontmatter",
      "remark-math",
    ],
    rehypePlugins: [
      ["rehype-katex", { output: "htmlAndMathml" }],
      ["rehype-pretty-code", { theme: "monokai" }],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);
