exports.updateProfile = function(req, res, dataHelpers) {
  let err = false;  
  console.log("THE PAYLOAD IN UPDATEPROFILE IS:", req.body)
   dataHelpers.updateProfile(req.body, req.params.id)
    .then(result => {          
        res.json(result);
    }
  )

  // res.json(templateVars);
  if (err) res.status(501).send('failed');
};