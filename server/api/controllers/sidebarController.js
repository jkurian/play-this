
exports.userForums = function(req, res, dataHelpers) {
    let err = false;  

     dataHelpers.getForums()
      .then(result => {
          console.log('in controller got', result)
          res.json(result);
      }
    )

    // res.json(templateVars);
    if (err) res.status(501).send('failed');
};