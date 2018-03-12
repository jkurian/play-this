// Use this to build real accounts for development.
// Ensure that the loop in C-users.js, i > the amount of users here to avoid id conflicts
exports.seed = function(knex, Promise) {
  return knex("users").then(() => {
    return knex("users").insert([
      {
        first_name: "Josh",
        last_name: "Rose",
        avatar_image: "http://stevensegallery.com/200/300",
        email: "josh@dev.com",
        password: "hunter2"
      },
      {
        first_name: "Ed",
        last_name: "Eaglesham",
        avatar_image: "http://www.placecage.com/c/200/300",
        email: "ed@dev.com",
        password: "hunter2"
      },
      {
        first_name: "Jerry",
        last_name: "Kurian",
        avatar_image: "http://fillmurray.com/200/300",
        email: "jerry@dev.com",
        password: "hunter2"
      }
    ]);
  });
};
