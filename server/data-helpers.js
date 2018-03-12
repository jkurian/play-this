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

    //This needs to be edited to bring down the object being sent to only send the required information
    //rather than the whole two tables. Same for getFriendsForums
    getSongComments: function() {
      return knex("comments")
        .leftJoin("users", "users.id", "comments.user_id")
        .where({ song_id: 1 })
        .then(results => {
          console.log("LOOK ---> " + results);
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getSongSpotifyId: function() {
      return knex("songs")
        .where({ song_id: 1 })
        .then(results => {
          return results;
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
};
