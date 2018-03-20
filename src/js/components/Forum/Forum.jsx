import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import SideBar from "../SideBar/SideBar.jsx";
import Search from "./Search.jsx";
import SongPost from "./SongPost.jsx";

import { getRequest } from "../../actions/forum";
import { deleteForum } from "../../actions/forum";
import { sidebarToggleClose } from "../../actions/sidebar";
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import { fetchSongInfo, fetchSongComments } from "../../actions/post";

const styles = {
  button: {
    marginRight: '2em',
    position: 'absolute',
    right: 0
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

@connect(store => {
  return {
    viewingRequest: store.forum.viewingRequest,
    sessionCookie: store.login.sessionCookie,
  };
})
class Forum extends Component {
  componentWillUpdate() {
    this.props.dispatch(sidebarToggleClose());
  }
  componentDidUpdate() {
    if (!this.props.sessionCookie) {
      this.props.history.push("/login");
    }
    this.props.dispatch(fetchSongInfo(this.props.viewingRequest.id));
  }
  render() {
    let deleteButton = null;
    
    const titleStyle = {
      fontFamily: "Raleway, sans-serif",
      marginTop: 100,
      marginRight: '4em',
      marginLeft: '4em',
      fontSize: 50,
      fontWeight: 900,
      textAlign: "center"
    };
    const headerStyle = {
      marginLeft: '8em',
      marginRight: '8em'
    }
    const paragraphStyle = {
      fontFamily: "Raleway, sans-serif",
      fontSize: 30,
      fontWeight: 200,
      textAlign: "center"
    };
    const nameStyle = {
      fontFamily: "Raleway, sans-serif",
      fontSize: 17,
      fontWeight: 150,
      textAlign: "center"
    };
    const onClick = (evt) => {
      this.props.history.push('/welcome')
      this.props.dispatch(deleteForum(this.props.viewingRequest.id))
    }
    if(this.props.viewingRequest.user_admin_id === this.props.sessionCookie) {
      deleteButton = ( 
      <RaisedButton
        target="_blank"
        label="Delete Forum"
        secondary={true}
        style={styles.button}
        icon={<CloseIcon />}
        onClick={onClick}
      />)
    }
    return (
      <div>
        <SideBar />
        <div>{deleteButton}</div>
          <h1 style={titleStyle}>{this.props.viewingRequest.title}</h1>
          <br />
        <div style={headerStyle}>
          <p style={paragraphStyle}>{this.props.viewingRequest.explanation}</p>
          <p style={nameStyle}> Submitted by : {this.props.viewingRequest.first_name} {this.props.viewingRequest.last_name}</p>
        </div>
        <div style={{marginLeft: '9em', marginBottom: '5em', width: '42em'}}>
          <Search/> 
        </div>
        <div class="postedBox">
          <SongPost />
        </div>
      </div>
    );
  }
}
export default withRouter(Forum);
