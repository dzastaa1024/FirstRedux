import { selectSong } from "./actions/index";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:05" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want it That Way", duration: "1:02" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectSong;
};