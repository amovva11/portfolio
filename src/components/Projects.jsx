import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";

// `image` is optional — cards without one render full width instead of
// showing a broken thumbnail. Drop a screenshot in public/assets/png and
// add the path to give a project a preview.
const projects = [
  {
    id: "callshield",
    title: "CallShield — Live Voice Fraud Detection",
    period: "Nov 2025",
    description:
      "A real-time voice analysis platform that streams live call audio and risk scores over WebSockets to catch voice phishing while a call is still happening. Neural voice fingerprinting and AI speech detection run alongside LLM transcript analysis, reaching 99% precision and 80% recall, with voiceprints matched by cosine similarity.",
    technologies: ["Next.js", "FastAPI", "Python", "TypeScript", "WebSockets"],
    links: [
      { label: "View Source", url: "https://github.com/shreyk2/CallShield", primary: false },
      { label: "Devpost", url: "https://devpost.com/software/callshield", primary: true },
    ],
  },
  {
    id: "aiatl",
    title: "AI-Assisted Triage and Learning System",
    period: "Oct – Dec 2025",
    description:
      "A 6-agent CrewAI system that reads patient histories and symptoms in real time and routes them across three medical specialties in under 10 seconds. Built on Streamlit and MongoDB Atlas with automated specialist alerts, and uses retrieval augmented generation to improve diagnostic accuracy while monitoring for demographic bias in its recommendations.",
    technologies: ["Python", "CrewAI", "RAG", "MongoDB Atlas", "Streamlit"],
    links: [
      { label: "View Source", url: "https://github.com/KevinJ-30/AIATL_Project", primary: true },
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-4 py-16 sm:py-20 sm:px-10 md:px-16 lg:px-20 min-h-screen bg-[var(--bg-main)] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative">
        <Fade cascade triggerOnce direction="down">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 relative text-center after_style text-[var(--text-primary)]">
            Projects
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-12 sm:mb-16 text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
            Things I&apos;ve built outside of class — mostly systems that have to
            work in real time.
          </p>
        </Fade>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project) => (
            <div className="glass-card p-5 sm:p-6 md:p-8" key={project.id}>
              <div
                className={
                  project.image
                    ? "grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-center"
                    : ""
                }
              >
                {project.image && (
                  <Zoom triggerOnce>
                    <div className="relative overflow-hidden rounded-lg sm:rounded-xl group border border-[var(--border-color)]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={400}
                        className="w-full object-cover rounded-lg sm:rounded-xl duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Zoom>
                )}

                <div className="flex flex-col items-start">
                  <Fade cascade triggerOnce direction="left">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2 sm:mb-3">
                      <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-[var(--text-primary)]">
                        {project.title}
                      </h3>
                      <span className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-mono">
                        {project.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-[var(--text-secondary)] text-xs sm:text-sm md:text-base mb-5 sm:mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.links.map((link) => (
                        <Link
                          key={link.label}
                          onClick={() => {
                            sendGAEvent({
                              event: "buttonClicked",
                              value: `${link.label} - ${project.title}`,
                            });
                          }}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn btn--med text-xs sm:text-sm ${
                            link.primary ? "btn--theme" : "btn--theme-inv"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
