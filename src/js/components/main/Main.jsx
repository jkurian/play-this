import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "../NavBar.jsx";
import SideBar from "./SideBar.jsx";
import Settings from "./Settings.jsx";

import RaisedButton from "material-ui/RaisedButton";

import { connect } from "react-redux";

@connect(store => {
  return {
    view: store.sidebar.view
  };
})

export default class Main extends Component {
  render() {

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
        <div>
          <NavBar />
          <SideBar />
          {currentView(this.props.view)}
        </div>
      </div>
    );
  }
}
