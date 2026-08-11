import { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import ActivityBar from "./ActivityBar";
import Explorer from "./Explorer";
import StatusBar from "./StatusBar";
import TitleBar from "./TitleBar";
import { useIsTabletOrMobile } from "../../hooks/useIsTabletOrMobile";
import { useRecentLinksTracker } from "../../hooks/useRecentLinks";
import { useVisitorCount } from "../../hooks/useVisitorCount";

/**
 * The IDE shell every page renders inside: title bar, activity rail, Explorer,
 * and status bar wrapped around the routed content.
 */
const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const visitorCount = useVisitorCount();

  useRecentLinksTracker();

  // Narrow viewports cannot show the Explorer beside the content, so collapse it
  // whenever the layout crosses into its mobile form.
  useEffect(() => {
    if (isTabletOrMobile) setIsExplorerOpen(false);
  }, [isTabletOrMobile]);

  return (
    <>
      <TitleBar showWindowControls={!isTabletOrMobile} />
      <div className="scrollbar w-full">
        <nav
          className={isExplorerOpen ? styles.navside : styles.navsidecollapse}
        >
          <ActivityBar
            isExplorerOpen={isExplorerOpen}
            toggleExplorer={() => setIsExplorerOpen((open) => !open)}
          />
          {isExplorerOpen && (
            <Explorer closeSideMenu={() => setIsExplorerOpen(false)} />
          )}
        </nav>
        <main
          className={`${
            isExplorerOpen ? styles.mainside : styles.mainsidecollapse
          } scrollbar`}
        >
          {children}
        </main>
      </div>
      <StatusBar
        isTabletOrMobile={isTabletOrMobile}
        visitorCount={visitorCount}
      />
    </>
  );
};

export default Layout;
