import React from "react";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import { updateRegisterPasswordField, updateRegisterPasswordConfirmationField } from "../actions/register";

@connect(store => {
  return {
    registerPasswordField: store.register.registerPasswordField,
    registerPasswordConfirmationField: store.register.registerPasswordConfirmationField
  };
})
export default class LoginEmailField extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(updateRegisterPasswordField(""));
    this.props.dispatch(updateRegisterPasswordConfirmationField(""));
  }
  render() {
    // const checkPasswordMatching = evt => {
    //   this.props.dispatch(
    //     authenticatePasswordFields(
    //       this.props.registerPasswordField,
    //       this.props.registerPasswordConfirmationField
    //     )
    //   );
    // };
    const onPasswordChange = evt => {
      evt.preventDefault();
      this.props.dispatch(updateRegisterPasswordField(evt.target.value));
    };
    const onPasswordConfirmationChange = evt => {
      evt.preventDefault();
      this.props.dispatch(updateRegisterPasswordConfirmationField(evt.target.value));
    };
    return (
      <div>
        <TextField
        floatingLabelText="Password"
        type="password"
        value={this.props.registerPasswordField}
        onChange={onPasswordChange}
        // errorText={this.props.passwordError}
      />
      <br />
      <TextField
        floatingLabelText="Password Confirmation"
        type="password"
        value={this.props.registerPasswordConfirmationField}
        onChange={onPasswordConfirmationChange}
        // onBlur={checkPasswordMatching}
        // errorText={this.props.passwordError}
      />
    </div>
    );
  }
}
