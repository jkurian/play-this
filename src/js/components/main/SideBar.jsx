import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ActionHome from 'material-ui/svg-icons/action/home';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import HearingIcon from 'material-ui/svg-icons/av/hearing';
import ForumIcon from 'material-ui/svg-icons/communication/forum';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

import { fetchUserForums, fetchUserFriendsForums, fetchSettings, fetchFriends, fetchNewForum } from '../../actions/sidebar'
import { sidebarToggle } from '../../actions/sidebar'

let currentUserID;
//this is where data comes from store as props
// @connect((store) => {
//     return {
//         sidebarToggle: store.sidebar.open,
//         userForums: store.sidebar.userForums,
//         userFriendsForums: store.sidebar.userFriendsForums,
//         settings: store.sidebar.settings,
//         sessionCookie: store.login.sessionCookie
//     };
// })

@connect(store => {
    return {
      open: store.sidebar.open
    };
  })
class SideBar extends React.Component {
    componentWillMount() {
        currentUserID = this.props.sessionCookie
        
        this.props.dispatch(fetchUserForums(currentUserID))
        this.props.dispatch(fetchUserFriendsForums(currentUserID))
        this.props.dispatch(fetchFriends("friends", currentUserID))
    }
    
    render(){
        
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

        const menuItemStyle = {
            padding: 0,
        }

        const settingsClick = (ev) => {
            ev.preventDefault();
            this.props.dispatch(fetchSettings("settings", currentUserID))
        }

        const friendsClick = (ev) => {
            ev.preventDefault();
        }

        const newForumClick = (ev) => {
            ev.preventDefault();
            this.props.dispatch(fetchNewForum("newForum"))
        }

        const allUserRequests = this.props.userForums.map(forum => {
            return <ListItem secondaryText={forum.title} leftIcon={<HearingIcon />} />
        })

        const allUserFriendRequests = this.props.userFriendsForums.map(forum => {
            return <ListItem secondaryText={forum.title} rightIcon={<ForumIcon />} />
        })
        
        const drawerOpenState = this.props.sidebarToggle;

        const onClick = (evt) => {
            evt.preventDefault();
            console.log('CLICKING ACTON');
            this.props.dispatch(sidebarToggle(!this.props.open))  
        }
        return (
            <div>
                <Drawer open={drawerOpenState}> 
                <div class="sidebarStyle"><style>{divStyle}</style>
                <IconButton >
                    <ActionHome onClick={onClick}/>
                </IconButton>
                Play This
                </div> 
                    <h4>Requests</h4>
                    <IconButton>
                        <AddIcon onClick={newForumClick} >
                        </AddIcon>
                    </IconButton>
                        <Link to="/newforum">
                            Create New Request
                        </Link>
                    <MenuItem>
                        {allUserRequests}
                    </MenuItem>
                    <Divider />
                    <h4>Friends' Requests</h4>
                    <MenuItem innerDivStyle={menuItemStyle}>
                        {allUserFriendRequests}
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItem>
                            <Link to="/friends">
                                Friends
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem onClick={settingsClick}>
                            <Link to="/settings">
                                Settings
                            </Link>
                        </ListItem>
                    </MenuItem>
                </Drawer>
            </div>
        )
    }
};

const mapStateToProps = (state) => { 
    console.log('THIS IS STATE -->', state)
    return { 
        sidebarToggle: state.sidebar.open,
        userForums: state.sidebar.userForums,
        userFriendsForums: state.sidebar.userFriendsForums,
        settings: state.sidebar.settings,
        sessionCookie: state.login.sessionCookie
     };
  };

export default connect(mapStateToProps)(SideBar);

