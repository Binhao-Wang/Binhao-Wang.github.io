export const profile = {
  name: "Binhao Wang",
  role: "Earthquake physicist",
  shortRole: "Earthquake physics",
  thesis: "Linking rock rheology to earthquake-cycle dynamics",
  description:
    "I study how evolving rock rheology shapes earthquake cycles, from microscopic fault contacts to dynamic rupture and fault-system segmentation.",
  email: "binhao.wang@usc.edu",
  affiliation: "Department of Earth Sciences, University of Southern California",
  researchLine:
    "Earthquake cycle simulations · Laboratory rock experiments · Observational seismology",
  links: {
    github: "https://github.com/Binhao-Wang",
    orcid: "https://orcid.org/0000-0001-6934-1522"
  }
} as const;

export const homeUpdates = [
  {
    year: "2026",
    title: "Green Foundation Postdoctoral Scholarship at UC San Diego",
    kind: "Award"
  },
  {
    year: "2026",
    title: "Frictional weakening by hydrothermal alteration of contact quality",
    kind: "Presentation"
  },
  {
    year: "2026",
    title: "Mapping absolute stresses around two California earthquakes reveals a very weak crust",
    kind: "Publication"
  }
] as const;

export const navigation = [
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" }
] as const;
