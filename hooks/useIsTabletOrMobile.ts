import { useMediaQuery } from "react-responsive";

/**
 * Width at which the IDE chrome stops being usable side-by-side and the layout
 * switches to its single-column form.
 */
export const MOBILE_BREAKPOINT_PX = 943;

/**
 * Single source of truth for the responsive breakpoint.
 *
 * Returns `false` during SSR and on the first client render, so markup that
 * branches on it renders its desktop form on the server and swaps after mount.
 */
export const useIsTabletOrMobile = (): boolean =>
  useMediaQuery({ query: `(max-width: ${MOBILE_BREAKPOINT_PX}px)` });
