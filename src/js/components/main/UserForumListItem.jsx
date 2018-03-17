import React from "react";
import { connect } from "react-redux";
import {getRequest} from '../../actions/forum'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
@connect(store => {
  return {
    userForums: store.sidebar.userForums
  };
})
export default class UserForumButton extends React.Component {
  render() {
    const onClickRequest = (ev, id) => {
      ev.preventDefault();
      this.props.dispatch(getRequest(id));
      this.props.history.push(`/forum/${this.props.viewingRequest.id}`)
  }
    const allUserRequests = () => {
      let allForums = []
      for (let i=0; i < this.props.userForums.length; i++) {
          if (i === 9) {
              allForums.push(<ListItem primaryText="See all your forums" />)
              break;
          }
          allForums.push(<ListItem id={userForumsArray[i].id} key={i} secondaryText={userForumsArray[i].title} leftIcon={<HearingIcon />} onClick={(ev) => onClickRequest(ev, userForumsArray[i].id)}/>)
      }
      return allForums;
  }
    return (
      <div>
        {allUserRequests}
      </div> 
    )
  }
}