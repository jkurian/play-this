export default function reducer(state={
    userForums: [{
        name: null,
        url: null 
    }],
    fetchingForums: false,
    fetchedForums: false,    
    error: null,
  }, action) {
    switch (action.type) {
      case "FETCH_USER_FORUMS_FULFILLED": {
          console.log("SHOW USER FORMS");
            return {
                ...state, 
                userForums: action.payload.userForums
            }
        }
    }
    return state
}