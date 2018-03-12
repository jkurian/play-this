import React from 'react';
import TextField from 'material-ui/TextField';
import { updateRegisterEmailField, updateRegisterFirstNameField, updateRegisterLastNameField, updateRegisterPasswordConfirmationField, updateRegisterPasswordField, authenticateValidEmail } from '../actions/register'
import {connect} from 'react-redux'

@connect((store) => {
  return {
      registerFirstNameField: store.register.registerFirstNameField,
      registerLastNameField: store.register.registerFirstNameField,
      registerEmailField: store.register.registerEmailField,
      registerPasswordField: store.register.registerPasswordField,
      registerPasswordConfirmationField: store.register.registerPasswordConfirmationField,
      isValid: store.register.isValid
  }
})

export default class Layout extends React.Component {
  render () {
    const handleEmailFieldChange = (evt) => {
      evt.preventDefault();
      this.props.dispatch(updateRegisterEmailField(evt.target.value))
    }
    const handlePasswordFieldChange = (evt) => {
      evt.preventDefault();
      this.props.dispatch(updateRegisterPasswordField(evt.target.value))
    }
    const handlePasswordConfirmationFieldChange = (evt) => {
      evt.preventDefault();
      this.props.dispatch(updateRegisterPasswordConfirmationField(evt.target.value))
    }
    const handleFirstNameFieldChange = (evt) => {
      evt.preventDefault();
      this.props.dispatch(updateRegisterFirstNameField(evt.target.value))
    }
    const handleLastNameFieldChange = (evt) => {
      evt.preventDefault();
      this.props.dispatch(updateRegisterLastNameField(evt.target.value))
    }
    const checkValidEmail = (evt) => {
      if(validateEmail(this.props.registerEmailField)) {
        this.props.dispatch(authenticateValidEmail(this.props.registerEmailField))
      } else {
        //cheap hack, need to fix. Basically send out an invalidate email
        this.props.dispatch(authenticateValidEmail('jerry@dev.com'))
      }
    }
    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }
    let validEmail = ''
    this.props.isValid ? validEmail = 'true': validEmail= 'false'
    return (
      <div>
    <TextField
      floatingLabelText="First Name"
      value={this.props.registerFirstNameField}
      onChange={handleFirstNameFieldChange}
      /><br />
    <TextField
      floatingLabelText="Last Name"
      value={this.props.registerLastNameField}
      onChange={handleLastNameFieldChange}
      /><br />
    <TextField
      hintText="example@domain.com"
      floatingLabelText="Email"
      value={this.props.registerEmailField}
      onChange={handleEmailFieldChange}
      onBlur={checkValidEmail}      
      />
      <p>EmailValidity: {validEmail}</p>
      <br />
    <TextField
      floatingLabelText="Password"
      type="password"
      value={this.props.registerPasswordField}
      onChange={handlePasswordFieldChange}
      /><br />
    <TextField
      floatingLabelText="Password Confirmation"
      type="password"
      value={this.props.registerPasswordConfirmationField}
      onChange={handlePasswordConfirmationFieldChange}
      /><br />
  </div>
  )
}
}