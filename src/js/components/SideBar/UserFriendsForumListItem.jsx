import React from "react";
import { connect } from "react-redux";
import {getRequest} from '../../actions/forum'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import {withRouter} from 'react-router-dom'
import FriendForumIcon from 'material-ui/svg-icons/communication/forum';

@connect(store => {
  return {
    userFriendsForums: store.sidebar.userFriendsForums,
    viewingRequest: store.forum.viewingRequest,
  };
})
class UserFriendsForumButton extends React.Component {
  render() {
    const onClickRequest = (ev, id) => {
      ev.preventDefault();
      this.props.dispatch(getRequest(id));
      this.props.history.push(`/forum/${this.props.viewingRequest.id}`)
  }
      let allFriendsForums = []
      for (let i=0; i < this.props.userFriendsForums.length; i++) {
          if (i === 9) {
              break;
          }
          allFriendsForums.push(<ListItem id={this.props.userFriendsForums[i].id} key={i} secondaryText={this.props.userFriendsForums[i].title} rightIcon={<FriendForumIcon />} onClick={(ev) => onClickRequest(ev, this.props.userFriendsForums[i].id)}/>)
  }
    return (
      <div>
        {allFriendsForums}
      </div> 
    )
  }
}

export default withRouter(UserFriendsForumButton)