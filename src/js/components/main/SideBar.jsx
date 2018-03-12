import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux'

import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import HearingIcon from 'material-ui/svg-icons/av/hearing';
import ForumIcon from 'material-ui/svg-icons/communication/forum';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

import { fetchUserForums, fetchUserFriendsForums, fetchSettings } from '../../actions/sidebar'


//this is where data comes from store as props
@connect((store) => {
    return {
        sidebarToggle: store.sidebar.open,
        userForums: store.sidebar.userForums,
        userFriendsForums: store.sidebar.userFriendsForums,
        settings: store.sidebar.settings
    };
})


export default class SideBar extends React.Component {
    componentWillMount() {
        console.log("COMPONENT WILL MOUNT");
        this.props.dispatch(fetchUserForums())
        this.props.dispatch(fetchUserFriendsForums())
    }

    render(){
        const settingsClick = (ev) => {
            ev.preventDefault();
            this.props.dispatch(fetchSettings("settings"))
        }
        
        const boxStyle = {
            width: 300,
            margin: 20,
            display: 'inline-block',
        };

        const iconStyle = {
            marginLeft: 24,
            marginRight:23
        }

        const allUserRequests = this.props.userForums.map(forum => {
            return <ListItem primaryText={forum.title} leftIcon={<HearingIcon />} />
        })

        const allUserFriendRequests = this.props.userFriendsForums.map(forum => {
            return <ListItem primaryText={forum.title} rightIcon={<ForumIcon />} />
        })
        
        const drawerOpenState = this.props.sidebarToggle
        
        const divStyle = `
        .sidebarStyle {
            font-size: 24px; 
            color: rgb(255, 255, 255); 
            line-height: 64px; 
            font-weight: 300;
            background-color: rgb(0, 188, 212); 
            padding-left: 24px; 
            margin-bottom: 8px;
        }`

        return (
            <div>
                <Drawer open={drawerOpenState}> 
                <div class="sidebarStyle"><style>{divStyle}</style>Play This</div> 
                    <h4>Requests</h4>
                    <IconButton >
                        <AddIcon />
                    </IconButton>
                    Create New Request
                    <MenuItem>
                        {allUserRequests}
                    </MenuItem>
                    <Divider />
                    <h4>Friends' Requests</h4>
                    <MenuItem>
                        {allUserFriendRequests}
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItem primaryText="Friends" />
                        <Divider />
                        <ListItem primaryText="Settings" onClick={settingsClick}/>
                    </MenuItem>
                </Drawer>
            </div>
        )
    }
};

