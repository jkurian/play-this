import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import NavBar from './NavBar.jsx'
import LoginForm from './LoginForm.jsx';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <LoginForm />
            </div>
        )
    }
}