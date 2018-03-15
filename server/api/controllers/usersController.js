exports.getAllUsers = function(req, res, dataHelpers) {
  console.log('GETTING ALL USERS IN CONTROLLER')
   dataHelpers.getAllUsers()
    .then(result => {      
      console.log('sending JSON RES')    
        res.json(result);
    }
  )
};