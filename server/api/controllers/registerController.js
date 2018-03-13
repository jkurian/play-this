const jwt = require('jsonwebtoken')

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
    dataHelpers.register_new_user(req.body)
        .then(results => {
            if(results) {
                //instead of returning true or false in result, return userid if correct credentials
                console.log('USER HAS BEEN REGISTERED')
                const payload = { user_id: results };
                jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '24hr'}, (err, token) => {
                    if(err) {
                        console.log(err);
                    }
                    authenticated = {
                        token: token,
                        authenticated: results
                    }
                    res.status(201).send(authenticated);
                })
                //SET COOKIE
                // console.log('setting userID', results[0].id)
                // req.session.userID = results[0].id;
                // console.log('session set:', req.session)
            } else {
                res.status(401).send(authenticated)
            }

        })
    if (err)
        res.status(501).send('failed');
  };
