import axios from 'axios'
export function getRequest(forum_id) {
  return function(dispatch) {
    axios.get(`http://localhost:3000/api/forum/${forum_id}`)
      .then((response) => {
        // console.log('response from axios',response.data);
        //  SET COOKIE
        // dispatch({type: "FETCH_USER_FORUMS_FULFILLED", payload: response.data})
        // dispatch({type: "AUTHENTICATE_VALID_REGISTER_EMAIL_FULFILLED", payload: response.data})
        console.log('AFTER GET REQUEST AXIOS', response)
        dispatch({type: "[FORUM]VIEW_FORUM_FULFILLED", payload: response.data[0]})
      })
      .catch((err) => {
          dispatch({type: "AUTHENTICATE_VALID_REGISTER_EMAIL_REJECTED", payload: err})
      })
  }
}