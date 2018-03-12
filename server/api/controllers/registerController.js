
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

exports.registerNewUser = function(req, res, dataHelpers) {
    let err = false;
    console.log('req data is ', req.body)
    dataHelpers.register_new_user(req.body)
        .then(results => {
            console.log(results);
        })
    if (err)
        res.status(501).send('failed');
  };
