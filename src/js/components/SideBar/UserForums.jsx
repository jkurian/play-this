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
        leftIcon={<PlusIcon />} 
        onClick={newForumClick} 
        primaryText="Create New Forum" 
        style={{marginTop: 70, fontFamily: 'Raleway, sans-serif', fontWeight: 600}}/>
        <ListItem
          primaryText="Your Forums"
          initiallyOpen={true}
          primaryTogglesNestedList={true}
          style={{fontFamily: 'Raleway, sans-serif', fontWeight: 600}}
          nestedItems={[
            <UserForumListItem/>
          ]}>
        </ListItem>
      </div>
    );
  }
}

export default withRouter(UserForums)