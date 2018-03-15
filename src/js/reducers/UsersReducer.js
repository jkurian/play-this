export default function reducer(
  state = {
    allUsers: null,
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
  }
  return state;
}
