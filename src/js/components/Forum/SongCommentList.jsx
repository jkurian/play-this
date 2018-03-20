import React from "react";
import TextField from 'material-ui/TextField'
import { connect } from "react-redux";
import SongComment from "./SongComment.jsx";
import Subheader from "material-ui/Subheader";
import * as _ from "lodash";
import { fetchSongComments } from "../../actions/post";


@connect((store, props) => {
  return {
    songComments: _.get(store, `post.songComments.${props.songID}`),
  };
})
export default class CommentTextField extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchSongComments(this.props.songID))
  }
  render() {
    console.log('Props of comments are', this.props);
    const allComments = this.props.songComments ? this.props.songComments.map(comments => {
      return <SongComment comments={comments} />
    }) : undefined;
    return (
      <div>
      {allComments}
      </div>
    );
  }
}