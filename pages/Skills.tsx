import { NextPage } from "next";
import PageMeta from "../Components/ui/PageMeta";
import PageScroll from "../Components/ui/PageScroll";
import { skillGroups } from "../data/skills";

const GRID_CLASSES =
  "space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10";

const Skills: NextPage = () => (
  <PageScroll>
    <PageMeta title="Skills" description="Skills" />
    <div className="mt-2 w-full p-5 pb-40 ml-3 text-left">
      <h2 className="lg:text-5xl font-bold leading-tight text-indigo-500 text-3xl">
        Skills
      </h2>
      <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
        Data Structures and Algorithms, Frontend Development, Backend
        Development, Database Management, System Design and Cloud.
      </p>

      <div className="w-full mb-5 pb-5">
        {skillGroups.map((group, groupIndex) => (
          <div
            key={group.label}
            className={groupIndex === 0 ? "mt-5" : "mt-5 pt-5"}
          >
            <p
              className={`${
                group.headingTopMargin ? "mt-2 " : ""
              } tracking-tight text-gray-400 text-xl`}
            >
              {group.label}
            </p>
            <dl className={GRID_CLASSES}>
              {group.skills.map((skill) => (
                <div className="relative" key={skill.name}>
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        width={skill.iconWidth}
                      />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                      {skill.name}
                    </p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  </PageScroll>
);

export default Skills;
