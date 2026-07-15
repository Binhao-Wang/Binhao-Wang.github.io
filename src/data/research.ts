export type ResearchStatus = "Published" | "Under review" | "In preparation";

export type ResearchStory = {
  id: string;
  label: string;
  title: string;
  summary: string;
  detail: string;
  status: ResearchStatus;
  citation: string;
  accent: "thermal" | "dynamic" | "tectonic";
  href: string;
};

export const researchStories: ResearchStory[] = [
  {
    id: "rupture-style",
    label: "Rheology",
    title: "How rocks choose to slip",
    summary:
      "Thermally activated friction can generate crack-like ruptures, pulses, swarms, tremor, and slow slip from one rheology.",
    detail:
      "I use physics-based rupture simulations to ask how heat, velocity, and material response reshape the spectrum of fault slip behavior.",
    status: "Published",
    citation: "Earth and Planetary Science Letters · 2023",
    accent: "thermal",
    href: "/research#rupture-style"
  },
  {
    id: "dynamic-asperities",
    label: "Earthquake cycle",
    title: "The seismogenic zone is not fixed",
    summary:
      "A fault patch can change from stable to unstable as velocity and temperature evolve through an earthquake cycle.",
    detail:
      "This work explains deep coseismic rupture, overlapping afterslip, and the migration of locked patches without prescribing static asperities.",
    status: "In preparation",
    citation: "Lab-calibrated dynamic earthquake-cycle modeling",
    accent: "dynamic",
    href: "/research#dynamic-asperities"
  },
  {
    id: "segmentation",
    label: "Fault systems",
    title: "Why faults do not repeat the same earthquake",
    summary:
      "Small along-strike changes in long-term slip rate can organize a fault into rupture segments and supercycles.",
    detail:
      "I connect tectonic loading heterogeneity to the emergence of single- and multi-segment earthquakes in real fault systems.",
    status: "Published",
    citation: "Geology · 2024",
    accent: "tectonic",
    href: "/research#segmentation"
  }
];

