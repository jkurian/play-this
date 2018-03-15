import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from 'react-router-dom';

import SideBar from "./SideBar.jsx";

import { connect } from "react-redux";
import { fetchUserForums, fetchUserFriendsForums, fetchSettings, fetchFriends, fetchNewForum } from '../../actions/sidebar'
import {getRequest} from '../../actions/forum'

import { displayLoginForm, displaySignupForm } from "../../actions/navbar";
import { getAllUsers } from "../../actions/login";

let currentUserID;

const divStyle={
  backgroundImage: 'url(' + '../../../images/Playthis_welcome_logo.svg' + ')',   
  width: 500,
  height: 500 
}

@connect(store => {
  return {
    sidebarToggle: store.sidebar.open,
    userForums: store.sidebar.userForums,
    userFriendsForums: store.sidebar.userFriendsForums,
    settings: store.sidebar.settings,
    sessionCookie: store.login.sessionCookie
  };
})
class Welcome extends Component {
  componentWillMount() {
    currentUserID = this.props.sessionCookie
    
    this.props.dispatch(displayLoginForm(false));
    this.props.dispatch(displaySignupForm(false));
    this.props.dispatch(fetchUserForums(currentUserID))
    this.props.dispatch(fetchUserFriendsForums(currentUserID))
    this.props.dispatch(fetchFriends("friends", currentUserID))
    this.props.dispatch(fetchSettings("settings", currentUserID))
    this.props.dispatch(getAllUsers());
    //cheap hack that should be changed. Make a new dispatch called getFirstRequest which gets the
    //users first request instead of just 1.
    this.props.dispatch(getRequest(1));
  }
  componentDidUpdate() {
    if (!this.props.sessionCookie) {
      this.props.history.push('/login')
    }
  }
  render() {
  return (
      <div style={divStyle}>
        <SideBar />
      </div>
    );
  }
}

export default withRouter(Welcome)
