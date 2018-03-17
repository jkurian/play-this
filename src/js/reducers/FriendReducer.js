export default function reducer(
    state = {
      //these keys are used as names for props in component
      friendForums: [],
      fetchingFriendForums: false,
      error: null,
    }, action) {
      switch (action.type) {
          case "FETCH_FRIEND_FORUMS_FULFILLED": {
            console.log('REDUCER STATE--', state.friendForums)  
            console.log('PAYLOAD IN REDUCER-->', action.payload)
            return {
                  ...state, 
                  friendForums: [...state.friendForums, action.payload],
                  fetchingForums: false,
                  fetchedForums: true
              }
          }
          
    }
    return state;
  }
  