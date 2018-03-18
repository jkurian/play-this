import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Comment from "./Comment.jsx";
import Subheader from "material-ui/Subheader";
import TextField from "material-ui/TextField";
import Moment from "react-moment";
import CommentTextField from '../Forum/CommentTextField.jsx'
import SongComments from '../Forum/SongComments.jsx'

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
  constructor (props) {
    super(props)
    this.state = {
      commentText: ''
    }
  }
  render() {
    const songs = this.props.songInfo
      ? this.props.songInfo.map(song => {
          let nameOfPoster = !song.first_name
            ? this.props.first_name
            : song.first_name;

          return (
            <div>
              <div>
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
                <span>
                  Posted by {nameOfPoster}{" "}
                  <Moment fromNow ago>
                    {song.song_time_stamp}
                  </Moment>{" "}
                  ago
                </span>
              </div>
              <div>
                <CommentTextField songID={song.id}/>
                <SongComments songID={song.id} />
              </div>
            </div>
          );
        })
      : undefined;
    return <div>{songs}</div>;
  }
}
