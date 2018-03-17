import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import SignUpFirstNameField from './SignUpFirstNameField.jsx'
import SignUpLastNameField from './SignUpLastNameField.jsx'
import SignUpEmailField from './SignUpEmailField.jsx'
import SignUpPasswordFields from './SignUpPasswordFields.jsx'
import SignUpSubmitButton from './SignUpSubmitButton.jsx'

import {
  authenticateValidEmail,
  registerNewUser,
  updateErrorText,
  authenticatePasswordFields
} from "../actions/register";
import { connect } from "react-redux";

import { displayLoginForm, displaySignupForm } from "../actions/navbar";

const style = {
  margin: 12
};

@connect(store => {
  return {
  };
})
export default class SignUpForm extends React.Component {
  render() {
    return (
      <div>
        <SignUpFirstNameField />
          <br />
          <SignUpLastNameField />
          <br />
          <SignUpEmailField />
          <br />
          <SignUpPasswordFields />
          <br />
          <SignUpSubmitButton />
      </div>
    );
  }
}
