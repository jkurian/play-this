import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import ActionAndroid from "material-ui/svg-icons/action/android";
import { fullWhite } from "material-ui/styles/colors";
import { fetchSongComments, postLike } from "../../actions/post";

@connect(store => {
  return {
    sessionCookie: store.login.sessionCookie
  };
})
class Likes extends Component {
  render() {
    const style = {
      margin: 12
    };

    let userId = this.props.sessionCookie;
    let songId = this.props.songID;

    const onLikeClick = evt => {
      this.props.dispatch(postLike(userId, songId));
      // this.setState( { searchText: '' })
    };

    return (
      <div>
        <FlatButton
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          icon={<ActionAndroid color={fullWhite} />}
          style={style}
          onClick={onLikeClick}
        />
      </div>
    );
  }
}

export default withRouter(Likes);