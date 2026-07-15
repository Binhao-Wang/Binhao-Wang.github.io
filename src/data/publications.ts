import generatedPublications from "./publications.generated.json";
import publicationOverrides from "./publications.overrides.json";
import { manualPublications, type Publication } from "./publications.manual";

type PublicationOverride = Partial<Publication>;
type PublicationOverrides = {
  byDoi: Record<string, PublicationOverride>;
};

const overrides = publicationOverrides as PublicationOverrides;

const normalizeDoi = (doi?: string) => doi?.toLowerCase().replace(/^https?:\/\/doi\.org\//, "");

const generated = generatedPublications as Publication[];
const manualDois = new Set(manualPublications.map((publication) => normalizeDoi(publication.doi)).filter(Boolean));

export const publications = [...manualPublications, ...generated.filter((publication) => !manualDois.has(normalizeDoi(publication.doi)))]
  .map((publication) => ({
    ...publication,
    ...(publication.doi ? overrides.byDoi[normalizeDoi(publication.doi) ?? ""] : undefined)
  }))
  .sort((left, right) => right.year - left.year || left.title.localeCompare(right.title));
