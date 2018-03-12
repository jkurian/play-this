module.exports = function makeDataHelpers(knex) {
  return {
    getForums: function() {
      return knex("requests")
        .where({ user_admin_id: 1 })
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
        .where({ user_id1: 1 })
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
          return null;
        });
    },
    getSettings: function() {
      return knex("users")
        .where({ id: 1 })
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
    //This needs to be edited to bring down the object being sent to only send the required information
    //rather than the whole two tables. Same for getFriendsForums
    getSongComments: function() {
      return knex("comments")
        .leftJoin("users", "users.id", "comments.user_id")
        .where({ song_id: 65 })
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
        .where({ id: 65 })
        .then(results => {
          console.log("LOOK spotify ID---> " + results);
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
};
