import { projects } from "./projects";

/**
 * The Explorer file tree, which is the site's real navigation.
 *
 * Each entry maps 1:1 to a route. The active-file highlight is derived by
 * matching `href` against the current route.
 */
export interface ExplorerFile {
  /** Label shown in the tree, styled as a filename. */
  name: string;
  href: string;
  /** Class from the icons8 sprite set defined in globals.css. */
  iconClass: string;
}

export interface ExplorerFolder {
  label: string;
  files: ExplorerFile[];
}

/**
 * Project rows come from the project list itself, so the tree can never
 * advertise a detail page that does not exist.
 */
const projectFiles: ExplorerFile[] = projects.map((project, index) => ({
  name: project.fileName,
  href: `/Projects/${index + 1}`,
  iconClass: project.iconClass ?? "icons8-typescript",
}));

export const explorerTree: ExplorerFolder[] = [
  {
    label: "About",
    files: [
      { name: "index.html", href: "/", iconClass: "icons8-html-5" },
      { name: "experience.css", href: "/Experience", iconClass: "icons8-css3" },
      { name: "skills.js", href: "/Skills", iconClass: "icons8-javascript" },
      { name: "projects.ts", href: "/Projects", iconClass: "icons8-typescript" },
    ],
  },
  ...(projectFiles.length > 0
    ? [{ label: "Projects", files: projectFiles }]
    : []),
  {
    label: "Contact",
    files: [{ name: "Email.tsx", href: "/Email", iconClass: "icons8-gmail" }],
  },
  {
    label: "Writing",
    files: [{ name: "Blogs.py", href: "/Blogs", iconClass: "icons8-python" }],
  },
];

/** Links shown in the title bar, mirroring the most recruiter-relevant routes. */
export const headerLinks: { label: string; href: string }[] = [
  { label: "About", href: "/" },
  { label: "Experience", href: "/Experience" },
  { label: "Skills", href: "/Skills" },
  { label: "Projects", href: "/Projects" },
  { label: "Contact", href: "/Email" },
  { label: "Blogs", href: "/Blogs" },
];
