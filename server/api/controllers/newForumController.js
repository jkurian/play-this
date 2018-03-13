exports.addNewForum = function(req, res, dataHelpers) {
    let err = false;
    dataHelpers.insertNewForum(req.body)
    .then(result => {
        console.log('CONTROLLER RESUL --->', result)
        res.json(result);
    })

    if (err) res.status(501).send('failed');
}