import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SideBar from './SideBar.jsx'
import { Redirect } from 'react-router-dom';
import { sidebarToggleClose } from '../../actions/sidebar'
import { connect } from 'react-redux';
import { Redirect, Link, withRouter } from 'react-router-dom';
//import { fetchSettings } from '../../actions/sidebar';

import { addForum } from '../../actions/newForum'

@connect((store) => {
    return {
        sessionCookie: store.login.sessionCookie
    };
})


class NewForum extends Component {
    componentWillMount() {
        this.props.dispatch(sidebarToggleClose());
    }
    render() {
        if (!this.props.sessionCookie) {
            return <Redirect to="/login"/>
          }
        const style = {
            margin: 12,
        };
        const submitForm = (evt) => {
            evt.preventDefault();
            this.props.dispatch(addForum(evt.target[1].value, evt.target[3].value, this.props.sessionCookie))
            this.props.history.push("/forum")
        }

        return  (
            <div>
                <SideBar />
                <form onSubmit={submitForm}>
                    <TextField
                    name="title"
                    hintText="E.g. PUMPED UP Friday Night Jamz"
                    floatingLabelText="Add Forum Title"
                    multiLine={true}
                    rows={1}
                    /><br />
                    <TextField
                    name="description"
                    hintText="E.g. All tracks should be the aural equivalent of a 4-pack of RedBull and punch to the brain through both ears."
                    floatingLabelText="Add Forum Description"
                    multiLine={true}
                    rows={1}
                    /><br />
            
                    <br />
                    <div>
                    <RaisedButton type="submit" style={style} />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(NewForum);