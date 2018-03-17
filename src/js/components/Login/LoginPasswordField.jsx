import React from "react";
import TextField from 'material-ui/TextField'
import { updatePasswordField } from "../../actions/login";
import { connect } from "react-redux";

@connect(store => {
  return {
    loginPasswordField: store.login.loginPasswordField,
  };
})
export default class LoginPasswordField extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(updatePasswordField(""));
  }
  render() {
    const onChange = evt => {
      evt.preventDefault();
      this.props.dispatch(updatePasswordField(evt.target.value));
    };
    return (
      <TextField
        floatingLabelText="Password"
        type="password"
        value={this.props.loginPasswordField}
        onChange={onChange}
      />
    )
  }
}