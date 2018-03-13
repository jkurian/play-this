export default function reducer(
  state={
    addingForum: false,
    addedForum: false,
    newForumID: "",
    title: "",
    explanation: "",
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
            title: action.payload[0].title,
            explanation: action.payload[0].explanation,
            addingForum: false,
            addedForum: true,
        }
    }
    }
    return state
}