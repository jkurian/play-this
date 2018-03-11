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

// Once the API is fully up and running, we will parsing and mapping the object into just one <ListItem>
export default class Comment extends Component {
  render() {
    return (
      <div>
        <List>
          <Subheader>Comments</Subheader>
          <ListItem
            leftAvatar={<Avatar src="http://www.placecage.com/gif/200/300" />}
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
            leftAvatar={<Avatar src="http://www.placecage.com/gif/200/300" />}
            primaryText="NAMEY MAMEY"
            secondaryText={
              <p>Wish I could come, but I&apos;m out of town this weekend.</p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src="http://www.placecage.com/gif/200/300" />}
            primaryText="Someone:"
            secondaryText={
              <p>Do you have Paris recommendations? Have you ever been?</p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src="http://www.placecage.com/gif/200/300" />}
            primaryText="Awesome Name"
            secondaryText={
              <p>
                Do you have any ideas what we can get Heidi for her birthday?
                How about a mouse?
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src="http://www.placecage.com/gif/200/300" />}
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
