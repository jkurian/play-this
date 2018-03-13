import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "../NavBar.jsx";
import SideBar from "./SideBar.jsx";
import Settings from "./Settings.jsx";
import Post from "./Post.jsx";
import Friends from "./Friends.jsx";
import NewForum from "./NewForum.jsx";

import RaisedButton from "material-ui/RaisedButton";

import { connect } from "react-redux";
import { sidebarToggleClose } from '../../actions/sidebar'

import { displayLoginForm, displaySignupForm } from "../../actions/navbar";

@connect(store => {
  return {
    sidebarToggle: store.sidebar.open,
    view: store.sidebar.view
  };
})
export default class Main extends Component {
  componentWillMount() {
    this.props.dispatch(displayLoginForm(false));
    this.props.dispatch(displaySignupForm(false));
  }
  render() {
    
    const toggleClose = () => {
       if (this.props.sidebarToggle) {
           this.props.dispatch(sidebarToggleClose()) 
       }
    }

    const currentView = function (view) {
        switch (view) {
            case null: {
                return //welcome page here   
            }
            case "settings": {
                return <Settings />
            }
            case "friends": {
                return <Friends />
            }
            case "newForum": {
                return <NewForum />
            }
        }
      };

    return (
      <div>
          <NavBar />
          <SideBar />
            <div onClick={toggleClose}>
                {currentView(this.props.view)}   
            </div>
      </div>
    );
  }
}
