export interface Skill {
  name: string;
  icon: string;
  /** Some icons are visually oversized and were scaled down individually. */
  iconWidth?: string;
}

export interface SkillGroup {
  label: string;
  /** Controls the small spacing difference between leading and trailing groups. */
  headingTopMargin: boolean;
  skills: Skill[];
}

/**
 * TODO: populate from the resume, grouped by category rather than as a flat
 * list. Icons are icons8 URLs; keep them consistent in style.
 */
export const skillGroups: SkillGroup[] = [];
