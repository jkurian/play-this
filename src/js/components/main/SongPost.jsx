import React, { Component } from "react";
import ReactDOM from "react-dom";
import { fetchSongInfo } from "../../actions/post";
import { connect } from "react-redux";
import Comment from "./Comment.jsx";

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
    const songs = this.props.songInfo.map(song => {
      return (
        <div>
          <div>
            <span>
              {song.title} by {song.artist} from {song.album}
            </span>
            <div>
              <iframe
                src={
                  "https://open.spotify.com/embed?uri=spotify:track:" +
                  song.spotify_id
                }
                width="640"
                height="80"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              />
            </div>
          </div>
          <div>
            <Comment songId={song.id} />
          </div>
        </div>
      );
    });
    return <div>{songs}</div>;
  }
}
