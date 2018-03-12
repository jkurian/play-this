//CHECK THIS STORE, HAS IRRELEVANT STATE
export default function reducer(state={
    registerFirstNameField: '',
    registerLastNameField: '',
    registerEmailField: '',
    registerPasswordField: '',
    registerPasswordConfirmationField: '',
    authenticateValidEmail: '',
    sessionCookie: '',
    authenticatingEmailEmail: false,
    isValid: false,
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
        }
      }
      case "UPDATE_REGISTER_PASSWORD_FIELD": {
        return {
          ...state, 
          registerPasswordField: action.payload.registerPasswordField,
        }
      }
      case "UPDATE_REGISTER_PASSWORD_CONFIRMATION_FIELD": {
        return {
          ...state, 
          registerPasswordConfirmationField: action.payload.registerPasswordConfirmationField,
        }
      }
      case "AUTHENTICATE_VALID_REGISTER_EMAIL": {
        return {
          ...state, 
          authenticatingEmail: true,
        }
      }
      case "AUTHENTICATE_VALID_REGISTER_EMAIL_FULFILLED": {
          //NEEDS TO BE REFACTORED
        return {
          ...state, 
          isValid: action.payload,
          authenticatingEmail: false
        }
      }
      case "AUTHENTICATE_VALID_REGISTER_EMAIL_REJECTED": {
        return {
          ...state, 
          isValid: "false",
          authenticatingEmail: false
        }
      }
    }
    return state
}