import React, { Component } from "react";
import { connnect } from "react-redux";

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }
}

export default connect()(SongList);
