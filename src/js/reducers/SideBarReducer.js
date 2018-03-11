export default function reducer(state={
    //these keys are used as names for props in component
    userForums: [{}],
    userFriendsForums: [{}],
    fetchingForums: false,
    fetchedForums: false,    
    settings: {},
    fetchingSettings: false,
    fetchedSettings: false,
    view: null,
    error: null,
  }, action) {
    switch (action.type) {
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
                fetchingSettings: false,
                fetchedSettings: true
            }
        }
    }
    return state
}