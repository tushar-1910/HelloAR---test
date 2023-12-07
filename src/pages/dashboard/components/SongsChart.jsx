import React from "react";
import playIcon from "../../../assets/circle-play.svg";
import deleteIcon from "../../../assets/delete.svg";
import { useSongListContext } from "../../../context/songContext";

function SongsChart({ setCurrentTrack, currentTrack }) {
  const { songList, setSongList } = useSongListContext();

  function handleDelete(index) {
    let filteredSongs = songList.filter((_, ind) => ind !== index);
    let trackIndex = songList.findIndex((obj) => obj.id === currentTrack.id);
    if (trackIndex === index) setCurrentTrack(songList[index - 1]);
    setSongList(filteredSongs);
    songList.splice(index, 1);
  }

  function handlePlay(index) {
    setCurrentTrack(songList[index]);
  }

  return (
    <div>
      <table className=" min-w-full max-w-full overflow-visible">
        <thead>
          <tr className="border-b text-[#000000D9] font-medium text-sm">
            <th className="w-5/12 py-4 text-start pl-6">SONG NAME</th>
            <th className="w-2/12 text-start">SOURCE</th>
            <th className="text-start">ADDED ON</th>
          </tr>
        </thead>
        <tbody className=" overflow-visible bg-white">
          {songList.map((item, index) => (
            <tr
              className="text-sm font-normal  text-[#000000D9] border-b border-b-gray last:pb-0 last:border-0 [&>td]:first:pt-6"
              key={item.id}
            >
              <td className="w-5/12 py-2">
                <div className="flex gap-4 items-center">
                  <img src={item.thumbnail} alt="song pic" />
                  <p>{item.songName}</p>
                </div>
              </td>
              <td className="w-2/12">{item.source}</td>
              <td className="w-2/12">{item.createdAt}</td>
              <td className="w-2/12">
                <button onClick={() => handlePlay(index)}>
                  <img src={playIcon} alt="playicon" />
                </button>
              </td>
              <td className="w-1/12">
                <button onClick={() => handleDelete(index)}>
                  <img src={deleteIcon} alt="deleteIcon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SongsChart;
