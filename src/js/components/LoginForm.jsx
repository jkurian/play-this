import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'


const style = {
  margin: 12,
};

export default class Layout extends React.Component {
  render() {
    const sendForm = (evt) => {
        
    }
    const onClick = (evt) => {
      evt.preventDefault();
      sendForm(evt);
    }

    return(
      <form action="/api/login" method="POST">
      <TextField
        floatingLabelText="Email"
      /><br />
      <TextField
        floatingLabelText="Password"
        type="password"
      /><br />
      <RaisedButton type="submit" label="Login" style={style} onClick={onClick}/>
      </form>
    )
  }
}