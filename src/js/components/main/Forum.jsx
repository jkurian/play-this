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
    const titleStyle={
      fontFamily: 'Raleway, sans-serif',
      marginTop: 100,
      fontSize: 50,
      fontWeight: 900,
      textAlign: 'center'
    }
    const paragraphStyle={
      fontFamily: 'Raleway, sans-serif',
      fontSize: 30,
      fontWeight: 200,
      textAlign: 'center'
    }
    return (
      <div>
        <SideBar />
        <h1 style={titleStyle}>{this.props.viewingRequest.title}</h1>
        <br/>
        <p style={paragraphStyle}>{this.props.viewingRequest.explanation}</p>
      </div>
    );
  }
}
export default withRouter(Forum)