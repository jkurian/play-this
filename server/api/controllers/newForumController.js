exports.addNewForum = function(req, res, dataHelpers) {
    let err = false;
    dataHelpers.insertNewForum(req.body)
    .then(result => {
        res.json(result);
    })

    if (err) res.status(501).send('failed');
}