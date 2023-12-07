import React, { useState } from "react";
import "./Player.css";
import Navbar from "../Navbar/Navbar";
import TablePlay from "../Assets/table_play.svg";
import TableDelete from "../Assets/DeleteOutlined.svg";
import Modal from "../Component/Modal";

const Player = ({ setLoggedIn }) => {
  const songs = [
    {
      id: 1,
      name: "Song 1",
      source: "Source 1",
      addedOn: "2023-01-01",
      duration: 120,
    },
    {
      id: 2,
      name: "Song 2",
      source: "Source 2",
      addedOn: "2023-01-02",
      duration: 120,
    },
    {
      id: 3,
      name: "Song 3",
      source: "Source 3",
      addedOn: "2023-01-03",
      duration: 120,
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [show, setShow] = useState(false);

  const playPauseToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    console.log("Next song");
  };

  const handlePrevious = () => {
    console.log("Previous song");
  };

  const handleSliderChange = (e) => {
    setCurrentTime(parseInt(e.target.value, 10));
  };

  return (
    <div className="player">
      <Navbar setLoggedIn={setLoggedIn} />
      <div className="audio_container">
        <div className="songs_header">
          <p className="songs_title">Songs</p>
          <div className="add_songs" onClick={() => setShow(true)}>
            Add Songs
          </div>
        </div>
        <div className="songs_table">
          <table>
            <thead>
              <tr>
                <th>SONG NAME</th>
                <th>SOURCE</th>
                <th>ADDED ON</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song, index) => (
                <React.Fragment key={song.id}>
                  <tr>
                    <td>{song.name}</td>
                    <td>{song.source}</td>
                    <td>{song.addedOn}</td>
                    <td>
                      <img src={TablePlay} width="40px" height="40px"></img>
                    </td>
                    <td>
                      <img src={TableDelete} width="16px" height="16px"></img>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="songs_player">
          <input className="player_range" type="range" min="0" max="100" />
          <div className="player_buttons"></div>
        </div>
      </div>
      {show && <Modal setShow={setShow} show={show}></Modal>}
    </div>
  );
};

export default Player;
