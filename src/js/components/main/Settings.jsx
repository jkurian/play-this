import React, { Component } from "react";
import ReactDOM from "react-dom";

import { connect } from "react-redux";
import { fetchSettings } from "../../actions/sidebar";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import ActionGrade from "material-ui/svg-icons/action/grade";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import SideBar from './SideBar.jsx'
import { updateEditState } from "../../actions/profile"

const style = {
  margin: 12
};

@connect(store => {
  return {
    settings: store.sidebar.settings,
    disabledFieldState: store.profile.disabledFieldState,
  };
})
export default class Settings extends Component {
    componentWillUpdate() {
        console.log('updating component');
    }
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
    const updateEditableState = (evt, disabledStateChange) => {
        evt.preventDefault();
        console.log(disabledStateChange);
        this.props.dispatch(updateEditState(disabledStateChange))
    }
    //have to find out how to pass value to onclick
    return (
      <div>
        <SideBar />
        <form>
          <div>
            <TextField
              disabled={this.props.disabledFieldState.first_name}
              defaultValue={this.props.settings[0].first_name}
              name="first_name"
            />
            <IconButton touch={true} onClick={(evt) => updateEditableState(evt, {first_name: !this.props.disabledFieldState.first_name})}> 
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
            <br />
            <TextField
              disabled={this.props.disabledFieldState.last_name}
              defaultValue={this.props.settings[0].last_name}
            />
            <IconButton touch={true} onClick={(evt) => updateEditableState(evt, {last_name: !this.props.disabledFieldState.last_name})}>
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
            <br />
            <TextField
              disabled={this.props.disabledFieldState.email}
              defaultValue={this.props.settings[0].email}
            />
            <IconButton touch={true} onClick={(evt) => updateEditableState(evt, {email: !this.props.disabledFieldState.email})}>
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
            <br />
            <TextField
              disabled={this.props.disabledFieldState.avatar_url}
              defaultValue={avatarImage}
            />
            <IconButton touch={true} onClick={(evt) => updateEditableState(evt, {avatar_url: !this.props.disabledFieldState.avatar_url})}>
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
            <br />
            <TextField
              disabled={this.props.disabledFieldState.password}
              defaultValue={this.props.settings[0].password}
            />
            <IconButton touch={true} onClick={(evt) => updateEditableState(evt, {password: !this.props.disabledFieldState.password})}>
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
          </div>
          <RaisedButton
            type="submit"
            label="Save"
            style={style}
          />
        </form>
        <br />
      </div>
    );
  }
}
