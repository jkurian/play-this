export default function reducer(state={
    deletedFriend: "",
    error: null,
  }, action) {
    switch (action.type) {
      case "FRIEND_DELETED": {
        return {
          ...state, 
          deletedFriend: action.payload,
        }
      }
    }
    return state
  }