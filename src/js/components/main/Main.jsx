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
    view: store.sidebar.view,
    sessionCookie: store.login.sessionCookie
  };
})
class Main extends Component {
  componentWillMount() {
    this.props.dispatch(displayLoginForm(false));
    this.props.dispatch(displaySignupForm(false));
  }
  render() {
    if (!this.props.sessionCookie) {
      return <Redirect to="/login"/>
    }
    const toggleClose = () => {
       if (this.props.sidebarToggle) {
           this.props.dispatch(sidebarToggleClose()) 
       }
    }

    // const currentView = function (view) {
    //     switch (view) {
    //         case null: {
    //             return //welcome page here   
    //         }
    //         case "settings": {
    //             return <Settings />
    //         }
    //         case "friends": {
    //             return <Friends />
    //         }
    //         case "newForum": {
    //             return <NewForum />
    //         }
    //     }
    //   };
    const home = this.props.sessionCookie ? <Friends /> : <LandingPage />
    console.log("IN MAIN COMPONENT");
    
  return (
      <div>
          {/* <NavBar />
          <SideBar /> */}
            <div>
              <SideBar />
                <Friends />
                {/* <Route path="/friends" component={Friends} /> */}
            </div>
            {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => { 

    return { 
        sessionCookie: state.login.sessionCookie
     };
  };

export default connect(mapStateToProps)(Main);
