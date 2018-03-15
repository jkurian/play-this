import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "../NavBar.jsx";
import SideBar from "./SideBar.jsx";
import Settings from "./Settings.jsx";
import Friends from "./Friends.jsx";
import NewForum from "./NewForum.jsx";
import LandingPage from "../LandingPage.jsx";
import Layout from '../Layout.jsx';
import { connect } from "react-redux";
import { fetchUserForums, fetchUserFriendsForums, fetchSettings, fetchFriends, fetchNewForum } from '../../actions/sidebar'
import {getRequest} from '../../actions/forum'
import { Route, HashRouter, Redirect } from 'react-router-dom';

import { displayLoginForm, displaySignupForm } from "../../actions/navbar";

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
export default class Welcome extends Component {
  componentWillMount() {
    currentUserID = this.props.sessionCookie
    
    this.props.dispatch(displayLoginForm(false));
    this.props.dispatch(displaySignupForm(false));
    this.props.dispatch(fetchUserForums(currentUserID))
    this.props.dispatch(fetchUserFriendsForums(currentUserID))
    this.props.dispatch(fetchFriends("friends", currentUserID))
    this.props.dispatch(fetchSettings("settings", currentUserID))
    //cheap hack that should be changed. Make a new dispatch called getFirstRequest which gets the
    //users first request instead of just 1.
    this.props.dispatch(getRequest(1));
  }
  render() {
    if (!this.props.sessionCookie) {
      return <Redirect to="/login"/>
    }
    
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
