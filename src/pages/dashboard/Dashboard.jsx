import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import SongsChart from "./components/SongsChart";
import AddSongModal from "./components/AddSongModal";
import MusicPlayer from "./components/MusicPlayer";
import { useSongListContext } from "../../context/songContext";

function Dashboard() {
  const [isOpenModal, setIsModalOpen] = useState(false);
  const { songList } = useSongListContext();
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(songList[trackIndex]);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-screen flex">
      {isOpenModal && <AddSongModal closeModal={closeModal} />}
      <Sidebar />
      <div className="w-full relative">
        <div className="border-b border-b-gray py-4 px-9">
          <div className="text-[#00000073] flex text-sm font-normal mb-3">
            <p>First-level Menu / Second-level Menu / </p>
            <p className="text-[#000000D9]">&nbsp; Current Page</p>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-yellow text-sm font-normal px-4 py-[5px] rounded-sm"
              onClick={() => setIsModalOpen(true)}
            >
              Add Songs
            </button>
          </div>
        </div>
        <div className="pt-8 px-6 pb-[70px] overflow-auto max-h-[600px]">
          <SongsChart
            setCurrentTrack={setCurrentTrack}
            currentTrack={currentTrack}
          />
        </div>
        <MusicPlayer
          {...{ setTrackIndex, setCurrentTrack, currentTrack, trackIndex }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
