import React from "react";

function DisplayTrack({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds || 0;
  };
  return (
    <div className="flex justify-between">
      <audio
        src={currentTrack.link}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="flex gap-4 items-center">
        <img src={currentTrack.thumbnail} alt="song pic" />
        <p>{currentTrack.songName}</p>
      </div>
    </div>
  );
}

export default DisplayTrack;
