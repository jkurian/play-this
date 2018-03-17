import React from "react";
import { connect } from "react-redux";
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
const style = {
  indvCell: {
    "borderRadius": 25,
  }
}
@connect(store => {
  return {
  };
})
export default class FriendItem extends React.Component {
  render() {
    return (
      <GridTile
      style={style.individItem}
      key={this.props.i}
      title={this.props.first_name}
      subtitle={<span><b>{this.props.last_name}</b></span>}>
      <img src={this.props.avatar_image} />
    </GridTile>
    )
  }
}