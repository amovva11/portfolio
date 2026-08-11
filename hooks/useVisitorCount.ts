import { useEffect, useState } from "react";
import countapi from "countapi-js";
import { formatCount } from "../lib/formatCount";

/**
 * Fetches (and increments) the shared visit counter for the status bar.
 *
 * Runs once per mount inside an effect. The original called countapi during
 * render, which fired a request on every re-render and incremented the counter
 * each time.
 *
 * Returns "" until the request resolves, and stays "" if it fails, so the status
 * bar degrades to a bare label rather than breaking.
 */
export const useVisitorCount = (): string => {
  const [visitorCount, setVisitorCount] = useState("");

  useEffect(() => {
    let cancelled = false;

    countapi
      .visits("global")
      .then((result: { value: number }) => {
        if (!cancelled) setVisitorCount(formatCount(result.value));
      })
      .catch(() => {
        // Counter is decorative; a failed lookup should not surface an error.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return visitorCount;
};
