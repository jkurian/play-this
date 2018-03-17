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
export function authenticatePasswordFields(password, passwordConfirmation) {
  console.log('password fields!',password, passwordConfirmation)
    return {
        type: "AUTHENTICATE_PASSWORD_FIELDS", 
        payload: password === passwordConfirmation
      }
  }
  export function registerNewUser(userRegistrationDetails) {
    return function(dispatch) {
      dispatch({type: "[REGISTER]NEW_USER_PENDING", payload: {registering: true}});
      axios.post("http://localhost:3000/api/register/newuser", userRegistrationDetails)
        .then((response) => {
          dispatch({type: "[REGISTER]NEW_USER_FULFILLED", payload: {registering: false}});
          localStorage.setItem('key', response.data.token);
          // authenticated = {
          //   token: token,
          //   authenticated: payload.user_id,
          //   avatar_url: results[0].avatar_image,
          //   first_name: results[0].first_name,
          //   last_name: results[0].last_name
          // };
          let result = {
            authenticated: response.data.authenticated,
            first_name: userRegistrationDetails.firstname,
            last_name: userRegistrationDetails.lastname,
          }
          dispatch({type: "AUTHENTICATE_USER_FULFILLED", payload: result})
        })
        .catch((err) => {
            dispatch({type: "AUTHENTICATE_VALID_REGISTER_EMAIL_REJECTED", payload: err})
        })
    }
  }