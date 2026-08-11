import { NextPage } from "next";
import Link from "next/link";
import PageMeta from "../Components/ui/PageMeta";
import PageScroll from "../Components/ui/PageScroll";
import { hobbies } from "../data/hobbies";
import { useIsTabletOrMobile } from "../hooks/useIsTabletOrMobile";

const Hobbies: NextPage = () => {
  const isTabletOrMobile = useIsTabletOrMobile();

  return (
    <PageScroll>
      <PageMeta
        title="Hobbies"
        description="What i like to do the most in my spare time."
        ogTitle="Hobbies"
      />
      <div className={isTabletOrMobile ? "p-3" : ""}>
        <main
          className={`backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full shadow-lg ${
            isTabletOrMobile ? "" : "max-w-5xl m-4 lg:m-6"
          }`}
        >
          <div className={isTabletOrMobile ? "p-1" : "p-12"}>
            <div>
              <h1 className="lg:text-5xl pb-2 text-indigo-500 font-bold leading-tight text-3xl">
                Hobbies
              </h1>
              <div className="text-gray-400 dark:text-gray-400">
                {" "}
                List of stuff i like to do in my Spare Time.
              </div>
              <div className="grid grid-cols-3 pt-5 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.href}
                    className="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30"
                  >
                    <Link href={hobby.href}>
                      <div>
                        <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                          <img
                            className={`${
                              isTabletOrMobile ? "" : "h-20 "
                            }${hobby.iconPadding} rounded-md`}
                            src={hobby.icon}
                            alt={hobby.alt}
                            width={
                              isTabletOrMobile
                                ? "80"
                                : hobby.desktopSize?.width
                            }
                            height={
                              isTabletOrMobile
                                ? "auto"
                                : hobby.desktopSize?.height
                            }
                          />
                        </div>
                        <h2 className="text-white text-center font-semibold">
                          {hobby.label}
                        </h2>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageScroll>
  );
};

export default Hobbies;
