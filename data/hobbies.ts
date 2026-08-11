export interface Hobby {
  label: string;
  href: string;
  icon: string;
  alt: string;
  /** Padding class for the icon, which differs per tile to balance the artwork. */
  iconPadding: string;
  /** Explicit dimensions a few icons need on desktop; mobile sizes uniformly. */
  desktopSize?: { width: string; height: string };
}

export const hobbies: Hobby[] = [
  {
    label: "Blogging",
    href: "/Blogs",
    icon: "https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-blogging-free-time-wanicon-lineal-color-wanicon.png",
    alt: "Blogging icon",
    iconPadding: "p-3",
  },
  {
    label: "Gaming",
    href: "/Gaming",
    icon: "https://img.icons8.com/ios/50/000000/controller.png",
    alt: "Gaming icon",
    iconPadding: "p-3",
    desktopSize: { width: "80", height: "50" },
  },
  {
    label: "Animes",
    href: "/Anime",
    icon: "https://img.icons8.com/ios/50/000000/naruto.png",
    alt: "naruto icon",
    iconPadding: "p-2",
  },
  {
    label: "Learning",
    href: "/Learning",
    icon: "https://img.icons8.com/ios/50/000000/learning.png",
    alt: "Learning icon",
    iconPadding: "p-2",
  },
  {
    label: "StartUp",
    href: "/Startup",
    icon: "https://img.icons8.com/ios/50/000000/rocket--v1.png",
    alt: "Startup icon",
    iconPadding: "p-4",
  },
];
