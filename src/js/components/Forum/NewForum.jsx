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
      this.props.history.push(`/newrequest`)
    };
    const formStyle = {
      width: 400,
      display: "block",
      margin: "auto"
    };
    const pStyle = {
      fontFamily: 'Raleway, sans-serif',
      width: '28em',
    }
    const background={
      backgroundImage: 'url(' + '../../../assets/images/create_icon.png' + ')',   
      backgroundRepeat: "no-repeat",
      opacity: 0.05,
      height: 600,
      backgroundPosition: "left",
      marginTop: 100,
 
      zIndex: -1500 
    }
    return (
      <div>
        <SideBar />
        <div style={{textAlign: 'center'}}>
          <div style={{ position: 'relative', display: 'inline-block', float: 'left', marginTop: '12em', marginRight: '6em', marginLeft: '12em'}}>
            <p style={pStyle}> 
              <font size="5">
                  Forum titles should define the kind of music to be shared and discussed.<br />  
                  <br />
                  Add a more detailed description of your forum to get the ideas flowing in the right direction. 
                  Or don't--whatever--your title says it all. 
              </font>  
            </p>
          </div>          
          <div style={{position: 'relative', display: 'inline-block', float: 'left'}}>
            <form onSubmit={submitForm} style={{ marginTop: '9em', marginRight: '5em', marginLeft: '5em'}}>
              <TextField
                style={formStyle}
                name="title"
                floatingLabelText="Add Forum Title"
                multiLine={true}
                rows={1}
              />
              <br />
              <TextField
                style={formStyle}
                name="description"
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
        </div>
        <div style={background}></div>
      </div>
    );
  }
}

export default withRouter(NewForum);
