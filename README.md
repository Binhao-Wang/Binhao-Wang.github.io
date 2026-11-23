# Binhao Wang

A static, Git-first academic website built with Astro and deployed free through GitHub Pages. The visual system is intentionally light and fast, with a conceptual friction map animated entirely in SVG and CSS.

## Local development

```bash
npm install
npm run dev
```

Run the site checks before opening a pull request.

```bash
npm run check
npm run build
```

## Content

- `src/data/site.ts` holds the identity line, biography, portrait, email, and professional links.
- `src/data/research.ts` holds the research chapters (with image slots) and other projects.
- `src/data/people.ts` maps co-author names to profile links used in author lists.
- `src/data/news.ts` holds dated news and talks (home shows the latest three).
- `src/data/photos.ts` holds the captioned fieldwork gallery.
- Images go in `public/images/`; set the matching `src` field to swap a placeholder for a real file.
- Search for `TODO(user)` to find content still needed.
- `src/data/publications.manual.ts` holds the curated publication record.
- `src/data/publications.generated.json` is generated from ORCID when configured.
- `src/data/publications.overrides.json` preserves hand-curated labels and links.
- `src/data/cv.ts` holds the accessible HTML CV record.
- `public/files/Binhao_Wang_CV.pdf` is the downloadable CV.

See [`docs/maintenance.md`](docs/maintenance.md) for the monthly publication workflow.

## GitHub Pages

After the first push, set the repository's Pages source to **GitHub Actions**. The deployment workflow publishes every validated change to the `master` branch.
