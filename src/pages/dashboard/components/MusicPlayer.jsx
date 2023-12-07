import React, { useRef, useState } from "react";
import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import { useSongListContext } from "../../../context/songContext";
function MusicPlayer({ setCurrentTrack, currentTrack }) {
  const audioRef = useRef();
  const progressBarRef = useRef();
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const { songList } = useSongListContext();

  const handleNext = () => {
    let trackIndex = songList.findIndex((obj) => obj.id === currentTrack.id);
    if (trackIndex >= songList.length - 1) {
      setCurrentTrack(songList[0]);
    } else {
      setCurrentTrack(songList[trackIndex + 1]);
    }
  };

  return (
    <div className="w-full absolute bottom-0">
      <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
      <div className="flex justify-between items-center pr-[30px]">
        <DisplayTrack
          {...{
            currentTrack,
            audioRef,
            setDuration,
            progressBarRef,
            handleNext,
          }}
        />
        {audioRef.current && (
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              currentTrack,
              setCurrentTrack,
              handleNext,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default MusicPlayer;
