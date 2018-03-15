import React from "react";
import { connect } from "react-redux";
import LandingPage from "./LandingPage.jsx";
import Welcome from "./main/Welcome.jsx";
import NavBar from "./NavBar.jsx";
import SideBar from "./main/SideBar.jsx";
import Settings from './main/Settings.jsx'
import NewForum from './main/NewForum.jsx'
import Forum from './main/Forum.jsx'
import { Route, HashRouter, Redirect } from 'react-router-dom';
import Friends from './main/Friends.jsx'

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
              <Route exact path="/" render={() => {
                    return this.props.sessionCookie ? (
                        <Redirect to="/welcome"/>
                   ) : (
                       <Redirect to="/login" />
                   )
                }} />
              <Route path="/login" component={LandingPage} />
              <Route path="/signup" component={LandingPage} />
              <Route path="/welcome" component={Welcome} />
              <Route path="/settings" component={Settings} />
              <Route path="/friends" component={Friends} />
              <Route path="/newforum" component={NewForum} />
              <Route exact path="/forum" component={Forum} />
              <Route path="/forum/:id" component={Forum} />
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
