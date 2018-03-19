exports.deleteFriend = function(req, res, dataHelpers) {
    console.log('DELETING FRIEND REQUEST', req.body)

    dataHelpers.deleteFriend(req.body)
      .then(() => {
       console.log('AFTER DELETE')
        res.json(req.body)
      })
}