
exports.userForums = function(req, res, dataHelpers) {
    let err = false;  

     dataHelpers.getForums()
      .then(result => {
          res.json(result);
      }
    )

    // res.json(templateVars);
    if (err) res.status(501).send('failed');
};

exports.userFriendsForums = function(req, res, dataHelpers) {
    let err = false;  
    console.log('IN USER FRIENDS FORUMS');
     dataHelpers.getFriendsForums()
      .then(result => {        
          res.json(result);
      }
    )

    // res.json(templateVars);
    if (err) res.status(501).send('failed');
};

exports.settings = function(req, res, dataHelpers) {
    let err = false;  
    console.log('IN SETTINGS');
     dataHelpers.getSettings()
      .then(result => {
          console.log('result is', result);
          
          res.json(result);
      }
    )

    // res.json(templateVars);
    if (err) res.status(501).send('failed');
};