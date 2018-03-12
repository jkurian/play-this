"use strict";
module.exports = function(app, dataHelpers) {
  const loginController = require("../controllers/loginController");
  const sidebarController = require("../controllers/sidebarController");
  const registerController = require("../controllers/registerController");
  const songPostController = require("../controllers/songPostController");

  app
    .route("/api/login")
    .post((req, res) => loginController.login(req, res, dataHelpers));
  app
    .route("/api/userforums")
    .get((req, res) => sidebarController.userForums(req, res, dataHelpers));

  app
    .route("/api/userfriendsforums/")
    .get((req, res) =>
      sidebarController.userFriendsForums(req, res, dataHelpers)
    );

  app
    .route("/api/settings")
    .get((req, res) => sidebarController.settings(req, res, dataHelpers));

  app
    .route("/api/register/email")
    .post((req, res) =>
      registerController.checkValidEmail(req, res, dataHelpers)
    );

  app
    .route("/api/songcomments/")
    .get((req, res) => songPostController.songComments(req, res, dataHelpers));

  app
    .route("/api/songinfo")
    .get((req, res) => songPostController.songInfo(req, res, dataHelpers));
};
