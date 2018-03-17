import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import AutoComplete from 'material-ui/AutoComplete'

import SideBar from "./SideBar.jsx";
import Friend from "./Friend.jsx";
import FriendForums from "./FriendForums.jsx";

import { sidebarToggleClose, fetchFriends } from "../../actions/sidebar";
import { addFriend } from '../../actions/users';

import { connect } from "react-redux";

@connect(store => {
  return {
    friends: store.sidebar.friends,
    sessionCookie: store.login.sessionCookie,
    allUsers: store.users.allUsers,
    addingFriend: store.users.addingFriend
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
      console.log('friends are', this.props.friends);
      
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
    const onClick = evt => {
        let newFriendData = {
            currentUserID: this.props.sessionCookie,
            friendToAddID: evt.id
        }
        this.props.dispatch(addFriend(newFriendData))
    };
    const dataSource = this.props.allUsers.map((user) => {
        return ({identity: (user.first_name + ', ' + user.last_name + ', ' + user.email), id: user.id})
    })
    return (
      <div>
        <SideBar />
        <AutoComplete
                floatingLabelText="Type name or email"
                filter={AutoComplete.fuzzyFilter}
                dataSource={dataSource}
                dataSourceConfig={{text: 'identity', value: 'id'}}
                maxSearchResults={5}
                fullWidth={true}
                onNewRequest={onClick}
                style={{marginTop: 80, paddingLeft: 20, paddingRight: 20}}
        />
        <Friend />
        <FriendForums />
      </div>
    );
  }
}
export default withRouter(Friends);
