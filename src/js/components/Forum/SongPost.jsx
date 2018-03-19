import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import Subheader from "material-ui/Subheader";
import CommentTextField from './CommentTextField.jsx'
import SongCommentList from './SongCommentList.jsx'
import SongWidget from './SongWidget.jsx'
import { fetchSongComments } from "../../actions/post";

@connect(store => {
  return {
    songInfo: store.post.songInfo,
    sessionCookie: store.login.sessionCookie,
    first_name: store.login.first_name,
  };
})
class SongPost extends Component {
  componentDidUpdate() {
    if(!this.props.sessionCookie) {
      this.props.history.push('/')
    }
    this.props.songInfo.map(song => {
      this.props.dispatch(fetchSongComments(song.id))
    })
  }
  render() {
    const songs = this.props.songInfo
      ? this.props.songInfo.map(song => {
          let nameOfPoster = !song.first_name
            ? this.props.first_name
            : song.first_name;
          return (
            <div>
                <SongWidget song={song} nameOfPoster={nameOfPoster}/>
              <div>
                <CommentTextField songID={song.id}/>
                <SongCommentList songID={song.id} />
              </div>
            </div>
          );
        })
      : undefined;
      return (
      <div>
        {songs}
      </div>);
  }
}
export default withRouter(SongPost)
