//getViewRequest(req,res,dataHelpers)\

exports.getForumRequest = function(req, res, dataHelpers) {
  let err = false;
  dataHelpers.getForumRequest(req.params.id)
  .then(result => {
      console.log('RESULT IN GET FORUM CONTROLLER ---->', result)
      res.json(result);
  })
}
exports.deleteForumRequests = function(req, res, dataHelpers) {
  console.log('DELETING FORUM REQUEST', req.params)
  // let err = false;
  // dataHelpers.getForumRequest(req.params.id)
  // .then(result => {
  //     console.log('RESULT IN GET FORUM CONTROLLER ---->', result)
  //     res.json(result);
  // })
  dataHelpers.deleteForumRequest(req.params.id)
    .then(() => {
      res.json({forum_id: req.params.id})
    })
}