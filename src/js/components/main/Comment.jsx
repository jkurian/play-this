import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import Avatar from "material-ui/Avatar";
import { grey400, darkBlack, lightBlack } from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import { connect } from "react-redux";
import { fetchSongComments } from "../../actions/post";
import * as _ from "lodash";

@connect((store, props) => {
  console.log(props);
  return {
    songComments: _.get(store, `post.songComments.${props.songId}`)
  };
})

// Add time of post into comment?
export default class Comment extends Component {
  componentWillMount() {
    this.props.dispatch(fetchSongComments(this.props.songId));
  }

  render() {
    const comments = this.props.songComments
      ? this.props.songComments.map(comment => {
          return (
            <div>
              <ListItem
                leftAvatar={<Avatar src={comment.avatar_image} />}
                primaryText={comment.first_name}
                secondaryText={<p>{comment.comment}</p>}
                secondaryTextLines={2}
                key={comment.id}
              />
              <Divider inset={true} />
            </div>
          );
        })
      : undefined;
    return (
      <div>
        <List>{comments}</List>
      </div>
    );
  }
}
