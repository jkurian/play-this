import React from "react";
import { connect } from "react-redux";
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home';
import { sidebarToggle } from '../../actions/sidebar'

@connect(store => {
  return {
    sidebarToggle: store.sidebar.open,
  };
})
export default class HomeButton extends React.Component {
  render() {
    const onClick = (evt) => {
      evt.preventDefault();
      this.props.dispatch(sidebarToggle(!this.props.sidebarToggle))  
  }
    return (
      <div>
        <IconButton style={{marginBottom: 10}}>
          <ActionHome onClick={onClick}/>
        </IconButton>
      </div> 
    )
  }
}