/**
 * The Explorer file tree, which is the site's real navigation.
 *
 * Each entry maps 1:1 to a route. Adding a page means adding a row here — the
 * panel renders itself from this list, and the active-file highlight is derived
 * by matching `href` against the current route.
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
  {
    label: "Side Projects",
    files: [
      { name: "Ayedot.js", href: "/Projects/1", iconClass: "icons8-nodejs" },
      { name: "Ayefan.js", href: "/Projects/2", iconClass: "icons8-react" },
      { name: "Onwos.ts", href: "/Projects/3", iconClass: "icons8-angularjs" },
      { name: "fireflow.js", href: "/Projects/4", iconClass: "icons8-react" },
      { name: "Shortlit.js", href: "/Projects/5", iconClass: "icons8-nodejs" },
      { name: "Xport.js", href: "/Projects/6", iconClass: "icons8-react" },
    ],
  },
  {
    label: "Contact",
    files: [{ name: "Email.tsx", href: "/Email", iconClass: "icons8-gmail" }],
  },
  {
    label: "Misc",
    files: [
      { name: "Hobbies.cpp", href: "/Hobbies", iconClass: "icons8-cplusplus" },
      { name: "Blogs.py", href: "/Blogs", iconClass: "icons8-typescript" },
      { name: "Gaming.sln", href: "/Gaming", iconClass: "icons8-c-sharp" },
      { name: "Anime.jsx", href: "/Anime", iconClass: "icons8-react" },
      { name: "Learning.ts", href: "/Learning", iconClass: "icons8-angularjs" },
      { name: "Startup.js", href: "/Startup", iconClass: "icons8-nodejs" },
    ],
  },
];

/** Links shown in the title bar, which mirror the most recruiter-relevant routes. */
export const headerLinks: { label: string; href: string }[] = [
  { label: "About", href: "/" },
  { label: "Experience", href: "/Experience" },
  { label: "Skills", href: "/Skills" },
  { label: "Projects", href: "/Projects" },
  { label: "Contact", href: "/Email" },
  { label: "Hobbies", href: "/Hobbies" },
];
