exports.userForums = function(req, res, dataHelpers) {
  let err = false;
  dataHelpers.getForums(req.params.id).then(result => {
    res.json(result);
  });

  // res.json(templateVars);
  if (err) res.status(501).send("failed");
};

exports.userFriendsForums = function(req, res, dataHelpers) {
  let err = false;
  dataHelpers.getFriendsForums(req.params.id).then(result => {
    res.json(result);
  });

  // res.json(templateVars);
  if (err) res.status(501).send("failed");
};

exports.settings = function(req, res, dataHelpers) {
    let err = false;  
    console.log('IN SETTINGS');
     dataHelpers.getSettings(req.params.id)
      .then(result => {
          console.log('result is', result);
          res.json(result);
      }
    )

    // res.json(templateVars);
    if (err) res.status(501).send('failed');
};

exports.friends = function(req, res, dataHelpers) {
    let err = false;  
    console.log('IN FRIENDS');
     dataHelpers.getFriendsList(req.params.id)
      .then(result => {          
          res.json(result);
      }
    )

    // res.json(templateVars);
    if (err) res.status(501).send('failed');
};
