//[FORUM]GET_REQUEST

export default function reducer(state={
  viewingRequest: {},
  lastDeletedForum: -1,
  error: null,
}, action) {
  switch (action.type) {
    case "[FORUM]VIEW_FORUM_FULFILLED": {
      return {
        ...state, 
        viewingRequest: {...action.payload},
      }
    }
    case "[FORUM]DELETE_FORUM_PENDING": {
      return {
        ...state, 
      }
    }
    case "[FORUM]DELETE_FORUM_FULFILLED": {
      return {
        ...state, 
        lastDeletedForum: action.payload.forum_id
      }
    }
  }
  return state
}