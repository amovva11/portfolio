const PAUSE_ICON = "https://img.icons8.com/flat-round/64/000000/pause--v1.png";
const PLAY_ICON = "https://img.icons8.com/flat-round/64/000000/play--v1.png";

interface AudioToggleProps {
  isPlaying: boolean;
  onToggle: (playing: boolean) => void;
  /** Positioning for the toggle's wrapper, which differs per page. */
  className: string;
}

/**
 * Play/pause control for a page's background track.
 */
const AudioToggle: React.FC<AudioToggleProps> = ({
  isPlaying,
  onToggle,
  className,
}) => (
  <div className={className}>
    <img
      src={isPlaying ? PAUSE_ICON : PLAY_ICON}
      alt={isPlaying ? "Pause background music" : "Play background music"}
      width="40"
      height="40"
      className=" cursor-pointer"
      onClick={() => onToggle(!isPlaying)}
    />
  </div>
);

export default AudioToggle;
