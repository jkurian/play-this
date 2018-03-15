import React, { Component } from "react";
import ReactDOM from "react-dom";
import SideBar from './SideBar.jsx'

import { connect } from "react-redux";

import {getRequest} from '../../actions/forum'
import { sidebarToggleClose } from '../../actions/sidebar'

@connect(store => {
  return {
    viewingRequest: store.forum.viewingRequest
  };
})
export default class Main extends Component {
  componentWillUpdate() {
    this.props.dispatch(sidebarToggleClose());
  }
  render() {
    return (
      <div>
        <SideBar />
        {this.props.viewingRequest.title}
      </div>
    );
  }
}
