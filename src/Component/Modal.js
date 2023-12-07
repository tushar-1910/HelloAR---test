import React from "react";
import "./Modal.css";
import Close from "../Assets/Close.svg";

const Modal = ({ show, setShow }) => {
  return (
    <div className="add_songs_modal">
      <div className="main_modal">
        <div className="modal_title">
          <p>Add Song</p>
          <img src={Close} onClick={() => setShow(false)}></img>
        </div>
      </div>
    </div>
  );
};

export default Modal;
