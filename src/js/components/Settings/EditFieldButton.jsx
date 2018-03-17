import React from "react";
import { connect } from "react-redux";
import { updateRegisterLastNameField } from "../../actions/register";
import FontIcon from "material-ui/FontIcon";
import IconButton from 'material-ui/IconButton'
import { updateEditState } from "../../actions/profile";

@connect(store => {
  return {
  };
})
export default class registerLastNameField extends React.Component {
  render() {
    const updateEditableState = (evt, disabledStateChange) => {
      evt.preventDefault();
      this.props.dispatch(updateEditState(disabledStateChange));
      console.log(disabledStateChange, 'TO CHANGE ');
      
    };
    let editFieldState = {}
    editFieldState[this.props.fieldToChange] = this.props.fieldToChangeValue;
    
    return (
        <IconButton
          touch={true}
          onClick={evt =>
            updateEditableState(evt, editFieldState)}>
        <FontIcon className="material-icons">mode_edit</FontIcon>
        </IconButton>
    );
  }
}
