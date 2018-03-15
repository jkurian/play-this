import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

import SideBar from './SideBar.jsx'

import {getRequest} from '../../actions/forum'
import { sidebarToggleClose } from '../../actions/sidebar'

@connect(store => {
  return {
    viewingRequest: store.forum.viewingRequest,
    sessionCookie: store.login.sessionCookie
  };
})
class Forum extends Component {
  componentWillUpdate() {
    this.props.dispatch(sidebarToggleClose());
  }
  componentDidUpdate() {
    if (!this.props.sessionCookie) {
      this.props.history.push('/login')
    }
  }
  render() {
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
export default withRouter(Forum)