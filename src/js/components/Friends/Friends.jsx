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
  //the entire container of tiles
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    marginTop: '1em',
    marginLeft: '6em',
    marginRight: '6em',
    marginBottom: '6em',
  }
};

@connect(store => {
  return {
    deletedFriend: store.friend.deletedFriend,
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
        relationship={{user_id1: this.props.sessionCookie, user_id2: friendObj.id}}
        avatar_image={friendObj.avatar_image}
        first_name={friendObj.first_name}
        last_name={friendObj.last_name}
        />
      );
    });
    const titleStyle = {
      paddingLeft: 20,
      marginTop: '4em',
      fontFamily: 'Raleway, sans-serif', 
      fontWeight: 900
    }
    const pStyle = {
      fontFamily: 'Raleway, sans-serif',
      width: '29em',
    }
    return (
      <div>
        <SideBar />
        <div style={{marginLeft: '8em', marginTop: '2em'}}>
          <div style={{display: 'inline-block'}}>
            <p style={pStyle}>
              <font size="5">
                Each of your friends desperately need your authoritative opinion. 
                All of their forums are available for you to add comments or song recommendations.
               </font>  
            </p>
          </div>
          <div style={{ display: 'inline-block', right: 0, marginLeft: '5em', marginRight: '7em'}}>
            <h2 style={titleStyle}>Add Friend</h2>
              <FriendSearchBar />
          </div>
        </div>
        <div style={styles.root}>
        <GridList padding='60' cols='4' cellHeight={180} style={styles.gridList}>
          {friendProfiles}
        </GridList>
        </div>
      </div>
    );
  }
}
export default withRouter(Friends);
