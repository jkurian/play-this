import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import Avatar from "material-ui/Avatar";
import { grey400, darkBlack, lightBlack } from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import { connect } from "react-redux";
import { fetchSongComments } from "../../actions/post";

@connect(store => {
  return {
    songComments: store.post.songComments
  };
})

// Once the API is fully up and running, we will parsing and mapping the object into just one <ListItem>
export default class Comment extends Component {
  componentWillMount() {
    this.props.dispatch(fetchSongComments());
  }

  render() {
    const comments = this.props.songComments.map(comment => {
      return (
        <div>
          <List>
            <Subheader>Comments</Subheader>
            <ListItem
              leftAvatar={<Avatar src={comment.avatar_image} />}
              primaryText={comment.first_name}
              secondaryText={<p>{comment.comment}</p>}
              secondaryTextLines={2}
            />
            <Divider inset={true} />
          </List>
        </div>
      );
    });
    return <div>{comments}</div>;
  }
}
