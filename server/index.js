require("dotenv").config({ path: __dirname + "../.env" });
let cors = require("cors");
let bodyParser = require("body-parser");
let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);
const knexLogger = require("knex-logger");
const dataHelpers = require("./data-helpers")(knex);

// Modules needed for Spotify API
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const querystring = require("querystring");

//Spotify API
const Spotify = require("spotify-web-api-node");
const CLIENT_ID = process.env.spotify_clientID;
const CLIENT_SECRET = process.env.spotify_clientSecret;
const REDIRECT_URI =
  process.env.redirect_uri || "http://localhost:3000/callback";
const STATE_KEY = "spotify_auth_state";
const scopes = ["user-read-private", "user-read-email"];

const spotifyApi = new Spotify({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
});

// Generates a random string containing numbers and letters of N characters for
// spotify auth
const generateRandomString = N =>
  (Math.random().toString(36) + Array(N).join("0")).slice(2, N + 2);

app.use(knexLogger(knex));

app.use(cors());
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev")).use(cookieParser());

var routes = require("./api/routes/playThisRoutes"); //importing route
routes(app, dataHelpers); //register the route

// Server route to spotify oAuth
app.get("/login", (_, res) => {
  const state = generateRandomString(16);
  res.cookie(STATE_KEY, state);
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
});

// Callback URL for spotify response
app.get("/callback", (req, res) => {
  const { code, state } = req.query;
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null;
  // state validation
  if (state === null || state !== storedState) {
    res.redirect("http://localhost:8080/#/error/statemismatch");
    // if the state is valid, get the authorization code and pass it on to the client
  } else {
    res.clearCookie(STATE_KEY);
    // Retrieve an access token and a refresh token
    spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        const { expires_in, access_token, refresh_token } = data.body;

        // Set the access token on the API object to use it in later calls
        spotifyApi.setAccessToken(access_token);
        spotifyApi.setRefreshToken(refresh_token);

        // use the access token to access the Spotify Web API
        spotifyApi.getMe().then(({ body }) => {});

        // we can also pass the token to the browser to make requests from there
        res.redirect(
          `http://localhost:8080/#/spotify?access_token=${access_token}&refresh_token=${refresh_token}`
        );
      })
      .catch(err => {
        res.redirect("http://localhost:8080/spotifyerror/invalidtoken");
      });
  }
});

app.listen(port);

console.log("PlayThis server started on: " + port);
