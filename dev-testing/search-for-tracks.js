const SpotifyWebApi = require("spotify-web-api-node");
const args = process.argv.slice(2).join(" ");

console.log(args);

const spotifyApi = new SpotifyWebApi({
  accessToken:
    "BQCvHaMkdDRHdX0aP0CTfnD70Y4Qx8epOTlTo_S8Nyy1IYyOQhaaEv3OYUJZLorqtKKk2SMow9_UcmTCW30"
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
