"use strict";
module.exports = function(app, dataHelpers) {
  const loginController = require("../controllers/loginController");
  const sidebarController = require("../controllers/sidebarController");
  const registerController = require("../controllers/registerController");
  const songPostController = require("../controllers/songPostController");
  const newForumController = require("../controllers/newForumController");
  const forumController = require("../controllers/forumController");
  const profileController = require("../controllers/profileController");
  const usersController = require("../controllers/usersController");

  app
    .route("/api/login")
    .post((req, res) => loginController.login(req, res, dataHelpers));
  app
    .route("/api/userforums/:id")
    .get((req, res) => sidebarController.userForums(req, res, dataHelpers));

  app
    .route("/api/userfriendsforums/:id")
    .get((req, res) =>
      sidebarController.userFriendsForums(req, res, dataHelpers)
    );

  app
    .route("/api/forum/:id")
    .get((req, res) => forumController.getForumRequest(req, res, dataHelpers))
    .delete((req, res) => forumController.deleteForumRequests(req, res, dataHelpers));
  
    app
    .route("/api/settings/:id")
    .get((req, res) => sidebarController.settings(req, res, dataHelpers));
  app
    .route("/api/register/email")
    .post((req, res) =>
      registerController.checkValidEmail(req, res, dataHelpers)
    );
  app
    .route("/api/register/newuser")
    .post((req, res) =>
      registerController.registerNewUser(req, res, dataHelpers)
    );

  app
    .route("/api/songs/:id/comments/")
    .post((req, res) =>
      songPostController.postSongComment(req, res, dataHelpers)
    )
    .get((req, res) => songPostController.songComments(req, res, dataHelpers));

  app
    .route("/api/songinfo/:forumid")
    .get((req, res) => songPostController.songInfo(req, res, dataHelpers));

  app
    .route("/api/friends/:id")
    .get((req, res) => sidebarController.friends(req, res, dataHelpers));

  app
    .route("/api/songinfo/post")
    .post((req, res) =>
      songPostController.postSpotifySong(req, res, dataHelpers)
    );

  app
    .route("/api/forum")
    .post((req, res) => newForumController.addNewForum(req, res, dataHelpers));

  app
    .route("/api/profile/update/:id")
    .post((req, res) => profileController.updateProfile(req, res, dataHelpers));

  app
    .route("/api/users/")
    .get((req, res) => usersController.getAllUsers(req, res, dataHelpers));

  app
    .route("/api/users/addfriend")
    .post((req, res) => usersController.addFriend(req, res, dataHelpers));
};
