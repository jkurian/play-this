import React from 'react'
import { connect } from 'react-redux'

//example import action
//import { fetchUser } from '../actions/userActions'

@connect((store) => {
    return {
        // example props available to Layout.js
        // user: store.user.user,
        // userFetched: store.user.fetched,
        // tweets: store.tweets
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
    }
}