import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SideBar from './SideBar.jsx'
import {Redirect} from 'react-router-dom'
import { sidebarToggleClose } from '../../actions/sidebar'
import { connect } from 'react-redux';
// import { fetchSettings } from '../../actions/sidebar';


@connect((store) => {
    return {
        friends: store.sidebar.friends,
        sessionCookie: store.login.sessionCookie
    };
})

export default class Friends extends Component {
    componentWillMount() {
        this.props.dispatch(sidebarToggleClose());
    }
    
    render() {
        if (!this.props.sessionCookie) {
            return <Redirect to="/login"/>
          }
        console.log(this.props, 'props are');  
        const friendProfiles = this.props.friends.map(friendObj => {
            return <div><img src={friendObj.avatar_image} />
                        <div>{friendObj.first_name}  {friendObj.last_name}</div>
                        <div>{friendObj.email}</div>
                    </div> 
        })
       
        return (
            <div>
                <SideBar />
                {friendProfiles}
            </div>
        )
    }
}