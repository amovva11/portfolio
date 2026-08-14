import { Fade } from "react-awesome-reveal";

const experiences = [
  {
    role: "IT Software Engineering Intern",
    company: "Medline",
    location: "Northbrook, IL",
    period: "May 2026 – Aug 2026",
    highlights: [
      "Engineered a Next.js filter sidebar that cut event search time by 40% across warehouse logs.",
      "Built a Dead Letter Queue page, reducing failed print job diagnosis time by 30%.",
      "Integrated four Azure data sources into a unified dashboard, strengthening security with passwordless authentication and consolidating event search and failure monitoring for logistics teams.",
    ],
    tech: ["Next.js", "TypeScript", "Azure", "React", "Dashboards"],
  },
  {
    role: "Contractor",
    company: "Handshake AI Fellowship",
    location: "Remote",
    period: "Jan 2026 – Present",
    current: true,
    highlights: [
      "Engineered SWE benchmark tasks against major open source projects including Svelte (87k+ stars), diagnosing real bugs and building golden solutions with test suites and Docker harnesses.",
      "Authored 33 commits across 5 high-traffic repositories spanning ML, scientific computing, and full-stack systems, building fail-to-pass test suites for each.",
      "Evaluated frontier LLM coding responses against a 7-point rubric, passing a rigorous calibration screen to contribute production training data.",
    ],
    tech: ["Python", "Docker", "Git", "Testing", "LLM Evaluation"],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "madAbility — UW–Madison Accessibility Lab",
    location: "Madison, WI",
    period: "May 2025 – Present",
    current: true,
    highlights: [
      "Conducted a gaze-tracking study with 100+ participants, collecting eye movement data to train personalized AI for low-vision users.",
      "Automated 400+ image extractions via Python APIs to model visual attention for assistive technology.",
      "Boosted ML model accuracy by 25% using multimodal attention classification.",
    ],
    tech: ["Python", "PyTorch", "OpenCV", "Computer Vision", "Research"],
  },
];

export default function WorkExperience() {
  return (
    <section
      id="work-experience"
      className="px-4 py-16 sm:py-20 sm:px-10 md:px-16 lg:px-20 min-h-screen bg-[var(--bg-main)] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative">
        <Fade cascade triggerOnce direction="down">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 relative text-center after_style text-[var(--text-primary)]">
            Work Experience
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-12 sm:mb-16 text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
            Where I&apos;ve worked, what I built, and what it changed.
          </p>
        </Fade>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((job) => (
            <Fade key={`${job.company}-${job.role}`} triggerOnce direction="up">
              <div className="glass-card p-5 sm:p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                    {job.role}
                  </h3>
                  {job.current && (
                    <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-[var(--badge-emerald-bg)] text-[var(--badge-emerald-text)] border border-[var(--badge-emerald-border)] whitespace-nowrap flex-shrink-0">
                      Current
                    </span>
                  )}
                </div>

                <h4 className="text-sm sm:text-base font-semibold text-[var(--accent-primary)] mb-1">
                  {job.company}
                </h4>
                <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] mb-4 font-mono">
                  {job.period} · {job.location}
                </p>

                <ul className="space-y-2 mb-5 sm:mb-6">
                  {job.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.6em] h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)] flex-shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {job.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
