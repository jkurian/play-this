export default function reducer(state={
    //these keys are used as names for props in component
    userForums: [{
        name: null,
        url: null 
    }],
    userFriendsForums: [{
        name: null,
        url: null
    }],
    fetchingForums: false,
    fetchedForums: false,    
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
    }
    return state
}