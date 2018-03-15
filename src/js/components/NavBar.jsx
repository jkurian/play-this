import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import SignUpForm from "./SignUpForm.jsx";

import { displayLoginForm, displaySignupForm } from "../actions/navbar";
import { logout } from "../actions/logout";
import { sidebarToggle } from "../actions/sidebar";

@connect(store => {
  return {
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
      //prevents pushing to history if the user is already on /signup
      if (this.props.location.pathname !== "/login")
        this.props.history.push("/login");
    };

    const onSignupClick = evt => {
      this.props.dispatch(displaySignupForm(!this.props.showSignupForm));
      //prevents pushing to history if the user is already on /signup
      if (this.props.location.pathname !== "/signup")
        this.props.history.push("/signup");
    };

    const onLogoutClick = evt => {
      this.props.dispatch(logout());
      this.props.history.push("/login");
    };

    let buttons = null;

    const logoutButton = (
      <div>
        <RaisedButton label="Logout" primary={true} onClick={onLogoutClick} />
      </div>
    );
    const rightButtons = (
      <div>
        <RaisedButton label="Login" primary={true} onClick={onLoginClick} />
        <RaisedButton label="Sign up" primary={true} onClick={onSignupClick} />
      </div>
    );

    this.props.sessionCookie
      ? (buttons = logoutButton)
      : (buttons = rightButtons);

    const toggleSideBar = () => {
      this.props.dispatch(sidebarToggle(!this.props.open));
    };
    return (
      <div>
        <AppBar
          title="PlayThis"
          iconElementRight={buttons}
          onLeftIconButtonClick={toggleSideBar}
          style={{ zIndex: 1400 }}
        />
      </div>
    );
  }
}
export default withRouter(NavBar);
