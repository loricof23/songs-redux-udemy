import { combineReducers } from "redux";


const songsReducer = () => {
  return [
    { title: 'Drown', duration: '3.42'},
    { title: 'Throne', duration: '3.11'},
    { title: 'Teardrops', duration: '3.35'},
    { title: 'Ludens', duration: '4.40'}
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers( {
   songs: songsReducer,
   selectedSong: selectedSongReducer,
});