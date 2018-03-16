export default function reducer(state={
    loginEmailField: '',
    loginPasswordField: '',
    sessionCookie: null,
    authenticating: false,
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
      case "AUTHENTICATE_USER_PENDING": {
        return {
          ...state, 
          authenticating: action.payload.authenticating,
        }
      }
      case "AUTHENTICATE_USER_FULFILLED": {
        return {
          ...state, 
          sessionCookie: action.payload,
          
          authenticating: false
        }
      }
      case "AUTHENTICATE_USER_REJECTED": {
        return {
          ...state, 
          sessionCookie: "rejected",
          authenticating: false
        }
      }
      case "USER_LOGOUT": {
        return {
          ...state, 
          sessionCookie: null,
        }
      }
    }
    return state
}