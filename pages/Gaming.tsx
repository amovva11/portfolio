import { NextPage } from "next";
import AudioToggle from "../Components/ui/AudioToggle";
import PageMeta from "../Components/ui/PageMeta";
import PageScroll from "../Components/ui/PageScroll";
import { games } from "../data/games";
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import { useIsTabletOrMobile } from "../hooks/useIsTabletOrMobile";

const DESCRIPTION = ` Playing Games is one of the activities i like to do in my
                    spare time`;

const Gaming: NextPage = () => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const { ref, isPlaying, setPlaying } = useAudioPlayer();

  return (
    <PageScroll>
      <PageMeta title="Gaming " description={DESCRIPTION} ogTitle="Gaming" />
      <article
        className={`${
          isTabletOrMobile ? "scrollbar pb-40" : "ml-3 pb-40 scrollbar"
        } text-left bg-app bg-center bg-no-repeat bg-cover`}
      >
        <section className={isTabletOrMobile ? "pt-10" : "pr-5 pt-10"}>
          <AudioToggle
            isPlaying={isPlaying}
            onToggle={setPlaying}
            className="animeplayer pr-3 pt-3"
          />
          <audio autoPlay loop ref={ref}>
            <source src="/valorantring.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <div className="flex flex-row justify-center items-center rounded-lg">
            <main
              className={`flex flex-col lg:flex-row backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full ${
                isTabletOrMobile ? "mr-1 ml-1 mt-5" : "max-w-5xl shadow-lg m-4 lg:m-6"
              }`}
            >
              <div className={isTabletOrMobile ? "flex-1 p-3" : "flex-1 p-4 lg:p-6"}>
                <div className="text-lg text-white mb-4 flex items-center">
                  <div className="md:flex items-cente text0">
                    <h1 className="lg:text-5xl text-indigo-100 font-bold leading-tight text-3xl">
                      Gaming
                    </h1>
                  </div>
                </div>
                <div className="pb-4 text-gray-200 font-small dark:text-gray-400">
                  {" "}
                  Playing Games is one of the activities i like to do in my spare
                  time. At present, I play below listed games in my spare time.
                  You can reach out to me if you want to play as a team.
                </div>{" "}
                <div className="grid gap-4 grid-cols-1s xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                  {games.map((game) => (
                    <div
                      key={game.title}
                      className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative"
                    >
                      <div className="text-white w-full">
                        <img
                          src={isTabletOrMobile ? game.mobileImage : game.image}
                          alt={game.title}
                          width="100%"
                          className="rounded-lg h-50"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        {game.title}
                      </div>
                      <div className="text-white font-normal">
                        {game.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </section>
      </article>
    </PageScroll>
  );
};

export default Gaming;
