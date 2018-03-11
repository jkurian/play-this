import axios from "axios";

export function fetchSongComments() {
  return function(dispatch) {
    dispatch({ type: "FETCH_SONG_COMMENTS" });

    axios
      .get("http://localhost:3000/api/songcomments/")
      .then(response => {
        console.log("song comments from axios", response.data);

        dispatch({
          type: "FETCH_SONG_COMMENTS_FULFILLED",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_SONG_COMMENTS_REJECTED", payload: err });
      });
  };
}
