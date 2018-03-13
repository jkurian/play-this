import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';
//import { fetchSettings } from '../../actions/sidebar';


@connect((store) => {
    return {
        
    };
})


export default class NewForum extends Component {
    
    render() {
        
        const style = {
            margin: 12,
        };
        
        return  <div>
            <TextField
            hintText="E.g. PUMPED UP Friday Night Jamz"
            floatingLabelText="Add Forum Title"
            multiLine={true}
            rows={2}
            /><br />
            <TextField
            hintText="E.g. All tracks should be the aural equivalent of a 4-pack of RedBull and punch to the brain through both ears."
            floatingLabelText="Add Forum Description"
            multiLine={true}
            rows={4}
            /><br />
            <br />
            <RaisedButton type="submit" label="Create Forum" style={style} onClick={onClick}/>
      </div>
    }
}