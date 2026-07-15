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

- `src/data/site.ts` holds the biography and professional links.
- `src/data/research.ts` holds the featured research stories.
- `src/data/publications.manual.ts` holds the curated publication record.
- `src/data/publications.generated.json` is generated from ORCID when configured.
- `src/data/publications.overrides.json` preserves hand-curated labels and links.
- `src/data/cv.ts` holds the accessible HTML CV record.
- `public/files/Binhao_Wang_CV.pdf` is the downloadable CV.

See [`docs/maintenance.md`](docs/maintenance.md) for the monthly publication workflow.

## GitHub Pages

After the first push, set the repository's Pages source to **GitHub Actions**. The deployment workflow publishes every validated change to the `master` branch.
