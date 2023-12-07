import React, { createContext, useContext, useState } from "react";
import { dummyData } from "../assets/data";
const SongList = createContext("");

const SongListProvider = ({ children }) => {
  const [songList, setSongList] = useState(dummyData);

  return (
    <SongList.Provider value={{ songList, setSongList }}>
      {children}
    </SongList.Provider>
  );
};

const useSongListContext = () => {
  return useContext(SongList);
};

export { SongListProvider, useSongListContext };
