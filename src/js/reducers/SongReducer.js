export default function reducer(
  state = {
    songComments: [{}],
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
  }
  return state;
}
