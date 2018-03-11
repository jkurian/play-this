export default function reducer(
  state = {
    songComments: [
      {
        id: null,
        comment: "",
        time_stamp: null,
        user_id: null,
        song_id: null
      }
    ],
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
  }
  return state;
}
