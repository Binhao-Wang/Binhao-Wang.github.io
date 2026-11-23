import type { ImageMetadata } from "astro";
import portrait from "../assets/portrait.png";
import eafSupercycleThumb from "../assets/media/eaf-supercycle-thumb.jpg";

export type Photo = {
  /** An imported image under src/assets/ (optimized by Astro) or a path under public/. Leave undefined for a placeholder. */
  src?: ImageMetadata | string;
  alt: string;
};

/** A looping hero animation. Files live under public/, e.g. "/media/hero.mp4". */
export type HeroVideo = {
  src: string;
  /** Still frame shown before playback and instead of the video when the viewer prefers reduced motion. */
  poster: string;
  /** What the animation shows (used as the accessible label). */
  alt: string;
  caption?: string;
  /** Optional link shown after the caption, e.g. a narrated version. */
  link?: { href: string; label: string };
};

/** A self-hosted simulation movie (files under public/media/) with an imported poster frame. */
export type Movie = {
  mp4: string;
  /** Optional VP9 alternative, listed first when present. */
  webm?: string;
  poster: ImageMetadata;
  alt: string;
  caption: string;
  /** Short status label shown before the caption, e.g. "Ongoing work". */
  label?: string;
};

/** A YouTube video shown through a click-to-play facade (thumbnail self-hosted under src/assets/). */
export type YouTubeVideo = {
  id: string;
  title: string;
  thumbnail: ImageMetadata;
  caption?: string;
  credit?: string;
};

export const profile = {
  name: "Binhao Wang",
  role: "Earthquake physicist",
  shortRole: "Earthquake physics & forecasting",
  identity: "I build physics-based earthquake forecasts.",
  thesis: "Linking rock rheology to earthquake cycle dynamics",
  description:
    "Binhao Wang builds physics-based earthquake forecasts at Scripps Institution of Oceanography, UC San Diego, grounded in how rock rheology and fault physics control the earthquake cycle.",
  heroLine:
    "I turn what laboratory rocks and fault-zone physics tell us about friction, healing, and stress into earthquake-cycle simulators whose synthetic catalogs can be tested against real seismicity.",
  position: "Cecil H. and Ida M. Green Foundation Postdoctoral Scholar",
  positionSince: "2026",
  postdocAdvisor: "Alice Gabriel",
  affiliation: "Scripps Institution of Oceanography, UC San Diego",
  email: "binhaowang@ucsd.edu" as string | undefined,
  portrait: {
    src: portrait,
    alt: "Binhao Wang smiling outdoors in glasses and a grey jacket, in front of green hedges"
  } as Photo,
  // Home feature visual, first match wins: heroYouTube, then heroVideo, then the conceptual friction map (FaultCycle SVG).
  heroYouTube: {
    id: "84Oz8u-jC48",
    title: "What controls the maximum sizes of earthquakes in the East Anatolian Fault zone (Turkey-Syria)?",
    thumbnail: eafSupercycleThumb,
    caption: "Simulated earthquake supercycles on the East Anatolian Fault system.",
    credit: "Wang & Barbot (2024, Geology)"
  } as YouTubeVideo | undefined,
  // Superseded by the self-hosted loop below; kept for reference.
  heroYouTubeDisabled: true,
  // A looping MP4, e.g. { src: "/media/hero.mp4", poster: "/media/hero.jpg", alt: "…" }.
  heroVideo: {
    src: "/media/eaf-supercycles.mp4",
    poster: "/media/eaf-supercycles-poster.jpg",
    alt: "Simulation of about 13,000 years of earthquake cycles on the East Anatolian Fault system: slip velocity on the 3D fault network, with ruptures lighting up different segments over time, and a time series of maximum slip velocity below.",
    caption: "Simulated earthquake supercycles on the East Anatolian Fault system: ruptures of different sizes and segments over about 13,000 years. Wang & Barbot (2024, Geology).",
    link: { href: "https://www.youtube.com/watch?v=84Oz8u-jC48", label: "Watch on YouTube" }
  } as HeroVideo | undefined,
  researchLine:
    "Earthquake cycle simulations · Laboratory rock experiments · Observational seismology",
  bio: [
    "I am an earthquake physicist and a Cecil H. and Ida M. Green Foundation Postdoctoral Scholar at Scripps Institution of Oceanography, UC San Diego, working with Alice Gabriel. I earned my PhD in Earth Sciences at the University of Southern California in 2026, advised by Sylvain Barbot, and my BS in geophysics at Peking University, advised by Han Yue.",
    "I work on physics-based earthquake cycle simulations building on hydrothermal rock experiment constraints to understand and eventually forecast geophysical observations in nature."
  ],
  // From the old site's research questions.
  questions: [
    "How do earthquakes unfold?",
    "What controls how large an earthquake grows?",
    "How often do large earthquakes occur?",
    "Are small and large earthquakes fundamentally different?"
  ],
  interests: [
    "Physics-based earthquake forecasting",
    "Earthquake-cycle simulation",
    "Rock friction and healing",
    "Repeating earthquakes",
    "Fault-system segmentation"
  ],
  links: {
    github: "https://github.com/Binhao-Wang",
    orcid: "https://orcid.org/0000-0001-6934-1522",
    scholar: "https://scholar.google.com/citations?user=CamiudcAAAAJ&hl=en"
    // TODO(user): add x: "https://x.com/<handle>" if you want it shown.
  }
} as const;

export const navigation = [
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/news", label: "News" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" }
] as const;
