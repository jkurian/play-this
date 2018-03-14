import React, { Component } from "react";
import ReactDOM from "react-dom";

import { connect } from "react-redux";
import { fetchSettings } from "../../actions/sidebar";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import ActionGrade from "material-ui/svg-icons/action/grade";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";

const style = {
  margin: 12
};

@connect(store => {
  return {
    settings: store.sidebar.settings,
    disabledFieldState: store.profile.disabledFieldState
  };
})
export default class Settings extends Component {
  render() {
    let avatarImage = this.props.settings[0].avatar_image;
    const onSubmit = evt => {
      evt.preventDefault();
      console.log(this.props.settings[0].first_name);
    };
    const onClick = evt => {
      evt.preventDefault();
      console.log("clicking", this.props.settings[0].first_name);
      onSubmit(evt);
    };
    const updateEditableState = (evt, first_name) => {
        evt.preventDefault();
        console.log(evt, first_name, 'is the editable state value');
        
    }
    //have to find out how to pass value to onclick
    return (
      <div>
        <form>
          <div>
            <TextField
              disabled={this.props.disabledFieldState.first_name}
              value={this.props.settings[0].first_name}
              name="first_name"
            />
            <IconButton touch={true} onClick={updateEditableState.bind('first_name')}> 
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
            <br />
            <TextField
              disabled={this.props.disabledFieldState.last_name}
              value={this.props.settings[0].last_name}
            />
            <IconButton touch={true}>
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
            <br />
            <TextField
              disabled={this.props.disabledFieldState.email}
              value={this.props.settings[0].email}
            />
            <IconButton touch={true}>
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
            <br />
            <TextField
              disabled={this.props.disabledFieldState.avatar_url}
              value={avatarImage}
            />
            <IconButton touch={true}>
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
            <br />
            <TextField
              disabled={this.props.disabledFieldState.password}
              value={this.props.settings[0].password}
            />
            <IconButton touch={true}>
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
          </div>
          <RaisedButton
            type="submit"
            label="Save"
            style={style}
            onClick={onClick}
          />
        </form>
        <br />
      </div>
    );
  }
}
