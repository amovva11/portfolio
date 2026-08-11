/** A card linking to another project, shown at the bottom of a detail page. */
export interface RelatedProject {
  link: string;
  thumbnail: string;
  logo: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  name: string;
  banner: string;
  /** Card image on the /Projects grid; falls back to `banner` when unset. */
  thumbnail?: string;
  skills: string[];
  description: string;
  /** Live URL, or null when the project was never deployed publicly. */
  link: string | null;
  github: string | null;
  logo: string;
  features: string[];
  snapshots: string[];
  /** Intrinsic height passed to next/image for the snapshot gallery. */
  height: number;
  others: RelatedProject[];
}

/**
 * Replace these entries with your own. Each one publishes both a card on
 * /Projects and a detail page at /Projects/<position>.
 */
export const projects: Project[] = [
  {
    title: "Project Title",
    name: "Project Name",
    banner: "/xporthumb.png",
    thumbnail: "/ayethumb.jpg",
    skills: [
      "JavaScript",
      "Node.js",
      "React.js",
      "Express",
      "MongoDB",
      "Bootsrap",
      "CSS3",
    ],
    description: `An Online Service to easily Share large or small files of any format, with anyone around the world. `,
    link: null,
    github: "https://github.com/SRX9/Xport---OOSE-Project",
    logo: "/xportlogo.jpg",
    features: [
      "Upload and share any file of size upto 1GB of any format like text file, images, videos, application, pdf, excel, ppt and more.",
      "Other important sections like User Profile, Tracking of number of files shared, amount of data transported, authentication and more.",
    ],
    snapshots: [
      "/xport/Send1-min.png",
      "/xport/send2-min.png",
      "/xport/send3-min.png",
      "/xport/Recieve-min.png",
      "/xport/User profile-min.png",
      "/xport/login-min.png",
      "/xport/register-min.png",
      "/xport/edit account-min.png",
      "/xport/delete-min.png",
    ],
    height: 1900,
    others: [
      {
        link: "/Projects/5",
        thumbnail: "/shortthumb.jpg",
        logo: "/shortlogo.jpg",
        title: "Shortlit - Resume Shortlisting Service",
        description: `Resume Shortlisting Service to find the best fit for
                          the job.`,
      },
      {
        link: "/Projects/4",
        thumbnail: "/firflowthumb.jpg",
        logo: "/firelogo.jpg",
        title: "fireflow - Anonymous Chat Rooms ",
        description: `Instant messaging webapp to chat with people in
                          groups.`,
      },
    ],
  },
];
