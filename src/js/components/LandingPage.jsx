import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import LoginForm from "./Login/LoginForm.jsx";
import SignUpForm from "./SignUp/SignUpForm.jsx";
import Paper from "material-ui/Paper";
import {GridList, GridTile} from 'material-ui/GridList';

const style = {
  height: "auto",
  width: "auto",
  margin: 60,
  padding: 20,
  textAlign: "center",
  display: "inline-block",
  position: "absolute",
  zIndex: 100,
  right: 0
};

const imgStyle = {
  marginTop: 60,
  /* Set rules to fill background */
  minHeight: "100%",
  minWidth: "100%",

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
    const iconStyle = {
      position: 'relative',
      display: 'inline-block',
      padding: 70,
      width: '15em',
      margin: '4.2em',
    }

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
        <div style={{position: 'relative', height: '100%', width: '100%', marginTop: '6em'}} >
          
          <div style={{textAlign: 'center'}}>
            <div style={iconStyle} >
              <img src="../../assets/images/headphones_landing.png"  style={{height: 'auto', width: '100%'}}/>
            </div>
            <div style={iconStyle} >
              <img src="../../assets/images/headphones_landing.png" style={{height: 'auto', width: '100%'}}/>
            </div>
            <div style={iconStyle} >
              <img src="../../assets/images/headphones_landing.png" style={{height: 'auto', width: '100%'}}/>
            </div>
          </div>

        </div>
        <img src='../../../assets/images/music-share.jpg' style={imgStyle} />
      </div>
    );
  }
}

export default withRouter(LandingPage);
