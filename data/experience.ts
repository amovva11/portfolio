export interface ExperienceEntry {
  role: string;
  company: string;
  /** Free-form range shown on the timeline, e.g. "Jun 2025 - Aug 2025". */
  date: string;
  /** Path to a logo in /public. Omit to render a neutral initial instead. */
  logo?: string;
  logoAlt?: string;
  /** Action verb / metric / impact, matching resume bullet style. */
  bullets: string[];
}

/**
 * Newest first — the timeline renders in array order.
 *
 * Describe the team and the project, not the org chart: no individual managers
 * or coworkers named in public copy.
 */
export const experience: ExperienceEntry[] = [
  {
    role: "AI Fellow",
    company: "Handshake AI",
    // TODO: confirm dates from resume.
    date: "TODO",
    bullets: [
      // TODO: replace with real bullets. Reference points from the brief:
      // authored SWE-bench-style evaluation tasks; 33 commits, ~2,600 lines
      // across forks of Svelte, Astropy, smart_open, Quay, and Liger-Kernel.
      "TODO",
    ],
  },
  {
    role: "IT Software Engineering Intern",
    company: "Medline Industries",
    // TODO: confirm dates from resume.
    date: "TODO",
    bullets: [
      // TODO: 2-3 bullets from the resume, WMS Modernization team.
      "TODO",
    ],
  },
];
