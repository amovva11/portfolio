import { NextPage } from "next";
import Image from "next/legacy/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PageMeta from "../Components/ui/PageMeta";
import PageScroll from "../Components/ui/PageScroll";
import { experience } from "../data/experience";
import { useIsTabletOrMobile } from "../hooks/useIsTabletOrMobile";

const CONTENT_STYLE = {
  background: "linear-gradient(to right, #4A00E0, #8E2DE2)",
  color: "#fff",
};
const ARROW_STYLE = { borderRight: "7px solid  #4A00E0" };
const ICON_STYLE = { background: "rgb(33, 150, 243)", color: "#fff" };

const Experience: NextPage = () => {
  const isTabletOrMobile = useIsTabletOrMobile();

  return (
    <PageScroll>
      <div>
        <PageMeta
          title="Professional Experience"
          description="Professional Experience"
        />
        <div
          className={
            isTabletOrMobile ? "pt-5 text-center" : "p-3 pl-5 pb-60 text-center"
          }
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block lg:text-5xl font-bold leading-tight text-3xl text-white">
              Work
            </span>
            <span className="block pt-3 text-indigo-500 text-2xl">
              Industry Experience
            </span>
          </h2>
          <div
            className={
              isTabletOrMobile
                ? "pt-3 h-full pb-60 w-full"
                : "pt-3 w-full timeline"
            }
          >
            <VerticalTimeline>
              {experience.map((entry) => (
                <VerticalTimelineElement
                  key={`${entry.company}-${entry.date}`}
                  className="vertical-timeline-element--work"
                  contentStyle={CONTENT_STYLE}
                  contentArrowStyle={ARROW_STYLE}
                  date={entry.date}
                  iconStyle={ICON_STYLE}
                  icon={
                    entry.logo ? (
                      <Image
                        src={entry.logo}
                        width="500"
                        height="500"
                        className="rounded-full"
                        alt={entry.logoAlt ?? `${entry.company} logo`}
                      />
                    ) : (
                      // No logo on file yet: fall back to the company initial
                      // rather than a broken image.
                      <span className="flex items-center justify-center h-full w-full font-bold text-xl">
                        {entry.company.charAt(0)}
                      </span>
                    )
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    {entry.role}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {entry.company}
                  </h4>
                  <div className="text-left">
                    {entry.bullets.map((bullet) => (
                      <p key={bullet}>• {bullet}</p>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </PageScroll>
  );
};

export default Experience;
