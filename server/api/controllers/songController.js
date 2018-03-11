exports.songComments = function(req, res, dataHelpers) {
  let err = false;

  dataHelpers.getSongComments().then(result => {
    res.json(result);
  });

  // res.json(templateVars);
  if (err) res.status(501).send("failed");
};
