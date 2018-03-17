import React from "react";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import { updateRegisterLastNameField } from "../actions/register";

@connect(store => {
  return {
    registerLastNameField: store.register.registerLastNameField
  };
})
export default class registerLastNameField extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(updateRegisterLastNameField(""));
  }
  render() {
    const onChange = evt => {
      evt.preventDefault();
      this.props.dispatch(updateRegisterLastNameField(evt.target.value));
    };
    return (
      <TextField
        floatingLabelText="Last Name"
        value={this.props.registerLastNameField}
        onChange={onChange}
      />
    );
  }
}
