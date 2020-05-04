import React, { Component } from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetails";
import SongDetails from "./SongDetails";

export default class App extends Component {
  render() {
    return (
      <div className="ui content grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            <SongDetails />
          </div>
        </div>
      </div>
    );
  }
}
