import axios from "axios";

export function addForum(title, description, id) {
    return function(dispatch) {
      dispatch({type: "ADD_FORUM"});
      
      let newForumDetails = {
          title: title,
          explanation: description,
          user_admin_id: id
      }
      axios.post("http://localhost:3000/api/forum/", newForumDetails)
        .then((response) => {
          console.log('response from axios for FORUM POST', response.data);
  
          dispatch({type: "ADD_FORUM_FULFILLED", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "ADD_FORUM_REJECTED", payload: err})
        })
    }
  }