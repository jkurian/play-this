import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import AutoComplete from 'material-ui/AutoComplete'

import SideBar from "./SideBar.jsx";
import { sidebarToggleClose } from "../../actions/sidebar";
import { connect } from "react-redux";

@connect(store => {
  return {
    friends: store.sidebar.friends,
    sessionCookie: store.login.sessionCookie,
    allUsers: store.users.allUsers
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
    const dataSource = this.props.allUsers.map((user) => {
        return ({identity: (user.first_name + ', ' + user.last_name + ', ' + user.email), id: user.id})
    })
    return (
      <div>
        <SideBar />
        <AutoComplete
                floatingLabelText="Type 'peah', fuzzy search"
                filter={AutoComplete.fuzzyFilter}
                dataSource={dataSource}
                dataSourceConfig={{text: 'identity', value: 'id'}}
                maxSearchResults={5}
        />
        {friendProfiles}
      </div>
    );
  }
}
export default withRouter(Friends);
