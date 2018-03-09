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
    let incoming = data.body.tracks.items;
    let outgoing = [];

    incoming.forEach(element => {
      outgoing.push(element.id);
    });
    console.log(outgoing);
  },
  err => {
    console.log("Something went wrong!", err);
  }
);
