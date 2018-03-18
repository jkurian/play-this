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
                  <iframe
                    src={
                      "https://open.spotify.com/embed?uri=spotify:track:" +
                      song.spotify_id
                    }
                    width="640"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  />
                </div>
                <span>
                  Posted by {nameOfPoster}{" "}
                  <Moment fromNow ago>
                    {song.song_time_stamp}
                  </Moment>{" "}
                  ago
                </span>
    )
  }
}