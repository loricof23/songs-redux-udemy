import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a Song</div>
  }
  return (
    <div>
      <h3>Details For: </h3>
      <p>Tittle : { song.title }</p>
      <p>Duration: { song.duration } </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps) (SongDetail);