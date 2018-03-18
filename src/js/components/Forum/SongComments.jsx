import React from "react";
import TextField from 'material-ui/TextField'
import { connect } from "react-redux";
import Comment from "../main/Comment.jsx";
import Subheader from "material-ui/Subheader";

@connect(store => {
  return {
  };
})
export default class CommentTextField extends React.Component {
  render() {
    return (
      <div>
      <Subheader>Comments</Subheader>
      <Comment songId={this.props.songID} />
      </div>
    )
  }
}