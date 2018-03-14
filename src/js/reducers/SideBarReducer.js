export default function reducer(
  state = {
    //these keys are used as names for props in component
    open: true,
    userForums: [{}],
    userFriendsForums: [{}],
    fetchingForums: false,
    fetchedForums: false,
    settings: {},
    fetchingSettings: false,
    fetchedSettings: false,
    friends: [{}],
    fetchingFriends: false,
    fetchedFriends: false,
    fetchingNewForum: false,
    fetchedNewForum: false,
    view: null,
    error: null,
  }, action) {
    switch (action.type) {
        case "SIDEBAR_TOGGLE_OPEN": {
            console.log(reducer)
            return {
                ...state,
                open: true
            }
        }
        case "SIDEBAR_TOGGLE_CLOSE": {
            console.log(reducer)
            return {
                ...state,
                open: false
            }
        }
        case "FETCH_USER_FORUMS": {
            return {
                ...state,
                fetchingForums: true
            }
        }
        case "FETCH_USER_FORUMS_FULFILLED": {
            return {
                ...state, 
                userForums: action.payload,
                fetchingForums: false,
                fetchedForums: true
            }
        }
        case "FETCH_USER_FRIENDS_FORUMS": {
            return {
                ...state,
                fetchingForums: true
            }
        }
        case "FETCH_USER_FRIENDS_FORUMS_FULFILLED": {
            return {
                ...state, 
                userFriendsForums: action.payload,
                fetchingForums: false,
                fetchedForums: true
            }
        }
        case "FETCH_SETTINGS": {
            return {
                ...state,
                fetchingSettings: true
            }
        }
        case "FETCH_SETTINGS_FULFILLED": {
            return {
                ...state, 
                settings: action.payload.settings,
                view: action.payload.view,
                open: false,
                fetchingSettings: false,
                fetchedSettings: true
            }
        }
        case "FETCH_FRIENDS": {
            return {
                ...state,
                fetchingFriends: true
            }
        }
        case "FETCH_FRIENDS_FULFILLED": {
            return {
                ...state,
                friends: action.payload.friends,
                view: action.payload.view,
                open: false,
                fetchingFriends: false,
                fetchedFriends: true
            }
        }
        case "FETCH_NEW_FORUM_FULFILLED": {
            return {
                ...state,
                view: action.payload.view,
                open:false,
                fetchingNewForum: false,
                fetchedNewForum: true
            }
        }
  }
  return state;
}
