import axios from 'axios';


export function deleteFriend(id, relationship) {
    return function(dispatch) {
      console.log('IN ACTION', relationship)
        axios.post(`http://localhost:3000/api/friend`, relationship)
        .then((response) => {
            console.log('RESPONSE FROM DELETE FRIENDS', response.data.user_id2)
            dispatch({type: "FRIEND_DELETED", payload: response.data.user_id2})
        })  
    }
}