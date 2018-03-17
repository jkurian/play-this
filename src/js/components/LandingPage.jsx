import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import LoginForm from "./Login/LoginForm.jsx";
import SignUpForm from "./SignUp/SignUpForm.jsx";
import Paper from "material-ui/Paper";
import {GridList, GridTile} from 'material-ui/GridList';
import ChatIcon from 'material-ui/svg-icons/communication/forum';
import TextField from "material-ui/TextField";

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
      marginTop: '4.2em',
      marginRight: '4.2em',
      marginLeft: '4.2em',
      marginBottom: 0,
    }
    const textStyle = {
      width: '20em',
      display: 'inline-block'

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
        <div style={{position: 'relative', height: '100%', width: '100%', marginTop: '2em'}} >
          
          <div style={{textAlign: 'center'}}>
            <div style={iconStyle} >
              <img src="../../assets/images/create_icon.png"  style={{height: 'auto', width: '100%'}}/>
            </div>
            <div style={iconStyle} >
              <img src="../../assets/images/headphones_landing.png" style={{height: 'auto', width: '100%'}}/>
            </div>
            <div style={iconStyle} >
              <img src="../../assets/images/chatIcon.png" style={{height: 'auto', width: '100%'}}/>
            </div>
              <p style={{fontFamily: 'Raleway, sans-serif', fontWeight: 900, width: '20em', display: 'inline-block'}}><font size="20">CREATE</font></p>
              <p style={{fontFamily: 'Raleway, sans-serif', fontWeight: 900, width: '20em', display: 'inline-block', marginLeft: '3em', marginRight: '3em'}}><font size="20">LISTEN</font></p>
              <p style={{fontFamily: 'Raleway, sans-serif', fontWeight: 900, width: '20em', display: 'inline-block'}}><font size="20">CHAT</font></p>
              <p style={{fontFamily: 'Raleway, sans-serif', width: '20em', display: 'inline-block'}}>Initialize a platform where your friends will recommend and discuss tracks, focused on a topic of your choice</p>
              <p style={{fontFamily: 'Raleway, sans-serif', width: '20em', display: 'inline-block', marginLeft: '3em', marginRight: '3em'}}>Indulge in the aural delights of your friends' impeccable tastes</p>
              <p style={{fontFamily: 'Raleway, sans-serif', width: '20em', display: 'inline-block'}}>Leave comments so everyone knows exactly how you feel about their selections and opinions</p>
          </div>

        </div>
        <img src='../../../assets/images/music-share.jpg' style={imgStyle} />
      </div>
    );
  }
}

export default withRouter(LandingPage);
