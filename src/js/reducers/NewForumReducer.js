export default function reducer(state={
    addingForum: false,
    addedForum: false,
    error: null,
  }, action) {
    switch (action.type) {
      case "ADD_FORUM": {
        return {
          ...state, 
          addingForum: true
        }
      }
    case "ADD_FORUM_FULFILLED": {
        return {
            ...state,
            addingForum: false,
            addedForum: true
        }
    }
    }
    return state
}