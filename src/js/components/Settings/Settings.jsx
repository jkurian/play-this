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
import { updateEditState, updateProfile, disableProfile } from "../../actions/profile";

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
    this.props.dispatch(disableProfile());
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
    const background={
      backgroundImage: 'url(' + '../../../assets/images/settings_icon.png' + ')',   
      backgroundRepeat: "no-repeat",
      opacity: 0.05,
      height: 600,
      backgroundPosition: "left",
      backgroundSize: 350,
      marginTop: 100,
      marginLeft: '12em',
      position: 'relative',
      zIndex: -1500
    }
    return (
      <div>
        <SideBar />
        <div style={{position: 'relative', float: 'left', width: '100%'}}>
          <form onSubmit={onSubmit}>
            <div style={{margin: '10em', textAlign: 'center' }}>
            <FirstNameSetting />
            <br />
            <LastNameSetting />
              <br />
            <EmailSetting />
              <br />
              <PasswordSetting />
              <br />
              <AvatarSetting />
            <RaisedButton type="submit" label="Save" style={style} />
            </div>
          </form>
        </div>
        <div style={background}></div>
      </div>
    );
  }
}

export default withRouter(Settings);
