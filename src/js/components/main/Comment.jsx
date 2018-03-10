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

export default class Comment extends Component {
  render() {
    const iconButtonElement = (
      <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
      </IconMenu>
    );

    return (
      <div>
        <List>
          <Subheader>Today</Subheader>
          <ListItem
            leftAvatar={<Avatar src="images/ok-128.jpg" />}
            primaryText="Name of User:"
            secondaryText={
              <p>
                I&apos;ll be in your neighborhood doing errands this weekend. Do
                you want to grab brunch?
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src="images/kolage-128.jpg" />}
            primaryText="NAMEY MAMEY"
            secondaryText={
              <p>Wish I could come, but I&apos;m out of town this weekend.</p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
            primaryText="Someone:"
            secondaryText={
              <p>Do you have Paris recommendations? Have you ever been?</p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src="images/kerem-128.jpg" />}
            primaryText="Awesome Name"
            secondaryText={
              <p>
                Do you have any ideas what we can get Heidi for her birthday?
                How about a pony?
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
            primaryText="NAME-O"
            secondaryText={
              <p>
                We should eat this: grated squash. Corn and tomatillo tacos.
              </p>
            }
            secondaryTextLines={2}
          />
        </List>
      </div>
    );
  }
}
