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
    viewingRequest: store.forum.viewingRequest
  };
})
export default class Main extends Component {
  componentWillUpdate() {
    console.log("POSTS ARE MOUNTING AGAIN", this.props.viewingRequest.id);
    this.props.dispatch(fetchSongInfo(this.props.viewingRequest.id));
  }
  render() {
    const commentEnter = (evt) => {
      console.log('in comment enter', evt.target);
      this.props.dispatch(postSongComment(this.props.sessionCookie,1,'test'));
    }
    return (
      <div class="postedBox">
        <div>
          <SongPost />
        </div>
        <span>
          <FloatingActionButton>
            <span>Like!</span>
          </FloatingActionButton>
        </span>
        <div>
          {/* <TextField
            hintText="What did you think?"
            floatingLabelText="Comment"
            fullwidth="true"
            onKeyPress={(evt) => {
              if (evt.key === 'Enter') {
                {commentEnter(evt)}
              }
            }}
          /> */}
          <br />
        </div>
      </div>
    );
  }
}
