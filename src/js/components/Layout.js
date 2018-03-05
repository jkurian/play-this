import React from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets
    }
})
export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUser())
    }
    render() {
        const { user } = this.props;
        return <h1>{user.name} is {user.age} years old</h1>
    }
}