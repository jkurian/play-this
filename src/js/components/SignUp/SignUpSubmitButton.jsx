import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { registerNewUser } from "../../actions/register";

const style = {
  margin: 12
};

@connect(store => {
  return {
    registerLastNameField: store.register.registerLastNameField,
    registerFirstNameField: store.register.registerFirstNameField,
    registerEmailField: store.register.registerEmailField,
    registerPasswordField: store.register.registerPasswordField,
    registerPasswordConfirmationField:
      store.register.registerPasswordConfirmationField
  };
})
export default class registerLastNameField extends React.Component {
  render() {
    const submitForm = evt => {
      let userRegistrationDetails = {
        firstname: this.props.registerFirstNameField,
        lastname: this.props.registerLastNameField,
        email: this.props.registerEmailField,
        password: this.props.registerPasswordField,
        passwordConfirmation: this.props.registerPasswordConfirmationField
      };
      this.props.dispatch(registerNewUser(userRegistrationDetails));
    };
    const onClick = evt => {
      evt.preventDefault();
      submitForm(evt);
    };
    return (
      <RaisedButton
        type="submit"
        label="Register"
        style={style}
        onClick={onClick}
        // disabled={!this.props.emailValidity || !this.props.passwordValidity}
      />
    );
  }
}
