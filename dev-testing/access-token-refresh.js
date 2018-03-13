require("dotenv").config({ path: __dirname + "../.env" });
const SpotifyWebApi = require("spotify-web-api-node");

// Spotify API client details
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.spotify_clientID,
  clientSecret: process.env.spotify_clientSecret
});

console.log(spotifyApi);

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log("The access token expires in " + data.body["expires_in"]);
    console.log("The access token is " + data.body["access_token"]);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body["access_token"]);
  },
  function(err) {
    console.log(
      "Something went wrong when retrieving an access token",
      err.message
    );
  }
);
