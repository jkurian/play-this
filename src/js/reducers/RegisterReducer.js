//CHECK THIS STORE, HAS IRRELEVANT STATE
export default function reducer(state={
    registerFirstNameField: '',
    registerLastNameField: '',
    registerEmailField: '',
    registerPasswordField: '',
    registerPasswordConfirmationField: '',
    authenticateValidEmail: '',
    sessionCookie: false,
    registering: false,
    authenticatingEmailEmail: false,
    passwordValidity: false, 
    emailValidity: false,
    errorMessage: '',
    passwordError: '',
    error: null,
  }, action) {
    switch (action.type) {
      case "UPDATE_REGISTER_FIRST_NAME_FIELD": {
        return {
          ...state, 
          registerFirstNameField: action.payload.registerFirstNameField,
        }
      }
      case "UPDATE_REGISTER_LAST_NAME_FIELD": {
        return {
          ...state, 
          registerLastNameField: action.payload.registerLastNameField,
        }
      }
      case "UPDATE_REGISTER_EMAIL_FIELD": {
        return {
          ...state, 
          registerEmailField: action.payload.registerEmailField,
         emailValidity: false
        }
      }
      case "UPDATE_REGISTER_PASSWORD_FIELD": {
        return {
          ...state, 
          registerPasswordField: action.payload.registerPasswordField,
          passwordValidity: false
        }
      }
      case "UPDATE_REGISTER_PASSWORD_CONFIRMATION_FIELD": {
        return {
          ...state, 
          registerPasswordConfirmationField: action.payload.registerPasswordConfirmationField,
          passwordValidity: false
        }
      }
      case "AUTHENTICATE_VALID_REGISTER_EMAIL": {
        return {
          ...state, 
          authenticatingEmail: true,
        }
      }
      case "[REGISTER]NEW_USER_PENDING": {
        return {
          ...state, 
          registering: action.payload.registering,
        }
      }
      case "[REGISTER]NEW_USER_FULFILLED": {
        return {
          ...state, 
          registering: action.payload.registering,
        }
      }
      case "AUTHENTICATE_VALID_REGISTER_EMAIL_FULFILLED": {
          //NEEDS TO BE REFACTORED
        let errorMessage = ''
        if(!action.payload) errorMessage = 'Sorry, email is invalid!'
        return {
          ...state, 
          emailValidity: action.payload,
          errorMessage: errorMessage,
          authenticatingEmail: false
        }
      }
      case "AUTHENTICATE_VALID_REGISTER_EMAIL_REJECTED": {
        return {
          ...state, 
          emailValidity: false,
          authenticatingEmail: false
        }
      }
      case "AUTHENTICATE_PASSWORD_FIELDS": {
        let passwordError = ''
        if(!action.payload) passwordError = 'Passwords must match!'
        return {
          ...state, 
          passwordValidity: action.payload,
          passwordError: passwordError,
        }
      }
    }
    return state
}