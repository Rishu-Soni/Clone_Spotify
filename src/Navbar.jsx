import React from "react";

import "./CSS/Navbar.css";

import SpotifyLogo from "./assets/spotify.png";
import homeIcon from "./assets/home.png";
import searchIcon from "./assets/search.png";
import verticalLine from "./assets/verticalLine.svg";
import browseIcon from "./assets/browse.svg";
import bellIcon from "./assets/bell.png";
import peopleIcon from "./assets/users-alt.png";
import profileLogo from "./assets/profilepic.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav_icons outerIcon " src={SpotifyLogo} alt="Spotify_logo" />
      <div className="middleBar">
        <img className="nav_icons round_icon outerIcon " src={homeIcon} alt="home_icon" />
        <div className="searchBar">
          <img className="nav_icons searchIcon " src={searchIcon} alt="search_icon" />
          <input
            className="search_inputBox"
            type="text"
            placeholder="What do you want to play?"
            autocomplete="off"
            suggestions="off"
            spellCheck="false"
          />
          <img className="nav_icons" src={verticalLine} alt="vertical_line" />
          <img className="nav_icons browseIcon " src={browseIcon} alt="browse_icon" />
        </div>
      </div>
      <div className="lastBar">
        <img className="nav_icons smallerSize outerIcon " src={bellIcon} alt="bell_icon" />
        <img className="nav_icons smallerSize outerIcon " src={peopleIcon} alt="people_icon" />
        <img className="nav_icons round_icon outerIcon " src={profileLogo} alt="profile_icon" />
      </div>
    </nav>
  );
}

export default Navbar;
