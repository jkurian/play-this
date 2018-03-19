import React from "react";
import { connect } from "react-redux";
import { Route, HashRouter, Redirect } from "react-router-dom";

import LandingPage from "./LandingPage.jsx";
import Welcome from "./main/Welcome.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import SideBar from "./SideBar/SideBar.jsx";
import Settings from "./Settings/Settings.jsx";
import NewForum from "./Forum/NewForum.jsx";
import Friends from "./Friends/Friends.jsx";
import Query from "query-string";
import Spotify from "./Spotify.jsx";
import Forum from "./Forum/Forum.jsx";
//example import action
//import { fetchUser } from '../actions/userActions'

@connect(store => {
  return {
    sessionCookie: store.login.sessionCookie
  };
})
export default class Layout extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <NavBar />
          <Route
            exact
            path="/"
            render={() => {
              return this.props.sessionCookie ? (
                <Route
                  component={() =>
                    (window.location = "http://localhost:3000/login")
                  }
                />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route path="/login" component={LandingPage} />
          <Route path="/signup" component={LandingPage} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/settings" component={Settings} />
          <Route path="/friends" component={Friends} />
          <Route path="/newforum" component={NewForum} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/newrequest" component={Forum} />
          <Route path="/forum/:id" component={Forum} />
          <Route path="/spotify" component={Spotify} />
        </div>
      </HashRouter>
    );
  }
}
