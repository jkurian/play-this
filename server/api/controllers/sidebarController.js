
exports.userForums = function(req, res, knex) {
    let err = false;  
    let templateVars = {
        userForums: [{name: 'test', url: 'google.ca'}],
      };


    // knex('requests')
    //   .where({
    //       user_admin_id: 2
    //   })
    //   .select('title')
    //   .then((results) => {
    //       console.log('don!!!!!!!e');
    //     templateVars.userForums = results
    //     console.log('results are: ', results);
        
    // })
    console.log('outside!!!!!');
    res.json(templateVars);

    if (err) res.status(501).send('failed');
};