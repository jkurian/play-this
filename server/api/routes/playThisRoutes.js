'use strict';
module.exports = function(app) {
    var loginController = require('../controllers/loginController');
  
    // todoList Routes
    app.route('/api/login')
      .post(loginController.login)
    //  .post(todoList.create_a_task);
  
  };
  