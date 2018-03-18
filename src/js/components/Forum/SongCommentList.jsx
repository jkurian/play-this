import React from "react";
import TextField from 'material-ui/TextField'
import { connect } from "react-redux";
import SongComment from "./SongComment.jsx";
import Subheader from "material-ui/Subheader";
import * as _ from "lodash";
import { fetchSongComments } from "../../actions/post";

@connect((store, props) => {
  return {
    songComments: _.get(store, `post.songComments.${props.songId}`)
  };
})
export default class CommentTextField extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchSongComments(this.props.songId));
  }
  render() {
    const allComments = this.props.songComments ? this.props.songComments.map(song => {
      return <SongComment song={song} />
    }) : undefined
    return (
      <div>
      <Subheader>Comments</Subheader>
      {allComments}
      </div>
    );
  }
}