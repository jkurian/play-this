import axios from 'axios'

export function addFriend(newFriendData) {
  return function(dispatch) {
    dispatch({type: "[USER]ADD_FRIEND_PENDING", payload: {addingFriend: true}});

    axios.post("http://localhost:3000/api/users/addfriend", newFriendData)
      .then((response) => {
        // console.log('RESPONSE IS ', response)
        dispatch({type: "[USER]ADD_FRIEND_FULFILLED", payload: {addingFriend: false}});
        axios.get(`http://localhost:3000/api/friends/${newFriendData.currentUserID}`)
        .then((response) => {
          console.log('THIS IS SETTINGS AXIOS RESPONSE from friends:', response)
          axios.get(`http://localhost:3000/api/userfriendsforums/${newFriendData.currentUserID}`)
          .then((response) => {
            console.log('response from axios',response.data);
    
            dispatch({type: "FETCH_USER_FRIENDS_FORUMS_FULFILLED", payload: response.data})
          })
          dispatch({type: "FETCH_FRIENDS_FULFILLED", payload: {friends: response.data, view: 'view'}})
        })
        .catch((err) => {
          dispatch({type: "FETCH_FRIENDS_REJECTED", payload: err})
        })
      })
      .catch((err) => {
          // dispatch({type: "[USER]GET_ALL_FAILED", payload: response.data.authenticated})
      })
  }
}

export function deleteFriend(id, relationship) {
  return function(dispatch) {
    console.log('IN ACTION', relationship)
      axios.post(`http://localhost:3000/api/friend`, relationship)
      .then((response) => {
          console.log('RESPONSE FROM DELETE FRIENDS', response.data.user_id2)
          dispatch({type: "FRIEND_DELETED", payload: response.data.user_id2})
          axios.get(`http://localhost:3000/api/friends/${relationship.user_id1}`)
          .then((response) => {
            console.log('THIS IS SETTINGS AXIOS RESPONSE from friends:', response)
            dispatch({type: "FETCH_FRIENDS_FULFILLED", payload: {friends: response.data, view: 'view'}})
          })
          axios.get(`http://localhost:3000/api/userfriendsforums/${relationship.user_id1}`)
          .then((response) => {
            console.log('response from axios',response.data);
    
            dispatch({type: "FETCH_USER_FRIENDS_FORUMS_FULFILLED", payload: response.data})
          })
          .catch((err) => {
            dispatch({type: "FETCH_FRIENDS_REJECTED", payload: err})
          })
      })  
  }
}