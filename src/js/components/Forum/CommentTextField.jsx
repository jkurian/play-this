import React from "react";
import TextField from 'material-ui/TextField'
import { connect } from "react-redux";
import { postSongComment } from "../../actions/post";

@connect(store => {
  return {
  };
})
export default class CommentTextField extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      commentText: ''
    }
  }
  render() {
    const onChange = (evt) => {
      this.setState( { commentText: evt.target.value })
    }
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
      this.setState( { commentText: '' })
    };
    return (
      <TextField
      hintText="What did you think?"
      floatingLabelText="Comment"
      fullwidth="true"
      onChange={onChange}
      value={this.state.commentText}
      onKeyPress={evt => {
        if (evt.key === "Enter") {
          {
            commentEnter(evt, this.props.songID);
          }
        }
      }}
    />
    )
  }
}