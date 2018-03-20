import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import { fetchSongComments, postLike } from "../../actions/post";

@connect(store => {
  return {
    sessionCookie: store.login.sessionCookie,
    likes: store.post.songLikes
  };
})
class Likes extends Component {
  render() {
    const style = {
      margin: 12
    };

    let userId = this.props.sessionCookie;
    let songId = this.props.songID;
    let likes = this.props.likes[songId];

    const onLikeClick = evt => {
      this.props.dispatch(postLike(userId, songId));
      // this.setState( { searchText: '' })
    };

    const likeButton = (
      <img src="../../../assets/images/favorite-heart-button.svg" height="30" />
    );

    return (
      <div>
        <FlatButton
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          icon={likeButton}
          label={likes}
          style={style}
          onClick={onLikeClick}
        />
      </div>
    );
  }
}

export default withRouter(Likes);
