import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { fetchFriendForums } from '../../actions/friends';
import { getForums } from './GetForums.jsx';

import {ListItem} from 'material-ui/List';
import HearingIcon from 'material-ui/svg-icons/av/hearing';

const friendProfilesArray = [];

const friendComponent = (friendObj) =>{

        return (<div>
        <img src={friendObj.avatar_image} />
        <div>
            {friendObj.first_name} {friendObj.last_name}
        </div>
        <div>
            {friendObj.email}
        </div>
        {/* <div>
            {result}
        </div> */}
    </div>)
}
@connect(store => {
  return {
    friends: store.sidebar.friends,
    friendForums: store.friend.friendForums
  };
})

export default class Friend extends Component {
    componentWillMount() {  
       
    //    const friendProfiles = this.props.friends.map(friendObj => {           
    //         let forumsPromise = Forums.getForums(friendObj.user_id2).then(this.state.forums = result)
    //     });

    }
    render() {

        console.log('FORUMMMMMMMMS---', getForums(this.props.friends[0].user_id2).then(result => {return result}))
        return (
            <div>
                {friendComponent(this.props.friends[0])}
                {getForums(this.props.friends[0].user_id2)}
            </div>
        );
    }
}

