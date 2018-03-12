
exports.login = function(req, res, dataHelpers) {
    let err = false;
    //AUTHENTICATE!!
    dataHelpers.authenticate_user(req.body.loginEmailField, req.body.loginPasswordField)
        .then(results => {
            if(results) {
                //SET COOKIE
                console.log('setting userID', results[0].id)
                req.session.userID = results[0].id;
                console.log('session set:', req.session)
                res.status(200).json("accepted");
            } else {
                res.status(500).json("failed");
            }
        })
    if (err)
        res.status(501).send('failed');
  };