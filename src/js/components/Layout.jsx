import React from "react";
import { connect } from "react-redux";
import LandingPage from "./LandingPage.jsx";
import Main from "./main/Main.jsx";
import NavBar from "./NavBar.jsx";
import SideBar from "./main/SideBar.jsx";
import Settings from "./main/Settings.jsx";
import NewForum from "./main/NewForum.jsx";
import { Route, HashRouter, Redirect } from "react-router-dom";
import Friends from "./main/Friends.jsx";
import Query from "query-string";
import Spotify from "./Spotify.jsx";
import Search from "./main/Search.jsx";
// import Forum from "./main/Forum.jsx ";
//example import action
//import { fetchUser } from '../actions/userActions'

@connect(store => {
  return {
    // example props available to Layout.js
    // user: store.user.user,
    // userFetched: store.user.fetched,
    // tweets: store.tweets
    sessionCookie: store.login.sessionCookie
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    //example displatch after component is mounted
    //this.props.dispatch(fetchUser())
  }
  render() {
    //Site would render the user age and name
    //const { user } = this.props;
    //return <h1>{user.name} is {user.age} years old</h1>
    return (
      <HashRouter>
        <div>
          <NavBar />
          <Route
            exact
            path="/"
            render={() => {
              return this.props.sessionCookie ? (
                <Redirect to="/welcome" />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route path="/login" component={LandingPage} />
          <Route path="/welcome" component={Main} />
          <Route path="/settings" component={Settings} />
          <Route path="/friends" component={Friends} />
          <Route path="/newforum" component={NewForum} />
          <Route path="/spotify" component={Spotify} />
          <Route path="/search" component={Search} />
          {/* <Route path="/spotifyerror/:errorMsg" component={Error} /> */}
          {/* <div>
            <SideBar />
              <Route path="/friends" component={Friends} />
              </div> */}
        </div>
        {/* the sessionCOokie is now the JWT id
            this.props.sessionCookie ? <Main /> : <LandingPage /> */}
      </HashRouter>
    );
  }
}
