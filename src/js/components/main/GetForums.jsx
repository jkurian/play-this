
import axios from 'axios';
import {ListItem} from 'material-ui/List';
import HearingIcon from 'material-ui/svg-icons/av/hearing';
import React, { Component } from "react";

  
export function getForums(id) {
   return (
            axios.get(`http://localhost:3000/api/userforums/${id}`)
            .then((response) => {
                
                return Promise.resolve(response.data.map((forum, index) => {
                    // console.log('INNNNNNNNNNSIDE MAP', forum);
                    return <ListItem id={forum.id} key={index} secondaryText={forum.title} leftIcon={<HearingIcon />}/>
                }))
        
            })

        )
}
