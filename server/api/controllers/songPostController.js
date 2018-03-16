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
  dataHelpers.getSongInfo(req.params.forumid).then(result => {
    res.json(result);
  });

  // res.json(templateVars);
  if (err) res.status(501).send("failed");
};

exports.postSpotifySong = function(req, res, dataHelpers) {
  let err = false;
  dataHelpers.postSpotifySong(req.body).then(result => {
    res.json(result);
  });
}
