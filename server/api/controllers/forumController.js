//getViewRequest(req,res,dataHelpers)\

exports.getForumRequest = function(req, res, dataHelpers) {
  let err = false;
  dataHelpers.getForumRequest(req.params.id)
  .then(result => {
      console.log('RESULT IN GET FORUM CONTROLLER ---->', result)
      res.json(result);
  })

  if (err) res.status(501).send('failed');
}