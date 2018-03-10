import React, { Component } from "react";
import ReactDOM from "react-dom";
import SongPost from "./SongPost.jsx";
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";

export default class Main extends Component {
  render() {
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
          <TextField
            hintText="What did you think?"
            floatingLabelText="Comment"
            fullwidth="true"
          />
          <br />
        </div>
      </div>
    );
  }
}
