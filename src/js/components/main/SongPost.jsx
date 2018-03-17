import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Comment from "./Comment.jsx";
import { fetchSongInfo, postSongComment } from "../../actions/post";
import Subheader from "material-ui/Subheader";
import TextField from "material-ui/TextField";

@connect(store => {
  return {
    songInfo: store.post.songInfo,
    sessionCookie: store.login.sessionCookie,
    avatar_url: store.login.avatar_url,
    first_name: store.login.first_name,
    last_name: store.login.last_name
  };
})
export default class SongPost extends Component {
  render() {
    const commentEnter = (evt, songid) => {
      this.props.dispatch(
        postSongComment(
          this.props.sessionCookie,
          songid,
          evt.target.value,
          this.props.avatar_url,
          this.props.first_name,
          this.props.last_name
        )
      );
    };
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
                <TextField
                  hintText="What did you think?"
                  floatingLabelText="Comment"
                  fullwidth="true"
                  onKeyPress={evt => {
                    if (evt.key === "Enter") {
                      {
                        commentEnter(evt, song.id);
                      }
                    }
                  }}
                />
              </div>
            </div>
          );
        })
      : undefined;
    return <div>{songs}</div>;
  }
}
