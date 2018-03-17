import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import SideBar from "../SideBar/SideBar.jsx";
import FirstNameSetting from '../Settings/FirstNameSetting.jsx'
import LastNameSetting from '../Settings/LastNameSetting.jsx'
import EmailSetting from '../Settings/EmailSetting.jsx'
import PasswordSetting from '../Settings/PasswordSetting.jsx'
import AvatarSetting from '../Settings/AvatarSetting.jsx'

import { sidebarToggleClose } from "../../actions/sidebar";
import { updateEditState, updateProfile } from "../../actions/profile";

const style = {
  marginTop: 12,
  marginLeft: 300
};

@connect(store => {
  return {
    settings: store.sidebar.settings,
    disabledFieldState: store.profile.disabledFieldState,
    sessionCookie: store.login.sessionCookie
  };
})
class Settings extends Component {
  componentWillMount() {
    this.props.dispatch(sidebarToggleClose());
  }
  componentDidUpdate() {
    if (!this.props.sessionCookie) {
      this.props.history.push("/login");
    }
  }
  render() {
    let avatarImage = this.props.settings[0].avatar_image;
    const onSubmit = evt => {
      evt.preventDefault();
      let updatedProfile = {
        first_name: evt.target[0].value,
        last_name: evt.target[2].value,
        email: evt.target[4].value,
        avatar_image: evt.target[6].value,
        password: evt.target[8].value
      };
      this.props.dispatch(
        updateProfile(updatedProfile, this.props.sessionCookie)
      );
    };
    const updateEditableState = (evt, disabledStateChange) => {
      evt.preventDefault();
      console.log(disabledStateChange);
      this.props.dispatch(updateEditState(disabledStateChange));
    };
    //have to find out how to pass value to onclick
    return (
      <div>
        <SideBar />
        <form onSubmit={onSubmit}>
          <div style={{marginTop: 200, marginLeft: 300 }}>
          <FirstNameSetting />
          <br />
          <LastNameSetting />
            <br />
          <EmailSetting />
            <br />
            <PasswordSetting />
            <br />
            <AvatarSetting />
          </div>
          <RaisedButton type="submit" label="Save" style={style} />
        </form>
        <br />
      </div>
    );
  }
}

export default withRouter(Settings);
