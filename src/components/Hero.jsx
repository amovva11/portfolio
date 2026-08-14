import { RESUME_URL } from "@/data/site";
import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section className="bg-custom-gradient text-[var(--text-primary)] min-h-screen flex items-center relative overflow-hidden">
      <div className="flex mx-4 mt-24 sm:mt-28 md:mt-0 sm:mx-10 md:mx-16 lg:mx-20 flex-col gap-6 sm:gap-8 w-full py-6 md:py-0">
        <div className="flex-1 my-auto text-center max-w-3xl mx-auto">
          <Slide direction="left" duration={1000} damping={0.5} cascade triggerOnce>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--tag-border)] bg-[var(--tag-bg)] text-[var(--tag-text)] text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <span className="glow-dot"></span>
              Open to new grad roles — Dec 2026
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Abhijay Movva</span>
            </h1>

            <div className="mb-2 sm:mb-3 flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 justify-center">
              <span className="text-sm sm:text-base md:text-lg font-semibold text-[var(--text-primary)]">
                Software Engineer
              </span>
              <span className="hidden sm:block text-[var(--text-secondary)]">·</span>
              <span className="text-sm sm:text-base md:text-lg text-[var(--accent-primary)] font-medium">
                CS + Data Science @ UW–Madison
              </span>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] mb-6 sm:mb-8 max-w-xl leading-relaxed mx-auto">
              Senior at UW–Madison building backend and machine learning systems.
              Most recently a software engineering intern at Medline, where I shipped
              internal logistics tooling on Next.js and Azure. I also write SWE
              benchmarks for frontier AI models and research assistive technology at
              the madAbility accessibility lab.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 justify-center">
              <Link
                onClick={() => {
                  sendGAEvent({ event: "buttonClicked", value: "Resume" });
                }}
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--bg btn--theme text-sm sm:text-base"
              >
                View Resume
              </Link>
              <Link
                href="#about"
                className="btn btn--bg btn--theme-inv text-sm sm:text-base"
              >
                Learn More
              </Link>
            </div>

            {/* Stat strip */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mt-8 sm:mt-10 justify-center">
              {[
                { label: "Expected Graduation", value: "Dec 2026" },
                { label: "GPA", value: "3.7" },
                { label: "Focus", value: "Backend & ML" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)]">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </Slide>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <div className="home-hero__mouse-scroll-cont animate-bounce">
        <div className="mouse"></div>
      </div>
    </section>
  );
}
