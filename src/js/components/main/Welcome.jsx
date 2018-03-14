import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "../NavBar.jsx";
import SideBar from "./SideBar.jsx";
import Settings from "./Settings.jsx";
import Friends from "./Friends.jsx";
import NewForum from "./NewForum.jsx";
import LandingPage from "../LandingPage.jsx"
import Layout from '../Layout.jsx'

import { connect } from "react-redux";
import { sidebarToggleClose } from '../../actions/sidebar'
import { Route, HashRouter, Redirect } from 'react-router-dom';

import { displayLoginForm, displaySignupForm } from "../../actions/navbar";

@connect(store => {
  return {
    sidebarToggle: store.sidebar.open,
    view: store.sidebar.view
  };
})

export default class Welcome extends Component {
  render() {
    
    const toggleClose = () => {
       if (this.props.sidebarToggle) {
           this.props.dispatch(sidebarToggleClose()) 
       }
    }
    
  return (
      <div>
        <SideBar />
        <img src="../../../Playthis_welcome_logo.svg" />
      </div>
    );
  }
}
