const faker = require("faker");

let createRecord = (knex, id) => {
  return knex("users").insert({
    id,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    avatar_image: faker.image.avatar(),
    email: faker.internet.email(),
    password: "hunter2"
  });
};

exports.seed = (knex, Promise) => {
  return knex("users").then(() => {
    let records = [];

    for (let i = 1; i < 10; i++) {
      records.push(createRecord(knex, i));
    }

    return Promise.all(records);
  });
};
