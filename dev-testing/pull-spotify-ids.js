const SpotifyWebApi = require("spotify-web-api-node");
const args = process.argv.slice(2).join(" ");

console.log(args);

const spotifyApi = new SpotifyWebApi({
  accessToken:
    "BQB4l85QAk7_X_CPBELGy-CHwDCr0Yx4qDDD6_wAwa1Ne6F1V-Tpu0qseSv_w7FbMo38hiuMr3f_6Dz8jHk"
});

// Do search using the access token
spotifyApi.searchTracks(args).then(
  data => {
    let incoming = data.body.tracks.items;
    let outgoing = [];

    incoming.forEach(element => {
      outgoing.push(element);
    });
    console.log(outgoing);
  },
  err => {
    console.log("Something went wrong!", err);
  }
);
