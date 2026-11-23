import type { Movie, Photo } from "./site";
import repeaterMoviePoster from "../assets/media/repeaters-n10-4-poster.jpg";
import rheologySlipModes from "../assets/research/rheology-slip-modes.png";
import rheologySchematic from "../assets/research/rheology-schematic-summary.jpg";
import repeaterScaling from "../assets/research/repeater-scaling.png";
import segmentationFaults from "../assets/research/segmentation-east-anatolian-sagaing.png";
import segmentationSchematic from "../assets/research/segmentation-schematic.png";

export type ResearchStatus = "Published" | "Under review" | "In preparation" | "Ongoing";

/** A research figure. `caption` and `credit` show on the Research page. */
export type Figure = Photo & { caption?: string; credit?: string };

export type PaperLink = { label: string; url?: string };

export type ResearchStory = {
  id: string;
  label: string;
  title: string;
  summary: string;
  detail: string;
  status: ResearchStatus;
  citation: string;
  /** Papers that carry the chapter's evidence, newest first. */
  papers: PaperLink[];
  accent: "thermal" | "dynamic" | "tectonic" | "forecast";
  href: string;
  /** Chapter figure, shown on the home card and the Research page. Leave src undefined for the placeholder. */
  image: Figure;
  /** Further figures shown only in the chapter's Research page section. */
  moreFigures?: Figure[];
  /** Home-card image when it should differ from `image` (e.g. a movie poster). */
  cardImage?: Figure;
  /** Movie shown in the chapter's Research page section, before its figures. */
  movie?: Movie;
};

