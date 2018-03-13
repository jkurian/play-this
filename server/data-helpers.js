module.exports = function makeDataHelpers(knex) {
  return {
    getForums: function() {
      return knex("requests")
        .where({ user_admin_id: 2 })
        .then(results => {
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getFriendsForums: function() {
      return knex("userfriends")
        .rightJoin("requests", "user_id2", "user_admin_id")
        .where({ user_id1: 2 })
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
        .andWhere({
          password: password
        })
        .then(results => {
          if (results.length != 0) return results;
          //maybe throw an error here instead
          return null;
          //add catch here
        });
    },
    getSettings: function() {
      return knex("users")
        .where({ id: 2 })
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
      console.log("writing to DB");
      return knex("users")
        .returning("id")
        .insert({
          first_name: userRegistrationDetails.firstname,
          last_name: userRegistrationDetails.lastname,
          avatar_image: "",
          email: userRegistrationDetails.email,
          password: userRegistrationDetails.password
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
          console.log("LOOK song info---> " + results);
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
};
