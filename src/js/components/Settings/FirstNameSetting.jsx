import React from "react";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import EditFieldButton from './EditFieldButton.jsx'

@connect(store => {
  return {
    firstNameSettings: store.sidebar.settings[0].first_name,
    disabledFirstNameFieldState: store.profile.disabledFieldState.first_name,
  };
})
export default class registerFirstNameField extends React.Component {
  render() {
    return (
      <div>
        <TextField defaultValue="First name: " underlineShow={false} style={{ width: 100}}/>
        <TextField
          disabled={this.props.disabledFirstNameFieldState}
          defaultValue={this.props.firstNameSettings}
          name="first_name"
        />
        <EditFieldButton fieldToChange='first_name' fieldToChangeValue={!this.props.disabledFirstNameFieldState} />
      </div>
    );
  }
}
