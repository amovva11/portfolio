import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

// All icons come from the same devicon CDN so they render consistently.
const icon = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`;

const skills = [
  // Languages
  { name: "Python", icon: icon("python/python-original") },
  { name: "Java", icon: icon("java/java-original") },
  { name: "C", icon: icon("c/c-original") },
  { name: "C++", icon: icon("cplusplus/cplusplus-original") },
  { name: "TypeScript", icon: icon("typescript/typescript-original") },
  { name: "JavaScript", icon: icon("javascript/javascript-original") },
  { name: "Swift", icon: icon("swift/swift-original") },
  { name: "R", icon: icon("r/r-original") },
  { name: "HTML", icon: icon("html5/html5-original") },
  { name: "CSS", icon: icon("css3/css3-original") },
  // Frameworks
  { name: "React", icon: icon("react/react-original") },
  { name: "Next.js", icon: icon("nextjs/nextjs-original") },
  { name: "Node.js", icon: icon("nodejs/nodejs-original") },
  { name: "Express", icon: icon("express/express-original") },
  { name: "Spring Boot", icon: icon("spring/spring-original") },
  { name: "Flask", icon: icon("flask/flask-original") },
  { name: "FastAPI", icon: icon("fastapi/fastapi-original") },
  { name: "PyTorch", icon: icon("pytorch/pytorch-original") },
  { name: "Pandas", icon: icon("pandas/pandas-original") },
  { name: "OpenCV", icon: icon("opencv/opencv-original") },
  // Infra & data
  { name: "Git", icon: icon("git/git-original") },
  { name: "Docker", icon: icon("docker/docker-original") },
  { name: "AWS", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") },
  { name: "Azure", icon: icon("azure/azure-original") },
  { name: "GCP", icon: icon("googlecloud/googlecloud-original") },
  { name: "PostgreSQL", icon: icon("postgresql/postgresql-original") },
  { name: "MongoDB", icon: icon("mongodb/mongodb-original") },
  { name: "Redis", icon: icon("redis/redis-original") },
  { name: "Kafka", icon: icon("apachekafka/apachekafka-original") },
  { name: "Spark", icon: icon("apachespark/apachespark-original") },
];

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      className="px-4 py-16 sm:py-20 sm:px-10 md:px-16 lg:px-20 min-h-screen bg-[var(--bg-main)] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        <Fade cascade triggerOnce direction="down">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 relative text-center after_style text-[var(--text-primary)]">
            About Me
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-10 sm:mb-14 text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-20">
          {/* Bio */}
          <div>
            <Slide cascade triggerOnce direction="left">
              <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-5 text-[var(--text-primary)]">
                Who I Am
              </h3>
              <div
                className={`duration-500 ${isExpanded
                    ? ""
                    : "line-clamp-[10] sm:line-clamp-[14] md:line-clamp-none overflow-hidden"
                  }`}
              >
                <p className="text-[var(--text-secondary)] mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  I'm a senior at the{" "}
                  <strong className="text-[var(--accent-primary)]">
                    University of Wisconsin–Madison
                  </strong>{" "}
                  studying Computer Science and Data Science, graduating in
                  December 2026. I'm drawn to the systems side of software —
                  backend services, distributed data, and the machine learning
                  that runs on top of them.
                </p>
                <p className="text-[var(--text-secondary)] mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  This past summer I interned at{" "}
                  <strong className="text-[var(--text-primary)]">Medline</strong>,
                  building internal tooling for warehouse logistics: a Next.js
                  filter sidebar that cut event search time by 40%, a Dead Letter
                  Queue page that reduced failed print job diagnosis by 30%, and a
                  unified dashboard pulling four Azure data sources behind
                  passwordless authentication.
                </p>
                <p className="text-[var(--text-secondary)] mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Alongside school I contract with the{" "}
                  <strong className="text-[var(--text-primary)]">
                    Handshake AI Fellowship
                  </strong>
                  , writing software engineering benchmarks against large open
                  source projects — diagnosing real bugs, authoring golden
                  solutions, and packaging fail-to-pass test suites in Docker so
                  frontier models can be evaluated on genuine engineering work.
                </p>
                <p className="text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  I also research assistive technology at{" "}
                  <strong className="text-[var(--text-primary)]">madAbility</strong>,
                  UW–Madison's accessibility lab, where I ran a gaze-tracking study
                  with over 100 participants and improved a multimodal attention
                  model's accuracy by 25% to help personalize interfaces for
                  low-vision users. I'm AWS Cloud Practitioner and OCI AI
                  Foundations certified.
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[var(--accent-primary)] text-sm underline underline-offset-4 hover:opacity-80 transition-colors block md:hidden mb-4"
              >
                {isExpanded ? "Collapse" : "Read More"}
              </button>
              <a
                href="#work-experience"
                className="btn btn--med btn--theme inline-flex mt-1 sm:mt-2 text-sm"
              >
                See My Experience
              </a>
            </Slide>
          </div>

          {/* Skills */}
          <div>
            <Fade triggerOnce>
              <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-5 text-[var(--text-primary)]">
                My Skills
              </h3>
            </Fade>
            <div className="grid grid-cols-4 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5">
              <Fade direction="up" triggerOnce cascade damping={0.04}>
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-badge">
                    <div className="icon-box">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        width={28}
                        height={28}
                      />
                    </div>
                    <span className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-semibold text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
