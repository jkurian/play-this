import React, { Component } from "react";
import ReactDOM from "react-dom";
import SongPost from "./SongPost.jsx";
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";
import { connect } from "react-redux";
import { fetchSongInfo } from "../../actions/post";
import { postSongComment } from "../../actions/post";

@connect(store => {
  return {
    sessionCookie: store.login.sessionCookie,
    viewingRequest: store.forum.viewingRequest,
  };
})
export default class Post extends Component {
  componentDidUpdate() {   
    this.props.dispatch(fetchSongInfo(this.props.viewingRequest.id));
  }
  render() {

    return (
      <div class="postedBox">
        <div>
          <SongPost />
        </div>
        <span>
          {/* <FloatingActionButton>
            <span>Like!</span>
          </FloatingActionButton> */}
        </span>
        <div>
          <br />
        </div>
      </div>
    );
  }
}
