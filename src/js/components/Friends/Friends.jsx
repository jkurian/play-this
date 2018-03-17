import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FriendItem from './FriendItem.jsx'

import FriendSearchBar from './FriendSearchBar.jsx'
import SideBar from "../SideBar/SideBar.jsx";
import { sidebarToggleClose, fetchFriends } from "../../actions/sidebar";
import { connect } from "react-redux";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    overflowX: 'auto',
    display: 'flex',
    flexWrap: 'nowrap',
  }
};

@connect(store => {
  return {
    friends: store.sidebar.friends,
    sessionCookie: store.login.sessionCookie,
    addingFriend: store.users.addingFriend
  };
})
class Friends extends Component {
  componentWillMount() {
    this.props.dispatch(sidebarToggleClose());
  }
  componentDidUpdate() {
    if (!this.props.sessionCookie) {
      this.props.history.push("/login");
    }
  }
  render() {
    const friendProfiles = this.props.friends.map((friendObj, i) => {
      return (
        <FriendItem
          key={i}
          avatar_image={friendObj.avatar_image}
          first_name={friendObj.first_name}
          last_name={friendObj.last_name}
        />
      );
    });
    return (
      <div>
        <SideBar />
        <FriendSearchBar />
        <div style={styles.root}>
        <GridList cellHeight={180} style={styles.gridList}>
          {friendProfiles}
        </GridList>
        </div>
      </div>
    );
  }
}
export default withRouter(Friends);
