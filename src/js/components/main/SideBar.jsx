import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import HearingIcon from 'material-ui/svg-icons/av/hearing';
import ForumIcon from 'material-ui/svg-icons/communication/forum';
import Divider from 'material-ui/Divider';
import HomeButton from './HomeButton.jsx'
import UserForums from './UserForums.jsx'

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
        userForums: store.sidebar.userForums,
        userFriendsForums: store.sidebar.userFriendsForums,
        settings: store.sidebar.settings,
        sessionCookie: store.login.sessionCookie,
        viewingRequest: store.forum.viewingRequest,
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

        const newForumClick = (ev) => {
            ev.preventDefault();
            this.props.dispatch(fetchNewForum("newForum"))
            this.props.history.push('/newforum')
        }
        const onClickRequest = (ev, id) => {
            ev.preventDefault();
            this.props.dispatch(getRequest(id));
            this.props.history.push(`/forum/${this.props.viewingRequest.id}`)
        }
        // const allUserRequests = this.props.userForums.map((forum, index) => {
        //     if (index > 10) {
        //         return <p>See all your forums</p>;
        //         break;
        //     }
        //     return <ListItem id={forum.id} key={index} secondaryText={forum.title} leftIcon={<HearingIcon />} onClick={(ev) => onClickRequest(ev, forum.id)}/>
        // })
        const allUserRequests = (userForumsArray) => {
            let allForums = []
            for (let i=0; i < userForumsArray.length; i++) {
                if (i > 10) {
                    allForums.push(<ListItem primaryText="See all your forums" />)
                    break;
                }
                allForums.push(<ListItem id={userForumsArray[i].id} key={i} secondaryText={userForumsArray[i].title} leftIcon={<HearingIcon />} onClick={(ev) => onClickRequest(ev, userForumsArray[i].id)}/>)
            }
            return allForums;
        }
        const allUserFriendRequests = (userForumsArray) => {
            let allForums = []
            for (let i=0; i < userForumsArray.length; i++) {
                if (i > 10) {
                    allForums.push(<ListItem primaryText="See all your friends' forums" />)
                    break;
                }
                allForums.push(<ListItem id={userForumsArray[i].id} key={i} secondaryText={userForumsArray[i].title} rightIcon={<ForumIcon />} onClick={(ev) => onClickRequest(ev, userForumsArray[i].id)}/>)
            }
            return allForums;
        }
        return (
            <div>
                <Drawer open={this.props.sidebarToggle}> 
                    <HomeButton />
                    <UserForums/>
                    <Divider />
                    <h4>Friends' Requests</h4>
                    <MenuItem innerDivStyle={menuItemStyle}>
                        {allUserFriendRequests(this.props.userFriendsForums)}
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItem onClick={friendsClick} primaryText='Friends'/>
                        <Divider />
                        <ListItem onClick={settingsClick} primaryText="Settings"/>
                    </MenuItem>
                </Drawer>
            </div>
        )
    }
};

export default withRouter(SideBar)