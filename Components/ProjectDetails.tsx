import Image from "next/legacy/image";
import Zoom from "react-medium-image-zoom";
import PageScroll from "./ui/PageScroll";
import { Project } from "../data/projects";
import { useIsTabletOrMobile } from "../hooks/useIsTabletOrMobile";

const GITHUB_ICON = "https://img.icons8.com/fluency/144/000000/github.png";

interface ProjectDetailsProps {
  project: Project;
  alt: string;
}

const SnapshotGallery: React.FC<{ project: Project; alt: string }> = ({
  project,
  alt,
}) => (
  <div className="w-full mt-2 mb-5 pb-5 grid grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
    {project.snapshots.map((shot) => (
      <div className="mr-3 mb-3" key={shot}>
        <Zoom zoomMargin={100}>
          <Image
            className="text-center rounded-xl"
            src={shot}
            alt={alt}
            width="3000"
            height={project.height}
            objectPosition="center"
          />
        </Zoom>
      </div>
    ))}
  </div>
);

const ProjectSummary: React.FC<ProjectDetailsProps & { isTabletOrMobile: boolean }> = ({
  project,
  alt,
  isTabletOrMobile,
}) => (
  <div
    className={`bg-gray-900 dark:bg-gray-800 sm:px-20 ${
      isTabletOrMobile ? "p-3" : "p-6"
    }`}
  >
    <Image
      className="h-10 w-10 inline-block rounded-lg"
      src={project.logo}
      alt={alt}
      width={isTabletOrMobile ? "65" : "85"}
      height={isTabletOrMobile ? "65" : "85"}
    />
    {project.github && (
      <div
        className={`float-right inline-block ${isTabletOrMobile ? "mt-1" : ""}`}
        style={isTabletOrMobile ? undefined : { marginRight: "-55px" }}
      >
        <a href={project.github} target="_blank" rel="noreferrer">
          <img
            className={`border-2 border-blue-400 rounded-full ${
              isTabletOrMobile ? "h-7 w-7" : "h-14 w-14"
            }`}
            src={GITHUB_ICON}
            alt="Github"
            width={45}
            height={45}
          />
        </a>
      </div>
    )}
    {project.link && (
      <div
        className={`float-right butto pr-4 inline-block pt-3 font-bold text-blue-400 ${
          isTabletOrMobile ? "text-md" : "text-xl"
        }`}
        style={isTabletOrMobile ? undefined : { marginRight: "-55px" }}
      >
        <a href={project.link} target="_blank" rel="noreferrer">
          {project.link}
        </a>
      </div>
    )}
    <div
      className={`mt-5 dark:text-gray-200 ${
        isTabletOrMobile ? "text-xl" : "text-2xl"
      }`}
    >
      <span className="font-bold">{project.name}</span> - {project.title}
    </div>
    <div
      className={`mt-6 text-gray-400 dark:text-gray-400 ${
        isTabletOrMobile ? "text-sm font-medium" : "text-md"
      }`}
    >
      {project.description}
    </div>
    <div className="mt-6 text-gray-400 font-semibold text-md dark:text-gray-400">
      Key Features
    </div>
    <ul
      className={`mt-2 text-gray-400 list-disc dark:text-gray-400 ${
        isTabletOrMobile ? "text-sm" : "text-md"
      }`}
    >
      {project.features.map((feature) => (
        <li key={feature} className={isTabletOrMobile ? "pb-2" : undefined}>
          • {feature}
        </li>
      ))}
    </ul>
    <div className="mt-6 text-gray-400 font-semibold text-md dark:text-gray-400">
      Technologies Used
    </div>
    <div className="pt-1">
      {project.skills.map((skill) => (
        <div
          key={skill}
          className="text-xs inline-flex mt-2 items-center font-bold leading-sm p-1 pl-2 pr-2 mr-2 bg-blue-100 text-gray-700 rounded-full"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, alt }) => {
  const isTabletOrMobile = useIsTabletOrMobile();

  const banner = (
    <div
      style={{
        position: "relative",
        width: "100%",
        borderRadius: "1em",
        height: "50vh",
        backgroundImage: `url(${project.banner})`,
        ...(isTabletOrMobile ? {} : { paddingBottom: "35%" }),
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  );

  if (isTabletOrMobile) {
    return (
      <div className="pb-40 mb-40 w-full">
        {banner}
        <div className="ml-2 mr-2 mt-2 shadow-lg">
          <div className="overflow-hidden shadow-xl dark:bg-gray-800 rounded-xl sm:rounded-lg">
            <div>
              <ProjectSummary
                project={project}
                alt={alt}
                isTabletOrMobile
              />
            </div>
          </div>
        </div>
        <div className="mt-3 pl-2 pr-2 mb-36 pb-20">
          <div className="mt-6 pb-2 text-gray-400 font-semibold text-xl dark:text-gray-400">
            Snapshots
          </div>
          <SnapshotGallery project={project} alt={alt} />
        </div>
      </div>
    );
  }

  return (
    <PageScroll>
      <div>
        {banner}
        <div className="pb-6 maincontainerprofileprojects w-full">
          <div className="mx-auto boxprojectdetails shadow-lg sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-xl dark:bg-gray-800 rounded-xl sm:rounded-lg">
              <div>
                <ProjectSummary
                  project={project}
                  alt={alt}
                  isTabletOrMobile={false}
                />
              </div>
            </div>
          </div>
          <div className="pl-5 pr-5 mt-3 ml-5 mr-5 mb-3">
            <div className="mt-6 pb-2 text-gray-400 font-semibold text-2xl dark:text-gray-400">
              Snapshots
            </div>
            <SnapshotGallery project={project} alt={alt} />
          </div>
          <h2 className="text-3xl pl-3 pt-2 pb-1 text-indigo-500 font-semibold tracking-wide uppercase">
            Other Projects
          </h2>
          <p className="font-medium pl-3 pb-2 text-gray-400 text-sm pt-1 w-4/5">
            Based to the current project you are watching.
          </p>
          <div className="w-full mt-5 mb-5 pb-5 grid grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
            {project.others.map((other) => (
              <div key={other.link} className="mb-4 p-3">
                <div className="w-full rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                  <a href={other.link}>
                    <div>
                      <div className="pr-3 pl-3">
                        <Image
                          className="rounded-xl"
                          src={other.thumbnail}
                          alt={other.title}
                          width="500"
                          height="270"
                        />
                      </div>
                      <div className="flex justify-between pr-3 pt-2 pl-3 pb-2">
                        <div className="flex items-center space-x-4">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={other.logo}
                            alt={other.title}
                            width="55"
                            height="55"
                          />
                          <h1 className="text-lg text-gray-100 font-bold">
                            {other.title}
                            <p className="font-medium text-gray-400 text-sm pt-1 w-4/5">
                              {other.description}
                            </p>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageScroll>
  );
};

export default ProjectDetails;
