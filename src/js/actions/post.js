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

export function fetchSongInfo() {
  return function(dispatch) {
    dispatch({ type: "FETCH_SONG_INFO" });

    axios
      .get("http://localhost:3000/api/songinfo")
      .then(response => {
        console.log("Song Info from axios", response.data);

        dispatch({
          type: "FETCH_SONG_INFO_FULFILLED",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_SONG_INFO_REJECTED", payload: err });
      });
  };
}

export function postSpotifyTrackData(incomingSpotifyTrack) {
  return function(dispatch) {
    let songInformation = {
      artist: incomingSpotifyTrack.artists[0].name,
      title: incomingSpotifyTrack.name,
      album: incomingSpotifyTrack.album.name,
      spotify_id: incomingSpotifyTrack.id
    };
    axios
      .post("http://localhost:3000/api/songinfo/post", songInformation)
      .then(response => {
        console.log("Spotify song sent to axios", response.data);
        dispatch({
          type: "POST_SPOTIFY_SONG_SUCCESSFUL",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "POST_SPOTIFY_SONG_REJECTED", payload: err });
      });
  };
}
