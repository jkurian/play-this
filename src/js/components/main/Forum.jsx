import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux'

@connect((store) => {
    return {

    };
})

export default class Main extends Component {
    

    
    render() {
        return (
            <div>
                <NavBar />
                <SideBar />     
            </div>
        )
    }
}