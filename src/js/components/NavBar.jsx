import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import SignupForm from './SignupForm.jsx'

import { connect } from "react-redux"

import { displayLoginForm, displaySignupForm } from "../actions/navbar"
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

@connect((store) => {
    return {
    //   user: store.user.user,
    //   userFetched: store.user.fetched,
    //   tweets: store.tweets.tweets,
    showLoginForm: store.navbar.showLoginForm,
    showSignupForm: store.navbar.showSignupForm
    };
  })
export default class NavBar extends React.Component {    
    render() {
        const onLoginClick = (evt) => {
            this.props.dispatch(displayLoginForm(!this.props.showLoginForm))
          }
        const onSignupClick = (evt) => {
            this.props.dispatch(displaySignupForm(!this.props.showSignupForm))
        }
        const onLogoutClick = (evt) => {
            console.log('logging out')
        }
        
        let buttons = null;
        
        const logoutButton = (
            <div>
                <RaisedButton label="Logout" primary={true} onClick={onLogoutClick}/>
            </div>
        )   


        const rightButtons = (
            <div>
                <RaisedButton label="Login" primary={true} onClick={onLoginClick}/>
                <RaisedButton label="Sign up" primary={true} onClick={onSignupClick}/>
            </div>
          );
          
            true ? buttons = logoutButton : buttons = rightButtons
            
        return (
            <div>
            <AppBar
              title="PlayThis"
              iconElementRight={buttons}
            />
            </div>
        )
    }
}