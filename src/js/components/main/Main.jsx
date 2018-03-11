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

<<<<<<< HEAD
    
    render() {
        return (
            <div>
                <NavBar />
                <SideBar />  
            </div>
        )
=======
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
>>>>>>> a26e96508888d1700e4aedc57efbdb3dc94818d1
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
