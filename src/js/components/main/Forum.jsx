import React, { Component } from "react";
import ReactDOM from "react-dom";
import SideBar from './SideBar.jsx'

import { connect } from "react-redux";

import {getRequest} from '../../actions/forum'
import { sidebarToggleClose } from '../../actions/sidebar'
import {Redirect} from 'react-router-dom';


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
    const titleStyle={
      fontFamily: 'Raleway, sans-serif',
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
        <h1 style={headerStyle}>Title: {this.props.viewingRequest.title}</h1>
        <br/>
        <p style={paragraphStyle}>Description: {this.props.viewingRequest.explanation}</p>
      </div>
    );
  }
}
