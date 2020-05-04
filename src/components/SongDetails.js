import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetails extends Component {
  render() {
    const { song } = this.props;

    if (!song) {
      return <div>Select a song</div>;
    }

    return (
      <div>
        Song Details:
        <div>{song.title}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
