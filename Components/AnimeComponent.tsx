import AudioToggle from "./ui/AudioToggle";
import PageScroll from "./ui/PageScroll";
import { anime } from "../data/anime";
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import { useIsTabletOrMobile } from "../hooks/useIsTabletOrMobile";

const AnimeComponent: React.FC = () => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const { ref, isPlaying, setPlaying } = useAudioPlayer();

  return (
    <PageScroll>
      <article
        className={`scrollbar w-100 text-left ${
          isTabletOrMobile
            ? "pb-40 bg-appanimemob"
            : "ml-3 mt-3 pb-20 bg-appanime"
        }`}
      >
        <div className="flex flex-row rounded-xl overflow-hidden shadow-lg">
          <AudioToggle
            isPlaying={isPlaying}
            onToggle={setPlaying}
            className="animeplayer pr-3 pt-5"
          />
          <section
            className={`w-full bg-gray-700 backdrop-filter backdrop-blur-md bg-opacity-20 rounded-lg sahdow-lg ${
              isTabletOrMobile ? "m-4 p-3 mt-40" : "m-20 p-4"
            }`}
          >
            <div className="pb-5">
              <h1 className="font-bold text-3xl md:text-3xl lg:text-5xl font-heading text-white">
                Anime
              </h1>
              <audio autoPlay loop ref={ref}>
                <source src="/NARUTORING.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
              <h2 className="text-lg mt-3 font-medium text-gray-100">
                Watching Anime is also one of the things that I like to do in my
                spare time.
              </h2>
            </div>
            <div className="grid grid-cols-1 grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-6">
              {anime.map((show) => (
                <div
                  key={show.title}
                  className="w-full bg-red-900 backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
                >
                  <div className="mb-8">
                    <img
                      className="object-center object-cover rounded-full h-36 w-36"
                      src={show.img}
                      alt={show.title}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">
                      {show.title}
                    </p>
                    {/* The episode count appears only on mobile, where the
                        cards have room for a second line. */}
                    {isTabletOrMobile && (
                      <p className="text-base text-gray-100 font-normal">
                        {show.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </PageScroll>
  );
};

export default AnimeComponent;
