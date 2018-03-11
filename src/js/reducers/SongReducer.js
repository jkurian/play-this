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
    error: null
  },
  action
) {
  switch (action.type) {
    case "FETCH_SONG_COMMENTS": {
      ...state,
      songComments: action.payload
    }
  }
  return state;
}
