import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class NavBar extends React.Component {
    render() {
            // const buttonStyle = {
            //     backgroundColor: 'transparent',
            //     color: 'white'
            //   };
        const rightButtons = (
            <div>
                <RaisedButton label="Login" primary={true} />
                <RaisedButton label="Sign up" primary={true}/>
            </div>
          );
        return (
            <AppBar
              title="PlayThis"
              iconElementLeft={<div></div>}
              iconElementRight={rightButtons}
            />
        )
    }
}