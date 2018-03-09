import React from 'react';
import TextField from 'material-ui/TextField';

const LoginForm = () => (
  <div>
    <TextField
      floatingLabelText="Email"
    /><br />
    <TextField
      floatingLabelText="Password"
      type="password"
    /><br />
  </div>
);

export default LoginForm;