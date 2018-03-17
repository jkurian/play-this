import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Redirect, Link } from "react-router-dom";

import LoginEmailField from './LoginEmailField.jsx'
import LoginPasswordField from './LoginPasswordField.jsx'
import LoginSubmitButton from './LoginSubmitButton.jsx'

@connect(store => {
  return {
    sessionCookie: store.login.sessionCookie
  };
})
export default class LoginForm extends React.Component {
  render() {
    return (
      <form action="/api/login" method="POST">
        <LoginEmailField />
        <br />
        <LoginPasswordField />
        <br />
        <LoginSubmitButton />
      </form>
    );
  }
}
