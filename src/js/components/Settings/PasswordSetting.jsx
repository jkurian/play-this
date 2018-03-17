import React from "react";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import EditFieldButton from './EditFieldButton.jsx'

@connect(store => {
  return {
    passwordSettings: store.sidebar.settings[0].password,
    disabledPasswordFieldState: store.profile.disabledFieldState.password,
  };
})
export default class registerEmailField extends React.Component {
  render() {
    return (
      <div>
            <TextField defaultValue="Password: " underlineShow={false} style={{ width: 100}}/>
            <TextField
              disabled={this.props.disabledPasswordFieldState}
              defaultValue={this.props.passwordSettings}
              name="password"
            />
        <EditFieldButton fieldToChange='password' fieldToChangeValue={!this.props.disabledPasswordFieldState} />  
      </div>
    );
  }
}
