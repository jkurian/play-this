import React from "react";
import TextField from 'material-ui/TextField'
import { connect } from "react-redux";
import Comment from "../main/Comment.jsx";
import Subheader from "material-ui/Subheader";
import Moment from "react-moment";

@connect(store => {
  return {
  };
})
export default class CommentTextField extends React.Component {
  render() {
    return (
      <div>
      <div>
        <iframe
          src={
            "https://open.spotify.com/embed?uri=spotify:track:" +
            this.props.song.spotify_id
          }
          width="640"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
      <span>
        Posted by {this.render.nameOfPoster}{" "}
        <Moment fromNow ago>
          {this.props.song.song_time_stamp}
        </Moment>{" "}
        ago
      </span>
      </div>
    )
  }
}