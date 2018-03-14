export default function reducer(
  state = {
    songComments: [{}],
    songInfo: [{}],
    searchedTracks: [{}],
    postSpotifySong: {},
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
        songComments: action.payload
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
        postSpotifySong: action.payload.searchedTracks
      }
    }
  }
  return state;
}
