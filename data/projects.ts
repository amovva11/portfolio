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
  /** Filename shown in the Explorer tree, e.g. "HandshakeEvals.tsx". */
  fileName: string;
  /** icons8 sprite class for the Explorer row; defaults to the TypeScript icon. */
  iconClass?: string;
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
 * TODO: add projects.
 *
 * Each entry publishes a card on /Projects, a detail page at /Projects/<n>, and
 * a row in the Explorer tree — all derived from this list, so adding one here is
 * the only step required.
 *
 * Banner, thumbnail, logo, and snapshot paths point at files in /public.
 */
export const projects: Project[] = [];
