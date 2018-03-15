import React from "react";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import SignUpForm from "./SignUpForm.jsx";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router-dom'

import { displayLoginForm, displaySignupForm } from "../actions/navbar";
import { logout } from '../actions/logout'
import { sidebarToggle } from '../actions/sidebar'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

@connect(store => {
  return {
    //   user: store.user.user,
    //   userFetched: store.user.fetched,
    //   tweets: store.tweets.tweets,
    showLoginForm: store.navbar.showLoginForm,
    showSignupForm: store.navbar.showSignupForm,
    sessionCookie: store.login.sessionCookie,
    open: store.sidebar.open
  };
})
class NavBar extends React.Component {
  render() {
    const onLoginClick = evt => {
      this.props.dispatch(displayLoginForm(!this.props.showLoginForm));
      this.props.history.push('/login')
    };

    const onSignupClick = evt => {
      this.props.dispatch(displaySignupForm(!this.props.showSignupForm));
      this.props.history.push('/signup')
    };

    const onLogoutClick = evt => {
      this.props.dispatch(logout())
      this.props.history.push('/login')
    };

    let buttons = null;

    const logoutButton = (
      <div>
        <RaisedButton label="Logout" primary={true} onClick={onLogoutClick} />
      </div>
    );
        const rightButtons = (
            <div>
                <RaisedButton label="Login" primary={true} onClick={onLoginClick}/>
                <RaisedButton label="Sign up" primary={true} onClick={onSignupClick}/>
            </div>
          );
          
        this.props.sessionCookie ? buttons = logoutButton : buttons = rightButtons
    
    const toggleSideBar = () => {
      this.props.dispatch(sidebarToggle(!this.props.open))       
    }
    
    const navbarLogo = <img src="../../../images/Playthis_navbar_logo.svg" height="40" />
    return (
        <div>
        <AppBar
          title={navbarLogo}
          iconElementRight={buttons}
          onLeftIconButtonClick={toggleSideBar}
          style={{zIndex: 1400}}
        >
        </AppBar>
        </div>
    )
  }
}
export default withRouter(NavBar)