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
import * as _ from "lodash";
import Moment from "react-moment";

@connect((store, props) => {
  return {
  };
})
// Add time of post into this.props.comment?
export default class SongComment extends Component {
  render() {
          return (
            <div>
              <ListItem
                leftAvatar={<Avatar src={this.props.comments.avatar_image} />}
                primaryText={this.props.comments.first_name}
                secondaryText={
                  <p>
                    <span style={{ color: darkBlack }}>
                      <Moment fromNow ago>
                        {this.props.comments.comment_time_stamp}
                      </Moment>{" "}
                      ago
                    </span>
                    <br />
                    {this.props.comments.comment}
                  </p>
                }
                secondaryTextLines={2}
                key={this.props.comments.id}
              />
              <Divider inset={true} />
            </div>
          );
  }
}
