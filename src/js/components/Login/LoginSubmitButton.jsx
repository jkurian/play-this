import React from "react";
import RaisedButton from 'material-ui/RaisedButton'
import { updatePasswordField, authenticate } from "../../actions/login";
import { connect } from "react-redux";


const style = {
  margin: 12
}; 

@connect(store => {
  return {
    loginPasswordField: store.login.loginPasswordField,
    loginEmailField: store.login.loginEmailField,
  };
})
export default class LoginPasswordField extends React.Component {
  render() {   
    const sendForm = evt => {
      evt.preventDefault();
      this.props.dispatch(
        authenticate(this.props.loginEmailField, this.props.loginPasswordField)
      );
    };
    const onClick = evt => {
      evt.preventDefault();
      sendForm(evt);
    };
    return (
        <RaisedButton
          type="submit"
          style={style}
          onClick={onClick}
          label="Login"
        />
    )
  }
}