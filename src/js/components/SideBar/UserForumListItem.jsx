import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import {getRequest} from '../../actions/forum'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

@connect(store => {
  return {
    userForums: store.sidebar.userForums,
    viewingRequest: store.forum.viewingRequest,
  };
})
class UserForumListItem extends React.Component {
  render() {
    const onClickRequest = (ev, id) => {
      ev.preventDefault();
      this.props.dispatch(getRequest(id));
      this.props.history.push(`/forum/${id}`)
  }
      let allForums = []
      let forumIcon = <img src="../../../assets/images/headphoneslogo.png" />
      for (let i=0; i < this.props.userForums.length; i++) {
            
        for (let i=0; i < this.props.userForums.length; i++) {
          allForums.push(<ListItem id={this.props.userForums[i].id} key={i} secondaryText={this.props.userForums[i].title} leftIcon={forumIcon} onClick={(ev) => onClickRequest(ev, this.props.userForums[i].id)}/>)
      }
    return (
      <div>
        {allForums}
      </div>
    )
  }
}
}
export default withRouter(UserForumListItem)