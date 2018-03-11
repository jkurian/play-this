import React from 'react';
import TextField from 'material-ui/TextField';
import {updateEmailField, updateFirstNameField, updateLastNameField, updatePasswordConfirmationField, updatePasswordField } from '../actions/register'

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
      /><br />
    <TextField
      floatingLabelText="Last Name"
      /><br />
    <TextField
      hintText="example@domain.com"
      floatingLabelText="Email"
      /><br />
    <TextField
      floatingLabelText="Password"
      type="password"
      /><br />
    <TextField
      floatingLabelText="Password Confirmation"
      type="password"
      /><br />
  </div>
  )
}
}