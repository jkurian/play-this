exports.getAllUsers = function(req, res, dataHelpers) {
  console.log('GETTING ALL USERS IN CONTROLLER')
   dataHelpers.getAllUsers()
    .then(result => {      
      console.log('sending JSON RES')    
        res.json(result);
    }
  )
};
exports.addFriend = function(req, res, dataHelpers) {
   dataHelpers.addFriend(req.body)
    .then(result => {      
      console.log('RESULT OF ADD FRIEND', result)
      res.json(result)
    }
  )
};

