import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "../NavBar.jsx";
import SideBar from "./SideBar.jsx";
import Post from "./Post.jsx";
import RaisedButton from "material-ui/RaisedButton";

import { connect } from "react-redux";

@connect(store => {
  return {};
})
export default class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SideBar />
        <Post />
      </div>
    );
  }
}
