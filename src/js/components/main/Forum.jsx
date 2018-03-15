import React, { Component } from "react";
import ReactDOM from "react-dom";
import SideBar from './SideBar.jsx'
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

@connect(store => {
  return {};
})
class Forum extends Component {
  render() {
    return (
      <div>
        <SideBar />
          FORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUMFORUM

      </div>
    );
  }
}

export default withRouter(Forum);
