import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar.jsx';
import LoginForm from './LoginForm.jsx';
import SignUpForm from './SignUpForm.jsx';

import { connect } from 'react-redux'

@connect((store) => {
    return {
        showLoginForm: store.navbar.showLoginForm,
        showSignupForm: store.navbar.showSignupForm
    //   userFetched: store.user.fetched,
    //   tweets: store.tweets.tweets,
    };
})

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                {
                this.props.showLoginForm
                    ? <LoginForm />
                    : null
                }
                {
                this.props.showSignupForm
                    ? <SignupForm />
                    : null
                }
            </div>
        )
    }
}