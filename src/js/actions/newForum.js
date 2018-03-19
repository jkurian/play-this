import axios from "axios";

export function addForum(title, description, id) {
  return function(dispatch) {
    dispatch({ type: "ADD_FORUM" });

    let newForumDetails = {
      title: title,
      explanation: description,
      user_admin_id: id
    };
    axios
      .post("http://localhost:3000/api/forum/", newForumDetails)
      .then(responseOne => {
        dispatch({ type: "ADD_FORUM_FULFILLED", payload: responseOne.data });
        axios
          .get(`http://localhost:3000/api/userforums/${id}`)
          .then(responseTwo => {
            console.log("response from axios after getting userforums", responseTwo.data);
            dispatch({
              type: "FETCH_USER_FORUMS_FULFILLED",
              payload: responseTwo.data
            });
            axios.get(`http://localhost:3000/api/forum/${responseOne.data}`)
            .then((response) => {
              console.log("AXIOS GET COMPLETE")
              // console.log('response from axios',response.data);
              //  SET COOKIE
              // dispatch({type: "FETCH_USER_FORUMS_FULFILLED", payload: response.data})
              // dispatch({type: "AUTHENTICATE_VALID_REGISTER_EMAIL_FULFILLED", payload: response.data})
              console.log('AFTER GET REQUEST AXIOS', response)
              dispatch({type: "[FORUM]VIEW_FORUM_FULFILLED", payload: response.data[0]})
            })
          })
      })
      .catch(err => {
        dispatch({ type: "ADD_FORUM_REJECTED", payload: err });
      });
  };
}
