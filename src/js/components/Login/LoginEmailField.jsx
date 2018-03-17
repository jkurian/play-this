import React from "react";
import TextField from 'material-ui/TextField'
import { updateEmailField } from "../../actions/login";
import { connect } from "react-redux";

@connect(store => {
  return {
    loginEmailField: store.login.loginEmailField,
  };
})
export default class LoginEmailField extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(updateEmailField(""));
  }
  render() {
    const onChange = evt => {
      evt.preventDefault();
      this.props.dispatch(updateEmailField(evt.target.value));
    };
    return (
      <TextField
        floatingLabelText="Email"
        type="email"
        value={this.props.loginEmailField}
        onChange={onChange}
      />
    )
  }
}