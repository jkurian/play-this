import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

import { updateRegisterEmailField, updateRegisterFirstNameField, updateRegisterLastNameField, updateRegisterPasswordConfirmationField, updateRegisterPasswordField, authenticateValidEmail, registerNewUser, updateErrorText, authenticatePasswordFields } from '../actions/register'
import {connect} from 'react-redux'


const style = {
  margin: 12,
};

@connect((store) => {
  return {
      registerFirstNameField: store.register.registerFirstNameField,
      registerLastNameField: store.register.registerLastNameField,
      registerEmailField: store.register.registerEmailField,
      registerPasswordField: store.register.registerPasswordField,
      registerPasswordConfirmationField: store.register.registerPasswordConfirmationField,
      passwordValidity: store.register.passwordValidity,
      emailValidity: store.register.emailValidity,
      passwordError: store.register.passwordError,
      errorMessage: store.register.errorMessage
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
        //cheap hack, need to fix. Basically send out and invalidate email
        console.log('invalid email syntax');
        this.props.dispatch(authenticateValidEmail('jerry@dev.com'))
      }
    }
    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }    
    const checkPasswordMatching = (evt) => {
      this.props.dispatch(authenticatePasswordFields(this.props.registerPasswordField, this.props.registerPasswordConfirmationField))
    }
    const submitForm = (evt) => {
      let userRegistrationDetails = {
      firstname: this.props.registerFirstNameField,
      lastname: this.props.registerLastNameField,
      email: this.props.registerEmailField,
      password: this.props.registerPasswordField,
      passwordConfirmation: this.props.registerPasswordConfirmationField
    }
    this.props.dispatch(registerNewUser(userRegistrationDetails))
  }
  const onClick = (evt) => {
    evt.preventDefault();
    submitForm(evt);
  }

  let emailError = ''

  // if(!this.props.isValid) emailError = 'Sorry, invalid email!'
    return (
      <div>
        <form action="/api/register" method="POST">
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
      errorText={this.props.errorMessage}
      />
      <br />
    <TextField
      floatingLabelText="Password"
      type="password"
      value={this.props.registerPasswordField}
      onChange={handlePasswordFieldChange}
      errorText={this.props.passwordError}
      /><br />
    <TextField
      floatingLabelText="Password Confirmation"
      type="password"
      value={this.props.registerPasswordConfirmationField}
      onChange={handlePasswordConfirmationFieldChange}
      onBlur={checkPasswordMatching}
      errorText={this.props.passwordError}
      /><br />
       <RaisedButton type="submit" label="Register" style={style} onClick={onClick} disabled={!this.props.emailValidity || !this.props.passwordValidity}/>
      </form>
  </div>
  )
}
}