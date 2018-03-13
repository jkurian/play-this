exports.songComments = function(req, res, dataHelpers) {
  let err = false;
  dataHelpers.getSongComments().then(result => {
    res.json(result);
  });

  // res.json(templateVars);
  if (err) res.status(501).send("failed");
};

exports.songInfo = function(req, res, dataHelpers) {
  let err = false;
  console.log("In song comments controller");
  dataHelpers.getSongInfo().then(result => {
    res.json(result);
  });

  // res.json(templateVars);
  if (err) res.status(501).send("failed");
};
