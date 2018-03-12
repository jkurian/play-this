import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "../NavBar.jsx";
import SideBar from "./SideBar.jsx";
import Settings from "./Settings.jsx";

import RaisedButton from "material-ui/RaisedButton";

import { connect } from "react-redux";
import { sidebarToggleOpen, sidebarToggleClose } from '../../actions/sidebar'


@connect(store => {
  return {
    sidebarToggle: store.sidebar.open,
    view: store.sidebar.view
  };
})

export default class Main extends Component {
  render() {
    const handleToggle = () => {
        this.props.sidebarToggle ? this.props.dispatch(sidebarToggleClose()) : this.props.dispatch(sidebarToggleOpen())
    }

    const currentView = function (view) {
        switch (view) {
            case "settings": {
                return <Settings />
            }
            case "welcome": {
                return {
                    Welcome
                }
            }
          
        }
    }

    return (
      <div>
          <NavBar />
          <SideBar />
            <div onClick={handleToggle}>
                {currentView(this.props.view)}
                helloasfdlkjsfdjfjslfjklasjfklsfljddlkjsfdjfjslfjklasjfklsfljd
                dlkjsfdjfjslfjklasjfklsfljd            
            </div>
      </div>
    );
  }
}
