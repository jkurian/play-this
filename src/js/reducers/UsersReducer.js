export default function reducer(
  state = {
    allUsers: null,
    addingFriend: false,
    error: null
  }, action
)
 {
  switch(action.type) {
    case "[USER]GET_ALL_FULFILLED": {
      return {
        ...state,
        allUsers: action.payload
      }
    }
    case "[USER]ADD_FRIEND_PENDING": {
      return {
        ...state,
        addingFriend: action.payload.addingFriend
      }
    }
    case "[USER]ADD_FRIEND_FULFILLED": {
      return {
        ...state,
        addingFriend: action.payload.addingFriend
      }
    }
  }
  return state;
}
