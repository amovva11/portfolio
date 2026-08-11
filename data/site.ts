/**
 * Site-wide identity and social-card defaults.
 *
 * Everything a deploy needs to rebrand lives here — pages pass only their own
 * title and description to <PageMeta /> and inherit the rest.
 */
export const site = {
  name: "Abhijay Movva",
  role: "Software Engineer",
  // TODO: point at the real domain once it is registered, then update
  // public/sitemap.xml and public/robots.txt to match.
  url: "https://example.com",
  /** Fake workspace root shown beside recently visited paths on the hero. */
  workspacePath: "E:/AbhijayMovva",
  ogImage: {
    src: "/mainthumbnail.PNG",
    width: "1040",
    height: "600",
  },
  favicon: "/favicon.ico",
} as const;

/** Contact details, surfaced on the Contact page and the hero. */
export const contact = {
  email: "abhijaymovva@gmail.com",
  github: "https://github.com/amovva11",
  // TODO: add your LinkedIn URL.
  linkedin: "",
  // TODO: drop the PDF in /public and point at it, e.g. "/AbhijayMovva.pdf".
  resume: "",
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
    // TODO: fill in contact.linkedin above and this card starts linking.
    href: contact.linkedin || undefined,
  },
  {
    label: "Github Page",
    icon: "https://img.icons8.com/3d-fluency/28/null/github.png",
    href: contact.github,
  },
  {
    label: "CS + Data Science @ UW-Madison",
    icon: "https://img.icons8.com/ios-filled/20/ffffff/learn-more.png",
    iconClassName: "ml-1 mr-1",
  },
  {
    label: "AI/ML Systems",
    icon: "https://img.icons8.com/color/28/null/python--v1.png",
  },
  {
    label: "Full-Stack Engineering",
    icon: "https://img.icons8.com/color/28/null/javascript--v1.png",
  },
];

/** "Start" shortcuts on the hero, each with its own outline icon. */
export const startLinks: { label: string; href: string; iconPath: string }[] = [
  {
    label: "Experience",
    href: "/Experience",
    iconPath:
      "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
  },
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
];
