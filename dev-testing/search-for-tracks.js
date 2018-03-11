const SpotifyWebApi = require("spotify-web-api-node");
const args = process.argv.slice(2).join(" ");

console.log(args);

const spotifyApi = new SpotifyWebApi({
  accessToken:
    "BQDYL1XZgmX0JWdI2Xfg4NHmgI0W5vWKKprRRB0W3Pd8dKVco62AlPvZLjuybUqwk8TkNvwtsuxTk1QW_tU"
});

// Do search using the access token
spotifyApi.searchTracks(args).then(
  data => {
    console.log(data.body.tracks.items);
  },
  err => {
    console.log("Something went wrong!", err);
  }
);
