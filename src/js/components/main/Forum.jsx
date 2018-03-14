import React, { Component } from "react";
import ReactDOM from "react-dom";
import SideBar from './SideBar.jsx'

import { connect } from "react-redux";

@connect(store => {
  return {};
})
export default class Main extends Component {
  render() {
    return (
      <div>
        <SideBar />
          FORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUM
          
      </div>
    );
  }
}
