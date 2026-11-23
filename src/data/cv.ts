export type CvEntry = {
  title: string;
  institution?: string;
  location?: string;
  dates?: string;
  detail?: string;
};

// Source: the public 2-page CV of November 2026 (public/files/Binhao_Wang_CV.pdf).
// The detailed CV is shared privately on request; keep this page in step with the 2-page version.
export const cv = {
  updated: "November 2026",
  appointments: [
    {
      title: "Cecil H. and Ida M. Green Foundation Postdoctoral Scholar",
      institution: "Scripps Institution of Oceanography, UC San Diego",
      location: "La Jolla, California, US",
      dates: "2026–present",
      detail: "Advisor: Alice Gabriel"
    }
  ] satisfies CvEntry[],
  education: [
    {
      title: "PhD, Earth Sciences",
      institution: "University of Southern California",
      dates: "2021–August 2026",
      detail: "Thesis: “Linking rock rheology to earthquake cycle dynamics” · Advisor: Sylvain Barbot"
    },
    {
      title: "BS, Geophysics, School of Earth and Space Sciences",
      institution: "Peking University",
      dates: "2017–2021",
      detail: "Advisor: Han Yue"
    }
  ] satisfies CvEntry[],
  presentations: [
    {
      title: "Linking rock rheology to earthquake cycle dynamics",
      dates: "2026",
      detail: "Invited talk · UCSD Geophysics & Planetary Seminar; also presented as USC PhD defense"
    },
    {
      title: "Frictional weakening by hydrothermal alteration of contact quality",
      dates: "2026",
      detail: "Oral presentation · USC Lithosphere Dynamics Seminar"
    },
    {
      title:
        "Simulating earthquake cycles using lab-derived, physics-based friction with multiple deformation and healing mechanisms",
      dates: "2024–2025",
      detail: "Oral presentations · AGU 2024, AGU 2025, SCEC GFM/CTM/CRM Workshop 2025"
    },
    {
      title: "Quasi-periodic repeating earthquakes may follow normal 1/3 scaling laws",
      dates: "2025–2026",
      detail: "Invited talk · Caltech Seismo Lab Brown Bag Seminar; oral · SSA 2026; poster · AGU 2025"
    },
    {
      title: "Rupture segmentation on the East Anatolian Fault controlled by along-strike variations in slip rate",
      dates: "2025",
      detail: "Invited talks · Zhejiang University and Tongji University"
    },
    {
      title:
        "Crack-like and pulse-like ruptures, seismic swarms, and tremorgenic slow-slip events in velocity-weakening, thermally strengthening faults",
      dates: "2023",
      detail: "Invited talk · Institute of Geology, China Earthquake Administration"
    },
    {
      title: "Pulse-like ruptures, seismic swarms, and tremorgenic slow-slip events with thermally activated friction",
      dates: "2022",
      detail: "Invited talk · Texas A&M University"
    },
    {
      title: "Other talks and posters",
      detail:
        "AGU 2021 and 2023 (orals), GRC Rock Deformation 2024 (poster), Cargèse School on Subduction Zone Processes 2023 (poster)"
    }
  ] satisfies CvEntry[],
  awards: [
    { title: "Cecil and Ida Green Foundation Postdoctoral Fellowship, UC San Diego", dates: "2026–2028" },
    { title: "USC PhD Achievement Award Nomination (one per department)", dates: "2026" },
    { title: "USC Graduate School Summer Research and Writing Grant ($2,000)", dates: "2026" },
    { title: "USC Earth Sciences Graduate Student Research Award ($3,000)", dates: "2025–2026" },
    { title: "USC Dornsife PhD Academy Scholarship and Research Fund ($500)", dates: "2023" },
    { title: "Weiming Scholar, Peking University (PKU Junior Scholar, top 1%)", dates: "2021" },
    {
      title: "Peking University honors",
      dates: "2018–2021",
      detail: "Merit Student Honor (2021); Third Place Scholarship (2020); Founder Scholarship (2019); Robin Li Scholarship (2018)"
    }
  ] satisfies CvEntry[],
  teaching: [
    {
      title: "Teaching Assistant: 9 semesters, 7 courses, undergraduate and graduate levels",
      institution: "University of Southern California and Peking University",
      dates: "2021–2025",
      detail:
        "USC: Geophysics and Geoengineering (GEOL440, twice), Data Analysis in Earth & Environmental Sciences (GEOL425, twice), Energy Systems (GEOL241), Environmental Issues in Societies (ENST150), Crises of a Planet (GEOL108), Planet Earth (GEOL105). PKU (Spring 2021): Dimensional Analysis and Back-of-Envelope Calculations in Geophysics."
    }
  ] satisfies CvEntry[],
  labAndField: [
    {
      title: "Laboratory: hydrothermal friction experiments",
      institution: "Texas A&M University",
      dates: "2022",
      detail:
        "More than one month of triaxial friction experiments on natural Alpine Fault samples from the Deep Fault Drilling Project (DFDP), supervised by Hiroko Kitajima."
    },
    {
      title: "Field: seismic deployments and structural geology",
      dates: "2020–2025",
      detail:
        "Short-period seismometers in the Xiaojiang Fault Zone, Sichuan (2020); seismometers and gravity meters on Catalina Island with the MIT geophysics group (2024); fault and structural-geology fieldwork across California and Maine (e.g., San Andreas, Garlock, and Two Lights fault zones)."
    }
  ] satisfies CvEntry[],
  service: [
    {
      title: "Host, USC Lithosphere Dynamics Seminar",
      dates: "2023–2024",
      detail: "Invited mainly early-career speakers and hosted their visits."
    },
    {
      title: "USC Earth Sciences seminar host, writing-group organizer, and student liaison",
      dates: "2025–2026",
      detail:
        "Host of two Department Seminar talks (Fall 2025); Organizer, Graduate Student Writing Groups; Graduate liaison, Society of Earth Science Students (SESS)."
    }
  ] satisfies CvEntry[],
  skills: [
    { title: "Programming", detail: "Python, Julia, MATLAB, Bash, LaTeX, GMT" },
    { title: "Languages", detail: "Mandarin and Wu Chinese (native), English (fluent), Japanese (conversational)" }
  ] satisfies CvEntry[]
} as const;
