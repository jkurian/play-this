import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import SideBar from "../SideBar/SideBar.jsx";
import FirstNameSetting from './FirstNameSetting.jsx'
import LastNameSetting from './LastNameSetting.jsx'
import EmailSetting from './EmailSetting.jsx'
import PasswordSetting from './PasswordSetting.jsx'
import AvatarSetting from './AvatarSetting.jsx'

import { sidebarToggleClose } from "../../actions/sidebar";
import { updateEditState, updateProfile } from "../../actions/profile";

const style = {
  marginTop: 12,
  marginLeft: 300
};

@connect(store => {
  return {
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
    const onSubmit = evt => {
      console.log(evt.target.email);
      evt.preventDefault();
      let updatedProfile = {
        first_name: evt.target.first_name.value,
        last_name: evt.target.last_name.value,
        email: evt.target.email.value,
        avatar_image: evt.target.avatar_image.value,
        password: evt.target.password.value
      };
      this.props.dispatch(
        updateProfile(updatedProfile, this.props.sessionCookie)
      );
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
