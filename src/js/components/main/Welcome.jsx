import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from 'react-router-dom';

import SideBar from "./SideBar.jsx";

import { connect } from "react-redux";
import { fetchUserForums, fetchUserFriendsForums, fetchSettings, fetchFriends, fetchNewForum } from '../../actions/sidebar'
import {getRequest} from '../../actions/forum'

import { getAllUsers } from "../../actions/login";

@connect(store => {
  return {
    sessionCookie: store.login.sessionCookie
  };
})
class Welcome extends Component {
  componentWillMount() {    
    this.props.dispatch(fetchUserForums(this.props.sessionCookie))
    this.props.dispatch(fetchUserFriendsForums(this.props.sessionCookie))
    this.props.dispatch(fetchFriends("friends", this.props.sessionCookie))
    this.props.dispatch(fetchSettings("settings", this.props.sessionCookie))
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
