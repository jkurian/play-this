import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import FontIcon from "material-ui/FontIcon";
import { getLikes, postLike, removeLike } from "../../actions/post";

@connect(store => {
  return {
    sessionCookie: store.login.sessionCookie,
    likes: store.post.songLikes
  };
})
class Likes extends Component {
  componentWillMount() {
    let songId = this.props.songID;
    let userId = this.props.sessionCookie;
    this.props.dispatch(getLikes(songId));
  }

  render() {
    let userId = this.props.sessionCookie;
    let songId = this.props.songID;
    let likes = this.props.likes[songId][0].count;
    let alreadyLiked = this.props.likes[songId][1].isLiked;

    const onLikeClick = evt => {
      if (!alreadyLiked === true) {
        this.props.dispatch(removeLike(userId, songId));
      } else {
        this.props.dispatch(postLike(userId, songId));
      }
      // this.setState( { searchText: '' })
    };

    const likeButton = (
      <img src="../../../assets/images/favorite-heart-button.svg" height="30" />
    );

    const style = {
      margin: 12
    };

    return (
      <div>
        <RaisedButton
          backgroundColor="#169fbd"
          hoverColor="#c3237e"
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
