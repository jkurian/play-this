import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ActionHome from 'material-ui/svg-icons/action/home';
import {ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PlusIcon from 'material-ui/svg-icons/content/add-circle-outline';
import FriendsIcon from 'material-ui/svg-icons/social/people';
import FriendForumIcon from 'material-ui/svg-icons/communication/forum';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';

import { fetchSettings, fetchNewForum } from '../../actions/sidebar'
import { sidebarToggle, sidebarToggleClose } from '../../actions/sidebar'
import {getRequest} from '../../actions/forum'

let currentUserID;

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
        open: store.sidebar.open,
        sidebarToggle: store.sidebar.open,
        userForums: store.sidebar.userForums,
        userFriendsForums: store.sidebar.userFriendsForums,
        settings: store.sidebar.settings,
        sessionCookie: store.login.sessionCookie,
        viewingRequest: store.forum.viewingRequest,
        userFirstName: store.login.first_name
    };
})
class SideBar extends React.Component {
    componentWillMount() {
        currentUserID = this.props.sessionCookie
    }
    
    render(){
        const settingsClick = (ev) => {
            ev.preventDefault();
            this.props.dispatch(fetchSettings("settings", currentUserID))
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
            let forumIcon = <img src="../../../assets/images/headphoneslogo.png" />
            
            for (let i=0; i < userForumsArray.length; i++) {
                if (i > 10) {

                    break;
                }
                allForums.push(<ListItem id={userForumsArray[i].id} key={i} secondaryText={userForumsArray[i].title} leftIcon={forumIcon} onClick={(ev) => onClickRequest(ev, userForumsArray[i].id)}/>)
            }
            return allForums;
        }
        const allUserFriendRequests = (userForumsArray) => {
            let allForums = []
            for (let i=0; i < userForumsArray.length; i++) {
                if (i > 10) {
                    break;
                }
                allForums.push(<ListItem id={userForumsArray[i].id} key={i} secondaryText={userForumsArray[i].title} rightIcon={<FriendForumIcon />} onClick={(ev) => onClickRequest(ev, userForumsArray[i].id)}/>)
            }
            return allForums;
        }
        const onClick = (evt) => {
            evt.preventDefault();
            this.props.dispatch(sidebarToggle(!this.props.open))  
        }
        const settingsIcon = <img src='../../../assets/images/settings_icon.png' />
        return (
            <div>
                <Drawer open={this.props.sidebarToggle}> 
                    <h4 style={{fontFamily: 'Raleway, sans-serif', fontWeight: 900, backgroundColor: '#607d8b', paddingTop: 80, paddingRight: 20, paddingBottom: 25, paddingLeft: 20}}>{this.props.userFirstName}'s Forums</h4>
                    <MenuItem>
                        <ListItem onClick={newForumClick} primaryText='Create New Forum' leftIcon={<PlusIcon />} style={{fontFamily: 'Raleway, sans-serif', fontWeight: 900}}/>
                    </MenuItem>
                    <MenuItem>
                        {allUserRequests(this.props.userForums)}
                    </MenuItem>
                    <h4 style={{fontFamily: 'Raleway, sans-serif', fontWeight: 900, backgroundColor: '#607d8b', paddingTop: 25, paddingRight: 20, paddingBottom: 25, paddingLeft: 20}}>{this.props.userFirstName}'s Friends' Forums</h4>
                    <MenuItem innerDivStyle={menuItemStyle}>
                        {allUserFriendRequests(this.props.userFriendsForums)}
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItem onClick={friendsClick} primaryText='Friends' leftIcon={<FriendsIcon />} />
                        <Divider />
                        <ListItem onClick={settingsClick} primaryText='Settings' leftIcon={settingsIcon} />
                    </MenuItem>
                </Drawer>
            </div>
        )
    }
};

export default withRouter(SideBar)