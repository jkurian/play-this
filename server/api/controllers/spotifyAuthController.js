const jwt = require("jsonwebtoken");
require("dotenv").config({ path: __dirname + "../.env" });

exports.spotifyCallback = function(req, res) {
  console.log("in spotify callback", req.query);
  const payload = {
    access_token: req.query.access_token,
    refresh_token: req.query.refresh_token
  };
  jwt.sign(
    payload,
    process.env.SECRET_KEY,
    { expiresIn: "24hr" },
    (err, token) => {
      if (err) {
        console.log(err);
      }
      authenticated = {
        token: token,
        authenticated: payload
      };
      res.status(201).send(authenticated);
    }
  );
};
