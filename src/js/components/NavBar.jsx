import React from "react";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import SignUpForm from "./SignUpForm.jsx";
import axios from "axios";
import { connect } from "react-redux";

import { displayLoginForm, displaySignupForm } from "../actions/navbar";
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

@connect(store => {
  return {
    //   user: store.user.user,
    //   userFetched: store.user.fetched,
    //   tweets: store.tweets.tweets,
    showLoginForm: store.navbar.showLoginForm,
<<<<<<< HEAD
    showSignupForm: store.navbar.showSignupForm,
    sessionCookie: store.login.sessionCookie
=======
    showSignupForm: store.navbar.showSignupForm
  };
})
export default class NavBar extends React.Component {
  render() {
    const onLoginClick = evt => {
      this.props.dispatch(displayLoginForm(!this.props.showLoginForm));
      // axios.post('http://localhost:3000/api/login')
      // .then(res => {
      //   console.log('axios post complete');
      // })
      // .catch(err => {
      //   console.log('err');
      // })
>>>>>>> a26e96508888d1700e4aedc57efbdb3dc94818d1
    };
    const onSignupClick = evt => {
      this.props.dispatch(displaySignupForm(!this.props.showSignupForm));
    };
    const onLogoutClick = evt => {
      console.log("logging out");
    };

    let buttons = null;

    const logoutButton = (
      <div>
        <RaisedButton label="Logout" primary={true} onClick={onLogoutClick} />
      </div>
    );

    const rightButtons = (
      <div>
        <RaisedButton label="Login" primary={true} onClick={onLoginClick} />
        <RaisedButton label="Sign up" primary={true} onClick={onSignupClick} />
      </div>
    );

    false ? (buttons = logoutButton) : (buttons = rightButtons);

        const rightButtons = (
            <div>
                <RaisedButton label="Login" primary={true} onClick={onLoginClick}/>
                <RaisedButton label="Sign up" primary={true} onClick={onSignupClick}/>
            </div>
          );
          
        this.props.sessionCookie === 'accepted' ? buttons = logoutButton : buttons = rightButtons
            
        return (
            <div>
            <AppBar
              title="PlayThis"
              iconElementRight={buttons}
              iconElementLeft={<div></div>}
            />
            </div>
        )
    }
}
