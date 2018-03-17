import React from "react";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import EditFieldButton from './EditFieldButton.jsx'

@connect(store => {
  return {
    emailSettings: store.sidebar.settings[0].email,
    disabledEmailFieldState: store.profile.disabledFieldState.email,
  };
})
export default class registerEmailField extends React.Component {
  render() {
    return (
      <div>
        <TextField defaultValue="Email: " underlineShow={false} style={{ width: 100}}/>
          <TextField
            disabled={this.props.disabledEmailFieldState}
            defaultValue={this.props.emailSettings}
            name="email"
          />
        <EditFieldButton fieldToChange='email' fieldToChangeValue={!this.props.disabledEmailFieldState} />  
      </div>
    );
  }
}
