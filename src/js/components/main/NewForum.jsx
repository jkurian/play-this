import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import SideBar from "../SideBar/SideBar.jsx";

import { sidebarToggleClose } from "../../actions/sidebar";
import { connect } from "react-redux";
import { addForum } from "../../actions/newForum";

@connect(store => {
  return {
    sessionCookie: store.login.sessionCookie,
    viewingRequestID: store.forum.viewingRequest.id
  };
})
class NewForum extends Component {
  componentWillMount() {
    this.props.dispatch(sidebarToggleClose());
  }
  componentDidUpdate() {
    if (!this.props.sessionCookie) {
      this.props.history.push("/login");
    }
    this.props.history.push(`/forum/${this.props.viewingRequestID + 1}`);
  }
  render() {
    const submitForm = evt => {
      evt.preventDefault();
      this.props.dispatch(
        addForum(
          evt.target[1].value,
          evt.target[3].value,
          this.props.sessionCookie
        )
      );
    };

    const formStyle = {
      width: 400,
      display: "block",
      margin: "auto"
    };
    return (
      <div>
        <SideBar />
        <form onSubmit={submitForm} style={{ margin: 80, float: 'right' }}>
          <TextField
            style={formStyle}
            name="title"
            hintText="E.g. PUMPED UP Friday Night Jamz"
            floatingLabelText="Add Forum Title"
            multiLine={true}
            rows={1}
          />
          <br />
          <TextField
            style={formStyle}
            name="description"
            hintText="E.g. All tracks should be the aural equivalent of a 4-pack of RedBull and punch to the brain through both ears."
            floatingLabelText="Add Forum Description"
            multiLine={true}
            rows={1}
          />
          <br />

          <br />
          <div>
            <FlatButton type="submit" style={formStyle} label="Create Forum" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(NewForum);
