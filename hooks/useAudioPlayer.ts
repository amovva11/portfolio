import { useEffect, useRef, useState } from "react";

interface AudioPlayer {
  ref: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setPlaying: (playing: boolean) => void;
}

/**
 * Drives a background <audio> element and keeps a play/pause flag in sync with it.
 *
 * The ref is stable across renders, so the effect below attaches to the same
 * element the markup rendered rather than to a ref discarded on the next pass.
 */
export const useAudioPlayer = (): AudioPlayer => {
  const ref = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Autoplay is blocked until the visitor interacts with the page, so the
    // rejected promise here is expected and not an error worth surfacing.
    ref.current?.play().catch(() => undefined);
  }, []);

  const setPlaying = (playing: boolean) => {
    if (playing) {
      ref.current?.play().catch(() => undefined);
    } else {
      ref.current?.pause();
    }
    setIsPlaying(playing);
  };

  return { ref, isPlaying, setPlaying };
};
