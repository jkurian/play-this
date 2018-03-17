import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import SideBar from "./SideBar.jsx";

import { sidebarToggleClose } from "../../actions/sidebar";
import { connect } from "react-redux";
import { addForum } from "../../actions/newForum";

const style = {
  margin: 12
};

@connect(store => {
  return {
    sessionCookie: store.login.sessionCookie
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
      this.props.history.push("/forum");
    };
    return (
      <div>
        <SideBar />
        <form onSubmit={submitForm}>
          <TextField
            name="title"
            hintText="E.g. PUMPED UP Friday Night Jamz"
            floatingLabelText="Add Forum Title"
            multiLine={true}
            rows={1}
          />
          <br />
          <TextField
            name="description"
            hintText="E.g. All tracks should be the aural equivalent of a 4-pack of RedBull and punch to the brain through both ears."
            floatingLabelText="Add Forum Description"
            multiLine={true}
            rows={1}
          />
          <br />

          <br />
          <div>
            <FlatButton type="submit" style={style} label="Create Forum" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(NewForum);
