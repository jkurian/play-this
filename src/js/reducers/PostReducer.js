export default function reducer(
  state = {
    songComments: [{}],
    songInfo: [{}],
    searchedTracks: [{}],
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
      console.log(action.payload[0].comment);
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
      console.log(action.payload);
      return {
        ...state,
        fetching: false,
        songInfo: action.payload
      };
    }
    case "SEARCH_FOR_SPOTIFY_SONGS_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        searchedTracks: action.payload.searchedTracks
      };
    }
  }
  return state;
}
