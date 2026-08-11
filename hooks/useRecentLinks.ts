import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const STORAGE_KEY = "history";
const MAX_TRACKED_LINKS = 4;

const readHistory = (): string[] => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed.filter((entry) => typeof entry === "string") : [];
  } catch {
    // Private-mode storage errors and hand-edited values both land here; an
    // unreadable history is not worth breaking navigation over.
    return [];
  }
};

/**
 * Records every visited path (except the landing page) so the Welcome screen can
 * offer a "Recent" list, mirroring an editor's recently-opened files.
 */
export const useRecentLinksTracker = (): void => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") return;

    const withoutCurrent = readHistory()
      .slice(0, MAX_TRACKED_LINKS)
      .filter((link) => link !== window.location.pathname);

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([window.location.pathname, ...withoutCurrent])
      );
    } catch {
      // Storage full or blocked — the history is a convenience, not a feature
      // worth failing a page view for.
    }
  }, [router.pathname]);
};

/**
 * Reads the recorded history. Returns `[]` on the server and on the first client
 * render so the markup hydrates against what the server produced, then fills in.
 */
export const useRecentLinks = (): string[] => {
  const [recentLinks, setRecentLinks] = useState<string[]>([]);

  useEffect(() => {
    setRecentLinks(readHistory());
  }, []);

  return recentLinks;
};
