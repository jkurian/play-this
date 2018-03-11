import axios from "axios";

export function fetchSongComments() {
  return function(dispatch) {
    dispatch({ type: "FETCH_SONG_COMMENTS" });

    axios
      .get("http://localhost:3000/api/songcomments/")
      .then(response => {
        console.log("response from axios", response.data);

        dispatch({
          type: "FETCH_USER_FORUMS_FULFILLED",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_USER_FORUMS_REJECTED", payload: err });
      });
  };
}
