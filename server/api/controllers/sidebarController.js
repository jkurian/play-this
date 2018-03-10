
exports.userForums = function(req, res, dataHelpers) {
    let err = false;  
    let templateVars = {
        userForums: [{name: 'testTHIS', url: 'google.ca'}],
      };

     dataHelpers.getRequests()
      .then(result => {
          console.log('in controller got', result)
          res.json(result);
      }
    )

    console.log('outside!!!!!');
    // res.json(templateVars);
    if (err) res.status(501).send('failed');
};