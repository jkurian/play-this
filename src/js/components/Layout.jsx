import React from 'react'
import { connect } from 'react-redux'
import LandingPage from './LandingPage.jsx'
import Main from './main/Main.jsx'
//example import action
//import { fetchUser } from '../actions/userActions'

@connect((store) => {
    return {
        // example props available to Layout.js
        // user: store.user.user,
        // userFetched: store.user.fetched,
        // tweets: store.tweets
        sessionCookie: store.login.sessionCookie
    }
})
export default class Layout extends React.Component {
    componentWillMount() {
        //example displatch after component is mounted
        //this.props.dispatch(fetchUser())
    }
    render() {
        //Site would render the user age and name
        //const { user } = this.props;
        //return <h1>{user.name} is {user.age} years old</h1>
        console.log("PROPS ARE", this.props)
        return (
            <div>
            {
                this.props.sessionCookie === 'accepted'
                    ? <Main />
                    : <LandingPage />
            }
            </div>
        )
    }
}