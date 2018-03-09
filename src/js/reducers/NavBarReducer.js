export default function reducer(state={
    showLoginForm: false,
    showSignupForm: false,
    error: null,
  }, action) {
    switch (action.type) {
      case "SHOW_SIGNUP_FORM": {
        return {
          ...state, 
          showSignupForm: action.payload.status_signup,
          showLoginForm: action.payload.status_login,
        }
      }
      case "SHOW_LOGIN_FORM": {
        return {
          ...state, 
          showLoginForm: action.payload.status_login,
          showSignupForm: action.payload.status_signup
        }
      }
    }
    return state
}