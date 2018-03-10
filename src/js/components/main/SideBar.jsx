import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux'

import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import HearingIcon from 'material-ui/svg-icons/av/hearing';
import ForumIcon from 'material-ui/svg-icons/communication/forum';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import { displayUserForums } from '../../actions/sidebar'


//this is where data comes from store as props
@connect((store) => {
    return {
        userForums: store.sidebar.userForums
    };
})


export default class SideBar extends React.Component {
    componentWillMount() {
        console.log("COMPONENT WILL MOUNT");
        this.props.dispatch(displayUserForums())
    }
    
    render(){
        console.log('IN RENDER');
        const boxStyle = {
            width: 300,
            margin: 20,
            display: 'inline-block',
        };

        const iconStyle = {
            marginLeft: 24,
            marginRight:23
        }
        
        return (
            <div>
                <Paper style={boxStyle} zDepth={1}> 
                    <h4>Requests</h4>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    Create New Request
                    <List>
                        <ListItem primaryText={this.props.userForums[0].name} leftIcon={<HearingIcon />} />
                    </List>
                    <Divider />
                    <h4>Friends' Requests</h4>
                    <List>
                        <ListItem primaryText="Request Title" rightIcon={<ForumIcon />} />
                        <ListItem primaryText="Request Title" rightIcon={<ForumIcon />} />
                        <ListItem primaryText="Request Title" rightIcon={<ForumIcon />} />
                        <ListItem primaryText="Request Title" rightIcon={<ForumIcon />} />
                        <ListItem primaryText="Request Title" rightIcon={<ForumIcon />} />
                        <ListItem primaryText="Request Title" rightIcon={<ForumIcon />} />
                        <ListItem primaryText="Request Title" rightIcon={<ForumIcon />} />
                        <ListItem primaryText="Request Title" rightIcon={<ForumIcon />} />
                        <ListItem primaryText="Request Title" rightIcon={<ForumIcon />} />
                        <ListItem primaryText="Request Title" rightIcon={<ForumIcon />} />
                    </List>
                    <Divider />
                    <List>
                        <ListItem primaryText="Friends" />
                        <Divider />
                        <ListItem primaryText="Settings" />
                    </List>
                </Paper>
            </div>
        )
    }
};

