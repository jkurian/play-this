import React, { Component } from "react";
import ReactDOM from "react-dom";
import SideBar from './SideBar.jsx'

import { connect } from "react-redux";

import {getRequest} from '../../actions/forum'
import { sidebarToggleClose } from '../../actions/sidebar'
import {Redirect} from 'react-router-dom'

@connect(store => {
  return {
    viewingRequest: store.forum.viewingRequest,
    sessionCookie: store.login.sessionCookie
  };
})
export default class Main extends Component {
  componentWillUpdate() {
    this.props.dispatch(sidebarToggleClose());
  }
  render() {
    if (!this.props.sessionCookie) {
      return <Redirect to="/login"/>
    }
    return (
      <div>
        <SideBar />
        Title: {this.props.viewingRequest.title}
        <br/>
        Description: {this.props.viewingRequest.explanation}
      </div>
    );
  }
}
