import React from "react";
import { connect } from "react-redux";
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import DefaultAvatar from 'material-ui/svg-icons/social/person';

import { deleteFriend } from '../../actions/users'


const tileStyle = {
   padding: '2em'
}

@connect(store => {
  return {
    friends: store.sidebar.friends,
    sessionCookie: store.login.sessionCookie,
  };
})

export default class FriendItem extends React.Component {
  
  render() {
    const deleteHandler = (evt) => {

      evt.preventDefault();
      console.log('THE RELATIONSHIP OF DELETE IS', this.props.relationship);
      console.log('SESSION COOKIE', this.props.sessionCookie)
      this.props.dispatch(deleteFriend(this.props.sessionCookie, this.props.relationship))

    }
    let image;
    if(this.props.avatar_image) {
      image = <img src={this.props.avatar_image} style={{height:"100%", width: "100%"}}/>
    } else {
      image = <DefaultAvatar style={{height:"100%", width: "100%"}} />
    }
    return (
      <GridTile
      actionIcon={<IconButton onClick={deleteHandler}><DeleteIcon color={'white'} /></IconButton>}
      key={this.props.i}
      title={this.props.first_name}
      subtitle={<span><b>{this.props.last_name}</b></span>}>
      {image}
    </GridTile>
    )
  }
}