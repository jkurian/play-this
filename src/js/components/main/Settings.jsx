import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { fetchSettings } from '../../actions/sidebar';


@connect((store) => {
    return {
        settings: store.sidebar.settings,
    };
})

export default class Settings extends Component {
        
    render() {
        let avatarImage = this.props.settings[0].avatar_image
        return (
            <div>
             SETTTINNGGS
             <div>{this.props.settings[0].first_name}</div>
             <div>{this.props.settings[0].last_name}</div>
             <img src={avatarImage} />
             <div>{this.props.settings[0].email}</div>
             <div>{this.props.settings[0].password}</div>
            </div>
        )
    }
}