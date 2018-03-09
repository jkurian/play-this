exports.seed = function(knex, Promise) {
  return Promise.all([
    knex("users").del(),
    knex("requests").del(),
    knex("songs").del(),
    knex("comments").del(),
    knex("user_song").del(),
    knex("userlikes").del(),
    knex("userfriends").del()
  ]);
};
