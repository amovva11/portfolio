export interface Skill {
  name: string;
  icon: string;
  /** Some icons are visually oversized and were scaled down individually. */
  iconWidth?: string;
}

export interface SkillGroup {
  label: string;
  /**
   * The first three groups carry a top margin on their heading and the last two
   * do not. Preserved from the original markup rather than normalised, so the
   * spacing is unchanged.
   */
  headingTopMargin: boolean;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming",
    headingTopMargin: true,
    skills: [
      {
        name: "JavaScript",
        icon: "https://img.icons8.com/color/144/000000/javascript--v1.png",
      },
      {
        name: "TypeScript",
        icon: "https://img.icons8.com/color/96/000000/typescript.png",
      },
      {
        name: "Python",
        icon: "https://img.icons8.com/color/48/null/python--v1.png",
      },
    ],
  },
  {
    label: "Full-Stack Development",
    headingTopMargin: true,
    skills: [
      {
        name: "React",
        icon: "https://img.icons8.com/color/144/000000/react-native.png",
        iconWidth: "90%",
      },
      {
        name: "Node.js",
        icon: "https://img.icons8.com/fluency/144/000000/node-js.png",
      },
      {
        name: "Next.js",
        icon: "https://i.ibb.co/Kj1TqRv/image.png",
        iconWidth: "90%",
      },
      {
        name: "Tailwind",
        icon: "https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default",
      },
      {
        name: "Bootstrap",
        icon: "https://img.icons8.com/color/144/000000/bootstrap.png",
      },
      {
        name: "SASS",
        icon: "https://img.icons8.com/color/144/000000/sass.png",
      },
      {
        name: "JQuery",
        icon: "https://img.icons8.com/ios-filled/150/000000/jquery.png",
        iconWidth: "90%",
      },
    ],
  },
  {
    label: "Database",
    headingTopMargin: true,
    skills: [
      {
        name: "SQL",
        icon: "https://img.icons8.com/ios-filled/100/000000/sql.png",
      },
      { name: "Redis", icon: "https://img.icons8.com/color/48/null/redis.png" },
      {
        name: "PostgresSQL",
        icon: "https://img.icons8.com/color/48/null/postgreesql.png",
      },
      {
        name: "Cassandra",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cassandra_logo.svg/1200px-Cassandra_logo.svg.png",
      },
      {
        name: "MongoDB",
        icon: "https://img.icons8.com/color/48/000000/mongodb.png",
      },
    ],
  },
  {
    label: "DevOps",
    headingTopMargin: false,
    skills: [
      {
        name: "AWS",
        icon: "https://img.icons8.com/color/144/000000/amazon-web-services.png",
        iconWidth: "70%",
      },
      {
        name: "Cloudflare",
        icon: "https://i.ibb.co/CnLsjhp/download.png",
        iconWidth: "70%",
      },
      { name: "Git", icon: "https://img.icons8.com/color/144/000000/git.png" },
      {
        name: "GitHub",
        icon: "https://img.icons8.com/fluency/144/000000/github.png",
        iconWidth: "80%",
      },
      {
        name: "Bitbucket",
        icon: "https://img.icons8.com/color/144/000000/bitbucket.png",
        iconWidth: "80%",
      },
      {
        name: "Azure App Service",
        icon: "https://img.icons8.com/color/144/000000/azure-1.png",
        iconWidth: "80%",
      },
    ],
  },
  {
    label: "Tools",
    headingTopMargin: false,
    skills: [
      {
        name: "Visual Studio Code",
        icon: "https://img.icons8.com/fluency/144/000000/visual-studio-code-2019.png",
        iconWidth: "80%",
      },
      {
        name: "Postman",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILwHh21Dky51ePyPy2V_qsPeQWd5n136Sa8PQuhIMmOGLpprK6Zt7qWn9cRL21LE3RzM&usqp=CAU",
        iconWidth: "80%",
      },
      {
        name: "JIRA",
        icon: "https://img.icons8.com/color/144/000000/jira.png",
        iconWidth: "80%",
      },
    ],
  },
];
