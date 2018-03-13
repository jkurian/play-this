import axios from "axios";

export function fetchUserForums(currentUserID) {
  return function(dispatch) {
    dispatch({type: "FETCH_USER_FORUMS"});

    axios.get(`http://localhost:3000/api/userforums/${currentUserID}`)
      .then((response) => {
        console.log('response from axios',response.data);

        dispatch({type: "FETCH_USER_FORUMS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_FORUMS_REJECTED", payload: err})
      })
  }
}

export function fetchUserFriendsForums(currentUserID) {
  return function(dispatch) {
    dispatch({type: "FETCH_USER_FRIENDS_FORUMS"});

    axios.get(`http://localhost:3000/api/userfriendsforums/${currentUserID}`)
      .then((response) => {
        console.log('response from axios',response.data);

        dispatch({type: "FETCH_USER_FRIENDS_FORUMS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_FRIENDS_FORUMS_REJECTED", payload: err})
      })
  }
}

export function fetchSettings(view, currentUserID) {
  return function(dispatch) {
    dispatch({type: "FETCH_SETTINGS"});

    axios.get(`http://localhost:3000/api/settings/${currentUserID}`)
      .then((response) => {
        dispatch({type: "FETCH_SETTINGS_FULFILLED", payload: {settings: response.data, view: view}})
      })
      .catch((err) => {
        dispatch({type: "FETCH_SETTINGS_REJECTED", payload: err})
      })
  }
}

export function fetchFriends(view, currentUserID) {
  return function(dispatch) {
    dispatch({type: "FETCH_FRIENDS"});

    axios.get(`http://localhost:3000/api/friends/${currentUserID}`)
      .then((response) => {
        console.log('THIS IS SETTINGS AXIOS RESPONSE from friends:', response)
        dispatch({type: "FETCH_FRIENDS_FULFILLED", payload: {friends: response.data, view: view}})
      })
      .catch((err) => {
        dispatch({type: "FETCH_FRIENDS_REJECTED", payload: err})
      })
  }
}

export function fetchNewForum(view) {
  return function(dispatch) {
    dispatch({type: "FETCH_NEW_FORUM_FULFILLED", payload: {view: view}})
  }
}

export function sidebarToggleOpen() {
  return function(dispatch) {
    dispatch({type: "SIDEBAR_TOGGLE_OPEN"});
  }
}

export function sidebarToggleClose() {
  return function(dispatch) {
    dispatch({type: "SIDEBAR_TOGGLE_CLOSE"});
  }
}
