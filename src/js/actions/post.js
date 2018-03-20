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
      id: "",
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
    let songCommentInfo = {
      songid: songid,
      userid: userid,
      comment: comment,
      avatar_image: avatar_url,
      first_name: first_name,
      last_name: last_name
    };
    dispatch({ type: "[SONG]POST_COMMENTS_PENDING", payload: songCommentInfo });
    console.log("BEFORE GONG TO REDUCER", songCommentInfo);
    axios
      .post(
        `http://localhost:3000/api/songs/${songid}/comments`,
        songCommentInfo
      )
      .then(response => {
        console.log("WRITTEN TO DB", songCommentInfo);
        dispatch({
          type: "[SONG]POST_COMMENT_FULFILLED",
          payload: songCommentInfo
        });
      })
      .catch(err => {
        dispatch({ type: "[SONG]POST_COMMENTS_FULFILLED", payload: err });
      });
  };
}

export function getLikes(songId) {
  return function(dispatch) {
    dispatch({ type: "FETCHING_SONG_LIKES" });
    axios
      .get(`http://localhost:3000/api/songs/${songId}/like`)
      .then(response => {
        let songLikes = {
          songId: songId,
          likes: response.data[0]
        };
        dispatch({
          type: "FETCHED_SONG_LIKES",
          payload: songLikes
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_SONG_LIKES_REJECTED", payload: err });
      });
  };
}

export function postLike(userId, songId) {
  return function(dispatch) {
    let userLike = {
      userId: userId,
      songId: songId
    };
    dispatch({ type: "SONG_LIKE_CLICKED" });

    axios
      .post(`http://localhost:3000/api/songs/${songId}/like`, userLike)
      .then(responseOne => {
        dispatch({ type: "SONG_LIKE_FULFILLED" });
        axios
          .get(`http://localhost:3000/api/songs/${songId}/like`)
          .then(responseTwo => {
            let songLikes = {
              songId: songId,
              likes: responseTwo.data[0]
            };
            dispatch({
              type: "FETCHED_SONG_LIKES",
              payload: songLikes
            });
          });
      })
      .catch(err => {
        dispatch({ type: "SONG_LIKE_REJECTED", payload: err });
      });
  };
}

export function removeLike(userId, songId) {
  return function(dispatch) {
    let userLike = {
      userId: userId,
      songId: songId
    };
    dispatch({ type: "SONG_LIKE_REMOVE_CLICKED" });
    axios
      .post(`http://localhost:3000/api/songs/${songId}/like/delete`, userLike)
      .then(responseOne => {
        dispatch({ type: "SONG_LIKE_REMOVED" });

        axios
          .get(`http://localhost:3000/api/songs/${songId}/like`)
          .then(responseTwo => {
            console.log("=====> ", responseTwo);
            let songLikes = {
              songId: songId,
              likes: responseTwo.data[0]
            };
            dispatch({
              type: "FETCHED_SONG_LIKES",
              payload: songLikes
            });
          });
      })
      .catch(err => {
        dispatch({ type: "SONG_LIKE_NOT_REMOVED", payload: err });
      });
  };
}
