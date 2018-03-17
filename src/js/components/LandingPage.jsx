import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import LoginForm from "./Login/LoginForm.jsx";
import SignUpForm from "./SignUp/SignUpForm.jsx";
import Paper from "material-ui/Paper";

const style = {
  height: "auto",
  width: "auto",
  margin: 60,
  padding: 20,
  textAlign: "center",
  display: "inline-block",
  float: "right"
};

const imgStyle = {
  marginTop: 60,
  /* Set rules to fill background */
  minHeight: "100%",
  minWidth: "1024px",

  /* Set up proportionate scaling */
  width: "100%",
  height: "auto",

  /* Set up positioning */
  position: "fixed",
  top: 0,
  left: 0,
  opacity: 0.25,
  zIndex: -100
};

@connect(store => {
  return {
    sessionCookie: store.login.sessionCookie,
    showLoginForm: store.navbar.showLoginForm,
    showSignupForm: store.navbar.showSignupForm,
  };
})
class LandingPage extends React.Component {
  render() {
    if (this.props.sessionCookie) this.props.history.push("/");
    return (
      <div>
        {this.props.showLoginForm ? (
          <Paper style={style} zDepth={2}>
            <LoginForm />
          </Paper>
        ) : null}
        {this.props.showSignupForm ? (
          <Paper style={style} zDepth={2}>
            <SignUpForm />{" "}
          </Paper>
        ) : null}
        <div>
          <img src="../../assets/images/headphones_landing.png" />
          <img src='../../../assets/images/music-share.jpg' style={imgStyle} />
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage);
