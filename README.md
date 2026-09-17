# Abdul Samad - Portfolio

The personal portfolio and notebook of Abdul Samad, a computer science student
exploring software, artificial intelligence, and computing fundamentals.

The site brings together selected projects, learning notes, technical writing,
and a living record of what I am studying and building.

## Status

The portfolio is ready for an initial public preview and search engine
submission, but it is not considered final yet. The main structure, content
model, navigation, and SEO foundation are in place. Responsive behavior,
accessibility, performance, and the final content pass still need a deliberate
review before calling the site finished.

Live preview: <https://amorzephyr.vercel.app>

## Features

- Home, About, Projects, Now, and Writing pages
- Project data sourced from a typed content model
- MDX writing support with frontmatter and syntax-highlighted code blocks
- Shared navigation and light/dark theme support
- Page metadata, canonical URLs, Open Graph image, JSON-LD, and robots rules
- Generated sitemap for static routes and writing posts

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript
- MDX
- pnpm
- Biome for formatting and linting

## Getting started

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000> in a browser. The development server reloads as
files change.

## Available commands

```bash
pnpm dev       # Start the local development server
pnpm build     # Create a production build
pnpm start     # Serve the production build locally
pnpm lint      # Run Biome checks
pnpm format    # Format supported files with Biome
```

Run the build and lint checks before deploying:

```bash
pnpm lint
pnpm build
```

## Content workflow

### Writing

Add an `.mdx` file to `content/writing`. Each post should begin with the
frontmatter used by the writing index and sitemap:

```mdx
---
title: A useful note
description: A short description for listings and metadata.
date: 2026-09-17
type: Note
---

Write the note here.
```

The filename becomes the URL slug. For example,
`content/writing/a-useful-note.mdx` is available at
`/writing/a-useful-note`.

### Now page

Update `content/now.mdx` when the focus of the work changes. Its `updated`
frontmatter records when the snapshot was last revised.

### Projects and profile data

- Update project entries in `lib/projects.ts`.
- Update certifications in `lib/certifications.ts`.
- Update site identity, links, and contact details in `lib/metadata.ts`.

## SEO and deployment

The public site URL is read from `NEXT_PUBLIC_SITE_URL`. Set it to the canonical
production domain in the deployment provider:

```bash
NEXT_PUBLIC_SITE_URL=https://amorzephyr.vercel.app
```

The URL is used for canonical metadata, Open Graph data, JSON-LD, the sitemap,
and `robots.txt`. If the variable is missing or still contains the template
placeholder, the site falls back to the current Vercel domain.

Generated SEO routes:

- Sitemap: <https://amorzephyr.vercel.app/sitemap.xml>
- Robots file: <https://amorzephyr.vercel.app/robots.txt>
- Social image: <https://amorzephyr.vercel.app/opengraph-image>

To submit the sitemap to Google Search Console, add `sitemap.xml` under the
property for `amorzephyr.vercel.app`.

## Project structure

```text
app/                 Pages, layouts, metadata, sitemap, and robots routes
components/          Shared site, theme, and MDX components
content/             Editable Now page and writing content
lib/                 Metadata, project data, certifications, and MDX helpers
public/               Static public assets
styles/               Shared page styles
```

## Before calling it final

- Test the main pages at mobile, tablet, and desktop widths.
- Check keyboard navigation, focus states, contrast, and reduced motion.
- Run a production deployment and verify the generated metadata and SEO routes.
- Replace temporary writing fixtures with finished notes or remove them.
- Review copy, links, contact details, and project descriptions.
