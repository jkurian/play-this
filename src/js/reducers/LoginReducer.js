export default function reducer(state={
    loginEmailField: '',
    loginPasswordField: '',
    sessionCookie: null,
    authenticating: false,
    first_name:'',
    last_name: '',
    avatar_url:'',
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
          ...action.payload,
          sessionCookie: action.payload.authenticated,
          authenticating: false
        }
      }
      case "AUTHENTICATE_USER_REJECTED": {
        return {
          ...state, 
          sessionCookie: false,
          ...action.payload
        }
      }
      case "USER_LOGOUT": {
        return {
          ...action.payload,
        }
      }
    }
    return state
}