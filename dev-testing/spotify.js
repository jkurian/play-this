require("dotenv").config();
const SpotifyWebApi = require("spotify-web-api-node");
const args = process.argv.slice(2).join(" ");

const spotifyApi = {
  clientId: process.env.spotify_clientID,
  clientSecret: process.env.spotify_clientSecret,
  redirectUri: "http://www.example.com/callback"
};

console.log(spotifyApi);
