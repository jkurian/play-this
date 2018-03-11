import React from 'react';
import TextField from 'material-ui/TextField';
import {updateEmailField, updateFirstNameField, updateLastNameField, updatePasswordConfirmationField, updatePasswordField } from '../actions/register'

@connect((store) => {
  return {
      registerFirstNameField: store.register.registerFirstNameField,
      registerLastNameField: store.register.registerFirstNameField,
      registerEmailField: store.register.registerEmailField,
      registerPasswordField: store.register.registerPasswordField,
      registerPasswordConfirmationField: store.register.registerPasswordConfirmationField,
  }
})

export default class Layout extends React.Component {
  render () {
    const handleEmailFieldChange = (evt) => {
      evt.preventDefault();
      this.props.dispatch(updateEmailField(evt.target.value))
    }
    const handlePasswordFieldChange = (evt) => {
      evt.preventDefault();
      this.props.dispatch(updatePasswordField(evt.target.value))
    }
    const handlePasswordConfirmationFieldChange = (evt) => {
      evt.preventDefault();
      this.props.dispatch(updatePasswordConfirmationField(evt.target.value))
    }
    const handleFirstNameFieldChange = (evt) => {
      evt.preventDefault();
      this.props.dispatch(updateFirstNameField(evt.target.value))
    }
    const handleLastNameFieldChange = (evt) => {
      evt.preventDefault();
      this.props.dispatch(updateLastNameField(evt.target.value))
    }
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
      onChange={handleEmailChange}
      /><br />
    <TextField
      floatingLabelText="Password"
      type="password"
      value={this.props.registerPasswordField}
      onChange={handlePasswordChange}
      /><br />
    <TextField
      floatingLabelText="Password Confirmation"
      type="password"
      value={this.props.registerPasswordConfirmationField}
      onChange={handlePasswordConfirmationChange}
      /><br />
  </div>
  )
}
}