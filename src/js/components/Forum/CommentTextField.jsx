import React from "react";
import TextField from 'material-ui/TextField'
import { connect } from "react-redux";
import { postSongComment, fetchSongComments } from "../../actions/post";

@connect(store => {
  return {
    songInfo: store.post.songInfo,
    sessionCookie: store.login.sessionCookie,
    avatar_url: store.login.avatar_url,
    first_name: store.login.first_name,
    last_name: store.login.last_name
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
      hintText="What did you think? (max. 500 characters)"
      floatingLabelText="Comment"
      fullwidth="true"
      onChange={onChange}
      multiLine={true}
      maxLength="499"
      style={{width: '30em'}}
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