import React from "react";
import { connect } from "react-redux";
import {List, ListItem} from 'material-ui/List';
import { sidebarToggle } from "../../actions/sidebar";
import UserForumListItem from './UserForumListItem.jsx'
import HourGlass from 'material-ui/svg-icons/action/hourglass-empty';
import { fetchNewForum, fetchUserForums } from '../../actions/sidebar'
import {withRouter} from 'react-router-dom'
import PlusIcon from 'material-ui/svg-icons/content/add-circle-outline';


@connect(store => {
  return {
    sidebarToggle: store.sidebar.open,
    sessionCookie: store.login.sessionCookie
  };
})
class UserForums extends React.Component {
  render() {
    const newForumClick = (ev) => {
      ev.preventDefault();
      this.props.dispatch(fetchNewForum("newForum"))
      this.props.history.push('/newforum')
  }
    const onClick = evt => {
      evt.preventDefault();
      this.props.dispatch(sidebarToggle(!this.props.sidebarToggle));
    };
    return (
      <div>
        <ListItem
          primaryText="Requests"
          leftIcon={<HourGlass />}
          initiallyOpen={true}
          primaryTogglesNestedList={true}
          nestedItems={[
            <UserForumListItem/>
          ]}>
        </ListItem>
        <ListItem leftIcon={<PlusIcon />} onClick={newForumClick} primaryText="New Request" />
      </div>
    );
  }
}

export default withRouter(UserForums)