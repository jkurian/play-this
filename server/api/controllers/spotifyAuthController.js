let SpotifyWebApi = require("spotify-web-api-node");

exports.spotifyCallback = function(req, res) {
  console.log("in callback");
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "https://requestb.in/1cph36p1",
    clientId: process.env.spotify_clientID
  });

  console.log("in /callback");
  /* Read query parameters */
  var code = req.query.code; // Read the authorization code from the query parameters
  var state = req.query.state; // (Optional) Read the state from the query parameter
  /* Get the access token! */
  console.log(code);
  console.log(state);
  spotifyApi
    .authorizationCodeGrant(code)
    .then(function(data) {
      console.log("The token expires in " + data["expires_in"]);
      console.log("The access token is " + data["access_token"]);
      console.log("The refresh token is " + data["refresh_token"]);

      res.redirect("http://localhost:8080");
    })
    .catch(function(error) {
      res.status(501).send({ error, code: code, state: state });
    });
};
