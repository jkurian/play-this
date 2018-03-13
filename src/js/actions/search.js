import axios from "axios";

export function spotifyTrackData(songData) {
  return {
    type: "SEARCH_FOR_SPOTIFY_SONGS_FULFILLED",
    payload: {
      searchedTracks: songData
    }
  };
}
