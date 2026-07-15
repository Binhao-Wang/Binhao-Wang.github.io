export type PublicationStatus = "Published" | "Under review" | "In preparation";

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: PublicationStatus;
  doi?: string;
  url?: string;
  note?: string;
  featured?: boolean;
};

export const manualPublications: Publication[] = [
  {
    title: "Pulse-like ruptures, seismic swarms, and tremorgenic slow-slip events with thermally activated friction",
    authors: "Binhao Wang and Sylvain Barbot",
    venue: "Earth and Planetary Science Letters 603, 117983",
    year: 2023,
    status: "Published",
    doi: "10.1016/j.epsl.2022.117983",
    url: "https://doi.org/10.1016/j.epsl.2022.117983",
    featured: true
  },
  {
    title: "Rupture segmentation on the East Anatolian fault controlled by along-strike variations in long-term slip rates in a structurally complex fault system",
    authors: "Binhao Wang and Sylvain Barbot",
    venue: "Geology 52(10), 779–783",
    year: 2024,
    status: "Published",
    doi: "10.1130/G52403.1",
    url: "https://doi.org/10.1130/G52403.1",
    featured: true
  },
  {
    title: "Evolution of energy-to-moment ratio during earthquake ruptures",
    authors: "Binhao Wang and Heidi Houston",
    venue: "Journal of Geophysical Research: Solid Earth",
    year: 2025,
    status: "Under review"
  },
  {
    title: "Global repeating earthquakes reveal a scattered recurrence time-moment scaling consistent with crack models in a complex fault zone",
    authors: "Binhao Wang, Baoning Wu, and Yijian Zhou",
    venue: "Journal of Geophysical Research: Solid Earth",
    year: 2026,
    status: "Under review",
    doi: "10.22541/au.176376455.59548849/v1",
    url: "https://doi.org/10.22541/au.176376455.59548849/v1",
    note: "Preprint"
  },
  {
    title: "Simulating fully dynamic earthquake cycles using lab-derived, physics-based friction with multiple deformation and healing mechanisms",
    authors: "Binhao Wang, Siyuan Liu, and Sylvain Barbot",
    venue: "Manuscript in preparation",
    year: 2026,
    status: "In preparation"
  },
  {
    title: "Reversal of frictional healing by hydrothermal alteration of contact quality",
    authors: "Binhao Wang and Sylvain Barbot",
    venue: "AGU Advances",
    year: 2026,
    status: "Under review"
  },
  {
    title: "A rock-centric framework for earthquake dynamics",
    authors: "Siyuan Liu, Binhao Wang, and collaborators",
    venue: "Science",
    year: 2026,
    status: "Under review"
  },
  {
    title: "Dynamic segmentation of the Sagaing fault",
    authors: "Siyuan Liu, Binhao Wang, and collaborators",
    venue: "Science",
    year: 2026,
    status: "Published",
    doi: "10.1126/science.ady3237",
    url: "https://doi.org/10.1126/science.ady3237"
  },
  {
    title: "Mapping of absolute stresses around two California earthquakes reveals a very weak crust",
    authors: "Shengji Zhang, Heidi Houston, Binhao Wang, and Huai Zhang",
    venue: "Earth and Planetary Science Letters 682, 119972",
    year: 2026,
    status: "Published",
    doi: "10.1016/j.epsl.2026.119972",
    url: "https://doi.org/10.1016/j.epsl.2026.119972"
  },
  {
    title: "Favorable tidal stress triggers both more energetic and more abundant tremors",
    authors: "Shengji Zhang, Heidi Houston, Shanshan Huang, and Binhao Wang",
    venue: "Manuscript under review",
    year: 2026,
    status: "Under review"
  },
  {
    title: "The influence of ancient Mediterranean earthquakes on their written records: a robust catalog built through an interdisciplinary case study of the Roman historian Tacitus",
    authors: "M. Shiller and Binhao Wang",
    venue: "Manuscript under review",
    year: 2026,
    status: "Under review"
  }
];
