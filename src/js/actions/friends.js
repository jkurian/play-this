import axios from "axios";

export function fetchFriendForums(friendID) {

  return function(dispatch) {

    axios.get(`http://localhost:3000/api/userforums/${friendID}`)
      .then((response) => {
        console.log('response from axios',response.data);

        dispatch({type: "FETCH_FRIEND_FORUMS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_FRIEND_FORUMS_REJECTED", payload: err})
      })
  }
}
