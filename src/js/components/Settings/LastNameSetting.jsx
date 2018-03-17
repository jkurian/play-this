import React from "react";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import EditFieldButton from './EditFieldButton.jsx'

@connect(store => {
  return {
    lastNameSettings: store.sidebar.settings[0].last_name,
    disabledLastNameFieldState: store.profile.disabledFieldState.last_name,
  };
})
export default class registerLastNameField extends React.Component {
  render() {
    return (
      <div>
        <TextField defaultValue="Last name: " underlineShow={false} style={{ width: 100}}/>
        <TextField
          disabled={this.props.disabledLastNameFieldState}
          defaultValue={this.props.lastNameSettings}
          name="last_name"
        />
        <EditFieldButton fieldToChange='last_name' fieldToChangeValue={!this.props.disabledLastNameFieldState}/>
      </div>
    );
  }
}
