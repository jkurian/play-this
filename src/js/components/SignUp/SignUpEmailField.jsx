import React from "react";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import { updateRegisterEmailField } from "../../actions/register";

@connect(store => {
  return {
    registerEmailField: store.register.registerEmailField
  };
})
export default class SignUpEmailField extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(updateRegisterEmailField(""));
  }
  render() {
    // const checkValidEmail = evt => {
    //   if (validateEmail(this.props.registerEmailField)) {
    //     this.props.dispatch(
    //       authenticateValidEmail(this.props.registerEmailField)
    //     );
    //   } else {
    //     //cheap hack, need to fix. Basically send out and invalidate email
    //     this.props.dispatch(authenticateValidEmail("jerry@dev.com"));
    //   }
    // };
    // function validateEmail(email) {
    //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(String(email).toLowerCase());
    // }
    const onChange = evt => {
      evt.preventDefault();
      this.props.dispatch(updateRegisterEmailField(evt.target.value));
    };
    return (
      <TextField
      hintText="example@domain.com"
      floatingLabelText="Email"
      value={this.props.registerEmailField}
      onChange={onChange}
      // onBlur={checkValidEmail}
      // errorText={this.props.errorMessage}
    />
    );
  }
}
