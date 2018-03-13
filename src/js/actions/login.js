import axios from 'axios'

export function updateEmailField(formText) {
    return {
      type: 'UPDATE_EMAIL_FIELD',
      payload: {
        loginEmailField: formText
      },
    }
  }
export function updatePasswordField(formText) {
    return {
      type: 'UPDATE_PASSWORD_FIELD',
      payload: {
        loginPasswordField: formText
      },
    }
  }

export function authenticate(loginEmailField, loginPasswordField) {
  console.log('AUTHENTICATE FUNCTION', loginEmailField, loginPasswordField)
    return function(dispatch) {
        dispatch({type: "AUTHENTICATE_USER"});
        var authenticateCredientials = {
            loginEmailField: loginEmailField,
            loginPasswordField: loginPasswordField
        }
        axios.post("http://localhost:3000/api/login/", authenticateCredientials)
          .then((response) => {
            console.log('response from axios in apilogin',response.data);
            //  SET COOKIE
            // dispatch({type: "FETCH_USER_FORUMS_FULFILLED", payload: response.data})
            localStorage.setItem('key', response.data.token);
            dispatch({type: "AUTHENTICATE_USER_FULFILLED", payload: response.data.authenticated})
          })
          .catch((err) => {
              dispatch({type: "AUTHENTICATE_USER_REJECTED", payload: response.data.authenticated})
          })
      }
}


// export function fetchTweets() {
//   return function(dispatch) {
//     dispatch({type: "FETCH_TWEETS"});
    
//     /* 
//       http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
//       If you get console errors due to bad data:
//       - change "reacttest" below to any other username
//       - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
//     */
//     axios.get("http://rest.learncode.academy/api/reacttest/tweets")
//       .then((response) => {
//         dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
//       })
//   }
// }