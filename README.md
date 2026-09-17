# Abdul Samad - Portfolio

A personal portfolio and long-term publication for projects, technical writing,
learning notes, and the questions that shape my work.

## Execution checklist

- [x] Establish the visual direction and homepage information architecture
- [x] Add foundational SEO metadata
- [x] Replace placeholder contact and identity details with Abdul Samad's information
- [x] Create the About page and shared site navigation
- [x] Create the Projects content model from public GitHub repositories
- [x] Add the first genuine MDX article and article detail layout
- [x] Add the Now page or section with an easy update workflow
- [x] Add sitemap, robots file, social image, and structured metadata
- [ ] Test responsive behavior, accessibility, performance, and deployment

## Development

Run the development server:

```bash
pnpm dev
```

The app uses the Next.js App Router and MDX support so writing can become a
first-class part of the site.

## SEO and deployment

Set the public site URL before building for production:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example pnpm build
```

The value is used for canonical URLs, Open Graph metadata, JSON-LD, `sitemap.xml`,
and `robots.txt`. The App Router generates the social image at
`/opengraph-image`.

The sitemap includes the static pages and every published MDX note found in
`content/writing`.
