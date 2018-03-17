exports.songComments = function(req, res, dataHelpers) {
  let err = false;
  dataHelpers.getSongComments(req.params.id).then(result => {
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
exports.postSongComment = function(req, res, dataHelpers) {
  console.log('POSTING SONG COMMENTS', req.body, req.params)
  let songPost = {
    songid: req.params.id,
    userid: req.body.userid,
    comment: req.body.comment
  }
  dataHelpers.postSongComment(songPost).then(result => {
    res.json(result);
  });
};

exports.postSpotifySong = function(req, res, dataHelpers) {
  let err = false;
  dataHelpers.postSpotifySong(req.body).then(result => {
    res.json(result);
  });
};
