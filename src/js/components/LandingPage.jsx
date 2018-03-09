import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import LoginForm from './LoginForm.jsx';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <LoginForm />
            </div>
        )
    }
}