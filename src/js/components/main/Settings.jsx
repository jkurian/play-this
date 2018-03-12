import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { fetchSettings } from '../../actions/sidebar';


@connect((store) => {
    return {
        settings: store.sidebar.settings,
    };
})

export default class Main extends Component {
        
    render() {
        return (
            <div>
             SETTTINNGGS
             {this.props.settings[0].first_name}
            </div>
        )
    }
}