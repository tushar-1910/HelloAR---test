import { useCallback, useEffect, useRef, useState } from "react";
import pauseIcon from "../../../assets/pause.svg";
import forwardIcon from "../../../assets/playForward.svg";
import playIcon from "../../../assets/triangle-play.png";
import { useSongListContext } from "../../../context/songContext";
const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  currentTrack,
  setCurrentTrack,
  handleNext,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playAnimationRef = useRef();
  const { songList } = useSongListContext();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  const handlePlayback = () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  };

  useEffect(() => {
    handlePlayback();
  }, [isPlaying, audioRef, repeat]);
  const handlePrevious = () => {
    let trackIndex = songList.findIndex((obj) => obj.id === currentTrack.id);
    if (trackIndex === 0) {
      let lastTrackIndex = songList.length - 1;
      setCurrentTrack(songList[lastTrackIndex]);
    } else {
      setCurrentTrack(songList[trackIndex - 1]);
    }
  };

  return (
    <div>
      <div className="flex gap-4">
        <button onClick={handlePrevious}>
          <img
            src={forwardIcon}
            alt="backwardIcon"
            className="transform rotate-180"
          />
        </button>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <img src={pauseIcon} alt="pause icon" className="w-6 h-6" />
          ) : (
            <img src={playIcon} alt="play icon" className="w-5 h-5 " />
          )}
        </button>
        <button onClick={handleNext}>
          <img src={forwardIcon} alt="forward icon" />
        </button>
      </div>
    </div>
  );
};

export default Controls;
