import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Subheader from "material-ui/Subheader";
import TextField from "material-ui/TextField";
import Moment from "react-moment";
import CommentTextField from './CommentTextField.jsx'
import SongCommentList from './SongCommentList.jsx'
import SongWidget from './SongWidget.jsx'

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
    const songs = this.props.songInfo
      ? this.props.songInfo.map(song => {
          let nameOfPoster = !song.first_name
            ? this.props.first_name
            : song.first_name;
          return (
            <div>
              <div>
                <SongWidget song={song} nameOfPoster={nameOfPoster}/>
              <div>
                <CommentTextField songID={song.id}/>
                <SongCommentList songID={song.id} />
              </div>
            </div>
            </div>
          );
        })
      : undefined;
    return <div>{songs}</div>;
  }
}
