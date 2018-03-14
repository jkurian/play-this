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
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
  float: 'right'
};


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
    return (
      <div>
        {this.props.showLoginForm ? <Paper style={style} zDepth={2}><LoginForm /></Paper> : null}
        {this.props.showSignupForm ? <Paper style={style} zDepth={2}><SignUpForm /> </Paper>: null}
      </div>
    );
  }
}
