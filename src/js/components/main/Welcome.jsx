import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "../NavBar.jsx";
import SideBar from "./SideBar.jsx";
import Settings from "./Settings.jsx";
import Friends from "./Friends.jsx";
import NewForum from "./NewForum.jsx";
import LandingPage from "../LandingPage.jsx"
import Layout from '../Layout.jsx'

import { connect } from "react-redux";
import { sidebarToggleClose, fetchUserForums, fetchUserFriendsForums, fetchSettings, fetchFriends, fetchNewForum } from '../../actions/sidebar'

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
  }
  render() {
    if (!this.props.sessionCookie) {
      return <Redirect to="/login"/>
    }

    const toggleClose = () => {
       if (this.props.sidebarToggle) {
           this.props.dispatch(sidebarToggleClose()) 
       }
    }
    
  return (
      <div>
        <SideBar />
      </div>
    );
  }
}