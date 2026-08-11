import { NextPage } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import PageMeta from "../../Components/ui/PageMeta";
import PageScroll from "../../Components/ui/PageScroll";
import { projects, Project } from "../../data/projects";
import { useIsTabletOrMobile } from "../../hooks/useIsTabletOrMobile";

const DESCRIPTION = "Visual Studio Code style Developer Portfolio.";

const ProjectCard: React.FC<{
  project: Project;
  href: string;
  isTabletOrMobile: boolean;
}> = ({ project, href, isTabletOrMobile }) => {
  const logoSize = isTabletOrMobile ? "45" : "35";

  return (
    <div className={isTabletOrMobile ? "mb-5" : "mb-4 p-3"}>
      <div className="w-full rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
        <Link href={href}>
          <div>
            <div className={isTabletOrMobile ? "" : "pr-3 pl-3"}>
              <Image
                className="rounded-xl"
                src={project.thumbnail ?? project.banner}
                alt={`${project.name} banner`}
                width="500"
                height="270"
              />
            </div>
            <div
              className={`flex justify-between pr-3 pl-3 pb-2 ${
                isTabletOrMobile ? "pt-1" : "pt-2"
              }`}
            >
              <div className="flex items-center space-x-4">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={logoSize}
                  height={logoSize}
                />
                <h1 className="text-lg text-gray-100 font-bold">
                  {project.name}
                  <p
                    className={`font-medium text-gray-400 text-sm pt-1${
                      isTabletOrMobile ? "" : " w-4/5"
                    }`}
                  >
                    {project.title}
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Projects: NextPage<{ projects: Project[] }> = (props) => {
  const isTabletOrMobile = useIsTabletOrMobile();

  return (
    <PageScroll>
      <PageMeta
        title="Projects"
        description={DESCRIPTION}
        ogTitle="Projects - College | Side"
      />
      <div className="mt-2 w-full p-2 ml-1 text-left">
        <h2 className="lg:text-5xl pl-5 pb-2 font-bold leading-tight text-indigo-500 text-3xl">
          Projects
        </h2>
        <p className="font-medium pl-5 pb-2 text-gray-400 text-md pt-1 w-4/5">
          College and Side Projects for practice.
        </p>
        <div
          className={`w-full mt-3 grid grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ${
            isTabletOrMobile ? "pb-60" : "mb-5 pb-5"
          }`}
        >
          {props.projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              href={`/Projects/${index + 1}`}
              isTabletOrMobile={isTabletOrMobile}
            />
          ))}
        </div>
      </div>
    </PageScroll>
  );
};

export function getStaticProps() {
  return { props: { projects } };
}

export default Projects;
