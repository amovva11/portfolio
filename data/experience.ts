export interface ExperienceEntry {
  role: string;
  company: string;
  /** Free-form range shown on the timeline, e.g. "Jun 2025 - Aug 2025". */
  date: string;
  /** Path to a logo in /public. Omit to render the company initial instead. */
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
 *
 * NOTE: the bullets below are drafted from the project brief, not from a resume.
 * Read them before publishing and correct anything that overstates the work.
 * Dates are still placeholders.
 */
export const experience: ExperienceEntry[] = [
  {
    role: "AI Fellow",
    company: "Handshake AI",
    date: "2025", // TODO: replace with the real month range.
    bullets: [
      "Authored SWE-bench-style evaluation tasks used to benchmark coding models against real open-source software, pairing reproducible bug reports with verified fix commits and test cases.",
      "Contributed 33 commits totalling roughly 2,600 lines across forks of Svelte, Astropy, smart_open, Quay, and Liger-Kernel, spanning JavaScript, Python, and Go codebases.",
      "Worked backwards from existing project history to isolate defects that were solvable, testable, and unambiguous — the properties that make a benchmark task actually measure model capability.",
    ],
  },
  {
    role: "IT Software Engineering Intern",
    company: "Medline Industries",
    date: "2025", // TODO: replace with the real month range.
    bullets: [
      // TODO: these are placeholders describing scope only. Replace with the
      // action-verb / metric / impact bullets from your resume.
      "Built and shipped features on the Warehouse Management System modernization team, migrating legacy distribution workflows onto a modern service architecture.",
      "TODO: add a bullet with a concrete metric — throughput, latency, records processed, or hours saved.",
    ],
  },
];
