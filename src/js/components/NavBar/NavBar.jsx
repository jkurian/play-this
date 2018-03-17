import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import SignUpForm from "../SignUp/SignUpForm.jsx";
import LogoutButton from "./LogoutButton.jsx";
import LoggedOutButtons from "./LoggedOutButtons.jsx";
import { sidebarToggle } from "../../actions/sidebar";

@connect(store => {
  return {
    sessionCookie: store.login.sessionCookie,
    open: store.sidebar.open
  };
})
class NavBar extends React.Component {
  render() {
    let buttons = null;
    this.props.sessionCookie
      ? (buttons = <LogoutButton />)
      : (buttons = <LoggedOutButtons />);

    const toggleSideBar = () => {
      this.props.dispatch(sidebarToggle(!this.props.open));
    };
    const navbarLogo = <img src="../../../assets/images/Playthis_navbar_logo.svg" height="40" />
    return (
      <div>
        <AppBar
          title={navbarLogo}
          iconElementRight={buttons}
          onLeftIconButtonClick={toggleSideBar}
          style={{zIndex: 1400, position: 'fixed', top: 0}}
        >
        </AppBar>
        </div>
    )
  }
}
export default withRouter(NavBar);