export const researchStories: ResearchStory[] = [
  {
    id: "forecasting",
    label: "Forecasting",
    title: "Can physics forecast earthquakes?",
    summary:
      "Fault-network simulators can generate many synthetic earthquake catalogs and score each against what faults actually did.",
    detail:
      "At Scripps, working with Alice Gabriel, I am building an ensemble-ready, event-driven earthquake simulator for fault networks, with a built-in likelihood so simulated catalogs can be compared with observed seismicity. The goal is forecasts whose assumptions are physical and testable.",
    status: "Ongoing",
    citation: "Postdoctoral project · Scripps Institution of Oceanography",
    papers: [],
    accent: "forecast",
    href: "/research#forecasting",
    // TODO(user): chapter image (simulation still or schematic).
    image: { src: undefined, alt: "Fault-network earthquake simulation" }
  },
  {
    id: "repeating-earthquakes",
    label: "Repeating earthquakes",
    title: "How does earthquake recurrence scale with size?",
    summary:
      "Global repeating earthquakes form a scattered cloud in recurrence time versus moment, bounded by crack-model physics.",
    detail:
      "Repeating earthquakes rupture the same patch again and again, so they act as natural experiments on fault loading and healing. With Baoning Wu and Yijian Zhou I compiled them globally and reinterpreted how recurrence time relates to earthquake size.",
    status: "Published",
    citation: "JGR: Solid Earth · 2026",
    papers: [{ label: "JGR: Solid Earth · 2026", url: "https://doi.org/10.1029/2025JB033433" }],
    accent: "dynamic",
    href: "/research#repeating-earthquakes",
    movie: {
      mp4: "/media/repeaters-n10-4.mp4",
      poster: repeaterMoviePoster,
      label: "Ongoing work",
      alt: "Simulation movie of repeating earthquakes on a fault zone with a main fault and damage-zone cracks.",
      caption:
        "Repeating earthquakes emerge in an earthquake-cycle simulation of a fault zone: a main fault plus damage-zone cracks, with 50 small asperities. Top, map view: each earthquake flashes at its asperity. Bottom, time runs downward, so an asperity that repeats draws an evenly spaced column of dots, a few years apart on the main fault and decades apart on the cracks. Filled markers are repeating asperities and their earthquakes."
    },
    // PIRA: the supplied figure is only 490 px wide; its smallest labels stay soft even at full size.
    // TODO(user): replace src/assets/research/repeater-scaling.png with a higher-resolution export if available.
    image: {
      src: repeaterScaling,
      alt: "Log-log scatter plot of recurrence time, normalized to a creep rate of 23 millimetres per year, against seismic moment for repeating-earthquake sequences from the San Andreas Fault system, the Longitudinal Valley Fault in Taiwan, and subduction zones, with straight scaling lines and a shaded band of reliable detection.",
      caption:
        "Recurrence time of repeating earthquakes, normalized to a 23 mm/yr creep rate, against seismic moment for sequences from California, Taiwan, and subduction zones worldwide. Straight lines mark constant-stress-drop scaling; the shaded band marks the magnitude range where repeaters are reliably detected, and sequences with longer recurrence times likely remain undiscovered."
    }
  },
  {
    id: "segmentation",
    label: "Fault systems",
    title: "What controls the largest earthquakes and how often they recur?",
    summary:
      "Small along-strike changes in long-term slip rate can organize a fault into rupture segments and supercycles.",
    detail:
      "Seismic-cycle models calibrated to historical and geodetic data reproduce why the East Anatolian fault usually ruptures segment by segment, and why the 2023 Mw 7.8 earthquake broke several at once. With Mingqi Liu and Sylvain Barbot, the same question extends to the dynamic segmentation of the Sagaing fault.",
    status: "Published",
    citation: "Geology · 2024 · Science · 2026",
    papers: [
      { label: "Science · 2026 (Sagaing fault)", url: "https://doi.org/10.1126/science.ady3237" },
      { label: "Geology · 2024 (East Anatolian fault)", url: "https://doi.org/10.1130/G52403.1" }
    ],
    accent: "tectonic",
    href: "/research#segmentation",
    image: {
      src: segmentationFaults,
      alt: "Two-panel summary titled slip-rate heterogeneity controls rupture segmentation. Left, the immature East Anatolian Fault: abrupt geometry changes and slip-rate steps of about 20 percent, with most historical ruptures confined to the Amanos, Pazarcık or Erkenek segment, while the 2023 Mw 7.8 earthquake broke all three. Right, the mature Sagaing Fault: smooth geometry and gradual slip-rate changes of about 5 percent, with the 2025 Mw 7.7 earthquake rupturing through a seismic gap.",
      caption:
        "Slip-rate heterogeneity controls rupture segmentation. The immature East Anatolian Fault (left) has abrupt geometry changes and about 20% slip-rate steps, so ruptures stop at persistent segment boundaries until a rare event such as the 2023 Mw 7.8 breaks several at once. The mature Sagaing Fault (right) has smooth geometry and gradual, about 5% slip-rate changes, so its segmentation is dynamic; the 2025 Mw 7.7 earthquake ruptured a long seismic gap.",
      credit: "Wang & Barbot (2024, Geology); Liu et al. (2026, Science)"
    },
    moreFigures: [
      {
        src: segmentationSchematic,
        alt: "Two stacked schematics of earthquakes through time. A, an isolated plate-boundary fault with uniform long-term slip rate, repeats the same Mw 7.8 earthquake. B, a complex fault network with slip trade-off among faults, has heterogeneous long-term slip rate and a sequence of segmented Mw 6.9 to 7.5 earthquakes followed by an Mw 7.8 rupture.",
        caption:
          "Two end-member views. (A) An isolated plate-boundary fault with uniform long-term slip rate repeats characteristic earthquakes. (B) In a fault network, slip trades off among faults, the long-term slip rate varies along strike, and ruptures segment into earthquakes of varying size."
      }
    ]
  },
  {
    id: "rheology",
    label: "Rheology",
    title: "How does rock rheology modulate fault slip?",
    summary:
      "Thermally activated friction can generate crack-like ruptures, pulses, swarms, tremor, and slow slip from one rheology.",
    detail:
      "I use lab-derived, physics-based friction with multiple deformation and healing mechanisms in earthquake-cycle simulations, and hydrothermal friction experiments on natural fault rocks to test how contact quality controls frictional weakening.",
    status: "Published",
    citation: "Earth and Planetary Science Letters · 2023",
    papers: [
      { label: "EPSL · 2023", url: "https://doi.org/10.1016/j.epsl.2022.117983" },
      { label: "Reversal of frictional healing by hydrothermal alteration of contact quality · in preparation" },
      { label: "A rock-centric framework for earthquake dynamics · under review" }
    ],
    accent: "thermal",
    href: "/research#rheology",
    image: {
      src: rheologySchematic,
      alt: "Schematic: a temperature versus slip-velocity map colored by steady-state friction, with an earthquake-cycle loop of loading, shear heating, lubrication, and relocking and cooling, beside sketches of the resulting behaviors: earthquake cycles, stress evolution, ground motion, dynamic embrittlement, earthquake swarms, and tremorgenic slow slip.",
      caption:
        "Rock rheology in temperature and slip-velocity space. A fault loads, heats by shear, may lubricate, then relocks and cools; where it sits on this map sets whether it produces regular earthquake cycles, swarms, dynamic embrittlement, or tremorgenic slow slip."
    },
    moreFigures: [
      {
      src: rheologySlipModes,
      alt: "Phase diagram of simulated fault slip, colored by maximum moment per unit length, against two thermally activated friction parameters. Regions from left to right are labeled crack-like ruptures, pulse-like ruptures, earthquake swarms, tremorgenic slow-slip events, and no seismic events.",
      caption:
        "One thermally activated friction law, many slip modes. As the parameter R_h increases, simulated faults move from crack-like ruptures to pulse-like ruptures, earthquake swarms, tremorgenic slow-slip events, and finally no seismic events; color shows the largest event's moment per unit length."
      }
    ]
  }
];

export type SideProject = {
  title: string;
  people: string;
  status: ResearchStatus;
  url?: string;
};

export const sideProjects: SideProject[] = [
  {
    title: "Evolution of scaled energy during earthquake ruptures",
    people: "Binhao Wang and Heidi Houston · JGR: Solid Earth 2026",
    status: "Published",
    url: "https://doi.org/10.1029/2026JB034166"
  },
  {
    title: "Absolute stresses around two California earthquakes reveal a very weak crust",
    people: "Siyuan Zhang, Heidi Houston, Binhao Wang and Hao Zhang · EPSL 2026",
    status: "Published",
    url: "https://doi.org/10.1016/j.epsl.2026.119972"
  },
  { title: "Tidal stress and tremor energy and abundance", people: "Siyuan Zhang, Heidi Houston, Shuye Huang and Binhao Wang", status: "Under review" },
  { title: "The first minutes of the 2026 Nepal rock–ice avalanche and flash flood", people: "Shuye Huang, Chan-Mao Chen and Binhao Wang", status: "Under review" },
  { title: "Deep rupture of the Caracas earthquake by coseismic embrittlement", people: "Zhen Li, Mingqi Liu, Sezim E. Guvercin, Binhao Wang, Jiangcheng Zhou, Yuankang Xu, Yong Zhang and Sylvain Barbot", status: "Under review" },
  { title: "Ancient Mediterranean earthquakes in the written record of the Roman historian Tacitus", people: "Maxwell Shiller and Binhao Wang", status: "In preparation" }
];
