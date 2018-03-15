import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import SideBar from "./SideBar.jsx";
import { sidebarToggleClose } from "../../actions/sidebar";
import { connect } from "react-redux";

@connect(store => {
  return {
    friends: store.sidebar.friends,
    sessionCookie: store.login.sessionCookie
  };
})
class Friends extends Component {
  componentWillMount() {
    this.props.dispatch(sidebarToggleClose());
  }
  componentDidUpdate() {
    if (!this.props.sessionCookie) {
        this.props.history.push('/login')
      }
  }
  render() {
    console.log(this.props, "props are");
    const friendProfiles = this.props.friends.map(friendObj => {
      return (
        <div>
          <img src={friendObj.avatar_image} />
          <div>
            {friendObj.first_name} {friendObj.last_name}
          </div>
          <div>{friendObj.email}</div>
        </div>
      );
    });

    return (
      <div>
        <SideBar />
        {friendProfiles}
      </div>
    );
  }
}
export default withRouter(Friends);
