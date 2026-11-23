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

// Source of truth: CV of November 2026. Under-review items carry no journal name on purpose.
// In-preparation items are listed by the user's decision (November 2026); they carry no journal or DOI.
// The dynamic earthquake-cycle manuscript (Wang, Liu & Barbot) is intentionally not shown.
export const manualPublications: Publication[] = [
  {
    title: "Evolution of scaled energy during earthquake ruptures",
    authors: "Binhao Wang and Heidi Houston",
    venue: "Journal of Geophysical Research: Solid Earth 131, e2026JB034166",
    year: 2026,
    status: "Published",
    doi: "10.1029/2026JB034166",
    url: "https://doi.org/10.1029/2026JB034166",
    featured: true
  },
  {
    title:
      "Reinterpreting the recurrence time–moment relation of global repeating earthquakes: A scattered data cloud bounded by crack-model physics",
    authors: "Binhao Wang, Baoning Wu, and Yijian Zhou",
    venue: "Journal of Geophysical Research: Solid Earth 131, e2025JB033433",
    year: 2026,
    status: "Published",
    doi: "10.1029/2025JB033433",
    url: "https://doi.org/10.1029/2025JB033433",
    featured: true
  },
  {
    title: "Mapping of absolute stresses around two California earthquakes reveals a very weak crust",
    authors: "Siyuan Zhang, Heidi Houston, Binhao Wang, and Hao Zhang",
    venue: "Earth and Planetary Science Letters 682, 119972",
    year: 2026,
    status: "Published",
    doi: "10.1016/j.epsl.2026.119972",
    url: "https://doi.org/10.1016/j.epsl.2026.119972"
  },
  {
    title: "Dynamic segmentation of the Sagaing fault",
    authors: "Mingqi Liu, Binhao Wang, Sezim E. Guvercin, Zhen Li, Teng Wang, Chuanjin Liu, Lingyun Ji, and Sylvain Barbot",
    venue: "Science 392, 617–623",
    year: 2026,
    status: "Published",
    doi: "10.1126/science.ady3237",
    url: "https://doi.org/10.1126/science.ady3237",
    featured: true
  },
  {
    title:
      "Rupture segmentation on the East Anatolian fault (Turkey) controlled by along-strike variations in long-term slip rates in a structurally complex fault system",
    authors: "Binhao Wang and Sylvain Barbot",
    venue: "Geology 52(10), 779–783",
    year: 2024,
    status: "Published",
    doi: "10.1130/G52403.1",
    url: "https://doi.org/10.1130/G52403.1",
    featured: true
  },
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
    title: "Favorable tidal stress triggers both more energetic and more abundant tremors",
    authors: "Siyuan Zhang, Heidi Houston, Shuye Huang, and Binhao Wang",
    venue: "Under review",
    year: 2026,
    status: "Under review"
  },
  {
    title: "A rock-centric framework for earthquake dynamics",
    authors: "Mingqi Liu, Binhao Wang, Baoning Wu, Sezim E. Guvercin, Lei Zhang, Zekang Yang, Caroline Seyler, John Platt, and Sylvain Barbot",
    venue: "Under review",
    year: 2026,
    status: "Under review"
  },
  {
    title: "The first minutes of the 2026 Nepal rock–ice avalanche and flash flood",
    authors: "Shuye Huang, Chan-Mao Chen, and Binhao Wang",
    venue: "Under review",
    year: 2026,
    status: "Under review"
  },
  {
    title: "Deep rupture of the Caracas earthquake by coseismic embrittlement",
    authors: "Zhen Li, Mingqi Liu, Sezim E. Guvercin, Binhao Wang, Jiangcheng Zhou, Yuankang Xu, Yong Zhang, and Sylvain Barbot",
    venue: "Under review",
    year: 2026,
    status: "Under review"
  },
  {
    title: "Reversal of frictional healing by hydrothermal alteration of contact quality",
    authors: "Binhao Wang and Sylvain Barbot",
    venue: "In preparation",
    year: 2026,
    status: "In preparation"
  },
  {
    title:
      "The influence of ancient Mediterranean earthquakes on their written records: a robust catalog built through an interdisciplinary case study of the Roman historian Tacitus",
    authors: "Maxwell Shiller and Binhao Wang",
    venue: "In preparation",
    year: 2026,
    status: "In preparation"
  }
];
