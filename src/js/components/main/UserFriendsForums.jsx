import React from "react";
import { connect } from "react-redux";
import {List, ListItem} from 'material-ui/List';
import { sidebarToggle } from "../../actions/sidebar";
import UserFriendsForumListItem from './UserFriendsForumListItem.jsx'
import HourGlass from 'material-ui/svg-icons/action/hourglass-full';
import Listen from 'material-ui/svg-icons/action/record-voice-over';
import { fetchNewForum } from '../../actions/sidebar'
import {withRouter} from 'react-router-dom'

@connect(store => {
  return {
    sidebarToggle: store.sidebar.open,
  };
})
class UserFriendsForums extends React.Component {
  render() {
    const onClick = evt => {
      evt.preventDefault();
      this.props.dispatch(sidebarToggle(!this.props.sidebarToggle));
    };
    return (
      <div>
        <ListItem
          primaryText="Friends Requests"
          leftIcon={<HourGlass />}
          initiallyOpen={true}
          primaryTogglesNestedList={true}
          nestedItems={[
            <UserFriendsForumListItem/>
          ]}>
        </ListItem>
      </div>
    );
  }
}

export default withRouter(UserFriendsForums)