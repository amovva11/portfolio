import Link from "next/link";
import { AvatarIcon, Copyicon } from "../SVG/IconsSVG";
import styles from "./Layout.module.css";

interface ActivityBarProps {
  isExplorerOpen: boolean;
  toggleExplorer: () => void;
}

/** The narrow icon rail on the far left that shows and hides the Explorer. */
const ActivityBar: React.FC<ActivityBarProps> = ({
  isExplorerOpen,
  toggleExplorer,
}) => (
  <div className="side-header text-center">
    <ul className="side-header-menu text-center relative h-full">
      <li
        className={`${isExplorerOpen ? "active" : ""} ${styles.faicons}`}
        title="Sidebar"
        onClick={toggleExplorer}
      >
        <Copyicon width={25} height={25} />
      </li>

      <Link href="/">
        <li
          className={styles.faicons}
          style={{ position: "absolute", bottom: "0" }}
          title="About"
        >
          <div className="cursor-pointer" title="About">
            <AvatarIcon width={30} height={30} />
          </div>
        </li>
      </Link>
    </ul>
  </div>
);

export default ActivityBar;
