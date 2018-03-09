exports.seed = function(knex, Promise) {
  return Promise.all([
    knex("userfriends").del(),
    knex("userlikes").del(),
    knex("user_song").del(),
    knex("comments").del(),
    knex("songs").del(),
    knex("requests").del(),
    knex("users").del()
  ]);
};
