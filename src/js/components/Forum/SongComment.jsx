import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import { grey400, darkBlack, lightBlack } from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import { connect } from "react-redux";
import Moment from "react-moment";
import Paper from "material-ui/Paper";

const paperStyle = {
  height: "100%",
  width: "70%",
  margin: 20,
  padding: 15,
  display: "inline-block"
};

const avatarStyle = {
  float: "left",
  marginLeft: "1em",
  marginTop: "1em"
};

@connect((store, props) => {
  return {};
})

// Add time of post into this.props.comment?
export default class SongComment extends Component {
  render() {
    return (
      <div>
        <div>
          <Avatar src={this.props.comments.avatar_image} size={100} style={avatarStyle}/>
          <Paper style={paperStyle} zDepth={1} rounded={false}>
            <h4 style={{fontFamily: 'Raleway, sans-serif'}}>{this.props.comments.first_name}</h4>
            <p style={{wordWrap: 'break-word'}}>
              <span >
                <i>
                <Moment fromNow ago>
                  {this.props.comments.comment_time_stamp}
                </Moment>{" "}
                ago
                </i>
              </span>
              <br />
              <br />
              {this.props.comments.comment}
            </p>
          </Paper>
        </div>
      </div>
    );
  }
}
