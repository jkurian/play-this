require("dotenv").config({ path: __dirname + "../.env" });

exports.spotifyCallback = function(req, res) {
  console.log(typeof req.query.access_token);
  const spotifyPayload = {
    access_token: req.query.access_token,
    refresh_token: req.query.refresh_token
  };
  let arr = [];
  arr.push(`${req.query.access_token}`);

  console.log("in spotify callback", arr);
  res.status(201).send("hi jerry!");
};
