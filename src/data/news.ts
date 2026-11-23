export type NewsKind = "Talk" | "Award" | "Paper" | "Milestone" | "Position" | "Meeting";

export type NewsItem = {
  /** Sort key (ISO-like). Where the month is unknown, the key is approximate and `when` shows only the year. */
  date: string;
  /** Date as displayed. */
  when: string;
  kind: NewsKind;
  text: string;
  url?: string;
};

// Newest first. Sources: the user, the November 2026 CV (presentations, papers, awards), and the old USC Google Site.
// TODO(user): months for items shown with a year only (2026 papers, PhD defense talk, SSA 2026, invited talks).
export const news: NewsItem[] = [
  {
    date: "2026-12",
    when: "Dec 2026",
    kind: "Meeting",
    // TODO(user): exact AGU26 title, session and format, then drop "(planned)". Not yet in the CV.
    text: "AGU26 (planned): repeating earthquakes in a loaded fault network."
  },
  {
    date: "2026-10",
    when: "Oct 2026",
    kind: "Position",
    text: "Started as a Cecil H. and Ida M. Green Foundation Postdoctoral Scholar at Scripps Institution of Oceanography, UC San Diego, with Alice Gabriel."
  },
  {
    date: "2026-08-31",
    when: "Aug 2026",
    kind: "Milestone",
    text: "PhD in Earth Sciences conferred by the University of Southern California (advisor: Sylvain Barbot)."
  },
  {
    date: "2026-08",
    when: "2026",
    kind: "Talk",
    text: "Invited talk, UCSD IGPP Geophysics & Planetary Seminar: “Linking rock rheology to earthquake cycle dynamics.”"
  },
  {
    date: "2026-08",
    when: "2026",
    kind: "Milestone",
    text: "PhD defense at USC: “Linking rock rheology to earthquake cycle dynamics.”"
  },
  {
    date: "2026-07",
    when: "2026",
    kind: "Paper",
    text: "Dynamic segmentation of the Sagaing fault, published in Science (Mingqi Liu, Binhao Wang, Sezim E. Guvercin, Zhen Li, Teng Wang, Chuanjin Liu, Lingyun Ji and Sylvain Barbot).",
    url: "https://doi.org/10.1126/science.ady3237"
  },
  {
    date: "2026-06",
    when: "2026",
    kind: "Paper",
    text: "Evolution of scaled energy during earthquake ruptures, published in JGR: Solid Earth (with Heidi Houston).",
    url: "https://doi.org/10.1029/2026JB034166"
  },
  {
    date: "2026-05",
    when: "2026",
    kind: "Paper",
    text: "Recurrence time–moment relation of global repeating earthquakes, published in JGR: Solid Earth (with Baoning Wu and Yijian Zhou).",
    url: "https://doi.org/10.1029/2025JB033433"
  },
  {
    date: "2026-04-15",
    when: "2026",
    kind: "Award",
    text: "Awarded the Cecil and Ida Green Foundation Postdoctoral Fellowship at UC San Diego (2026–2028)."
  },
  {
    date: "2026-04",
    when: "2026",
    kind: "Meeting",
    text: "Oral presentation on quasi-periodic repeating earthquakes at SSA 2026."
  },
  {
    date: "2026-03",
    when: "2026",
    kind: "Paper",
    text: "Absolute stresses around two California earthquakes reveal a very weak crust, published in EPSL (Siyuan Zhang, Heidi Houston, Binhao Wang and Hao Zhang).",
    url: "https://doi.org/10.1016/j.epsl.2026.119972"
  },
  {
    date: "2026-01",
    when: "Jan 2026",
    kind: "Talk",
    text: "Presented the repeating-earthquake project at the China Earthquake Administration (online)."
  },
  {
    date: "2025-12",
    when: "Dec 2025",
    kind: "Meeting",
    text: "AGU25: oral on earthquake cycles with lab-derived friction and a poster on repeating earthquakes."
  },
  {
    date: "2025-10-15",
    when: "Oct 15, 2025",
    kind: "Talk",
    text: "Invited talk, Caltech Seismo Lab Brown Bag Seminar: “Quasi-periodic repeating earthquakes may follow normal 1/3 scaling laws.”"
  },
  {
    date: "2025-09",
    when: "Aug–Sep 2025",
    kind: "Meeting",
    text: "Presented at the SCEC Community Geological Framework, Thermal, and Rheological Model workshops and the SCEC Annual Meeting."
  },
  {
    date: "2025-06",
    when: "2025",
    kind: "Talk",
    text: "Invited talks at Zhejiang University and Tongji University on rupture segmentation of the East Anatolian fault."
  },
  {
    date: "2024-12",
    when: "Dec 2024",
    kind: "Meeting",
    text: "AGU24 oral: simulating earthquake cycles with lab-derived, physics-based friction."
  },
  {
    date: "2024-08-22",
    when: "Aug 22, 2024",
    kind: "Milestone",
    text: "Passed the qualifying exam and became a PhD candidate."
  },
  {
    date: "2024-07",
    when: "Jul 2024",
    kind: "Paper",
    text: "East Anatolian fault segmentation paper published online in Geology.",
    url: "https://doi.org/10.1130/G52403.1"
  },
  {
    date: "2024-06",
    when: "2024",
    kind: "Meeting",
    text: "Poster at the Gordon Research Conference on Rock Deformation."
  },
  {
    date: "2023-12",
    when: "Dec 2023",
    kind: "Meeting",
    text: "AGU23 oral (S22B-02): East Anatolian fault rupture segmentation."
  },
  {
    date: "2023-06",
    when: "2023",
    kind: "Talk",
    text: "Invited talk at the Institute of Geology, China Earthquake Administration, on thermally strengthening faults."
  },
  {
    date: "2023-05",
    when: "2023",
    kind: "Meeting",
    text: "Poster at the Cargèse School on Subduction Zone Processes (with Heidi Houston)."
  },
  {
    date: "2022-06",
    when: "2022",
    kind: "Talk",
    text: "Invited talk at Texas A&M University on thermally activated friction."
  },
  {
    date: "2021-12",
    when: "Dec 2021",
    kind: "Meeting",
    text: "AGU21 oral: ruptures, swarms and slow slip on velocity-weakening, thermally strengthening faults."
  }
];
