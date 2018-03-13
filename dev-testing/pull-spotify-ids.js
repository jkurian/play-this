const SpotifyWebApi = require("spotify-web-api-node");
const args = process.argv.slice(2).join(" ");

console.log(args);

const spotifyApi = new SpotifyWebApi({
  accessToken:
    "BQDFhS1TNg7j2kb50z6BXmBFOe_9CJIv_xqPTg6AgjuxTBi26V0iy0ociT9bNhATmFFSeJ2BlKbxu-gcnGc"
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
