import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/logout";
import RaisedButton from "material-ui/RaisedButton";
import { displayLoginForm, displaySignupForm } from "../actions/navbar";
import { withRouter } from "react-router-dom";

@connect(store => {
  return {
    showLoginForm: store.navbar.showLoginForm,
    showSignupForm: store.navbar.showSignupForm,
  };
})
class LoggedInButtons extends React.Component {
  render() {
    const onLoginClick = evt => {
      console.log('login clicked');
      
      this.props.dispatch(displayLoginForm(!this.props.showLoginForm));
      //prevents pushing to history if the user is already on /signup
      if (this.props.location.pathname !== "/login") this.props.history.push("/login");
    };

    const onSignupClick = evt => {
      this.props.dispatch(displaySignupForm(!this.props.showSignupForm));
      //prevents pushing to history if the user is already on /signup
      if (this.props.location.pathname !== "/signup") this.props.history.push("/signup");
    };
    return (
      <div>
        <RaisedButton label="Login" primary={true} onClick={onLoginClick} />
        <RaisedButton label="Sign up" primary={true} onClick={onSignupClick} />
      </div>
    );
  }
}
export default withRouter(LoggedInButtons)