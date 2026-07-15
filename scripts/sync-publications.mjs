import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const output = new URL("../src/data/publications.generated.json", import.meta.url);
const orcid = process.env.ORCID_ID?.trim();

if (!orcid) {
  console.log("Skipping publication sync. Set ORCID_ID to enable the public ORCID import.");
  process.exit(0);
}

const response = await fetch(`https://pub.orcid.org/v3.0/${orcid}/works`, {
  headers: { Accept: "application/json", "User-Agent": "binhao-wang.github.io publication sync" }
});

if (!response.ok) {
  throw new Error(`ORCID returned ${response.status} ${response.statusText}`);
}

const record = await response.json();
const publicationType = new Set(["journal-article", "conference-paper", "book-chapter"]);
const importedKeys = new Set();

const publications = (record.group ?? [])
  .flatMap((group) => group["work-summary"] ?? [])
  .filter((work) => publicationType.has(work.type))
  .map((work) => {
    const externalIds = work["external-ids"]?.["external-id"] ?? [];
    const doi = externalIds.find((identifier) => identifier["external-id-type"] === "doi")?.["external-id-value"];
    const year = Number(work["publication-date"]?.year?.value ?? work["created-date"]?.value?.slice(0, 4));

    return {
      title: work.title?.title?.value?.trim(),
      authors: "Imported from ORCID",
      venue: work["journal-title"]?.value?.trim() || "Publication record",
      year,
      status: "Published",
      ...(doi ? { doi, url: `https://doi.org/${doi}` } : {})
    };
  })
  .filter((work) => work.title && Number.isFinite(work.year))
  .filter((work) => {
    const key = (work.doi ?? work.title.toLowerCase() + "|" + work.year).toLowerCase();
    if (importedKeys.has(key)) {
      return false;
    }
    importedKeys.add(key);
    return true;
  })
  .sort((left, right) => right.year - left.year || left.title.localeCompare(right.title));

const previous = await readFile(output, "utf8").catch(() => "[]");
const next = `${JSON.stringify(publications, null, 2)}\n`;

if (previous !== next) {
  await writeFile(output, next);
  console.log(`Updated ${publications.length} publications from ORCID in ${root}`);
} else {
  console.log("Publication record is already current.");
}
