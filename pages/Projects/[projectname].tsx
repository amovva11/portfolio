import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ProjectDetails from "../../Components/ProjectDetails";
import PageMeta from "../../Components/ui/PageMeta";
import { projects, Project } from "../../data/projects";

const ProjectDetailPage: NextPage<{ project: Project }> = ({ project }) => (
  <>
    <PageMeta
      title="Project's Detail "
      description="Details of Projects developed."
      ogTitle="Project's Detail "
    />
    <ProjectDetails
      project={project}
      alt={`${project.name} - ${project.title}`}
    />
  </>
);

/**
 * Routes are 1-based positions in `projects`, so the page resolves its own entry
 * at build time instead of indexing into a list passed through props.
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const position = Number(params?.projectname);
  const project = projects[position - 1];

  if (!project) return { notFound: true };

  return { props: { project } };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  // One path per project, so adding a project publishes its detail page and no
  // path can point at a project that does not exist.
  paths: projects.map((_project, index) => ({
    params: { projectname: String(index + 1) },
  })),
  fallback: false,
});

export default ProjectDetailPage;
