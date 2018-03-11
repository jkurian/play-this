export default function reducer(state={
    loginEmailField: '',
    loginPasswordField: '',
    sessionCookie: '',
    error: null,
  }, action) {
    switch (action.type) {
      case "UPDATE_EMAIL_FIELD": {
        return {
          ...state, 
          loginEmailField: action.payload.loginEmailField,
        }
      }
      case "UPDATE_PASSWORD_FIELD": {
        return {
          ...state, 
          loginPasswordField: action.payload.loginPasswordField,
        }
      }
      case "AUTHENTICATE_USER_FULFILLED": {
        return {
          ...state, 
          sessionCookie: action.payload.sessionCookie,
        }
      }
    }
    return state
}