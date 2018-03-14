import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { withRouter, Route, Redirect, Link } from 'react-router-dom'

import { updatePasswordField, updateEmailField, authenticate } from '../actions/login'
const style = {
  margin: 12,
};

@connect((store) => {
  return {
      loginEmailField: store.login.loginEmailField,
      loginPasswordField: store.login.loginPasswordField,
      // tweets: store.tweets
  }
})

export default class LoginForm extends React.Component {
  
  render() {
    const sendForm = (evt) => {
      evt.preventDefault();
      console.log('email field isASDASDAS',this.props.loginEmailField);

      this.props.dispatch(authenticate(this.props.loginEmailField, this.props.loginPasswordField));
    }
    const onClick = (evt) => {
      evt.preventDefault();
      sendForm(evt);
      this.props.dispatch(updateEmailField(''))
      this.props.dispatch(updatePasswordField(''))
    }
    const handleEmailFieldChange = (evt) => {
      evt.preventDefault();
      this.props.dispatch(updateEmailField(evt.target.value))
    }
    const handlePasswordFieldChange = (evt) => {
      evt.preventDefault();
      this.props.dispatch(updatePasswordField(evt.target.value))
    }
    return(
      <form action="/api/login" method="POST">
      <TextField
        floatingLabelText="Email"
        value={this.props.loginEmailField}
        onChange={handleEmailFieldChange}
      /><br />
      <TextField
        floatingLabelText="Password"
        type="password"
        value={this.props.loginPasswordField}
        onChange={handlePasswordFieldChange}
      /><br />
      <RaisedButton type="submit" style={style} onClick={onClick}>
        <Link to='/'>
          Login 
        </Link>
      </RaisedButton> 
      </form>
    )
  }
}