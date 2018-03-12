const jwt = require('jsonwebtoken')

exports.login = function(req, res, dataHelpers) {
    let err = false;

    let authenticated = {
        token: null,
        authenticated: false
    }

    //AUTHENTICATE!!
    dataHelpers.authenticate_user(req.body.loginEmailField, req.body.loginPasswordField)
        .then(results => {
            if(results) {
                //instead of returning true or false in result, return userid if correct credentials
                const payload = { user_id: '2' };
                jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '24hr'}, (err, token) => {
                    if(err) {
                        console.log(err);
                    }
                    authenticated = {
                        token: token,
                        authenticated: true
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
        //maybe return a res.500 because this would mean we dont return a promise
  };