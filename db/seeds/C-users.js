const faker = require("faker");
const bcrypt = require('bcrypt');

let createRecord = (knex, id) => {
  return knex("users").insert({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    avatar_image: faker.image.avatar(),
    email: faker.internet.exampleEmail(),
    password: bcrypt.hashSync(faker.internet.password(), 10)
  });
};

exports.seed = (knex, Promise) => {
  return knex("users").then(() => {
    let records = [];

    for (let i = 4; i <= 1000; i++) {
      records.push(createRecord(knex));
    }

    return Promise.all(records);
  });
};
