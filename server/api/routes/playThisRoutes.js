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
<<<<<<< HEAD
    app.route('/api/userfriendsforums')
=======

    app.route('/api/userfriendsforums/')
>>>>>>> a26e96508888d1700e4aedc57efbdb3dc94818d1
      .get((req, res) => 
          sidebarController.userFriendsForums(req, res, dataHelpers));

    app.route('/api/settings')
      .get((req, res) => 
          sidebarController.settings(req, res, dataHelpers));
  };
  