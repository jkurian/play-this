"use strict";
module.exports = function(app, dataHelpers) {
  const loginController = require("../controllers/loginController");
  const sidebarController = require("../controllers/sidebarController");
  const songController = require("../controllers/songController");

  app.route("/api/login").post(loginController.login);

  app
    .route("/api/userforums")
    .get((req, res) => sidebarController.userForums(req, res, dataHelpers));

  app
    .route("/api/userfriendsforums")
    .get((req, res) =>
      sidebarController.userFriendsForums(req, res, dataHelpers)
    );

  app
    .route("/api/songcomments")
    .get((req, res) => songController.songComments(req, res, dataHelpers));
};
