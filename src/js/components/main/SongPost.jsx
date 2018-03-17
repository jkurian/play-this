import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Comment from "./Comment.jsx";
import Subheader from "material-ui/Subheader";

@connect(store => {
  return {
    songInfo: store.post.songInfo
  };
})
export default class SongPost extends Component {
  render() {
    console.log(this.props.songInfo);
    const songs = this.props.songInfo
      ? this.props.songInfo.map(song => {
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
                <Subheader>Comments</Subheader>
                <Comment songId={song.id} />
              </div>
            </div>
          );
        })
      : undefined;
    return <div>{songs}</div>;
  }
}
