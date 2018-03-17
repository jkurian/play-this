import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import SideBar from "../SideBar/SideBar.jsx";
import Search from "./Search.jsx";
import Post from "./Post.jsx";

import { fetchSongInfo } from "../../actions/post";
import { getRequest } from "../../actions/forum";
import { sidebarToggleClose } from "../../actions/sidebar";

@connect(store => {
  return {
    viewingRequest: store.forum.viewingRequest,
    sessionCookie: store.login.sessionCookie,
    newForumLink: store.sidebar.userForums[0].id
  };
})
class Forum extends Component {
  componentWillMount() {
    this.setState({ redirectToNewPage: false });
  }

  componentWillUpdate() {
    this.props.dispatch(sidebarToggleClose());
    console.log("FORUM VIEW IS UPDATING", this.props.viewingRequest);
  }
  componentDidUpdate() {
    if (!this.props.sessionCookie) {
      this.props.history.push("/login");
    }
  }
  render() {
    const titleStyle = {
      fontFamily: "Raleway, sans-serif",
      marginTop: 100,
      fontSize: 50,
      fontWeight: 900,
      textAlign: "center"
    };
    const paragraphStyle = {
      fontFamily: "Raleway, sans-serif",
      fontSize: 30,
      fontWeight: 200,
      textAlign: "center"
    };
    let newForumLink = `/forum/${this.props.newForumLink}`;
    return (
      <div>
        <SideBar />
        <h1 style={titleStyle}>{this.props.viewingRequest.title}</h1>
        <br />
        <p style={paragraphStyle}>{this.props.viewingRequest.explanation}</p>
        <Search />
        <Post />
        <Redirect to={newForumLink} />
      </div>
    );
  }
}
export default withRouter(Forum);
