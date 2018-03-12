import axios from "axios";

export function fetchUserForums() {
  return function(dispatch) {
    dispatch({type: "FETCH_USER_FORUMS"});

    axios.get("http://localhost:3000/api/userforums/")
      .then((response) => {
        console.log('response from axios',response.data);

        dispatch({type: "FETCH_USER_FORUMS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_FORUMS_REJECTED", payload: err})
      })
  }
}

export function fetchUserFriendsForums() {
  return function(dispatch) {
    dispatch({type: "FETCH_USER_FRIENDS_FORUMS"});

    axios.get("http://localhost:3000/api/userfriendsforums/")
      .then((response) => {
        console.log('response from axios',response.data);

        dispatch({type: "FETCH_USER_FRIENDS_FORUMS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_FRIENDS_FORUMS_REJECTED", payload: err})
      })
  }
}

export function fetchSettings(view) {
  return function(dispatch) {
    dispatch({type: "FETCH_SETTINGS"});

    axios.get("http://localhost:3000/api/settings/")
      .then((response) => {
        console.log('THIS IS SETTINGS AXIOS RESPONSE:', response)
        dispatch({type: "FETCH_SETTINGS_FULFILLED", payload: {settings: response.data, view: view}})
      })
      .catch((err) => {
        dispatch({type: "FETCH_SETTINGS_REJECTED", payload: err})
      })
  }
}
