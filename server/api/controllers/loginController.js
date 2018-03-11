exports.login = function(req, res) {
    let err = false;

    console.log(req.body)
    // knex('requests')
    //   .where({
    //       user_admin_id: 2
    //   })
    //   .select('title')
    //   .then((results) => {
    //     //console.log('don!!!!!!!e');
    //     templateVars.userForums = results
    //     console.log('results are: ', results);
    //     //res.json(templateVars);
    // })
    if (err)
        res.status(501).send('failed');
      res.json("ok");
  };