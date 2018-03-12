
exports.checkValidEmail = function(req, res, dataHelpers) {
    let err = false;
    dataHelpers.check_valid_email(req.body.registerEmailField)
        .then(results => {
            console.log(results);
            if(!results) {
                res.status(200).json(false);
            } else {
                res.status(200).json(true);
            }
        })
    if (err)
        res.status(501).send('failed');
  };