import { login } from "../../../server/api/controllers/loginController";

export default function reducer(
  state = {
    songComments: {},
    songInfo: [],
    searchedTracks: [],
    postSpotifySong: {},
    songLikes: {},
    alreadyLiked: false,
    fetching: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "FETCH_SONG_COMMENTS": {
      return {
        ...state,
        fetching: true
      };
    }
    case "FETCH_SONG_COMMENTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        songComments: {
          ...state.songComments,
          [action.payload.songId]: action.payload.comments
        }
      };
    }
    case "[SONG]POST_COMMENT_FULFILLED": {
      console.log("THE PAYLOAD IS:", action.payload);
      return {
        ...state,
        testUpdate: action.payload.comments,
        songComments: {
          ...state.songComments,
          [action.payload.songid]: [
            action.payload,
            ...state.songComments[action.payload.songid]
          ]
        }
      };
    }
    case "FETCH_SONG_INFO": {
      return {
        ...state,
        fetching: true
      };
    }
    case "FETCH_SONG_INFO_FULFILLED": {
      return {
        ...state,
        fetching: false,
        songInfo: action.payload
      };
    }
    case "SEARCH_FOR_SPOTIFY_SONGS_FULFILLED": {
      return {
        ...state,
        searchedTracks: action.payload.searchedTracks
      };
    }
    case "POST_SPOTIFY_SONG_SUCCESSFUL": {
      return {
        ...state,
        songInfo: [action.payload, ...state.songInfo]
      };
    }
    case "SONG_LIKE_CLICKED": {
      return {
        ...state,
        fetching: true
      };
    }
    case "SONG_LIKE_FULFILLED": {
      return {
        ...state,
        fetching: false,
        alreadyLiked: true
      };
    }
    case "FETCHING_SONG_LIKES": {
      return {
        ...state,
        fetching: true
      };
    }
    case "FETCHED_SONG_LIKES": {
      return {
        ...state,
        fetching: false,
        songLikes: {
          ...state.songLikes,
          [action.payload.songId]: [action.payload.likes]
        }
      };
    }
    case "SONG_LIKE_REMOVE_CLICKED": {
      return {
        ...state,
        fetching: true
      };
    }
    case "SONG_LIKE_REMOVED": {
      return {
        ...state,
        fetching: false,
        alreadyLiked: false
      };
    }
  }
  return state;
}
