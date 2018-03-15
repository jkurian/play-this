import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar.jsx";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import Paper from 'material-ui/Paper';

import { connect } from "react-redux";

const style = {
  height: 'auto',
  width: 'auto',
  margin: 60,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
  float: 'right',
};

const imgStyle={
  marginTop: 60,
  /* Set rules to fill background */
  minHeight: '100%',
  minWidth: '1024px',
  
  /* Set up proportionate scaling */
  width: '100%',
  height: 'auto',
  
  /* Set up positioning */
  position: 'fixed',
  top: 0,
  left: 0,
  opacity: 0.25,
  zIndex: -100
  
}    

@connect(store => {
  return {
    showLoginForm: store.navbar.showLoginForm,
    showSignupForm: store.navbar.showSignupForm
    //   userFetched: store.user.fetched,
    //   tweets: store.tweets.tweets,
  };
})
export default class LandingPage extends Component {
  render() {
    if (this.props.sessionCookie) {
      return <Redirect to="/"/>
    }

    return (
      <div>
        {this.props.showLoginForm ? <Paper style={style} zDepth={2}><LoginForm /></Paper> : null}
        {this.props.showSignupForm ? <Paper style={style} zDepth={2}><SignUpForm /> </Paper>: null}
        <div>
          <img src='../../../assets/images/music-share.jpg' style={imgStyle} />
        </div>
      </div>
    );
  }
}
