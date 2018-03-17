import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { fetchFriendForums } from '../../actions/friends';
import { getForums } from './GetForums.jsx';

import {ListItem} from 'material-ui/List';
import HearingIcon from 'material-ui/svg-icons/av/hearing';

@connect(store => {
  return {
    friends: store.sidebar.friends,
    friendForums: store.friend.friendForums
  };
})

export default class FriendForums extends Component {
    render() {
        console.log("IN FRIEND FORUMS")

        return (
            <div>
            </div>
        );
    }
}

