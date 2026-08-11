import type { NextPage } from "next";
import Link from "next/link";
import PageMeta from "../Components/ui/PageMeta";
import { profileCards, site, startLinks } from "../data/site";
import { useIsTabletOrMobile } from "../hooks/useIsTabletOrMobile";
import { useRecentLinks } from "../hooks/useRecentLinks";

const DESCRIPTION = "VS code style developer portfolio";

const CARD_CLASSES =
  "w-full flex justify-start items-center pl-2 pr-2 p-1 rounded-sm gap-2 border-b border-blue-500";
const CARD_STYLE = { backgroundColor: "#262626", borderBottomWidth: "0.3rem" };
const LINK_CLASSES =
  "text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center";

const Home: NextPage = () => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const recentLinks = useRecentLinks();

  return (
    <>
      <PageMeta
        title={`${site.name} | ${site.role}`}
        description={DESCRIPTION}
        ogTitle={`${site.name} - ${site.role} & Product Developer`}
      />
      <main className="w-full containerCenterImage">
        <div className="container vscodecontainer mx-auto max-w-5xl w-full p-6 mb:p-12">
          <div className="flex flex-col mt-1 md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <div className="p-2">
                <h2 className="text-5xl font-sans mb-2">{site.name}</h2>
                <h3 className="text-2xl font-sans text-gray-500 pt-1 mb-2">
                  {site.role}
                </h3>

                <p className="text-xl text-gray-300 pt-5 mb-4">Start</p>
                {startLinks.map((link) => (
                  <Link passHref href={link.href} key={link.href}>
                    <p className={LINK_CLASSES}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={link.iconPath}
                        />
                      </svg>
                      {link.label} {"..."}
                    </p>
                  </Link>
                ))}

                <p className="text-xl text-gray-300 pt-6 mb-2">Recent</p>
                {recentLinks.length < 1 ? (
                  <p className="text-sm font-sans pt-1 text-gray-500">
                    No recent activity!
                  </p>
                ) : (
                  <div className="pt-1">
                    {recentLinks.map((item) => (
                      <Link passHref href={item} key={item}>
                        {/* The nested <p> is invalid markup that browsers split
                            into siblings. Preserved because the resulting layout
                            is what the page currently ships. */}
                        <p className={LINK_CLASSES}>
                          {item.slice(1)}{" "}
                          <p className="text-gray-300 pl-2 text-sm">
                            {site.workspacePath}
                            {item}
                          </p>
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1">
              <div
                className="p-2"
                style={{ paddingTop: isTabletOrMobile ? "5%" : "22%" }}
              >
                <p className="text-xl text-gray-300 pt-6 mb-1">About</p>
                {profileCards.map((card, index) => {
                  const content = (
                    <div
                      className={`${CARD_CLASSES}${
                        card.href ? " cursor-pointer" : ""
                      }`}
                      style={CARD_STYLE}
                    >
                      <img
                        src={card.icon}
                        alt=""
                        className={card.iconClassName}
                      />
                      <p className="text-gray-200 text-sm font-sans flex justify-start items-center">
                        {card.label}
                      </p>
                    </div>
                  );

                  return (
                    <div className={index === 0 ? "pt-1" : "mt-4"} key={card.label}>
                      {card.href ? (
                        <Link passHref target="_blank" href={card.href}>
                          {content}
                        </Link>
                      ) : (
                        content
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
