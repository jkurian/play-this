import React, { Component } from "react";
import ReactDOM from "react-dom";

import { connect } from "react-redux";

@connect(store => {
  return {};
})

//later on we will parse the resulting uri from searches in src.
// eg. https://open.spotify.com/embed?uri=${songURI}
export default class SongPost extends Component {
  render() {
    return (
      <div>
        <iframe
          src="https://open.spotify.com/embed?uri=spotify:track:0FutrWIUM5Mg3434asiwkp"
          width="640"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    );
  }
}
