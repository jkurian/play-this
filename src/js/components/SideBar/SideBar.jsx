import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PlusIcon from 'material-ui/svg-icons/content/add-circle-outline';
import FriendsIcon from 'material-ui/svg-icons/social/people';
import FriendForumIcon from 'material-ui/svg-icons/communication/forum';
import Divider from 'material-ui/Divider';
import Badge from 'material-ui/Badge';
import ForumIcon from 'material-ui/svg-icons/communication/forum';

import UserForums from './UserForums.jsx'
import UserFriendsForums from './UserFriendsForums.jsx'

import { fetchSettings, fetchNewForum } from '../../actions/sidebar'
import { sidebarToggle, sidebarToggleClose } from '../../actions/sidebar'
import {getRequest} from '../../actions/forum'

const divStyle = `
.sidebarStyle {
    font-size: 24px; 
    color: rgb(255, 255, 255); 
    line-height: 64px; 
    font-weight: 300;
    padding-left: 24px; 
    margin-bottom: 8px;
}`

const menuItemStyle = {
    padding: 0,
}

//this is where data comes from store as props
@connect((store) => {
    return {
        sidebarToggle: store.sidebar.open,
        settings: store.sidebar.settings,
        sessionCookie: store.login.sessionCookie,
        viewingRequest: store.forum.viewingRequest,
        userFirstName: store.login.first_name
    };
})
class SideBar extends React.Component {
    render(){
        const settingsClick = (ev) => {
            ev.preventDefault();
            this.props.dispatch(fetchSettings("settings", this.props.sessionCookie))
            this.props.history.push("/settings")
        }
        const friendsClick = (ev) => {
            ev.preventDefault();
            this.props.history.push("/friends")
        }
        const settingsIcon = <img src="../../../../assets/images/settings_icon.png" />

        return (
            <div>
                <Drawer open={this.props.sidebarToggle}> 
                    <UserForums/>
                    <Divider />
                    <UserFriendsForums/>
                    <Divider />
                    <ListItem onClick={friendsClick} 
                                primaryText='Friends' 
                                leftIcon={<FriendsIcon />} 
                                style={{fontFamily: 'Raleway, sans-serif', fontWeight: 600, width: '100%'}}
                    />
                    <Divider />
                    <ListItem onClick={settingsClick} 
                                primaryText='Settings' 
                                leftIcon={settingsIcon} 
                                style={{fontFamily: 'Raleway, sans-serif', fontWeight: 600}}
                    />
                </Drawer>
            </div>
        )
    }
};

export default withRouter(SideBar)