const ProgressBar = ({ progressBarRef, audioRef }) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value || 0;
  };
  return (
    <div className="w-full flex">
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
        className="w-full"
      />
    </div>
  );
};

export default ProgressBar;
