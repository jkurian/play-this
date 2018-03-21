// Use this to build real accounts for development.
// Ensure that the loop in C-users.js, i > the amount of users here to avoid id conflicts
const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return knex("users").then(() => {
    return knex("users").insert([
      {
        first_name: "Josh",
        last_name: "Rose",
        avatar_image: "",
        email: "josh@dev.com",
        password: bcrypt.hashSync('hunter2', 10)
      },
      {
        first_name: "Ed",
        last_name: "Eaglesham",
        avatar_image: "",
        email: "ed@dev.com",
        password: bcrypt.hashSync('hunter2', 10)
      },
      {
        first_name: "Jerry",
        last_name: "Kurian",
        avatar_image: "",
        email: "jerry@dev.com",
        password: bcrypt.hashSync('hunter2', 10)
      }
    ]);
  });
};
