import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { logout } from "../../actions/logout";
import RaisedButton from 'material-ui/RaisedButton'


@connect(store => {
  return {
  };
})
class LogoutButton extends React.Component {
  render() {
    const onLogoutClick = evt => {
      this.props.dispatch(logout());
      this.props.history.push("/login");
    };
    return (
      <div style={{marginTop: 5, marginRight: 55 }}>
        <RaisedButton label="Logout" primary={true} onClick={onLogoutClick} />
      </div>
    )
  }
}

export default withRouter(LogoutButton)