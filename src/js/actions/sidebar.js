import axios from "axios";

export function fetchUserForums() {
  return function(dispatch) {
    dispatch({type: "FETCH_USER_FORUMS"});
    
    /* 
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    axios.get("http://localhost:3000/api/userforums/")
      .then((response) => {
        console.log('response from axios',response.data);

        dispatch({type: "FETCH_USER_FORUMS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_FORUMS_REJECTED", payload: err})
      })
  }
}

export function displayUserForums() {
    console.log("DISPLAY USER FORMS ACTION");
    return {
      type: 'SHOW_USER_FORUMS_FULFILLED',
      payload: [{
          name: 'Name Example',
          url: 'http://google.ca'
      }],
    }
  }