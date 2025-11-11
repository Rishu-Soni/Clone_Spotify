import react from "react";
import "./CSS/LeftNav.css";
import closedLibrary from "./assets/ClosedLibrary.svg";
import OpenedLibrary from "./assets/OpenedLibrary.png";
import plusIcon from "./assets/plus.png";

import songPlaylistnoIMG from "./assets/SongPlaylist_Img/ifNon.png";
import songPlaylist1 from "./assets/SongPlaylist_Img/playlist1.png";
import songPlaylist2 from "./assets/SongPlaylist_Img/playlist2.png";
import songPlaylist3 from "./assets/SongPlaylist_Img/playlist3.jpg";
import songPlaylist4 from "./assets/SongPlaylist_Img/playlist4.jpg";
import songPlaylist5 from "./assets/SongPlaylist_Img/playlist5.jpg";
import songPlaylist6 from "./assets/SongPlaylist_Img/playlist6.jpg";

const song_Playlist = [
  {
    type: "song_playlist",
    playlistImg: songPlaylistnoIMG,
  },
  {
    type: "song_playlist",
    playlistImg: songPlaylist1,
  },
  {
    type: "song_playlist",
    playlistImg: songPlaylist2,
  },
  {
    type: "song_playlist",
    playlistImg: songPlaylist3,
  },
  {
    type: "song_playlist",
    playlistImg: songPlaylist4,
  },
  {
    type: "song_playlist",
    playlistImg: songPlaylist5,
  },
  {
    type: "song_playlist",
    playlistImg: songPlaylist6,
  },
];

function LeftNav() {
  return (
    <section className="leftNav">
      <div className="iconContainer" >
        <img className="library" src={OpenedLibrary} alt="Open_Library" />
        {/* <img className="library" src={closedLibrary} alt="Open_Library_active" /> */}
        <img className="plus_icon" src={plusIcon} alt="Add_Playlist" />
      </div>
      <div className="imgContainer" >
        <div className="heartImg">♥️</div>
        {song_Playlist.map((item, index) => (
            <img className="song-podcast_playlist" src={item.playlistImg} alt={index}/>
        ))}
      </div>
    </section>
  );
}
export default LeftNav;
