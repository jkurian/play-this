import React from 'react';
import TextField from 'material-ui/TextField';

const SignupForm = () => (
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
);

export default SignupForm;  