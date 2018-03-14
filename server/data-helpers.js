const bcrypt = require("bcrypt");
module.exports = function makeDataHelpers(knex) {
  return {
    getForums: function(currentUserID) {
      return knex("requests")
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
        .rightJoin("requests", "user_id2", "user_admin_id")
        .where({ user_id1: currentUserID })
        .then(results => {
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
      return knex("songs").insert({
        artist: songInformation.artist,
        title: songInformation.title,
        album: songInformation.album,
        spotify_id: songInformation.spotify_id
      });
    },
    //This needs to be edited to bring down the object being sent to only send the required information
    //rather than the whole two tables. Same for getFriendsForums
    getSongComments: function() {
      return knex("comments")
        .leftJoin("users", "users.id", "comments.user_id")
        .leftJoin("songs", "songs.id", "comments.song_id")
        .where({ request_id: 2 })
        .then(results => {
          console.log("LOOK COMMENTS---> " + results);
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getSongInfo: function() {
      return knex("songs")
        .where({ request_id: 2 })
        .then(results => {
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
        .insert({
          title: newForumDetails.title,
          explanation: newForumDetails.explanation,
          time_stamp: new Date(),
          user_admin_id: newForumDetails.user_admin_id
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateProfile: function(updatedProfile, user_id) {
      console.log("UPDATING PROFILE IN DATA HELPERS")
      return knex("users")
        .where({id: user_id})
        .update(updatedProfile)
        .then(results => {
          console.log("RESULTS AFTER UPDATE:", results)
        }) 
    }
  };
};
