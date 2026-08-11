/**
 * Site-wide identity and social-card defaults.
 *
 * Everything a deploy needs to rebrand lives here — pages pass only their own
 * title and description to <PageMeta /> and inherit the rest.
 */
export const site = {
  name: "Your Name",
  role: "Software Development Engineer",
  /** Used for canonical and og:url on every page. */
  url: "https://www.rajsavaliya.com",
  /** Fake workspace root shown beside recently visited paths on the hero. */
  workspacePath: "E:/RajSavaliya",
  ogImage: {
    src: "/mainthumbnail.PNG",
    width: "1040",
    height: "600",
  },
  favicon: "/favicon.ico",
} as const;

export interface ProfileCard {
  label: string;
  icon: string;
  /** Absent for the cards that are statements rather than links. */
  href?: string;
  /** A couple of icons need extra spacing to line up with the rest. */
  iconClassName?: string;
}

/** The stack of cards down the right of the hero. */
export const profileCards: ProfileCard[] = [
  {
    label: "LinkedIn Profile",
    icon: "https://img.icons8.com/fluency/30/null/linkedin-circled.png",
    href: "https://www.linkedin.com/in/savaliya-raj",
  },
  {
    label: "Github Page",
    icon: "https://img.icons8.com/3d-fluency/28/null/github.png",
    href: "https://github.com/SRX9",
  },
  {
    label: "Twitter Handle",
    icon: "https://img.icons8.com/color/28/null/twitter--v1.png",
    href: "https://twitter.com/s_r_x_9",
  },
  {
    label: "Full Stack Engineer",
    icon: "https://img.icons8.com/color/28/null/javascript--v1.png",
  },
  {
    label: "Constant Learner",
    icon: "https://img.icons8.com/ios-filled/20/ffffff/learn-more.png",
    iconClassName: "ml-1 mr-1",
  },
  {
    label: "Retirement Plan Farming",
    icon: "https://img.icons8.com/external-victoruler-flat-victoruler/26/null/external-farming-farming-victoruler-flat-victoruler.png",
  },
];

/** "Start" shortcuts on the hero, each with its own outline icon. */
export const startLinks: { label: string; href: string; iconPath: string }[] = [
  {
    label: "Skills",
    href: "/Skills",
    iconPath:
      "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
  {
    label: "Projects",
    href: "/Projects",
    iconPath:
      "M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776",
  },
  {
    label: "Get in Touch",
    href: "/Email",
    iconPath:
      "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
  },
  {
    label: "Hobbies",
    href: "/Hobbies",
    iconPath:
      "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
];
