export type CvEntry = {
  title: string;
  institution?: string;
  location?: string;
  dates?: string;
  detail?: string;
};

export const cv = {
  updated: "April 13, 2026",
  education: [
    {
      title: "PhD candidate, Department of Earth Sciences",
      institution: "University of Southern California",
      location: "Los Angeles, California, US",
      dates: "2021–June 2026 (expected)",
      detail: "Advisor: Sylvain Barbot"
    },
    {
      title: "BS, Geophysics, School of Earth and Space Science",
      institution: "Peking University",
      location: "Beijing, China",
      dates: "2017–2021",
      detail: "Merit Students Honor · Advisor: Han Yue"
    }
  ] satisfies CvEntry[],
  ongoingProjects: [
    {
      title:
        "Simulating fully dynamic earthquake cycles using lab-derived, physics-based friction with multiple deformation and healing mechanisms",
      detail: "Binhao Wang, Siyuan Liu, and Sylvain Barbot · in preparation"
    },
    {
      title:
        "Negative healing in slide-hold-slide experiments explained by contact quality as a second state variable",
      detail: "Binhao Wang, Sylvain Barbot, and Hiroko Kitajima · in preparation"
    }
  ] satisfies CvEntry[],
  teaching: [
    {
      title: "GEOL440 Geophysics and Geoengineering",
      institution: "University of Southern California",
      dates: "Spring 2022, Spring 2024",
      detail:
        "Heat, elasticity, and fluids in Earth’s lithosphere. Analytical and numerical geodynamics, with geodata visualization in GMT and MATLAB/Python."
    },
    {
      title: "GEOL425 Data Analysis in Earth & Environmental Sciences",
      institution: "University of Southern California",
      dates: "Fall 2023, Fall 2025",
      detail:
        "Statistics, spectral analysis, and visualization in Python for advanced undergraduate and graduate students."
    },
    {
      title: "GEOL241 Energy Systems",
      institution: "University of Southern California",
      dates: "Spring 2025"
    },
    {
      title: "ENST150 Environmental Issues in Societies",
      institution: "University of Southern California",
      dates: "Fall 2024",
      detail: "Discussion leadership on topics including marine protected areas and deforestation."
    },
    {
      title: "GEOL108 Crises of a Planet",
      institution: "University of Southern California",
      dates: "Spring 2023"
    },
    {
      title: "GEOL105 Planet Earth",
      institution: "University of Southern California",
      dates: "Fall 2022",
      detail: "Laboratory instruction, office hours, assignment support, and assessment."
    },
    {
      title: "Dimensional Analysis and Back-of-Envelope Calculations in Geophysics",
      institution: "Peking University",
      dates: "Spring 2021"
    }
  ] satisfies CvEntry[],
  awards: [
    { title: "Green Foundation Postdoctoral Scholarship at UC San Diego", dates: "2026" },
    { title: "USC Graduate School Summer Research and Writing Grant ($2,000)", dates: "2026" },
    { title: "USC PhD Achievement Award Nomination (one per department)", dates: "2026" },
    { title: "USC Earth Sciences Graduate Student Research Award ($3,000)", dates: "2025–2026" },
    { title: "Statewide California Earthquake Center Student Travel Award", dates: "2024, 2025" },
    { title: "SCEC Community Geological Framework Model and Thermal Model Workshop Travel Award", dates: "2025" },
    { title: "Serpentinite, Fluids and Plate Boundary Deformation Workshop Travel Grant", dates: "2024" },
    { title: "Cargèse School on Subduction Zone Processes Travel Award", dates: "2023" },
    { title: "USC Dornsife PhD Academy Scholarship and Research Fund ($500)", dates: "2023" },
    { title: "Weiming Scholar, Peking University Junior Scholar (top 1%)", dates: "2021" },
    { title: "Peking University Merit Student Honor", dates: "2021" },
    { title: "Peking University Third Place Scholarship", dates: "2020" },
    { title: "Founder Scholarship, Peking University", dates: "2019" },
    { title: "Robin Li Scholarship, Peking University", dates: "2018" }
  ] satisfies CvEntry[],
  service: [
    {
      title: "Host, USC Lithosphere Dynamics Seminar",
      institution: "University of Southern California",
      dates: "2023–2024",
      detail:
        "Invited early-career speakers, organized visits and student lunches, and hosted the seminar series."
    },
    {
      title: "Host, USC Earth Sciences Department Seminar",
      institution: "University of Southern California",
      dates: "Fall 2025"
    },
    {
      title: "Organizer, USC Earth Sciences Graduate Student Writing Groups",
      institution: "University of Southern California",
      dates: "2025–2026"
    },
    {
      title: "Graduate liaison, Society of Earth Science Students",
      institution: "University of Southern California",
      dates: "2025–2026"
    }
  ] satisfies CvEntry[],
  presentations: [
    {
      title: "Frictional weakening by hydrothermal alteration of contact quality",
      dates: "2026",
      detail: "Oral presentation · USC Lithosphere Dynamics Seminar"
    },
    {
      title:
        "Simulating earthquake cycles using lab-derived, physics-based friction with multiple deformation and healing mechanisms",
      dates: "2024–2025",
      detail: "Oral presentations · AGU 2024, AGU 2025, SCEC GFM/CTM/CRM workshop"
    },
    {
      title: "Quasi-periodic repeating earthquakes may follow normal 1/3 scaling laws",
      dates: "2025–2026",
      detail: "Invited talk · Caltech Seismo-Lab Brown Bag Seminar; poster · AGU 2025; oral presentation · SSA 2026"
    },
    {
      title: "Effects of competing deformation and healing mechanisms in earthquake cycles",
      dates: "2024",
      detail: "Poster presentation · Gordon Research Conference on Rock Deformation"
    },
    {
      title: "Rupture segmentation on the East Anatolian Fault controlled by along-strike variations in slip rate",
      dates: "2025",
      detail: "Invited talks · Zhejiang University and Tongji University"
    }
  ] satisfies CvEntry[],
  labAndField: [
    {
      title: "Hydrothermal friction experiments",
      institution: "Texas A&M University",
      location: "Texas, US",
      dates: "2022",
      detail:
        "More than one month of triaxial friction experiments under hydrothermal conditions on natural IODP samples from the Alpine Fault."
    },
    {
      title: "Southern San Andreas Fault",
      location: "California, US",
      dates: "2025",
      detail: "Creeping southern San Andreas Fault near the Salton Sea."
    },
    {
      title: "Whipple Mountains and San Gabriel Mountains",
      location: "California, US",
      dates: "2024",
      detail: "Metamorphic core complex, fault gouge, damage zone, and paleoseismic trench observations."
    },
    {
      title: "Catalina Island structural and geophysical fieldwork",
      location: "California, US",
      dates: "2023–2024",
      detail: "Exhumed subduction-zone geology and installation of seismometers and gravity meters."
    },
    {
      title: "Regional structural-geology fieldwork",
      location: "California and Maine, US",
      dates: "2022–2024",
      detail:
        "Inyo Mountains, Mount San Jacinto, Arroyo Burro, Northern Death Valley and the Garlock fault, Mojave Desert, and the Norumbega–Two Lights Fault Zone."
    },
    {
      title: "Xiaojiang Fault Zone seismic network",
      location: "Daliangshan, Sichuan, China",
      dates: "2020",
      detail: "Fifteen-day deployment of short-period seismometers east of the Tibetan Plateau."
    }
  ] satisfies CvEntry[],
  skills: [
    { title: "Programming", detail: "Python, Julia, MATLAB, Bash shell scripting, LaTeX" },
    { title: "Languages", detail: "Mandarin (native), English (fluent), Japanese (conversational)" }
  ] satisfies CvEntry[]
} as const;
