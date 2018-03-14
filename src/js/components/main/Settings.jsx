import React, { Component } from "react";
import ReactDOM from "react-dom";

import { connect } from "react-redux";
import { fetchSettings } from "../../actions/sidebar";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import ActionGrade from "material-ui/svg-icons/action/grade";

@connect(store => {
  return {
    settings: store.sidebar.settings,
    disabledFieldState: store.profile.disabledFieldState,
  };
})
export default class Settings extends Component {
  render() {
    let avatarImage = this.props.settings[0].avatar_image;
    const onClick = () => {
        console.log(this.props.disabledFieldState.first_name);
    }
    return (
      <div>
        <TextField
          disabled={this.props.disabledFieldState.first_name}
          value={this.props.settings[0].first_name}
        />
        <IconButton
          tooltip="bottom-right"
          touch={true}
          tooltipPosition="bottom-right"
          onClick={onClick}
        >
          <ActionGrade />
        </IconButton>
        <br />
        <TextField disabled={this.props.disabledFieldState.last_name} value={this.props.settings[0].last_name} />
        <br />
        <TextField disabled={this.props.disabledFieldState.email} value={this.props.settings[0].email} />
        <br />
        <TextField disabled={this.props.disabledFieldState.avatar_url} value={avatarImage} />
        <br />
        <TextField disabled={this.props.disabledFieldState.password} value={this.props.settings[0].password} />
        <br />
      </div>
    );
  }
}
