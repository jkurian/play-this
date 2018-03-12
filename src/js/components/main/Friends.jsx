import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
// import { fetchSettings } from '../../actions/sidebar';


@connect((store) => {
    return {
        friends: store.sidebar.friends,
    };
})

export default class Main extends Component {
        
    render() {

        const friendProfiles = this.props.friends.map(friendObj => {
            return <div><img src={friendObj.avatar_image} />
                        <div>{friendObj.first_name}  {friendObj.last_name}</div>
                        <div>{friendObj.email}</div>
                    </div> 
        })
       
        return (
            <div>
                {friendProfiles}
            </div>
        )
    }
}