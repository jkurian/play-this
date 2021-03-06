const bcrypt = require("bcrypt");
module.exports = function makeDataHelpers(knex) {
  return {
    getForums: function(currentUserID) {
      return knex("requests")
        .orderBy("id", "desc")
        .where({ user_admin_id: currentUserID })
        .then(results => {
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getFriendsForums: function(currentUserID) {
      return knex("userfriends")
        .orderBy("request_time_stamp", "desc")
        .rightJoin("requests", "user_id2", "user_admin_id")
        .where({ user_id1: currentUserID })
        .join('users', 'user_admin_id', 'users.id')
        .select(['first_name', 'last_name', 'title', 'explanation', 'user_admin_id', 'requests.id', 'request_time_stamp', 'user_id1', 'user_id2'])
        .then(results => {
          console.log('RESULTS OF FREINDS FORUMS',results);
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    authenticate_user: function(email, password) {
      return knex("users")
        .where({
          email: email
        })
        .then(results => {
          if (
            results.length != 0 &&
            bcrypt.compareSync(password, results[0].password)
          ) {
            return results;
          }
          //maybe throw an error here instead
          return null;
          //add catch here
        });
    },
    getSettings: function(currentUserID) {
      return knex("users")
        .where({ id: currentUserID })
        .then(results => {
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    check_valid_email: function(email) {
      return knex("users")
        .where({ email: email })
        .then(results => {
          if (results.length > 0) return false;
          return true;
        })
        .catch(err => {
          console.log(err);
          return false;
        });
    },
    register_new_user: function(userRegistrationDetails) {
      return knex("users")
        .returning("id")
        .insert({
          first_name: userRegistrationDetails.firstname,
          last_name: userRegistrationDetails.lastname,
          avatar_image: "",
          email: userRegistrationDetails.email,
          password: bcrypt.hashSync(userRegistrationDetails.password, 10)
        })
        .then(results => {
          console.log(results);
          if (results.length === 1) return results[0];
          return -1;
        })
        .catch(err => {
          console.log(err);
        });
    },
    postSpotifySong: function(songInformation) {
      return knex("songs")
        .returning("id")
        .insert({
          artist: songInformation.artist,
          title: songInformation.title,
          album: songInformation.album,
          spotify_id: songInformation.spotify_id,
          user_id: songInformation.user_id,
          request_id: songInformation.request_id
        })
        .then(results => {
          console.log(results);
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    postSongComment: function(songInformation) {
      return knex("comments")
        .insert({
          user_id: songInformation.userid,
          song_id: songInformation.songid,
          comment: songInformation.comment
        })
        .then(result => {
          console.log("POSTING COMMENT COMPLETE", result);
        });
    },
    //This needs to be edited to bring down the object being sent to only send the required information
    //rather than the whole two tables. Same for getFriendsForums
    getSongComments: function(songid) {
      return knex("comments")
        .orderBy("comments.comment_time_stamp", "desc")
        .select([
          "comments.id",
          "comments.comment",
          "comments.comment_time_stamp",
          "comments.user_id",
          "comments.song_id",
          "users.first_name",
          "users.avatar_image"
        ])
        .leftJoin("users", "comments.user_id", "users.id")
        .leftJoin("songs", "comments.song_id", "songs.id")
        .where({ song_id: songid })
        .then(results => {
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getSongInfo: function(forumid) {
      return knex("songs")
        .orderBy("song_time_stamp", "desc")
        .select([
          "songs.id",
          "songs.artist",
          "songs.title",
          "songs.album",
          "songs.spotify_id",
          "songs.song_time_stamp",
          "songs.request_id",
          "songs.user_id",
          "users.first_name"
        ])
        .leftJoin("users", "songs.user_id", "users.id")
        .where({ request_id: forumid })
        .then(results => {
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAllUsers: function() {
      console.log("IN DATA HELPERS GET ALL USERS");
      return knex
        .select("first_name", "last_name", "email", "id")
        .from("users")
        .then(results => {
          console.log("RESULTS FOUND");
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getUserLike: function(songId) {
      return knex("userlikes")
        .where({ song_id: songId })
        .count("song_id")
        .then(results => {
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    postUserLike: function(like) {
      return knex("userlikes")
        .insert({
          user_id: like.userId,
          song_id: like.songId
        })
        .then(results => {
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    removeUserLike: function(like) {
      return knex("userlikes")
        .where({ user_id: like.userId, song_id: like.songId })
        .del();
    },
    addFriend: function(newFriendData) {
      console.log("NEW FRIEND DATA IS", newFriendData);
      return knex("userfriends")
        .insert({
          user_id1: newFriendData.currentUserID,
          user_id2: newFriendData.friendToAddID
        })
        .then(results => {
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getForumRequest: function(id) {
      console.log('ID OF REQUESTS', id)
      return knex("users")
        .join('requests', 'users.id', 'user_admin_id')
        .where('requests.id', id)
        .then(results => {
          console.log('GET FORUM REQUEST DATA', results, id)
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getFriendsList: function(currentUserID) {
      return knex("userfriends")
        .rightJoin("users", "user_id2", "id")
        .where({ user_id1: currentUserID })
        .then(results => {
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    insertNewForum: function(newForumDetails) {
      return knex("requests")
        .returning("id")
        .insert({
          title: newForumDetails.title,
          explanation: newForumDetails.explanation,
          user_admin_id: newForumDetails.user_admin_id
        })
        .then(results => {
          return results[0];
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteForumRequest: function(forum_id) {
      return knex("requests")
        .where("id", forum_id)
        .del()
        .catch(err => {
          console.log(err);
        });
    },
    updateProfile: function(updatedProfile, user_id) {
      console.log("UPDATING PROFILE IN DATA HELPERS");
      return knex("users")
        .where({ id: user_id })
        .update(updatedProfile)
        .then(results => {
          console.log("RESULTS AFTER UPDATE:", results);
        });
    },
    deleteFriend: function(relationship) {
      return knex("userfriends")
        .where({
          user_id1: relationship.user_id1,
          user_id2: relationship.user_id2
        })
        .del()
        .catch(err => {
          console.log(err);
        });
    }
  };
};
