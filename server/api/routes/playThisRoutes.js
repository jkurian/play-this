'use strict';
module.exports = function(app, dataHelpers) {
    const loginController = require('../controllers/loginController');
    const sidebarController = require('../controllers/sidebarController');

    // todoList Routes
    app.route('/api/login')
      .post(loginController.login);
    //  .post(todoList.create_a_task);

    app.route('/api/userforums')
      .get((req, res) => 
          sidebarController.userForums(req, res, dataHelpers));
  };
  