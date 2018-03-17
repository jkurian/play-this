import React from "react";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import { updateRegisterFirstNameField } from "../actions/register";

@connect(store => {
  return {
    registerFirstNameField: store.register.registerFirstNameField
  };
})
export default class LoginEmailField extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(updateRegisterFirstNameField(""));
  }
  render() {
    const onChange = evt => {
      evt.preventDefault();
      this.props.dispatch(updateRegisterFirstNameField(evt.target.value));
    };
    return (
      <TextField
        floatingLabelText="First Name"
        value={this.props.registerFirstNameField}
        onChange={onChange}
      />
    );
  }
}
