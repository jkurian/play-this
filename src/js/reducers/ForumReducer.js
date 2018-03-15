//[FORUM]GET_REQUEST

export default function reducer(state={
  viewingRequest: {},
  error: null,
}, action) {
  switch (action.type) {
    case "[FORUM]VIEW_FORUM_FULFILLED": {
      return {
        ...state, 
        viewingRequest: action.payload,
      }
    }
  }
  return state
}