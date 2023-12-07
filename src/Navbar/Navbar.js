import React from "react";
import "./Navbar.css";
import Logout from "../Assets/logout.svg";
import Songs from "../Assets/songs.svg";

const Navbar = ({ setLoggedIn }) => {
  return (
    <div className="navbar">
      <p className="logo">Logo</p>
      <div className="songs_button">
        <img
          src={Songs}
          width="20px"
          height="20px"
          style={{ marginLeft: "30px" }}
        ></img>
        <p style={{ marginLeft: "10px" }}>Songs</p>
      </div>
      <div className="logout_button" onClick={() => setLoggedIn(false)}>
        <img
          src={Logout}
          width="20px"
          height="20px"
          style={{ marginLeft: "30px" }}
        ></img>
        <p style={{ marginLeft: "10px" }}>Logout</p>
      </div>
    </div>
  );
};

export default Navbar;
