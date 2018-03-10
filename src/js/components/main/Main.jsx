import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "../NavBar.jsx";
import SideBar from "./SideBar.jsx";
import RaisedButton from "material-ui/RaisedButton";
import Post from "./Post.jsx";

import { connect } from "react-redux";

@connect(store => {
  return {
    showLoginForm: store.navbar.showLoginForm,
    showSignupForm: store.navbar.showSignupForm
  };
})
export default class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
          <SideBar />
        </div>
        <div>
          <Post />
        </div>
      </div>
    );
  }
}
