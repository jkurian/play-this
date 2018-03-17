import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import SideBar from "./SideBar.jsx";

import { connect } from "react-redux";
import { fetchUserForums, fetchUserFriendsForums, fetchSettings, fetchFriends, fetchNewForum } from '../../actions/sidebar'
import {getRequest} from '../../actions/forum'

import { displayLoginForm, displaySignupForm } from "../../actions/navbar";
import { getAllUsers } from "../../actions/login";

let currentUserID;

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
    const divStyle={
        backgroundImage: 'url(' + '../../../assets/images/Playthis_welcome_logo.svg' + ')',   
        backgroundRepeat: "no-repeat",
        opacity: 0.3,
        backgroundPosition: "center",
        marginTop: 100,
        height: 500 
      }
      
  return (
    <div>
        <SideBar />
      <div style={divStyle}>
      </div>
    </div>
    );
  }
}

export default withRouter(Welcome)
