# Maintenance

The site is intentionally Git-first. Most edits are a small change to one data file followed by a pull request.

Every build runs static checks for local links, anchor targets, page landmarks, title and description metadata, image alt text, one-page-heading structure, and a lightweight asset budget.

## Publications

The curated record lives in `src/data/publications.manual.ts`. ORCID is an import and enrichment source, never the sole authority.

1. Run `npm run sync:publications` locally or trigger the monthly GitHub Action.
2. Review the generated diff in `src/data/publications.generated.json`.
3. Add a matching manual record when a new item needs full author names, a manuscript status, a preprint link, or a featured placement.
4. Add exceptions, feature flags, or corrected links to `src/data/publications.overrides.json`.
5. Merge the generated pull request only when the record is correct.

Google Scholar is linked for visitors but is not scraped.

Preprints and manuscripts under review remain curated in the manual record. The scheduled import only proposes completed ORCID records, and every proposed update arrives as a reviewable pull request.

## Professional details

Update `src/data/site.ts` when the preferred public email, professional links, or affiliation changes.

## Research stories

Update `src/data/research.ts` when a paper changes status or a new research story becomes central to the agenda.
