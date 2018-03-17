import React from "react";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import EditFieldButton from './EditFieldButton.jsx'

@connect(store => {
  return {
    avatarSettings: store.sidebar.settings[0].avatar_image,
    disabledAvatarFieldState: store.profile.disabledFieldState.avatar_url,
  };
})
export default class registerEmailField extends React.Component {
  render() {
    return (
      <div>
        <TextField defaultValue="Avatar URL: " underlineShow={false} style={{ width: 100}}/>
          <TextField
            disabled={this.props.disabledAvatarFieldState}
            defaultValue={this.props.avatarSettings}
            name="avatar_image"
          />
        <EditFieldButton fieldToChange='avatar_url' fieldToChangeValue={!this.props.disabledAvatarFieldState} />  
      </div>
    );
  }
}
