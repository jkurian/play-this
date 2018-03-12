import axios from 'axios'

export function updateRegisterEmailField(formText) {
    return {
      type: 'UPDATE_REGISTER_EMAIL_FIELD',
      payload: {
        registerEmailField: formText
      },
    }
  }
export function updateRegisterFirstNameField(formText) {
    return {
      type: 'UPDATE_REGISTER_FIRST_NAME_FIELD',
      payload: {
        registerFirstNameField: formText
      },
    }
  }
export function updateRegisterLastNameField(formText) {
    return {
      type: 'UPDATE_REGISTER_LAST_NAME_FIELD',
      payload: {
        registerLastNameField: formText
      },
    }
  }
export function updateRegisterPasswordField(formText) {
    return {
      type: 'UPDATE_REGISTER_PASSWORD_FIELD',
      payload: {
        registerPasswordField: formText
      },
    }
  }
export function updateRegisterPasswordConfirmationField(formText) {
    return {
      type: 'UPDATE_REGISTER_PASSWORD_CONFIRMATION_FIELD',
      payload: {
        registerPasswordConfirmationField: formText
      },
    }
  }
export function authenticateValidEmail(registerEmailField) {
    return function(dispatch) {
        dispatch({type: "AUTHENTICATE_VALID_REGISTER_EMAIL"});
        var authenticateCredientials = {
            registerEmailField: registerEmailField,
        }
        console.log("BEFORE AXIOS GET", authenticateCredientials)
        axios.post("http://localhost:3000/api/register/email", authenticateCredientials)
          .then((response) => {
            console.log('response from axios',response.data);
            //  SET COOKIE
            // dispatch({type: "FETCH_USER_FORUMS_FULFILLED", payload: response.data})
            dispatch({type: "AUTHENTICATE_VALID_REGISTER_EMAIL_FULFILLED", payload: response.data})
          })
          .catch((err) => {
              dispatch({type: "AUTHENTICATE_VALID_REGISTER_EMAIL_REJECTED", payload: err})
          })
      }
  }