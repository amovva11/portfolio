export interface BlogPost {
  image: string;
  title: string;
  link: string;
  /** Short category label rendered as a pill on the card. */
  tag: string;
}

/**
 * TODO: add posts you have written, co-authored, or want to recommend.
 * External links only — there is no CMS behind this.
 */
export const blogs: BlogPost[] = [];
