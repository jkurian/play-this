import axios from "axios";

export function fetchSongComments(songid) {
  return function(dispatch) {
    dispatch({ type: "FETCH_SONG_COMMENTS" });

    axios
      .get(`http://localhost:3000/api/songs/${songid}/comments`)
      .then(response => {
        console.log("song comments from axios", response.data);

        dispatch({
          type: "FETCH_SONG_COMMENTS_FULFILLED",
          payload: { songId: songid, comments: response.data }
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_SONG_COMMENTS_REJECTED", payload: err });
      });
  };
}

export function fetchSongInfo(forumID) {
  return function(dispatch) {
    dispatch({ type: "FETCH_SONG_INFO", payload: forumID });

    axios
      .get(`http://localhost:3000/api/songinfo/${forumID}`)
      .then(response => {
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

export function postSpotifyTrackData(incomingSpotifyTrack, userId, forumId) {
  return function(dispatch) {
    let songInformation = {
      artist: incomingSpotifyTrack.artists[0].name,
      title: incomingSpotifyTrack.name,
      album: incomingSpotifyTrack.album.name,
      spotify_id: incomingSpotifyTrack.id,
      user_id: userId,
      request_id: forumId
    };

    //Sends the new song and updates the state with an ID
    axios
      .post("http://localhost:3000/api/songinfo/post", songInformation)
      .then(response => {
        songInformation.id = response.data[0];
        dispatch({
          type: "POST_SPOTIFY_SONG_SUCCESSFUL",
          payload: { ...songInformation, userId, forumId }
        });
      })
      .catch(err => {
        dispatch({ type: "POST_SPOTIFY_SONG_REJECTED", payload: err });
      });
  };
}

export function postSongComment(
  userid,
  songid,
  comment,
  avatar_url,
  first_name,
  last_name
) {
  return function(dispatch) {
    dispatch({ type: "[SONG]POST_COMMENTS_PENDING" });
    let songCommentInfo = {
      songid: songid,
      userid: userid,
      comment: comment,
      avatar_image: avatar_url,
      first_name: first_name,
      last_name: last_name
    };
    console.log("BEFORE GONG TO REDUCER", songCommentInfo);
    dispatch({
      type: "[SONG]POST_COMMENTS_FULFILLED",
      payload: songCommentInfo
    });
    axios
      .post(
        `http://localhost:3000/api/songs/${songid}/comments`,
        songCommentInfo
      )
      .then(response => {})
      .catch(err => {
        dispatch({ type: "[SONG]POST_COMMENTS_FULFILLED", payload: err });
      });
  };
}
