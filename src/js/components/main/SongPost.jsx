import React, { Component } from "react";
import ReactDOM from "react-dom";
import { fetchSongInfo } from "../../actions/post";
import { connect } from "react-redux";

@connect(store => {
  return {
    songInfo: store.post.songInfo
  };
})

//later on we will parse the resulting uri from searches in src.
// eg. https://open.spotify.com/embed?uri=${songURI}
export default class SongPost extends Component {
  componentWillMount() {
    this.props.dispatch(fetchSongInfo());
  }
  render() {
    return (
      <div>
        <iframe
          src={
            "https://open.spotify.com/embed?uri=spotify:track:" +
            this.props.songInfo[0].spotify_id
          }
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
