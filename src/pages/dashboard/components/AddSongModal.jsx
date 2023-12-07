import React, { useRef } from "react";
import { useState } from "react";
import songPic from "../../../assets/songPic.png";
import deleteIcon from "../../../assets/delete.svg";
import { useSongListContext } from "../../../context/songContext";

const AddSongModal = ({ closeModal }) => {
  const [songName, setSongName] = useState("");
  const { setSongList } = useSongListContext();
  const [songLink, setSongLink] = useState("");
  const [songSource, setSongSource] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileInputChange = () => {
    const selectedFile = fileInputRef.current.files[0];
    setUploadedFile(selectedFile);
  };

  const handleDeleteFile = () => {
    setUploadedFile(null);
    fileInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (songLink && songName && songSource) {
      let today = new Date();
      let date = today.toJSON().slice(0, 10);
      let newDate =
        date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);

      let newObj = {
        id: Date.now(),
        songName: songName,
        source: songSource,
        createdAt: newDate,
        thumbnail: songPic,
        link: songLink,
      };
      setSongList((prev) => [...prev, newObj]);
      closeModal();
    } else {
      alert("incomplete data");
    }
  };

  return (
    <div
      className="fixed z-30 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.25)] 
      flex justify-center items-center"
    >
      <div className="w-[798px] bg-white rounded-sm shadow-lg">
        <div className="flex justify-between items-center px-6 py-4 border-b-gray border-b">
          <h3 className=" text-base text-[rgba(0,0,0,0.85)] font-bold">
            Add Song
          </h3>
          <button onClick={closeModal} className="text-[rgba(0,0,0,0.45)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill-opacity="0.45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form className="px-5 py-9 pb-0">
          <div className="mb-6">
            <label className="block mb-2 text-sm ">Song Name</label>
            <input
              type="text"
              className="w-full border rounded-sm text-sm px-3 py-1 font-normal border-[#D9D9D9]"
              placeholder="Song Name"
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm ">Song Link</label>
            <input
              type="text"
              className="w-full border rounded-sm text-sm px-3 py-1 border-[#D9D9D9]"
              placeholder="URL"
              value={songLink}
              onChange={(e) => setSongLink(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm">Song Source</label>
            <input
              type="text"
              className="w-full border rounded-sm text-sm px-3 py-1 border-[#D9D9D9]"
              placeholder="Source Name"
              value={songSource}
              onChange={(e) => setSongSource(e.target.value)}
            />
          </div>

          <div className="mb-4">
            {/* <label
              htmlFor="fileInput"
              className="cursor-pointer border border-gray-300 rounded p-2"
              onClick={openFileInput}
              >
              Click to Upload Profile Thumbnail
              </label> */}
            <input
              type="file"
              id="fileInput"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              directory
              webkitdirectory
            />
            {uploadedFile && (
              <div className="flex items-center justify-between border p-2 my-2">
                <p>{uploadedFile.name}</p>
                <button onClick={handleDeleteFile}>
                  <img src={deleteIcon} alt="deleteIcon" />
                </button>
              </div>
            )}
          </div>
          <p className="text-sm text-[rgba(0,0,0,0.45)] py-[26px]">
            Image has to be of aspect ratio 1:1 with a size of 3000 pixels x
            3000 pixels
          </p>
        </form>
        <div className="px-4 py-2.5 flex gap-2 border-t-gray border-t justify-end">
          <button
            type="submit"
            className="px-4 py-1 bg-blue-500 text-white rounded-sm font-normal"
            onClick={handleSubmit}
          >
            Add
          </button>
          <button
            className="px-4 py-1 rounded-sm border border-[#D9D9D9] font-normal"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSongModal;
