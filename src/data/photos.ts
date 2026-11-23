import type { Photo } from "./site";

export type GalleryPhoto = Photo & {
  caption: string;
  place: string;
  year: string;
};

// Captions, including who was there, come from the field and lab section of the November 2026 CV.
// No photos exist yet, so every tile shows a placeholder until `src` is set.
// TODO(user): add photos to public/images/photos/ and set `src` (and a specific `alt`) on each entry;
// add meeting photos (AGU, SCEC, GRC) with captions naming the people in them.
export const photos: GalleryPhoto[] = [
  { caption: "Hydrothermal triaxial friction experiments on Alpine Fault samples from the Deep Fault Drilling Project (DFDP), supervised by Hiroko Kitajima", place: "Texas A&M University", year: "2022", alt: "Friction experiment laboratory" },
  { caption: "Installing seismometers and gravity meters with William Frank and Brent Minchew (MIT); structural geology with John Platt and Sylvain Barbot", place: "Catalina Island, California", year: "2024", alt: "Catalina Island fieldwork" },
  { caption: "Short-period seismometer deployment on the Xiaojiang Fault Zone, east of the Tibetan Plateau", place: "Daliangshan, Sichuan, China", year: "2020", alt: "Seismometer deployment in Sichuan" },
  { caption: "The creeping southern San Andreas Fault near the Salton Sea, with Alexis Ault and Ashley Griffith", place: "California", year: "2025", alt: "Southern San Andreas Fault" },
  { caption: "Fault gouge, damage zone and a paleoseismic trench on the San Andreas Fault, with Jean-Philippe Avouac", place: "San Gabriel Mountains, California", year: "2024", alt: "San Andreas fault-zone field site" },
  { caption: "Norumbega–Two Lights Fault Zone and pseudotachylyte, GRC Rock Deformation field trip led by Emily Peterman", place: "Cape Elizabeth, Maine", year: "2024", alt: "Coastal fault-zone outcrop in Maine" }
];
