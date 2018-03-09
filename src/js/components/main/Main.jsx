import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../NavBar.jsx';
import SideBar from './SideBar.jsx';

import { connect } from 'react-redux'

@connect((store) => {
    return {
        showLoginForm: store.navbar.showLoginForm,
        showSignupForm: store.navbar.showSignupForm
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