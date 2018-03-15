import React, { Component } from "react";
import ReactDOM from "react-dom";
import SideBar from './SideBar.jsx'

import { connect } from "react-redux";

@connect(store => {
  return {
    //viewingRequest: store.forum.viewingRequest
  };
})
export default class Main extends Component {
  componentWillUpdate() {
    console.log(this.props.match.params.id)
    //this.props.dispatch(getRequest());
  }
  render() {
    return (
      <div>
        <SideBar />

      </div>
    );
  }
}
