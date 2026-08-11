import { useState } from "react";
import { useRouter } from "next/router";
import { DownIcon, RightIcon } from "../SVG/IconsSVG";
import ExplorerFile from "./ExplorerFile";
import { explorerTree } from "../../data/explorer";
import { useIsTabletOrMobile } from "../../hooks/useIsTabletOrMobile";

interface ExplorerProps {
  closeSideMenu: () => void;
}

/**
 * The file-tree panel that serves as the site's navigation.
 *
 * Both the rows and the active-file highlight come from `explorerTree`, so a new
 * page is one entry in that list rather than another block of markup here.
 */
const Explorer: React.FC<ExplorerProps> = ({ closeSideMenu }) => {
  const [collapsedFolders, setCollapsedFolders] = useState<string[]>([]);
  const isTabletOrMobile = useIsTabletOrMobile();
  const router = useRouter();

  // asPath rather than pathname, so /Projects/1 matches its own row instead of
  // the shared /Projects/[projectname] route.
  const currentPath = router.asPath.split(/[?#]/)[0];

  const toggleFolder = (label: string) =>
    setCollapsedFolders((collapsed) =>
      collapsed.includes(label)
        ? collapsed.filter((entry) => entry !== label)
        : [...collapsed, label]
    );

  const openFile = (href: string) => {
    router.push(href);
    if (isTabletOrMobile) closeSideMenu();
  };

  return (
    <div className="menu-option overflow-hidden">
      <h5 className="myweight">EXPLORER</h5>
      <div
        className="mb-5 pb-5 z-1 scrollbar"
        style={{ height: "84%", overflowY: "scroll" }}
      >
        {explorerTree.map((folder, folderIndex) => {
          const isCollapsed = collapsedFolders.includes(folder.label);

          return (
            <div
              key={folder.label}
              className={folderIndex === 0 ? "menu-drop" : "menu-drop pt-1"}
            >
              <div className="box-click">
                <div
                  className="flex cursor-pointer"
                  onClick={() => toggleFolder(folder.label)}
                >
                  <div className="myweight flex-min topPadd">
                    {isCollapsed ? <RightIcon /> : <DownIcon />}
                  </div>
                  <span className="myweight flex-auto">{folder.label}</span>
                </div>
                {!isCollapsed && (
                  <div className="show-pre">
                    <ul>
                      {folder.files.map((file) => (
                        <li
                          key={file.href}
                          onClick={() => openFile(file.href)}
                          className={`smallSide ${
                            currentPath === file.href ? "active" : ""
                          }`}
                        >
                          <ExplorerFile
                            name={file.name}
                            iconClass={file.iconClass}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {!isTabletOrMobile && (
        <ul className="bottom-links pl-2">
          <li className="border-b">
            <span className="text-gray-400">All Rights Reserved. </span>
          </li>
          <li>
            <span className="text-gray-400">
              {" "}
              Ⓒ Copyright {new Date().getFullYear()}.{" "}
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Explorer;
