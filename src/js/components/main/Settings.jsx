import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import SideBar from "./SideBar.jsx";

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
            {/* <h4 style={{marginRight: 20, fontFamily: 'Raleway, sans-serif'}}>First name: </h4> */}
            <TextField defaultValue="First name: " underlineShow={false} style={{ width: 100}}/>
            <TextField
              disabled={this.props.disabledFieldState.first_name}
              defaultValue={this.props.settings[0].first_name}
              name="first_name"
            />
            <IconButton
              touch={true}
              onClick={evt =>
                updateEditableState(evt, {
                  first_name: !this.props.disabledFieldState.first_name
                })
              }
            >
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
            <br />
            <TextField defaultValue="Last name: " underlineShow={false} style={{ width: 100}}/>
            <TextField
              disabled={this.props.disabledFieldState.last_name}
              defaultValue={this.props.settings[0].last_name}
            />
            <IconButton
              touch={true}
              onClick={evt =>
                updateEditableState(evt, {
                  last_name: !this.props.disabledFieldState.last_name
                })
              }
            >
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
            <br />
            <TextField defaultValue="Email: " underlineShow={false} style={{ width: 100}}/>
            <TextField
              disabled={this.props.disabledFieldState.email}
              defaultValue={this.props.settings[0].email}
            />
            <IconButton
              touch={true}
              onClick={evt =>
                updateEditableState(evt, {
                  email: !this.props.disabledFieldState.email
                })
              }
            >
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
            <br />
            <TextField defaultValue="Password: " underlineShow={false} style={{ width: 100}}/>
            <TextField
              disabled={this.props.disabledFieldState.password}
              defaultValue={this.props.settings[0].password}
            />
            <IconButton
              touch={true}
              onClick={evt =>
                updateEditableState(evt, {
                  avatar_url: !this.props.disabledFieldState.avatar_url
                })
              }
            >
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
            <br />
            <TextField defaultValue="Avatar URL: " underlineShow={false} style={{ width: 100}}/>
            <TextField
              disabled={this.props.disabledFieldState.avatar_url}
              defaultValue={avatarImage}
            />
            <IconButton
              touch={true}
              onClick={evt =>
                updateEditableState(evt, {
                  password: !this.props.disabledFieldState.password
                })
              }
            >
              <FontIcon className="material-icons">mode_edit</FontIcon>
            </IconButton>
          </div>
          <RaisedButton type="submit" label="Save" style={style} />
        </form>
        <br />
      </div>
    );
  }
}

export default withRouter(Settings);
