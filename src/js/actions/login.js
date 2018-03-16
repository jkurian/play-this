import axios from "axios";
import ajax from "ajax";

export function updateEmailField(formText) {
  return {
    type: "UPDATE_EMAIL_FIELD",
    payload: {
      loginEmailField: formText
    }
  };
}
export function updatePasswordField(formText) {
  return {
    type: "UPDATE_PASSWORD_FIELD",
    payload: {
      loginPasswordField: formText
    }
  };
}
export function getAllUsers() {
  return function(dispatch) {
    dispatch({ type: "[USER]GET_ALL_PENDING" });
    axios
      .get("http://localhost:3000/api/users/")
      .then(response => {
        console.log("RESPONSE IS ", response);
        dispatch({ type: "[USER]GET_ALL_FULFILLED", payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: "[USER]GET_ALL_FAILED",
          payload: response.data.authenticated
        });
      });
  };
}
export function authenticate(loginEmailField, loginPasswordField) {
  console.log("AUTHENTICATE FUNCTION", loginEmailField, loginPasswordField);
  return function(dispatch) {
    dispatch({ type: "AUTHENTICATE_USER_PENDING", payload: {authenticating: true}});
    var authenticateCredientials = {
      loginEmailField: loginEmailField,
      loginPasswordField: loginPasswordField
    };
    axios
      .post("http://localhost:3000/api/login/", authenticateCredientials)
      .then(response => {
        console.log("response from axios in apilogin", response.data);
        //  SET COOKIE
        // dispatch({type: "FETCH_USER_FORUMS_FULFILLED", payload: response.data})
        localStorage.setItem("key", response.data.token);
        dispatch({
          type: "AUTHENTICATE_USER_FULFILLED",
          payload: response.data.authenticated
        });
      })
      .catch(err => {
        dispatch({
          type: "AUTHENTICATE_USER_REJECTED",
          payload: response.data.authenticated
        });
      });
  };
}

export function authenticateSpotify() {
  console.log("AUTHENTICATE FUNCTION");
  return function(dispatch) {
    axios
      .get("http://localhost:3000/api/spotify/login")
      .then(response => {
        console.log("response from axios in api login", response);
        console.log(response);
        //  SET COOKIE
        // dispatch({type: "FETCH_USER_FORUMS_FULFILLED", payload: response.data})
        //localStorage.setItem("spotify_token", { token: response.data });
      })
      .catch(err => {
        dispatch({
          type: "AUTHENTICATE_USER_REJECTED",
          payload: response.data.authenticated
        });
      });
  };
}
//   $.ajax({
//     type: "get",
//     url: "http://localhost:3000/api/spotify/login",
//     async: true,
//     data: { access_token: access_token, refresh_token: refresh_token }
//   }).done(function(data) {
//     localStorage.setItem(data);
//   });
// }

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
