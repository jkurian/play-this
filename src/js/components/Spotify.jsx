import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Redirect, Link } from "react-router-dom";
import queryString from "query-string";

class Spotify extends React.Component {
  componentWillMount() {
    let parsed = queryString.parse(this.props.location.search);
    console.log("writing to local storage", parsed);
    localStorage.setItem("spotifyTokens", parsed.access_token);
    this.props.history.push("/welcome");
  }
  render() {
    return <Redirect to="/welcome" />;
  }
}

export default withRouter(Spotify);
