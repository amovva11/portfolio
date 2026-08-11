export interface ExperienceEntry {
  role: string;
  company: string;
  /** Free-form range shown on the timeline, e.g. "Aug 2021 - present". */
  date: string;
  logo: string;
  logoAlt: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Development Engineer I",
    company: "Your Company, IN",
    date: "Aug 2021 - present",
    logo: "/velotio.jpg",
    logoAlt: "velotio",
    bullets: [
      "Work experience Points",
      "Tech Stack: JavaScript, TypeScript, React, Node.js, Redux, SASS, LESS, Bootstrap, Jest, HTML5, CSS3",
    ],
  },
  {
    role: "Software Development Engineer I",
    company: "Your Company 2, IN",
    date: "Dec 2020 - Aug 2021",
    logo: "/hha.png",
    logoAlt: "velotio",
    bullets: [
      "Work experience Points",
      "Tech Stack: JavaScript, TypeScript, React, Node.js, Redux, SASS, LESS, Bootstrap, Jest, HTML5, CSS3",
    ],
  },
];
