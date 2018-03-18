import axios from 'axios'
export function getRequest(forum_id) {
  return function(dispatch) {
    dispatch({type: '[FORUM]VIEW_FORUM_PENDING'})
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
          dispatch({type: "[FORUM]VIEW_FORUM_REJECTED", payload: err})
      })
  }
}
export function deleteForum(forum_id) {
  return function(dispatch) {
    dispatch({type: '[FORUM]DELETE_FORUM_PENDING', payload: {forum_id: forum_id}})
    axios.delete(`http://localhost:3000/api/forum/${forum_id}`, {params: {forum_id: forum_id}})
      .then((response) => {
        dispatch({type: "[FORUM]DELETE_FORUM_FULFILLED", payload: response.data})
      })
      .catch((err) => {
          dispatch({type: "[FORUM]DELETE_FORUM_REJECTED", payload: err})
      })
    }
}