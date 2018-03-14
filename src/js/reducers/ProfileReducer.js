export default function reducer(
  state = {
    disabledFieldState: {
      first_name: true,
      last_name: true,
      email: true,
      avatar_url: true,
      password: true
    },
    error: null
  }, action
)
 {
  switch(action.type) {
    case "[PROFILE]UPDATE_DISABLED_FIELD_STATE": {
      return {
        ...state,
        disabledFieldState: {
          ...state.disabledFieldState,
          ...action.payload.disabledFieldState
        }
      }
    }
  }
  return state;
}
