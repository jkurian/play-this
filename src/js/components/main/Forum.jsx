import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "../NavBar.jsx";
import SideBar from "./SideBar.jsx";
import Post from "./Post.jsx";


import { connect } from "react-redux";

@connect(store => {
  return {
    title: store.forum.title,
    explanation: store.forum.explanation
  };
})

export default class Forum extends Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.explanation}</div>
      </div>
    );
  }
}
