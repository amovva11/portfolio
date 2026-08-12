import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

/**
 * Width at which the IDE chrome stops being usable side-by-side and the layout
 * switches to its single-column form.
 */
export const MOBILE_BREAKPOINT_PX = 943;

/**
 * Single source of truth for the responsive breakpoint.
 *
 * Reports `false` on the server AND on the first client render, then switches to
 * the real match after mount. Without the mount gate, `useMediaQuery` evaluates
 * `matchMedia` during the first client render, so on a phone the client's first
 * pass renders the mobile tree against server HTML containing the desktop tree —
 * a hydration mismatch on every page that branches on this.
 *
 * The cost is one frame of desktop layout on narrow screens before it corrects.
 */
export const useIsTabletOrMobile = (): boolean => {
  const matches = useMediaQuery({
    query: `(max-width: ${MOBILE_BREAKPOINT_PX}px)`,
  });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  return hasMounted && matches;
};
