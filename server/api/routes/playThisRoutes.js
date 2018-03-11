'use strict';
module.exports = function(app, dataHelpers) {
    const loginController = require('../controllers/loginController');
    const sidebarController = require('../controllers/sidebarController');

    app.route('/api/login')
    .post((req, res) => 
          loginController.login(req, res, dataHelpers));
    app.route('/api/userforums')
      .get((req, res) => 
          sidebarController.userForums(req, res, dataHelpers));

    app.route('/api/userfriendsforums')
      .get((req, res) => 
          sidebarController.userFriendsForums(req, res, dataHelpers));
  };
  